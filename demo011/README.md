AngularJS2-打包发布后的路径问题及404问题
===

一、打包发布后的路径问题
------- 

假设现在demo011已经开发完成，于是我们使用如下命令对demo011进行打包：

```
ng build
```
命令运行完成后，我们发现demo011目录下多了个dist目录，为了方便管理我想把生成的文件统一放在服务器的hello001目录下，

(此处以tomcat7为例)于是我在webapp目录下新建了hello001目录，将dist下的文件都拷贝到hell001目录里，然后启动了服务器。











1、图例。
------------------------------

![image](https://github.com/jiekekeji/MAngular2Webpack/blob/master/demo003/preview/demo0031.gif)


![image](https://github.com/jiekekeji/MAngular2Webpack/blob/master/demo003/preview/demo0032.png)


目录结构：

![image](https://github.com/jiekekeji/MAngular2Webpack/blob/master/demo003/preview/demo0033.png)

2、根模块
------------------------------

2.1、app.module 作为项目的根模块，直接关联的有user模块、commodity模块、home组件。commodity模块下有comment模块。每个模块下有自己的组件和路由配置文件。

2.2、app模块的路由配置app.routes.ts如下：注意当配置的是模块时，使用的是loadChildren。loadChildren值的方式：

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

3、用户模块
------------------------------

3.1、user.routes.ts的模块配置如下：用户模块的访问路径是以app.routes为基准拼接的，如访问如下配置的路由，需要在前面加上user,比如：/user/container.


```
import {ContainerComponent} from './container/container.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
export const userRoutes = [
  {
    path: "",
    redirectTo: 'container/register',
    pathMatch: 'full'
  },
  {
    path: "container",
    component: ContainerComponent,
    children: [
      {
        path: "register",
        component: RegisterComponent
      },
      {
        path: "login",
        component: LoginComponent
      },
    ]
  },
];

```

3.2、在user.module.ts下做相应声明,使用的是forChild：

```
import {RouterModule} from '@angular/router';
import {userRoutes} from "./user.routes";
....

  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(userRoutes)
  ],
```

user.module.ts完整代码：

```
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {RouterModule} from '@angular/router';
import {userRoutes} from "./user.routes";
import { RegisterComponent } from './register/register.component';
import { ContainerComponent } from './container/container.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [LoginComponent, RegisterComponent, ContainerComponent]
})
export class UserModule {
}

```

4、其他的组件和模块相类似。
------------------------------
