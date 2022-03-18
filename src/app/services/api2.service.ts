import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../model/task';
import { catchError, first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Api2Service {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private readonly apiUrl = 'https://623436dd6d5465eaa51607ba.mockapi.io/task';

  public ActiveTasks$ = new BehaviorSubject<Task[]>([]);
  public DoneTasks$ = new BehaviorSubject<Task[]>([]);

  constructor(private http: HttpClient) {
    this.getActiveTasks();
    this.getDoneTasks();
  }

  getActiveTasks() {
    return this.http
      .get<any[]>(this.apiUrl + "?doneDate=Undefined")
      .pipe(
        map((tasks) => tasks.map((t) => this.parseTask(t)))
      )
      .subscribe((tasks) => console.log('active', tasks));
  }
  getDoneTasks() {
    return this.http
      .get<any[]>(this.apiUrl)
      .pipe(
        map((tasks) => tasks.filter((t) => t.doneDate !== undefined)),
        map((tasks) => tasks.map((t) => this.parseTask(t)))
      )
      .subscribe((tasks) => console.log('done', tasks));
  }

  // getSingleTask(taskId: string): Observable<Task | undefined> {
  //   return this.allTasks$.pipe(
  //     map((tArr) => tArr.find((t) => t.id === taskId))
  //   );
  // }

  // createTask(task: Task): Observable<boolean> {
  //   return this.http.post<Task>(this.apiUrl, task, this.httpOptions).pipe(
  //     map((task) => {
  //       this.getAllTasks();
  //       return true;
  //     }),
  //     catchError((error) => of(false))
  //   );
  // }

  // deleteTask(taskId: string): Observable<boolean> {
  //   return this.http
  //     .delete<any>(this.apiUrl + '/' + taskId, this.httpOptions)
  //     .pipe(
  //       map((resp) => {
  //         this.getAllTasks();
  //         return true;
  //       }),
  //       catchError((error) => of(false))
  //     );
  // }

  // taskDone(task: Task): Observable<boolean> {
  //   task.doneDate = new Date();
  //   return this.http
  //     .put<Task>(this.apiUrl + '/' + task.id, task, this.httpOptions)
  //     .pipe(
  //       map((resp) => {
  //         this.getAllTasks();
  //         return true;
  //       }),
  //       catchError((error) => of(false))
  //     );
  // }

  parseTask(obj: any): Task {
    const task = new Task(obj.id, obj.name, obj.priority, obj.creationDate);
    if (obj.doneDate) {
      task.doneDate = new Date(obj.doneDate);
    }
    return task;
  }
}
