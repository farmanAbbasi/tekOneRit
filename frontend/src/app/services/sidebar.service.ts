import { Injectable, HostBinding, Output, EventEmitter } from '@angular/core';

@Injectable()
export class SidebarService {

  constructor() { }

  active = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  slideSideBar() {

   this.active = !this.active;
   this.change.emit(this.active);
  }

}
