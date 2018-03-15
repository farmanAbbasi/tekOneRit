import { Routes } from '@angular/router';
import { DashboardRoutes } from './components/dashboard/dashboard.route';
import { LoginRoutes } from './components/login/login.route';


export const routes: Array<any> = [
    ...DashboardRoutes,
    ...LoginRoutes,
    {
        // fallback route
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];
