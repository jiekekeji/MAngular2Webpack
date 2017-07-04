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

  constructor() {
  }

  //调用next方法 Subject会向所有注册了observer的组件发送item值
  update2Parent(item: any) {
    this.subject.next(item);
  }

}
