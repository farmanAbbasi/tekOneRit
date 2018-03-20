import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { Observable } from 'rxjs/Observable';
import { SidebarService } from '../../../services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  userDisplayName: String;
  constructor(private authService: AuthenticationService, private sideBar: SidebarService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.authService.getLoggedInName.subscribe(name => this.changeName(name));
  }
  toggleSideBar() {
    this.sideBar.slideSideBar();
  }
  userLogout() {
    this.authService.logout();
  }
  private changeName(name: string): void {
    this.userDisplayName = name;
  }
}
