import {Component, OnInit, Output, EventEmitter} from '@angular/core';

//引入服务
import {Service000Service} from "../service/service000.service"
import {Service001Service} from "../service/service001.service"
import {Service002Service} from "../service/service002.service"

@Component({
  // 使用providers属性将定义的服务注册到这个组件中
  //如果需要全局注册，将providers注册到app.mudule.ts中
  //如果父组件注册过，则不需要再次注册
  providers: [Service000Service, Service001Service, Service002Service],
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  pitems: any;
  private result: any;

  //注入服务
  constructor(private service000Service: Service000Service, private service001Service: Service001Service, private service002Service: Service002Service) {
  }

  ngOnInit() {
  }

  //调用服务的方法
  callSimpleService() {
    this.result = this.service000Service.getLoginState();
  }

  /**
   * 调用服务的方法:发布参数username的变化
   */
  publishUsernameChanges() {
    let address = Math.random().toString(36).substring(3, 8);
    this.service001Service.updateUsername(address);
  }

  /**
   * 调用服务的方法:发布参数address的变化
   */
  publishAddressChanges() {
    let address = Math.random().toString(36).substring(3, 8);
    this.service002Service.updateAddress(address);
    console.log("index", address)
  }

  /**
   * 注册订阅参数address的变化，在这个方法中注册订阅，只调用一次就行
   */
  ngAfterViewInit() {
    let that = this;
    this.service002Service.observer.subscribe((value: any) => {
      that.pitems = value;
      console.log("index", that.pitems);
    })
  }

}
