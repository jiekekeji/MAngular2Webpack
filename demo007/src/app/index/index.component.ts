import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  private letter = "";
  private isUpper = 1;

  constructor() {
  }

  ngOnInit() {
    // let that = this;
    // setInterval(function () {
    //   that.letter = that.letter + "a";
    // }, 1000)
  }

}
