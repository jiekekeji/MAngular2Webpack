import {Component, OnInit} from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private userInfo = {
    "desc": "",
    "code": -1,
    "user": {
      "id": "",
      "username": "",
      "email": "",
      "address": "",
      "password1": null,
      "password2": null
    }
  };

  private commoditylist = {
    "commoditys": [{
      "id": "",
      "title": "",
      "price": 0
    }],
    "desc": "成功",
    "code": 2200
  }

  constructor(public http: Http, private router: Router) {
  }

  ngOnInit() {
    this.getUserInfo();
    this.getCommodityList();
  }

  /**
   * 获取用户信息
   */
  getUserInfo() {
    //get请求
    let baseurl = "/api/store/user/userinfo";
    baseurl = baseurl + "?username=" + sessionStorage.getItem("username");


    //如果需要设置请求头
    let headers = new Headers({"token": sessionStorage.getItem("token")});
    let options = new RequestOptions({headers: headers});

    //将url，请求参数，请求头发情请求
    this.http.get(baseurl, options).subscribe(res => {

      console.log("res", res);
      this.userInfo = res.json();

    }, error => {
      console.log("error", error);
    })
  }

  //获取列表数据
  getCommodityList() {
    //get请求
    let baseurl = "/api/store/commodity/list";

    //如果需要设置请求头
    let headers = new Headers({"token": sessionStorage.getItem("token")});
    let options = new RequestOptions({headers: headers});

    //将url，请求参数，请求头发情请求
    this.http.post(baseurl, options).subscribe(res => {

      this.commoditylist = res.json();
      console.log("res", res);

    }, error => {
      console.log("error", error);
    })
  }

  /**
   * 跳转到详情页
   * @param item
   */
  toListDetail(item) {
    console.log("item", item);
    this.router.navigate(['/detail'], {queryParams: {id: item.id}});
  }
}
