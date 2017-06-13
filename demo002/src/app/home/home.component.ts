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
    // 第一种方式,默认从跟路径开始
    // 如访问的路径为: /detail/abc,
    // 写法为: this.router.navigate(['detail',"abc"], {queryParams: {id: site}});
    this.router.navigate(['detail'], {queryParams: {id: site}});

    //第二种方式
    //如访问的路径为: /detail/abc,
    //写法为: this.router.navigate(['/detail/abc',"abc"], {queryParams: {id: site}});
    this.router.navigate(['/detail'], {queryParams: {id: site}});

    //第三种如果不需要传递参数:
    this.router.navigate(['/detail']);

    //第四种，参数为数组
    this.router.navigate(['/detail'], {queryParams: this.sites});

    //第五种，参数为对象
    this.router.navigate(['/detail'], {queryParams: this.user});
  }

}
