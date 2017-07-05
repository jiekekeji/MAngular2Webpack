import {Injectable} from '@angular/core';
import {Subject}from"rxjs/Subject";

@Injectable()
export class Service001Service {

  //声明变量 订阅Observer
  private subject = new Subject();

  public observer = this.subject.asObservable();

  constructor() {
  }

  //调用next方法 Subject会向所有注册了observer的组件发送item值
  updateUsername(username: any) {
    this.subject.next(username);
  }
}
