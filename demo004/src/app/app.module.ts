import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {appRoutes}    from "./app.routes";

import {AppComponent} from './app.component';
import {IndexComponent} from './index/index.component';
import {DetailComponent} from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
