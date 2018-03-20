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
import { MostConnectedComponent } from './components/most-connected/most-connected.component';
import { SidebarService } from './services/sidebar.service';
import { LoginComponent } from './components/login/login.component';
import { GlobalService } from './services/global.service';

// Modules
import { GridStackModule } from 'ng2-gridstack';
import { ForumComponent } from './components/forum/forum.component';
import { ForumPostService } from './services/forum/forum-post.service';
import {MatListModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from './services/authentication.service';
// Guards
import { AuthGuard } from './guards/auth.guard';
import { TrendingService } from './services/trending.service';
import { MostConnectedService } from './services/most-connected.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ForumComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    HttpClientModule,
    GridStackModule,
    MatListModule,
    MatCardModule,
    FormsModule
  ],
 
  providers: [GlobalService, AuthenticationService, AuthGuard, SidebarService, MostConnectedService,ForumPostService,TrendingService],
  bootstrap: [AppComponent]
 })
 export class AppModule { }
