import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../model/task';
import { catchError, first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private readonly apiUrl = 'https://623436dd6d5465eaa51607ba.mockapi.io/task';

  public allTasks$ = new BehaviorSubject<Task[]>([]);

  constructor(private http: HttpClient) {
    this.getAllTasks();
  }

  getAllTasks(): void {
    this.http
      .get<Task[]>(this.apiUrl)
      .pipe(
        map((taskObjArr) =>
          taskObjArr.map((taskObj) => this.parseTask(taskObj))
        )
      )
      .subscribe((task) => this.allTasks$.next(task));
  }

  getActiveTasks(): Observable<Task[]> {
    return this.allTasks$.pipe(
      map((allTask) => allTask.filter((t) => !t.doneDate))
    );
  }
  getDoneTasks(): Observable<Task[]> {
    return this.allTasks$.pipe(
      map((allTask) => allTask.filter((t) => t.doneDate))
    );
  }

  getSingleTask(taskId: string): Observable<Task | undefined> {
    //undefined cuz there might be an empty task
    return this.allTasks$.pipe(
      map((tArr) => tArr.find((t) => t.id === taskId))
    );
  }

  createTask(task: Task): Observable<boolean> {
    return this.http.post<Task>(this.apiUrl, task, this.httpOptions).pipe(
      map((task) => {
        this.getAllTasks();
        return true;
      }),
      catchError((error) => of(false))
    );
  }

  deleteTask(taskId: string): Observable<boolean> {
    return this.http
      .delete<any>(this.apiUrl + '/' + taskId, this.httpOptions)
      .pipe(
        map((resp) => {
          this.getAllTasks();
          return true;
        }),
        catchError((error) => of(false))
      );
  }

  taskDone(task: Task): Observable<boolean> {
    task.doneDate = new Date();
    return this.http
      .put<Task>(this.apiUrl + '/' + task.id, task, this.httpOptions)
      .pipe(
        map((resp) => {
          this.getAllTasks();
          return true;
        }),
        catchError((error) => of(false))
      );
  }

  // getActiveTask(): Observable<Task[]> {
  //   return this.http.get<Task[]>(this.apiUrl).pipe(
  //     map((task) => task.filter((task) => !task.doneDate)),
  //     map((task) => task.map((task) => this.parseTask(task)))
  //   );
  // }

  // getDoneTask(): Observable<Task[]> {
  //   return this.http.get<Task[]>(this.apiUrl).pipe(
  //     map((task) => task.filter((task) => task.doneDate)),
  //     map((task) => task.map((task) => this.parseTask(task)))
  //   );
  // }

  parseTask(obj: any): Task {
    const task = new Task(obj.id, obj.name, obj.priority, obj.creationDate);
    if (obj.doneDate) {
      task.doneDate = new Date(obj.doneDate);
    }
    return task;
  }
}
