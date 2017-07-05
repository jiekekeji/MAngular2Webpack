AngularJS2-服务的简单使用 使用服务来做组件的通讯
==== 

1、效果图
------- 

![image](https://github.com/jiekekeji/MAngular2Webpack/blob/master/demo006/preview/demo0061.gif)

![image](https://github.com/jiekekeji/MAngular2Webpack/blob/master/demo006/preview/demo0062.gif)

2、服务的简单使用
------- 

2.1、新建服务的命令:

```
ng g s dir/servicemane
```

其中dir为新建的service所在的目录，如在app/service目录下新建服务service001:

```
ng g s service/service001
```

如在直接在app目录下新建服务service001:

```
ng g s service001
```

2.2、新建的service000.service.ts 服务编辑如下，模拟获取登录状态的一个方法：

```
import {Injectable} from '@angular/core';

@Injectable()
export class Service000Service {

  constructor() {
  }

  getLoginState() {
    return Math.random();
  }
}
```

2.3、在index.component.ts组件中使用服务：
     
第一步：引入服务：
```
import {Service000Service} from "../service/service000.service"
```
第二步：使用providers属性将定义的服务注册到这个组件中，##注意：如果父组件注册过，则不需要再次注册
```
providers: [Service000Service]
```
第三步：注入服务：
```
constructor(private service000Service: Service000Service) {
  }
```
第四步：调用服务提供的方法：
```
  callSimpleService() {
    this.result = this.service000Service.getLoginState();
  }
```

整个index.component.ts组件的代码：
```
import {Component, OnInit, Output, EventEmitter} from '@angular/core';

//引入服务
import {Service000Service} from "../service/service000.service"
import {Service001Service} from "../service/service001.service"
import {Service002Service} from "../service/service002.service"

@Component({
  // 使用providers属性将定义的服务注册到这个组件中
  //如果需要全局注册，将providers注册到app.mudule.ts中
  //如果父组件注册过，则不需要再次注册
  providers: [Service000Service, Service001Service, Service002Service],
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  pitems: any;
  private result: any;

  //注入服务
  constructor(private service000Service: Service000Service,
              private service001Service: Service001Service,
              private service002Service: Service002Service) {
  }

  ngOnInit() {
  }

  //调用服务的方法
  callSimpleService() {
    this.result = this.service000Service.getLoginState();
  }

  /**
   * 调用服务的方法:发布参数username的变化
   */
  publishUsernameChanges() {
    let address = Math.random().toString(36).substring(3, 8);
    this.service001Service.updateUsername(address);
  }

  /**
   * 调用服务的方法:发布参数address的变化
   */
  publishAddressChanges() {
    let address = Math.random().toString(36).substring(3, 8);
    this.service002Service.updateAddress(address);
    console.log("index", address)
  }

  /**
   * 注册订阅参数address的变化，在这个方法中注册订阅，只调用一次就行
   */
  ngAfterViewInit() {
    let that = this;
    this.service002Service.observer.subscribe((value: any) => {
      that.pitems = value;
      console.log("index", that.pitems);
    })
  }
}

```

3、使用服务来做组件之间的通讯
------- 

3.1、第一步：使用命令新建服务：service002.service.ts，编辑内容如下：
```
import {Injectable} from '@angular/core';
import {Subject}from"rxjs/Subject";

@Injectable()
export class Service002Service {

  //声明变量 订阅Observer
  private subject = new Subject();

  public observer = this.subject.asObservable();

  constructor() {
  }

  //调用next方法 Subject会向所有注册了observer的组件发送item值
  updateAddress(address: any) {
    this.subject.next(address);
  }
}
```

3.2、第二步：订阅端 index.component.ts 组件，可以有多个订阅端，例如效果图在index组件和child1组件都订阅参数address变化。

在index.component.ts引入服务：
```
import {Service002Service} from "../service/service002.service"
```
使用providers属性将定义的服务注册到这个组件中，

（注意：如果父组件注册过，则不需要再次注册##，例如index的父组件app组件没有注册，则需要在这进行注册；
效果图中index组件作为child1组件的根组件已注册过Service002Service，所以在child1中省略这一步）。
```
providers: [Service002Service]
```
注入服务：
```
constructor(private service002Service: Service002Service) {
  }
```
注册订阅address的变化，
```
    /**
     * 注册订阅参数address的变化，在这个方法中注册订阅，只调用一次就行
     */
    ngAfterViewInit() {
      let that = this;
      this.service002Service.observer.subscribe((value: any) => {
        that.pitems = value;
        console.log("index", that.pitems);
      })
    }
```

3.2、第三步：发布端。在child.component.ts组件发布address参数的变化，

引入服务：
```
import {Service002Service} from "../service/service002.service"
```
如果只作为发布，不需要使用providers属性将定义的服务注册到这个组件中，

注入服务：
```
constructor(private service002Service: Service002Service) {
  }
```

发布参数变化：
```
  add() {
    let address = Math.random().toString(36).substring(3, 8);
    this.service002Service.updateAddress(address);
  }
```

完整发布端代码：
```
import {Component, OnInit} from '@angular/core';

import {Service001Service} from "../service/service001.service"
import {Service002Service} from "../service/service002.service"
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  private i = 1;
  private username: any;

  constructor(private service001Service: Service001Service, private service002Service: Service002Service) {
  }

  ngOnInit() {
  }

  add() {
    let address = Math.random().toString(36).substring(3, 8);
    this.service002Service.updateAddress(address);
  }

  /**
   * 在这个方法中注册订阅，只调用一次就行
   */
  ngAfterViewInit() {
    let that = this;
    this.service001Service.observer.subscribe((username: any) => {
      that.username = username;
    })
  }

}

```

