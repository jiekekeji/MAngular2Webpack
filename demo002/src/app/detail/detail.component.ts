import {Component, OnInit, OnDestroy} from '@angular/core';
//1、导入
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  pid = "";
  private sub: any;
  user = {id: 0, name: "", age: 0};

  //2、注入
  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    //3、获取导航的传值
    this.sub = this.activatedRoute.queryParams.subscribe(params => {
      this.pid = params["pid"];
      this.user.id = params["id"];
      this.user.name = params["name"];
      this.user.age = params["age"];
    });
  }

  ngOnDestroy() {
    //4、取消注册
    this.sub.unsubscribe();
  }

}
