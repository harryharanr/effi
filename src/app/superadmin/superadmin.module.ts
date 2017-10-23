import { NgModule } from '@angular/core';
import {AppRoutingModule} from './superadmin.routing';
import { SuperadminComponent } from './superadmin.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    SuperadminComponent,
    NavbarComponent
  ],
  imports: [
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [SuperadminComponent]
})
export class SuperadminModule { }
