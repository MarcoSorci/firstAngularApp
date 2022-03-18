import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { ApiService } from 'src/app/services/api.service';
import { Api2Service } from 'src/app/services/api2.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  taskList: Task[] = []; //type name + [] to make array with type

  constructor(private taskService: ApiService, private api2S:Api2Service) {}

  ngOnInit(): void {
    this.taskService
      .getActiveTasks()
      .subscribe((taskList) => (this.taskList = taskList));
  }

  taskDone(task: Task) {
    this.taskService.taskDone(task).subscribe((b) => {
      if (!b) {
        prompt('errr');
      }
    });
  }
}
