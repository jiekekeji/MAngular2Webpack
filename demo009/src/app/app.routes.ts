import {IndexComponent} from './index/index.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';


import {ListComponent} from './list/list.component';
import {DetailComponent} from './detail/detail.component';

export const appRoutes = [
  {
    path: "",
    redirectTo: 'index/login',
    pathMatch: 'full'
  },
  {
    path: "index",
    component: IndexComponent,
    children: [
      {
        path: "register",
        component: RegisterComponent
      },
      {
        path: "login",
        component: LoginComponent
      }
    ]
  },
  {
    path: "list",
    component: ListComponent
  },
  {
    path: "detail",
    component: DetailComponent
  }
];
