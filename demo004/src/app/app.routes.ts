import {DetailComponent} from './detail/detail.component';
import {IndexComponent} from './index/index.component';

export const appRoutes = [
  {
    path: "",
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: "detail",
    component: DetailComponent

  },
  {
    path: "",
    component: IndexComponent
  }
];
