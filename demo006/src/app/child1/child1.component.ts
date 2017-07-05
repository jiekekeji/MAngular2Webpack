import {Component, OnInit} from '@angular/core';
import {Service001Service} from "../service/service001.service"
import {Service002Service} from "../service/service002.service"

@Component({
  // providers: [Service001Service, Service002Service],
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  private address: any;
  private username: any;

  constructor(private service001Service: Service001Service, private service002Service: Service002Service) {
  }

  ngOnInit() {
  }

  add() {
  }

  /**
   * 在这个方法中注册订阅，只调用一次就行
   */
  ngAfterViewInit() {
    console.log("ngAfterViewInit")
    let that = this;
    this.service001Service.observer.subscribe((value: any) => {
      that.username = value;
      console.log("child1", this.username);
    })
    this.service002Service.observer.subscribe((value: any) => {
      that.address = value;
      console.log("child1", this.address);
    })
  }
}
