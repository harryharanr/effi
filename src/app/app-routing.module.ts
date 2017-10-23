import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
// Our Array of Angular 2 Routes
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent // Default Route
  },
  {
    path: 'navbar',
    component: NavbarComponent // Default Route
  },
  // {
  //   path: 'superadmin',
  //   loadChildren: 'app/superadmin/superadmin.module#SuperadminModule'
  // },
  {
    path: 'superadmin',
    loadChildren: 'app/superadmin/superadmin.module#SuperadminModule'
  },
  { path: '**', component: LoginComponent } // "Catch-All" Route
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }