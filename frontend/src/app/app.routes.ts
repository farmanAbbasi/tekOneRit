import { Routes } from '@angular/router';
import { DashboardRoutes } from './components/dashboard/dashboard.route';


export const routes: Array<any> = [
    ...DashboardRoutes,
    {
        // fallback route
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];
