import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

// Main route
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/app/header/header.component';
import { FooterComponent } from './components/app/footer/footer.component';
import { SidebarComponent } from './components/app/sidebar/sidebar.component';
import { GlobalService } from './services/global.service';

// Modules
import { GridStackModule } from 'ng2-gridstack';
import { ForumComponent } from './components/forum/forum.component';
import { ForumPostService } from './services/forum/forum-post.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ForumComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    HttpClientModule,
    GridStackModule,
    MatCardModule,
    MatCheckboxModule,
    MatGridListModule
  ],
  providers: [GlobalService, ForumPostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
