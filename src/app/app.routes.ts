import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/inbox',
    pathMatch: 'full',
  },
  {
    path: 'home/:id',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
];
