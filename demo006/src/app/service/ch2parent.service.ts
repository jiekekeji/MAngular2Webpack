import {Injectable} from '@angular/core';
import {Subject}from"rxjs/Subject";

/**
 * 用于子组件给父组件传递参数
 */
@Injectable()
export class Ch2parentService {

  //声明变量 订阅Observer
  private subject = new Subject();

  public observer = this.subject.asObservable();

  private i = 2;

  constructor() {
    // let that = this;
    // setInterval(function () {
    //   that.update2Parent(that.i++)
    // }, 1000)
  }

  //调用next方法 Subject会向所有注册了observer的组件发送item值
  update2Parent(item: any) {
    console.log("Ch2parentService", item);
    this.subject.next(item);
  }

}
