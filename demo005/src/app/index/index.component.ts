import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public type: number;
  public name: String;

  public cIndex: any;

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * 改变传递给子组件的值
   * @param index
   */
  onItemClicked(index) {
    switch (index) {
      case 0:
        this.type = 0;
        this.name = "Item0";
        break;
      case 1:
        this.type = 1;
        this.name = "Item1";
        break;
      case 2:
        this.type = 2;
        this.name = "Item2";
        break;
      case 3:
        this.type = 3;
        this.name = "Item3";
        break;
    }
  }

  /**
   * 处理子组件传递过来的值
   * @param event
   */
  handlePro(event) {
    this.cIndex = event;
  }

}
