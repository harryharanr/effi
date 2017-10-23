import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SuperadminComponent } from './superadmin.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// Our Array of Angular 2 Routes
const appRoutes: Routes = [
  {
    path: '',
    component: SuperadminComponent 
  },
  {
    path:'navbar',
    component:NavbarComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }