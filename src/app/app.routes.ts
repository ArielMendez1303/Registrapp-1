import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'main', 
    loadComponent: ()=> import('./main/main.page').then(m => m.MainPage) },
    {
      path: '',
      redirectTo: 'main',
      pathMatch: 'full'
    },
  {
    path: 'login',
    loadComponent: () => import('./User/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./Alumno/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'asignaturas',
    loadComponent: () => import('./Alumno/asignaturas/asignaturas.page').then( m => m.AsignaturasPage)
  },
  {
    path: 'asistencia',
    loadComponent: () => import('./Alumno/asistencia/asistencia.page').then( m => m.AsistenciaPage)
  },
  {
    path: 'registrar-qr',
    loadComponent: () => import('./Alumno/registrar-qr/registrar-qr.page').then( m => m.RegistrarQrPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./User/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'login-profes',
    loadComponent: () => import('./User/login-profes/login-profes.page').then( m => m.LoginProfesPage)
  },
  {
    path: 'inicio',
    loadComponent: () => import('./Profesor/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'generarqr',
    loadComponent: () => import('./Profesor/generarqr/generarqr.page').then( m => m.GenerarqrPage)
  }
];
