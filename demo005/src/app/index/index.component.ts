import {Component, OnInit} from '@angular/core';

import {FooterComponent} from "../footer/footer.component"

import {Parameter} from "../model/parameter"

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public type: number;
  public name: String;
  public parameter: Parameter;


  constructor() {
  }

  ngOnInit() {
  }

  onItemClicked(index) {
    this.parameter = new Parameter();
    console.log("index", this.parameter)
    switch (index) {
      case 0:
        this.type = 0;
        this.name = "Item0";
        this.parameter.start = 0;
        this.parameter.limit = 10;
        break;
      case 1:
        this.type = 1;
        this.name = "Item1";
        // this.parameter.start = 10;
        // this.parameter.limit = 20;
        break;
      case 2:
        this.type = 2;
        this.name = "Item2";
        // this.parameter.start = 20;
        // this.parameter.limit = 30;
        break;
      case 3:
        this.type = 3;
        this.name = "Item3";
        // this.parameter.start = 30;
        // this.parameter.limit = 40;
        break;
    }
  }

}
