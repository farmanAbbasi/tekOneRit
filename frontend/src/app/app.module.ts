import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

// Main route
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';


import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/app/header/header.component';
import { FooterComponent } from './components/app/footer/footer.component';
import { SidebarComponent } from './components/app/sidebar/sidebar.component';
import { MostConnectedComponent } from './components/most-connected/most-connected.component';
import { GlobalService } from './services/global.service';

// Modules
import { GridStackModule } from 'ng2-gridstack';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { TrendingComponent } from './components/trending/trending.component';
import { TrendingService } from './services/trending.service';
import { MostConnectedService } from './services/most-connected.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MostConnectedComponent,
    TrendingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    HttpClientModule,
    GridStackModule,
    MatListModule,
    MatCardModule
  ],
  providers: [GlobalService, TrendingService, MostConnectedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
