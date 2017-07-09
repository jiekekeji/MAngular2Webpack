import {Component, OnInit} from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username = "";
  private password = "";

  private result = {desc: "", token: "0", code: -1, username: ""};

  constructor(public http: Http, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    //请求参数，键值对的方式
    let params = new URLSearchParams();
    params.set("username", this.username);
    params.set("password", this.password);

    //如果需要设置请求头
    let headers = new Headers({"m-type": "njnkasndlfkn"});
    let options = new RequestOptions({headers: headers});

    //将url，请求参数，请求头发情请求
    this.http.post("/api/store/user/login", params, options).subscribe(res => {
      //处理响应结果
      this.handleLoginResult(res.json());
    }, error => {
      console.log("error", error);
    })
  }

  handleLoginResult(result) {
    this.result = result;
    if (this.result.code === 2200) {
      alert("登陆成功");

      sessionStorage.setItem("token", this.result.token);
      sessionStorage.setItem("username", this.result.username);
      //跳转到列表页
      this.router.navigate(["/list"]);
      return;
    }
    alert(this.result.desc);


  }
}
