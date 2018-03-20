import { Component, OnInit, HostBinding } from '@angular/core';
import { SidebarService } from '../../../services/sidebar.service';
import { AuthenticationService } from '../../../services/authentication.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  // class binding to the host element - <app-sidebar>
  @HostBinding('class.active')
  active = false;

  constructor(private authService: AuthenticationService, public sideBarService: SidebarService) { }
  isLoggedIn$: Observable<boolean>;

  ngOnInit() {
    this.sideBarService.change.subscribe(active => {
      this.active = active;
    });
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }
}
