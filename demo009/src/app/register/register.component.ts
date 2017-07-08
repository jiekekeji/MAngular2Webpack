import {Component, OnInit} from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private username = "";
  private password1 = "";
  private password2 = "";

  constructor(public http: Http) {
  }

  ngOnInit() {
  }

  register() {
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
    this.http.post("/api/store/user/register", body, options).subscribe(res => {
      console.log("res", res);
    }, error => {
      console.log("error", error);
    })
  }

}
