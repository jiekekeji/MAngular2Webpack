import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() {
    console.log("index constructor")
  }

  ngOnChanges(changes) {
    console.log("index ngOnChanges", changes)
  }

  ngOnInit() {
    console.log("index ngOnInit")
  }

  ngDoCheck() {
    console.log("index ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("index ngAfterContentInit");
  }

  ngOnDestroy() {
    console.log("index ngOnDestroy");
  }

  ngAfterContentChecked() {
    console.log("index ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("index ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("index ngAfterViewChecked");
  }
}
