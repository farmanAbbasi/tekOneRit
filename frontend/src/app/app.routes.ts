import { Routes } from '@angular/router';
import { LoginRoutes } from './components/login/login.route';
import { DashboardRoutes } from './components/dashboard/dashboard.route';
import {ForumRoutes} from './components/forum/forum.route';

export const routes: Array<any> = [
    ...DashboardRoutes,
    ...ForumRoutes,
    ...LoginRoutes,
    {
        // fallback route
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];
