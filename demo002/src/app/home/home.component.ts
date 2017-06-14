import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sites = [1, 2, 3, 4];
  user = {id: 123, name: "jack", age: 12};

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  /**
   * 打开列表的详情页
   * @param site
   */
  openDetail(site) {
    //跳转路径为/detail
    this.router.navigate(['detail'], {queryParams: {pid: site}});
  }

  // 方式一,默认从跟路径开始
  // 如访问的路径为: /detail,
  // 写法为: this.router.navigate(['detail'], {queryParams: {id: site}});
  //如访问路径为:/detail/abc,
  // 写法为: this.router.navigate(['detail',"abc"], {queryParams: {id: site}});
  open1() {
    //这里跳转到/index/aboutus路径,不携带参数
    this.router.navigate(["index", "aboutus"]);
    //或者采用这样的方式
    // this.router.navigate(["/index/aboutus"]);
  }

  // 方式二,直接写路径
  // 如访问的路径为: /detail,
  // 写法为: this.router.navigate(['/detail'], {queryParams: {id: site}});
  //如访问路径为:/detail/abc,
  // 写法为: this.router.navigate(['/detail/abc'], {queryParams: {id: site}});
  open2() {
    this.router.navigate(['/detail'], {queryParams: this.user});
  }

}
