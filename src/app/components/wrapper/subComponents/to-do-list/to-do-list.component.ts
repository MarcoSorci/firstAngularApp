import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  taskList: Task[] = []; //type name + [] to make array with type

  constructor(private taskService: ApiService) {}

  ngOnInit(): void {
    this.taskService
      .getActiveTasks()
      .subscribe((taskList) => (this.taskList = taskList));
  }

  taskDone(task: Task) {
    this.taskService.taskDone(task)
    // let tempArray = [];
    // for (const taskelem of this.taskList) {
      
    // }
    // this.taskList = tempArray;
  }
}
