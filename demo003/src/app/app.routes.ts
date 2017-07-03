import {HomeComponent} from './home/home.component';

export const appRoutes = [
  {
    path: "",
    component: HomeComponent

  },
  {
    path: "user",
    loadChildren: "./user/user.module#UserModule"

  },
  {
    path: "commodity",
    loadChildren: "./commodity/commodity.module#CommodityModule"

  }
];
