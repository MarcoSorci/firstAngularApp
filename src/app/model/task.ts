export class Task {
  name: string;
  comment?: string;

  tag?: string[];

  creationDate: Date;
  doneDate?: Date;             //? sets it as optional
  dueDate?: Date;

  priority: number;
  repeat?: number;

  constructor(name: string, priority = 0){
    this.name = name;
    this.priority = priority;
    this.creationDate = new Date();

  }

}
