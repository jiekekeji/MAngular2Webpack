import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor() {
    console.log("detail constructor")
  }

  ngOnChanges(changes) {
    console.log("detail ngOnChanges", changes)
  }

  ngOnInit() {
    console.log("detail ngOnInit")
  }

  ngDoCheck() {
    console.log("detail ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("detail ngAfterContentInit");
  }

  ngOnDestroy() {
    console.log("detail ngOnDestroy");
  }

  ngAfterContentChecked() {
    console.log("detail ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("detail ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("detail ngAfterViewChecked");
  }

}
