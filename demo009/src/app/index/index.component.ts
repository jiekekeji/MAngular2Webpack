import {Component, OnInit} from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(public http: Http) {
  }

  ngOnInit() {
    let body = JSON.stringify({
      username: "rose",
      password: "123456"
    });
    let headers = new Headers({'Content-Type': 'application/json'}); //其实不表明 json 也可以, ng 默认好像是 json
    let options = new RequestOptions({headers: headers});

    this.http.post("/api/store/user/login", body, options).subscribe(res => {
      console.log("res", res);
    }, error => {
      console.log("error", error);
    })
  }

}
