import { Component, OnInit } from '@angular/core';
import { CommService } from 'src/app/services/comm.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent implements OnInit {
  public isOpened: boolean = false;

  constructor(public commService: CommService) {}

  ngOnInit(): void {
    this.commService.isDrawerOpen.subscribe((isOpen) => {
      this.isOpened = isOpen;
    });
  }
}
