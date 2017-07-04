import {Component, OnInit} from '@angular/core';

import {Ch2parentService} from "../service/ch2parent.service"
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  private i = 1;

  constructor(private ch2parentService: Ch2parentService) {
  }

  ngOnInit() {
  }

  add() {
    this.i++;
    this.ch2parentService.update2Parent(this.i);
  }


}
