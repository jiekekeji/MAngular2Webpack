import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {RouterModule} from '@angular/router';

import {appRoutes}    from "./app.routes";
import {AppComponent} from './app.component';
import {IndexComponent} from './index/index.component';
import {CommPipe} from './pipe/comm.pipe';
import { LetterPipe } from './pipe/letter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CommPipe,
    LetterPipe,
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
