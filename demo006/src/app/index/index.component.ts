import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import {SimpleService} from "../service/simple.service"
import {Ch2parentService} from "../service/ch2parent.service"

@Component({
  // 使用providers属性将定义的服务注册到这个组件中
  //如果需要全局注册，将providers注册到app.mudule.ts中
  providers: [Ch2parentService],
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  pitems: any;

  constructor(private simpleService: SimpleService, private ch2parentService: Ch2parentService) {
  }

  ngOnInit() {
  }

  callSimpleService() {
    console.log(this.simpleService.getLoginState())
  }

  /**
   * 在这个方法中注册订阅，只调用一次就行
   */
  ngAfterViewInit() {
    let that = this;
    this.ch2parentService.observer.subscribe((value: any) => {
      console.log(value);
      that.pitems = value;
    })
  }


}
