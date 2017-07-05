import {Component, OnInit} from '@angular/core';

import {Service001Service} from "../service/service001.service"
import {Service002Service} from "../service/service002.service"
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  private i = 1;
  private username: any;

  constructor(private service001Service: Service001Service, private service002Service: Service002Service) {
  }

  ngOnInit() {
  }

  add() {
    let address = Math.random().toString(36).substring(3, 8);
    this.service002Service.updateAddress(address);
  }

  /**
   * 在这个方法中注册订阅，只调用一次就行
   */
  ngAfterViewInit() {
    let that = this;
    this.service001Service.observer.subscribe((username: any) => {
      that.username = username;
    })
  }

}
