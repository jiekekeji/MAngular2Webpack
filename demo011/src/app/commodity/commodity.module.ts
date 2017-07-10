import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {commodityRoutes} from "./commodity.routes";
import {ContainerComponent} from './container/container.component';
import {ListComponent} from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(commodityRoutes)
  ],
  declarations: [ContainerComponent, ListComponent]
})
export class CommodityModule {
}
