import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    // this.activatedRoute.params.subscribe((params: Params) => {
    //   console.log("参数:", params)
    // })

    this.activatedRoute.params.subscribe((params: Params) => {
      // this.id = params['id'];
      let name = params['name'];
      console.log("名字:", params)
    })
  }

}
