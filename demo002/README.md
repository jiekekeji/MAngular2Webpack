AngularJS2-路由、路由嵌套、路由导航、路由传值和取值
------------------------------

一、创建响应的组件 IndexComponent、HomeComponent、AboutusComponent、DetailComponent，在app.module.ts下加入组件声明：

```
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {IndexComponent} from './index/index.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    IndexComponent,
    DetailComponent,
  ],
```

二、路由配置文件编写：在app目录下新建router目录并新建app.routing.ts文件，编写内容如下：

```
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

```

在app.module.ts下引入路由配置文件：完整的app.module.ts文件如下：

```
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
//导入路由配置文件
import {routing}    from './router/app.routing';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {IndexComponent} from './index/index.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    IndexComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //引入路由配置文件
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

三、以AppComponent为根容器，所有的顶级路由切换都在这个组件下操作，如由/index/home切换到/detail,在app.component.html下加入如下代码：

```
<!--根路由-->
<router-outlet></router-outlet>
```

四、子路由，/index下有子路由HomeComponent和AboutusComponent,routerLink ,那么在index.component.html加入如下代码:

```
<div class="top-content">

</div>
<div class="nav-container">
  <ul class="nav-items">
    <li><a routerLink="/index/home">主页</a></li>
    <li><a routerLink="/index/aboutus">关于我们</a></li>
  </ul>
</div>

<!--子路由出入口-->
<div class="container">
  <router-outlet></router-outlet>
</div>

```

整个路由关系跟下图差不多：

五、编程式导航传值和取值

导航：

```
  import {Component, OnInit} from '@angular/core';
  //1、导入Router
  import {Router} from '@angular/router';
  
  @Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
  })
  export class HomeComponent implements OnInit {
    sites = [1, 2, 3, 4];
    user = {id: 123, name: "jack", age: 12};
  
    //2、注入router
    constructor(private router: Router) {
    }
  
    ngOnInit() {
    }
  
    /**
     * 打开列表的详情页
     * @param site
     */
    openDetail(site) {
      //跳转路径为/detail
      this.router.navigate(['detail'], {queryParams: {pid: site}});
    }
  
    // 方式一,默认从跟路径开始
    // 如访问的路径为: /detail,
    // 写法为: this.router.navigate(['detail'], {queryParams: {id: site}});
    //如访问路径为:/detail/abc,
    // 写法为: this.router.navigate(['detail',"abc"], {queryParams: {id: site}});
    open1() {
      //这里跳转到/index/aboutus路径,不携带参数
      this.router.navigate(["index", "aboutus"]);
      //或者采用这样的方式
      // this.router.navigate(["/index/aboutus"]);
    }
  
    // 方式二,直接写路径
    // 如访问的路径为: /detail,
    // 写法为: this.router.navigate(['/detail'], {queryParams: {id: site}});
    //如访问路径为:/detail/abc,
    // 写法为: this.router.navigate(['/detail/abc'], {queryParams: {id: site}});
    open2() {
      this.router.navigate(['/detail'], {queryParams: this.user});
    }
  
  }

```

取值方式：

```
import {Component, OnInit, OnDestroy} from '@angular/core';
//1、导入
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  pid = "";
  private sub: any;
  user = {id: 0, name: "", age: 0};

  //2、注入
  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    //3、获取导航的传值
    this.sub = this.activatedRoute.queryParams.subscribe(params => {
      this.pid = params["pid"];
      this.user.id = params["id"];
      this.user.name = params["name"];
      this.user.age = params["age"];
    });
  }

  ngOnDestroy() {
    //4、取消注册
    this.sub.unsubscribe();
  }

}

```
