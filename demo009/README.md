AngularJS2-(angular-cli配置代理),http请求
====

一、post 流的方式：
------- 

1、Angular2客户端：

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

2、服务端获取参数和相应示例:
```
@RequestMapping(value = "register", method = RequestMethod.POST)
@ResponseBody
public Object register(HttpServletRequest request, HttpServletResponse response) {

    //获取请求头信息
    System.out.println("header:" + request.getHeader("Content-Type"));

    Map<Object, Object> map = new HashMap<Object, Object>();
    try {
        //读取流的方式
        String json = IOUtils.toString(request.getInputStream());
        System.out.println("body=" + json);

        ObjectMapper m = new ObjectMapper();
        MUser bean = m.readValue(json, MUser.class);
        System.out.println("bean=" + bean);
        if (null == bean || null == bean.getUsername()
                || null == bean.getPassword1()
                || null == bean.getPassword2()) {
            map.put("code", 4500);
            map.put("desc", "参数错误!");
            return map;
        }
        if (!bean.getPassword1().equals(bean.getPassword2())) {
            map.put("code", 4501);
            map.put("desc", "两次密码不一致!");
            return map;
        }
        map.put("code", 2200);
        map.put("desc", "注册成功!");
        return map;
    } catch (IOException e) {
        e.printStackTrace();
        map.put("code", 4500);
        map.put("desc", "系统异常!");
        return map;
    }
}
```
二、post 键值对的方式：
------- 
1、Angular2客户端：

   引入相关包并注入Http：
```
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';

constructor(public http: Http) {
}
```
   请求示例代码：
```
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
```

2、服务端获取参数和相应示例:

```
@RequestMapping(value = "login", method = RequestMethod.POST)
@ResponseBody
public Object login(HttpServletRequest request, HttpServletResponse response) {

    //获取请求头信息
    System.out.println("header:" + request.getHeader("Content-Type"));
    System.out.println("header:" + request.getHeader("m-type"));

    //获取body参数
    String username = request.getParameter("username");
    String password = request.getParameter("password");


    System.out.println("usernmae:" + username + ",password:" + password);

    Map<Object, Object> map = new HashMap<Object, Object>();
    if (null == username || !username.equals("rose")) {
        map.put("code", 4400);
        map.put("desc", "用户名错误后不存在!");
        return map;
    }
    if (null == password || !password.equals("123456")) {
        map.put("code", 4400);
        map.put("desc", "用户名错误后不存在!");
        return map;
    }
    if (username.equals("rose") && password.equals("123456")) {
        map.put("code", 2200);
        map.put("desc", "登录成功!");
        map.put("username", username);
        String token = UUID.randomUUID().toString();
        map.put("token", token);
        return map;
    }
    return map;
}
```

三、get 请求方式
------- 
1、Angular2客户端：

   引入相关包并注入Http：
```
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';

constructor(public http: Http) {
}
```
   请求示例代码：
```
getDetail() {
  //get请求
  let baseurl = "/api/store/commodity/detail";
  baseurl = baseurl + "?commodityId=" + this.id;


  //如果需要设置请求头
  let headers = new Headers({"token": sessionStorage.getItem("token")});
  let options = new RequestOptions({headers: headers});

  //将url，请求参数，请求头发情请求
  this.http.get(baseurl, options).subscribe(res => {

    console.log("res", res);
    this.detail = res.json();

  }, error => {
    console.log("error", error);
  })
}
```
2、服务端获取参数和相应示例:

```
@RequestMapping(value = "detail", method = RequestMethod.GET)
@ResponseBody
public Object detail(String commodityId) {

    System.out.println("commodityId="+commodityId);
    Map<Object, Object> map = new HashMap<Object, Object>();
    if (null == commodityId) {
        map.put("code", 4400);
        map.put("desc", "未知参数");
        return map;
    }

    MCommodity temp = null;
    for (int i = 0; i < list.size(); i++) {
        if (commodityId.equals(list.get(i).getId())) {
            temp = list.get(i);
        }
    }

    if (null != temp) {
        map.put("code", 2200);
        map.put("desc", "成功");
        map.put("commodity", temp);
        return map;
    }

    map.put("code", 4400);
    map.put("desc", "什么都没有");
    map.put("commodity", temp);
    return map;
}
```
四、例子完整效果图

![image](https://github.com/jiekekeji/MAngular2Webpack/blob/master/demo009/preview/demo0091.gif)
