import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  taskList: Task[]  //type name + [] to make array with type

  constructor() {
    let task1 = new Task("Study javascript", 10);
    let task2 = new Task("Study Angular", 20);
    let task3 = new Task("Study css", 10);
    let task4 = new Task("Study Angular", 10);
    let task5 = new Task("Study Angular", 10);
    this.taskList = [task1, task2, task3, task4, task5]
   }

  ngOnInit(): void {
  }


  taskDeleted(id: string){
    let tempArray = []
    for (const task of this.taskList) {
      if (task.id !== id) {
        tempArray.push(task)
      }
    }
    this.taskList = tempArray
  }
}
