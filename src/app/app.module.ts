import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { ChildNgonchangeComponent } from './child-ngonchange/child-ngonchange.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeCycleComponent,
    ChildNgonchangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
