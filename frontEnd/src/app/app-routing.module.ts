import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './auth/acceuil/acceuil.component';
import { ClassCodeComponent } from './auth/class-code/class-code.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { StudentInformationComponent } from './auth/student-information/student-information.component';
import { WelcomeComponent } from './auth/welcome/welcome.component';
import { AuthentificationComponent } from './layouts/authentification/authentification.component';
import { AdminGuard } from './services/admin.guard';
import { AuthGuard } from './services/auth.guard';
import { HomeGuard } from './services/home.guard';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  //
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
  {
    path: '',
    component: AuthentificationComponent,
    canActivate: [HomeGuard],
    children: [
      {
        path: 'acceuil',
        component: AcceuilComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'welcome/:User',
        component: WelcomeComponent
      },
      {
        path: 'welcome',
        component: WelcomeComponent
      },
      {
        path: 'code',
        component: ClassCodeComponent
      },
      {
        path: 'studentinformation/:User',
        component: StudentInformationComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'acceuil',
      },
    ]
  },

  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule),
  },
  {
    path: 'student',
    canActivate: [AuthGuard],
    loadChildren: () => import('./student/student.module').then(m => m.StudentModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
