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
