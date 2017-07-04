AngularJS2-组件引用 组件复用 组件通信@Input @Output
==== 

1、效果图
------- 

![image](https://github.com/jiekekeji/MAngular2Webpack/blob/master/demo005/preview/demo0052.gif)

2、图例解释
------- 

![image](https://github.com/jiekekeji/MAngular2Webpack/blob/master/demo005/preview/demo0051.png)


3、如何在组件中引用组件？如在index组件中引用footer组件和pdlist组件？
------- 

3.1、在app.module.ts中引入和声明好组件,正常情况下在使用ng g c 命令创建组件时已声明好：

```
...

import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {PdlistComponent} from './pdlist/pdlist.component';
import {IndexComponent} from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PdlistComponent,
    IndexComponent
  ],
  
  ...
```
3.2、在footer.component.ts和pdlist.component.ts中可以看到Component中有一个selector属性，该属性是引用的标识：

footer.component.ts：

```
...
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

...
```

pdlist.component.ts:

```
...

@Component({
  selector: 'app-pdlist',
  templateUrl: './pdlist.component.html',
  styleUrls: ['./pdlist.component.css']
})

...
```

在index组件通过selector属性的值引用他们 index.component.html:

```
<!--头部部分-->
<div class="title">
  <div class="header-container">
    <ul class="nav">
      <li (click)="onItemClicked(0)">Item0</li>
      <li (click)="onItemClicked(1)">Item1</li>
      <li (click)="onItemClicked(2)">Item2</li>
      <li (click)="onItemClicked(3)">Item3</li>
      <li>子组件产品序号：{{cIndex}}</li>
    </ul>
  </div>
</div>

<!--列表部分-->
<div class="list-container">
  <app-pdlist></app-pdlist>
</div>


<div style="clear: both"></div>

<!--底部部分-->
<app-footer></app-footer>

```

4、父组件如何给子组件传递参数？如index组件给pdlist组件传递参数type，name？
------- 

4.1、子组件的写法：@Input()定义变量用于接收父组件传递的参数,pdlist.component.ts编辑如下：

```
   ...
   
  /**
   * @Input() 用户接收父组件的传值
   */
  @Input() type: Number;
  @Input() name: String;
  
  ...
  
  /**
   * 当父组件像子组件传递参数事，监听@@Input值的变化
   * @param changes
   */
  ngOnChanges(changes) {
    console.log("changes ptype=", changes["type"].previousValue);
    console.log("changes ctype=", changes["type"].currentValue);
    console.log("changes pname=", changes["name"].previousValue);
    console.log("changes cname=", changes["name"].currentValue);
  }
```

4.2、父组件的写法：在index组件引用pdlist组件的地方，加上@Input声明的变量，index.component.html编辑如下：

```
...

<app-pdlist type="{{type}}" [name]="name"></app-pdlist>

...
```

两种方式，一种是type="{{type}}"，{{}}中的type为一个变量；二使用中括号[name]="name"，""中name为变量。

在index.component.ts中定义两个变量type和name，通过改变这两个参数的值改变子组件的参数值：

```
  ...

  public type: number;
  public name: String;
  
  /**
   * 改变传递给子组件的值
   * @param index
   */
  onItemClicked(index) {
    switch (index) {
      case 0:
        this.type = 0;
        this.name = "Item0";
        break;
      case 1:
        this.type = 1;
        this.name = "Item1";
        break;
      case 2:
        this.type = 2;
        this.name = "Item2";
        break;
      case 3:
        this.type = 3;
        this.name = "Item3";
        break;
    }
  }

```

5、子组件如何给父组件传递参数？如pdlist组件给index组件传递序号参数？
------- 

5.1、子组件写法：@Output()定义一个发射器，用于向外发射事件,pdlist.component.ts编辑如下：

```
  ...
  
  /**
   * @Output() 用于向父组件发射值
   * @type {EventEmitter}
   */
  @Output() emit2Parent = new EventEmitter();

  ...
  
  /**
   * 发射事件，当列表被点击时发射对应item的序号
   * @param index
   */
  pdItemClicked(index) {
    this.emit2Parent.emit(index);
  }
    
```

5.2、父组件的写法：在index组件引用pdlist组件的地方，加上@Output()声明的发射器emit2Parent，index.component.html编辑如下：

```
<app-pdlist (emit2Parent)="handlePro($event)"></app-pdlist>
```

当发射器 handlePro 触发时调用handlePro($event)函数，在pdlist.component.ts实现该函数：

```

  /**
   * 处理子组件传递过来的值
   * @param event
   */
  handlePro(event) {
    this.cIndex = event;
  }

```
