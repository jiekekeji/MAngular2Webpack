import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  private username = "张三";
  private student = {
    "username": "小丽",
    "age": 18,
    "address": "地球村"
  };

  private student1 = {
    "username": "小明",
    "age": 11,
    "address": "月亮"
  };
  private student2 = {
    "username": "小红",
    "age": 14,
    "address": "火星"
  };
  private student3 = {
    "username": "小白",
    "age": 20,
    "address": "天王星"
  };

  private students = [this.student1, this.student2, this.student3];

  /************************************/

  private imgurl = "http://imgsrc.baidu.com/imgad/pic/item/9d82d158ccbf6c81506cc9cbb63eb13533fa40be.jpg";
  private imgH = 100;


  private txColor = "red";

  private styleColor = {
    "color": "blue",
    "font-size": "20px",
    "background-color": "gainsboro",
  };

  /***********************************/

  private isCcsty = true;

  private moreClz = {
    "ccsty": true,
    "aasty": true
  }

  /***********************************/
  private isShow = true;

  private caseV = 1;

  constructor() {
  }

  ngOnInit() {
  }

  getImgW() {
    return 100;
  }

  getTxColor() {
    return "red"
  }

  getStyleColor() {
    return {
      "color": "blue",
      "font-size": "20px",
      "background-color": "gainsboro",
    };
  }

  /***********************************/

  getIsCcsty() {
    return false;
  }

  getMoreClz() {
    return {
      "ccsty": false,
      "aasty": true
    }
  }

  /***********************************/
  changeIsShow() {
    if (this.isShow) {
      this.isShow = false;
    } else {
      this.isShow = true;
    }
  }

  changeCaseV() {
    if (this.caseV === 3) {
      this.caseV = 1;
    } else {
      this.caseV++;
    }
  }

  itemClick(item) {
    console.log("列表事件绑定:", item);
  }
}
