AngularJS2-多模块，多模块路由懒加载
------------------------------

1、图例。
------------------------------

![image](https://github.com/jiekekeji/MAngular2Webpack/blob/master/demo003/preview/demo0031.gif)


![image](https://github.com/jiekekeji/MAngular2Webpack/blob/master/demo003/preview/demo0032.png)


目录结构：

![image](https://github.com/jiekekeji/MAngular2Webpack/blob/master/demo003/preview/demo0033.png)


2、app.module 作为项目的根模块，直接关联的有user模块、commodity模块、home组件。commodity模块下有comment模块。每个模块下有自己的组件和路由配置文件。
------------------------------------------------------------------------------------------------------------------------

3、app模块的路由配置app.routes.ts如下：注意当配置的是模块时，使用的是loadChildren。loadChildren值的方式：
------------------------------------------------------------------------------------------------------------------------

```
loadChildren: "./commodity/commodity.module#CommodityModule"
```

是CommodityModule模块配置文件的文件路径（相对于app目录的），加上一个#分隔符，再加上导出模块的类名CommodityModule。

app.routes.ts完整的代码：

```
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

```

在app.module.ts下做相应的声明，注意跟路由的配置使用RouterModule.forRoot(appRoutes)，子路由的配置使用RouterModule.forChild(commodityRoutes)。

```
import {RouterModule} from '@angular/router';
import {appRoutes}    from "./app.routes";

.....

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
```

app.module.ts完整代码

```
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {appRoutes}    from "./app.routes";

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
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

```
