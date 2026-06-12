import { Routes } from '@angular/router';

const DASHBOARD_CHILDREN: Routes = [
    { path: 'product', loadComponent: () => import('./features/dashboard/products/products').then(m => m.Products) },
    { path: 'profile', loadComponent: () => import('./features/dashboard/profile/profile').then(m => m.Profile) },
    { path: 'accounts', loadComponent: () => import('./features/dashboard/accounts/accounts').then(m => m.Accounts) },
    { path: 'orders', loadComponent: () => import('./features/dashboard/orders/orders').then(m => m.Orders) },
    { path: 'cart', loadComponent: () => import('./features/dashboard/cart/cart').then(m => m.Cart) },
    { path: '', redirectTo: 'product', pathMatch: 'full' }
];

export const routes: Routes = [
    { path: '', loadComponent: () => import('./features/auth/login/login').then(m => m.Login) },
    { path: 'register', loadComponent: () => import('./features/auth/register/register').then(m => m.Register) },
    {
        path: 'user/dashboard',
        loadComponent: () => import('./features/dashboard/dashboard/dashboard').then(m => m.Dashboard),
        children: DASHBOARD_CHILDREN
    },
    {
        path: 'retailor/dashboard',
        loadComponent: () => import('./features/dashboard/dashboard/dashboard').then(m => m.Dashboard),
        children: DASHBOARD_CHILDREN
    },
    {
        path: 'admin/dashboard',
        loadComponent: () => import('./features/dashboard/dashboard/dashboard').then(m => m.Dashboard),
        children: DASHBOARD_CHILDREN
    },
    { path: '**', redirectTo: '' }
];
