import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Router} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AccordionComponent } from './components/accordion/accordion.component';

import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
// import { AnimationComponent } from './components/animation/animation.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
