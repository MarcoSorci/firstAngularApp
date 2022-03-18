import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss'],
})
export class TaskInputComponent implements OnInit {
  public taskModel = { name: '', priority: 0 };

  constructor(private taskService: ApiService) {}

  ngOnInit(): void {}

  saveTask() {
    const newTask = new Task('', this.taskModel.name, this.taskModel.priority); //those values are added by the input to the taskModel
    this.taskService.createTask(newTask.toDatabaseModel()).subscribe((b) => {
      if (!b) {
        prompt('errr');
      }
    });
  }
}
