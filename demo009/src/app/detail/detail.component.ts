import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  private id = "";
  private detail = {
    "desc": "",
    "commodity": {"id": "", "title": "", "price": 0},
    "code": -1
  };

  constructor(private activatedRoute: ActivatedRoute, private http: Http) {
  }

  ngOnInit() {
    //获取导航的传值
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params["id"];
    });

    //获取详情数据
    this.getDetail();
  }

  getDetail() {
    //get请求
    let baseurl = "/api/store/commodity/detail";
    baseurl = baseurl + "?commodityId=" + this.id;


    //如果需要设置请求头
    let headers = new Headers({"token": sessionStorage.getItem("token")});
    let options = new RequestOptions({headers: headers});

    //将url，请求参数，请求头发情请求
    this.http.get(baseurl, options).subscribe(res => {

      console.log("res", res);
      this.detail = res.json();

    }, error => {
      console.log("error", error);
    })
  }

}
