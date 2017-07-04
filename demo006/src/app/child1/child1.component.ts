import {Component, OnInit} from '@angular/core';

import {Ch2parentService} from "../service/ch2parent.service"

@Component({
  // 使用providers属性将定义的服务注册到这个组件中
  providers: [Ch2parentService],
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  private ch1Items: any;

  constructor(private ch2parentService: Ch2parentService) {
  }

  ngOnInit() {
  }

  /**
   * 在这个方法中注册订阅，只调用一次就行
   */
  ngAfterViewInit() {
    let that = this;
    console.log("ngAfterViewInit");
    this.ch2parentService.observer.subscribe((value: any) => {
      that.ch1Items = value;
    })
  }

}
