AngularJS2-模板语法、数据绑定
====

1、简单数据绑定：模板语法，index.component.html文件：
```
<div class="container">
  <p>1、简单数据绑定：</p>
  <p>用户的名字为:{{username}}</p>
  <p>2、绑定对象上的值：</p>
  <p>学生姓名:{{student.username}}、学生年龄：{{student.age}}、学生的地址：{{student.address}}</p>
  <p>3、绑定数组的值：</p>
  <ul>
    <li *ngFor="let item of students">
      学生姓名:{{item.username}}、学生年龄：{{item.age}}、学生的地址：{{item.address}}
    </li>
  </ul>
</div>
```
对应的绑定值，在对应的ts文件，index.component.ts文件：
```
private username = "张三";
  private student = {
    "username": "小丽",
    "age": 18,
    "address": "地球村"
  };

  private student1 = {
    "username": "小明",
    "age": 11,
    "address": "月亮"
  };
  private student2 = {
    "username": "小红",
    "age": 14,
    "address": "火星"
  };
  private student3 = {
    "username": "小白",
    "age": 20,
    "address": "天王星"
  };

  private students = [this.student1, this.student2, this.student3];
```

![image](https://github.com/jiekekeji/MAngular2Webpack/blob/master/demo008/preview/demo0081.png)

2、属性样式绑定：模板语法，index.component.html文件,可通过[]、{{}}、方法的方式绑定，
```
<div class="container">
  <p>1、属性绑定：</p>
  <input [placeholder]="username">
  <img [src]="imgurl" height="{{imgH}}" [width]="getImgW()">

  <p>2、样式绑定：</p>
  <p [style.color]="txColor">使用属性的方式绑定字体为红色的样式</p>
  <p [style.color]="getTxColor()">使用方法的方式绑定字体为红色的样式</p>

  <p>3、样式对象绑定：</p>
  <p [ngStyle]="styleColor">我绑定了样式对象</p>
  <p [ngStyle]="getStyleColor()">我绑定了样式对象</p>
</div>
```
对应的绑定值，在对应的ts文件，index.component.ts文件：
```
  private imgurl = "http://imgsrc.baidu.com/imgad/pic/item/9d82d158ccbf6c81506cc9cbb63eb13533fa40be.jpg";
  private imgH = 100;


  private txColor = "red";

  private styleColor = {
    "color": "blue",
    "font-size": "20px",
    "background-color": "gainsboro",
  };
  
  getImgW() {
    return 100;
  }

  getTxColor() {
    return "red"
  }

  getStyleColor() {
    return {
      "color": "blue",
      "font-size": "20px",
      "background-color": "gainsboro",
    };
  }
```

![image](https://github.com/jiekekeji/MAngular2Webpack/blob/master/demo008/preview/demo0082.png)

3、类class的绑定：模板语法，index.component.html文件,可通过[]、方法的方式绑定，
```
<div class="container">
  <p>1、类class绑定，绑定单个class：</p>
  <p [class.ccsty]="isCcsty">我绑定了单个class</p>
  <p [class.ccsty]="getIsCcsty()">我绑定了单个class</p>

  <p>1、类class绑定，绑定多个class：</p>
  <p [ngClass]="moreClz">使用属性的方式绑定多个class</p>
  <p [ngClass]="getMoreClz()">使用方法的方式绑定多个class</p>
</div>
```
对应的绑定值，在对应的ts文件，index.component.ts文件,在对应的css文件需定义好样式，ccsty和aasty.
```
  private isCcsty = true;

  private moreClz = {
    "ccsty": true,
    "aasty": true
  }
  
  getIsCcsty() {
    return false;
  }

  getMoreClz() {
    return {
      "ccsty": false,
      "aasty": true
    }
  }
```

![image](https://github.com/jiekekeji/MAngular2Webpack/blob/master/demo008/preview/demo0083.png)

4、*ngFor和ngSwitch绑定：模板语法，index.component.html文件,可通过[]、方法的方式绑定，
```
<div class="container">
  <p>1、*ngFor条件渲染：</p>
  <p *ngIf="isShow">当isShow为ture时显示，false时隐藏</p>
  <button (click)="changeIsShow()">改变isShow的值</button>

  <p>2、NgSwitch多条件判断渲染：</p>
  <div [ngSwitch]="caseV">
    <p *ngSwitchCase="1">1</p>
    <p *ngSwitchCase="2">2</p>
    <p *ngSwitchCase="3">3</p>
  </div>
  <button (click)="changeCaseV()">改变caseV的值</button>
</div>
```
对应的绑定值，在对应的ts文件，index.component.ts文件,
```
 private isShow = true;

 private caseV = 1;
 
 changeIsShow() {
     if (this.isShow) {
       this.isShow = false;
     } else {
       this.isShow = true;
     }
   }
 
 changeCaseV() {
   if (this.caseV === 3) {
     this.caseV = 1;
   } else {
     this.caseV++;
   }
 }
```

![image](https://github.com/jiekekeji/MAngular2Webpack/blob/master/demo008/preview/demo0084.gif)

5、最后试一下列表中绑定事件，获取点击的对象，模板语法，index.component.html文件：
```
<div class="container">
  <p>1、列表事件绑定：</p>
  <ul>
    <li (click)="itemClick(item)" *ngFor="let item of students" style="border: 1px dashed greenyellow">
      学生姓名:{{item.username}}、学生年龄：{{item.age}}、学生的地址：{{item.address}}
    </li>
  </ul>
</div>
```
对应的绑定值，在对应的ts文件，index.component.ts文件,
```
  itemClick(item) {
    console.log("列表事件绑定:", item);
  }
```
![image](https://github.com/jiekekeji/MAngular2Webpack/blob/master/demo008/preview/demo0085.gif)
