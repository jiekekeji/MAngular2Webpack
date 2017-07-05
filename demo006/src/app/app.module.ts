import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {appRoutes}    from "./app.routes";

import {AppComponent} from './app.component';
import {IndexComponent} from './index/index.component';
import { ChildComponent } from './child/child.component';
import { Child1Component } from './child1/child1.component';

import {SimpleService} from "./service/simple.service"
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ChildComponent,
    Child1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SimpleService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
