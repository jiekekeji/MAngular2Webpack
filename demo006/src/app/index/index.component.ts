import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import {SimpleService} from "../service/simple.service"
import {Ch2parentService} from "../service/ch2parent.service"


@Component({
  // 使用providers属性将定义的服务注册到这个组件中
  providers: [SimpleService, Ch2parentService],
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

  /**
   * 在这个方法中注册订阅
   */
  ngAfterViewInit() {
    let that = this;
    this.ch2parentService.observer.subscribe((value: any) => {
      console.log(value);
      that.pitems = value;
    })
  }


}
