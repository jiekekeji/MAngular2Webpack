import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from '../home/home.component';
import {AboutusComponent} from '../aboutus/aboutus.component';
import {IndexComponent} from '../index/index.component';
import {DetailComponent} from "../detail/detail.component";

const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent,
    //index下的子路由
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
    // 如未匹配到任何路由，那么重定向到/index/home
    path: '',
    redirectTo: "/index/home",
    pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(routes);
