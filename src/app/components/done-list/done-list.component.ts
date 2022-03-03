import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.scss']
})
export class DoneListComponent implements OnInit {

  doneList: Task[]

  constructor() {
    let task1 = new Task("Study javascript", 10);
    let task2 = new Task("Study Angular", 20);
    let task3 = new Task("Study css", 10);
    let task4 = new Task("Study Angular", 10);
    let task5 = new Task("Study Angular", 10);
    this.doneList = [task1, task2, task3, task4, task5]
   }

  ngOnInit(): void {
  }

}
