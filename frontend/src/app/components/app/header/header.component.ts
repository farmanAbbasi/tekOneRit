import { Component, OnInit, Input } from '@angular/core';
import { SidebarService } from '../../../services/sidebar.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private sideBar: SidebarService) { }

  ngOnInit() {
  }


  toggleSideBar() {

    this.sideBar.slideSideBar();
  }

}
