import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {commentRoutes} from "./comment.routes";

import {CommonModule} from '@angular/common';
import {ContainerComponent} from './container/container.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(commentRoutes)
  ],
  declarations: [ContainerComponent, ListComponent]
})
export class CommentModule {
}
