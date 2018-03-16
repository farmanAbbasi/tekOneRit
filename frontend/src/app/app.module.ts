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
<<<<<<< HEAD
import { MostConnectedComponent } from './components/most-connected/most-connected.component';
=======
import { SidebarService } from './services/sidebar.service';
import { LoginComponent } from './components/login/login.component';
>>>>>>> dfefd3cb674fbddbb28c80eae43b31e4122c6bdf
import { GlobalService } from './services/global.service';

// Modules
import { GridStackModule } from 'ng2-gridstack';
<<<<<<< HEAD
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { TrendingComponent } from './components/trending/trending.component';
import { TrendingService } from './services/trending.service';
import { MostConnectedService } from './services/most-connected.service';

=======
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from './services/authentication.service';
// Guards
import { AuthGuard } from './guards/auth.guard';
>>>>>>> dfefd3cb674fbddbb28c80eae43b31e4122c6bdf

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
<<<<<<< HEAD
    MostConnectedComponent,
    TrendingComponent
=======
    LoginComponent
>>>>>>> dfefd3cb674fbddbb28c80eae43b31e4122c6bdf
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
    HttpClientModule,
    GridStackModule,
<<<<<<< HEAD
    MatListModule,
    MatCardModule
  ],
  providers: [GlobalService, TrendingService, MostConnectedService],
=======
    FormsModule
  ],
  providers: [GlobalService, AuthenticationService, AuthGuard, SidebarService],
>>>>>>> dfefd3cb674fbddbb28c80eae43b31e4122c6bdf
  bootstrap: [AppComponent]
})
export class AppModule { }
