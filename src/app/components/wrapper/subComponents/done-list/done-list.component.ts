import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.scss'],
})
export class DoneListComponent implements OnInit {
  doneList: Task[] = [];

  constructor(public taskService: ApiService) {}

  ngOnInit(): void {
    this.taskService.getDoneTasks().subscribe((doneList) => (this.doneList = doneList));
  }

  taskDelete(task: Task) {
    this.taskService.deleteTask(task.id).subscribe((b) => {
      if (!b) {
        prompt('errr');
      }
    });
  }
}
