import { Component, OnInit, HostBinding } from '@angular/core';
import { SidebarService } from '../../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  // class binding to the host element - <app-sidebar>
  @HostBinding('class.active')
  active = false;

  constructor(public sideBarService: SidebarService  ) { }

  ngOnInit() {
    this.sideBarService.change.subscribe(active => {
      this.active = active;
    });
  }
  }
