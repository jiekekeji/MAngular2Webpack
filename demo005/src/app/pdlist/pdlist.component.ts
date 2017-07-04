import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Parameter} from "../model/parameter"
@Component({
  selector: 'app-pdlist',
  templateUrl: './pdlist.component.html',
  styleUrls: ['./pdlist.component.css']
})
export class PdlistComponent implements OnInit {

  /**
   * @Input() 用户接收父组件的传值
   */
  @Input() type: Number;
  @Input() name: String;


  /**
   * @Output() 用于向父组件发射值
   * @type {EventEmitter}
   */
  @Output() emit2Parent = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * 监听@@Input值的变化
   * @param changes
   */
  ngOnChanges(changes) {
    console.log("changes ptype=", changes["type"].previousValue);
    console.log("changes ctype=", changes["type"].currentValue);
    console.log("changes pname=", changes["name"].previousValue);
    console.log("changes cname=", changes["name"].currentValue);
  }

  /**
   * 发射事件
   * @param index
   */
  pdItemClicked(index) {
    this.emit2Parent.emit(index);
  }
}
