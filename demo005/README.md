AngularJS2-组件引用 组件复用 组件通信@Input @Output
------------------------------

####1、效果图

![image](https://github.com/jiekekeji/MAngular2Webpack/blob/master/demo005/preview/demo0052.gif)

####2、图例解释
![image](https://github.com/jiekekeji/MAngular2Webpack/blob/master/demo005/preview/demo0051.png)


####3、如何在组件中引用组件？如在index组件中引用footer组件和pdlist组件？

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


