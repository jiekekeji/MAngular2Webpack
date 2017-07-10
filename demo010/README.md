AngularJS2-基于angular-cli配置代理解决跨域请求问题
====

1、angular-cli 生成的应用默认是部署在  http://localhost:4200，  如果接口应用部署在 http://localhost:8080， 接口应用不允许跨域访问。
那么通过如下访问方式访问：

```
  getCommodityList() {

    //接口地址
    let baseurl = "http://localhost:8080/store/commodity/list"

    //将url，请求参数，请求头发情请求
    this.http.post(baseurl, null, null).subscribe(res => {

      console.log("res", res);

    }, error => {
      console.log("error", error);
    })
  }
```

会发现控制台报如下错误：

![image](https://github.com/jiekekeji/MAngular2Webpack/blob/master/demo010/preview/demo0101.png)


2、基于angular-cli配置代理的配置步骤：

2.1、在根目录下新建proxy.conf.json文件，对于本例子也说就是在demo010目录下新建proxy.conf.json文件，文件的内容如下:

```
{
  "/api": {
    //接口应用地址
    "target": "http://localhost:8080",
    "secure": false,
    "changeOrigin": true,
    //用/api来代替http://localhost:8080
    "pathRewrite": {
      "^/api": ""
    }
  }
}

```

2.2、修改package.json文件，将原先的"start": "ng serve",改为如下内容：


```
  "scripts": {
    "ng": "ng",
    "start": "ng serve --proxy-config proxy.conf.json",
    "test": "ng test",
    "pree2e": "webdriver-manager update --standalone false --gecko false",
    "e2e": "protractor"
  },
```

2.2、使用的过程中我们用/api来代替http://localhost:8080；

```
getCommodityList() {

    // let baseurl = "http://localhost:8080/store/commodity/list"
    //用/api来代替http://localhost:8080；
    let baseurl = "/api/store/commodity/list";

    //将url，请求参数，请求头发情请求
    this.http.post(baseurl, null, null).subscribe(res => {

      console.log("res", res);

    }, error => {
      console.log("error", error);
    })
  }
```

此时即可正确访问：

![image](https://github.com/jiekekeji/MAngular2Webpack/blob/master/demo010/preview/demo0102.png)
