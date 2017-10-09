import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AnimationComponent } from './components/animation/animation.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    AnimationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
