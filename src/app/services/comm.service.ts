import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommService {
  public isDrawerOpen: BehaviorSubject<boolean>; //this is best over regular Subject because this needs an initial value

  constructor() {
    this.isDrawerOpen = new BehaviorSubject<boolean>(false);

  }
}
