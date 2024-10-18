import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'schedule-appointments',
    loadComponent: () => import('./pages/schedule-appointments/schedule-appointments.page').then( m => m.ScheduleAppointmentsPage)
  },
  {
    path: 'view-appointments',
    loadComponent: () => import('./pages/view-appointments/view-appointments.page').then( m => m.ViewAppointmentsPage)
  },
  {
    path: 'manage-patients',
    loadComponent: () => import('./pages/manage-patients/manage-patients.page').then( m => m.ManagePatientsPage)
  },
  {
    path: 'manage-doctors',
    loadComponent: () => import('./pages/manage-doctors/manage-doctors.page').then( m => m.ManageDoctorsPage)
  },
  {
    path: 'manage-procedures',
    loadComponent: () => import('./pages/manage-procedures/manage-procedures.page').then( m => m.ManageProceduresPage)
  },
];
