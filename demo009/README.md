AngularJS2-(angular-cli配置代理),http请求
====

一、post 流的方式：
------- 
引入相关包并注入Http：
```
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';

constructor(public http: Http) {
}
```
请求示例代码：
```
  register() {
    //请求地址
    let url = "/api/store/user/register";

    //请求体
    let body = JSON.stringify({
      username: this.username,
      password1: this.password1,
      password2: this.password2,
    });

    //如果需要设置请求头
    let headers = new Headers({"m-type": "njnkasndlfkn"});
    let options = new RequestOptions({headers: headers});

    //将url，请求参数，请求头发情请求
    this.http.post(url, body, options).subscribe(res => {
      console.log("res", res);
    }, error => {
      console.log("error", error);
    })
  }
```
