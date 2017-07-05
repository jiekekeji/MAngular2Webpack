import {Component, OnInit} from '@angular/core';

import {Ch2parentService} from "../service/ch2parent.service"

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  private ch1Items: any;
  private i = 1;

  constructor(private ch2parentService: Ch2parentService) {
  }

  ngOnInit() {
  }

  add() {
    this.i++;
    this.ch2parentService.update2Parent(this.i++);
  }

  /**
   * 在这个方法中注册订阅，只调用一次就行
   */
  ngAfterViewInit() {
    let that = this;

    this.ch2parentService.observer.subscribe((value: any) => {
      console.log("ngAfterViewInit");
      that.ch1Items = value;
    })
  }

}
