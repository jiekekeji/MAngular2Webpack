import {Component, OnInit} from '@angular/core';

import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.getCommodityList();
  }


  //获取列表数据
  getCommodityList() {

    // let baseurl = "http://localhost:8080/store/commodity/list"
    //用/api来代替http://localhost:8080；
    let baseurl = "/api/store/commodity/list";

    //将url，请求参数，请求头发情请求
    this.http.post(baseurl, null, null).subscribe(res => {

      console.log("res", res);

    }, error => {
      console.log("error", error);
    })
  }

}
