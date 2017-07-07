import {Component, OnInit} from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  private username="";
  private password="";

  constructor(public http: Http) {
  }

  ngOnInit() {
    let body = JSON.stringify({
      username: "rose",
      password: "123456"
    });

    let params = new URLSearchParams();
    params.set("username", "rose");
    params.set("password", "123456");
    let headers = new Headers({"m-type": "njnkasndlfkn"});
    let options = new RequestOptions({headers: headers});

    this.http.post("/api/store/user/login", params, options).subscribe(res => {
      console.log("res", res);
    }, error => {
      console.log("error", error);
    })
  }

}
