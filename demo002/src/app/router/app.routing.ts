import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from '../home/home.component';
import {AboutusComponent} from '../aboutus/aboutus.component';
import {IndexComponent} from '../index/index.component';
import {DetailComponent} from "../detail/detail.component";

const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent,
    children: [
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "aboutus",
        component: AboutusComponent
      }
    ]
  },
  {
    path: 'detail',
    component: DetailComponent
  },
  {
    path: '',
    redirectTo: "/index/home",
    pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(routes);
