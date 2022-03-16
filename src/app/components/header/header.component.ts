import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterModule, NavigationEnd, Router } from '@angular/router';
import { CommService } from 'src/app/services/comm.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private commService: CommService, public router: Router) {}

  ngOnInit(): void {}

  menuClick(): void {
    this.commService.isDrawerOpen.next(!this.commService.isDrawerOpen.value);
  }
}
