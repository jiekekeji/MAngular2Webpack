import {HomeComponent} from './home/home.component';
import {HelpComponent} from "./help/help.component"

export const appRoutes = [
  {
    path: "",
    component: HomeComponent

  },
  {
    path: "help",
    component: HelpComponent

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
