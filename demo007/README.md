AngularJS2-管道的使用及自定义管道
====

管道可以理解为过滤器：从一头把东西放入，经过过滤后，出来新的东西。简单的可以理解为函数，传入参数处理后返回结果值。

1、如何自定义管道及使用。这里创建一个字母大小写转换的管道：
------- 

第一步：在app/pipe目录下新建管道letterpipe.pipe.ts，使用新建管道命令：
```
ng g p pipe/letterpipe

```
命令运行完成后在app/pipe目录下可看到letterpipe.pipe.ts文件，同时在app.module.ts文件中已引入并声明了该管道.
app.module.ts:
```
import {LetterpipePipe} from './pipe/letterpipe.pipe';
  ...
  declarations: [
    AppComponent,
    IndexComponent,
    LetterpipePipe,
  ],
  ...
```
letterpipe.pipe.ts文件初始内容如下：
```
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letterpipe'
})
export class LetterpipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

```
其中@Pipe({name: 'letterpipe'})的name值为该管道的标识，通过该名字使用管道。

第二步：实现管道的transform方法：
```
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'letterpipe'
})
export class LetterpipePipe implements PipeTransform {

  /**
   * 字母大写小的转换
   * @param value   需要转换的字母
   * @param isToLocaleUpperCase 1转为大写；否则转为小写
   * @returns {string}  转换后的值
   */
  transform(value: string, isToLocaleUpperCase: string): any {
    console.log(isToLocaleUpperCase);
    if (isToLocaleUpperCase === "1") {
      return value.toLocaleUpperCase();
    } else {
      return value.toLocaleLowerCase();
    }
  }
}
```
第三步：使用管道，在index.component.html中将输入的字母转为大写或小写：
```
<p>使用管道转换后的结果:{{letter|letterpipe:isUpper}}</p>
```

其中letter对应函数transform的参数value;letterpipe为管道的名称;isUpper为函数transform的参数isToLocaleUpperCase。

