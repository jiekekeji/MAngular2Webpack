import {Component, Input, OnInit} from '@angular/core';
import {Parameter} from "../model/parameter"
@Component({
  selector: 'app-pdlist',
  templateUrl: './pdlist.component.html',
  styleUrls: ['./pdlist.component.css']
})
export class PdlistComponent implements OnInit {

  @Input() type: Number;
  @Input() name: String;
  @Input() parameter: Parameter;

  constructor() {
    console.log("pdlist", this.parameter)
  }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    console.log("changes", changes);
  }
}
