Springmvc参数获取和响应
----------


一、挂参数方式
-------------------
   1、Controller的方法参数名称和input表单的name值一致：
   
   ```
       @RequestMapping(value = "register4")
       @ResponseBody
       public String addUser4(String id, String name) {
           System.out.println("addUser4");
           return "addUser4=" + "id=" + id + "&name=" + name;
       }
   ```
   
   2、通过@PathVariabl获取路径中的参数,
   
   ```
       @RequestMapping(value = "register1/{id}/{name}", method = RequestMethod.GET)
       @ResponseBody
       public String addUser1(@PathVariable String id, @PathVariable String name) {
           System.out.println("id=" + id);
           System.out.println("name=" + name);
           return "addUser=" + "id=" + id + "&name=" + name;
       }
   ```
   
   3、@ModelAttribute获取POST请求的FORM表单数据,将表单直接转为bean
   
   ```
       @RequestMapping(value = "register2", method = RequestMethod.POST)
       @ResponseBody
       public String addUser2(@ModelAttribute("pojo") User user) {
           System.out.println("user=" + user.toString());
           return "addUser2=" + "id=" + user.getId() + "&name=" + user.getName();
       }
   ```
   
   4、用HttpServletRequest获取
   
   ```
    @RequestMapping(value = "register3", method = RequestMethod.GET)
       @ResponseBody
       public String addUser3(HttpServletRequest request, HttpServletResponse response) {
           String id = request.getParameter("id");
           String name = request.getParameter("name");
           System.out.println(id);
           return "addUser3=" + "id=" + id + "&name=" + name;
       }
   ```
   
   5、接收数组形式的参数：传参方式:?id=123&name=杰克&name=螺丝，id、name 和controler的变量名一致
   
   ```
       @RequestMapping(value = "register5")
       @ResponseBody
       public String addUser5(String id, String[] name) {
           System.out.println("addUser5");
           System.out.println(name.length);
           return "addUser5=" + "id=" + id + "&name=" + name;
       }
   ```
   
二、json格式字符串作为参数的方式,注意：pom.xml需要jackson包依赖,客户端请求时需在header加：Content-Type=application/json。
-------------------
   1、@RequestBody 注解，接收json字符串，将json转为bean。参数方式:{"id":"123","name":"rose"}
      注意：pom.xml需要jackson包依赖,客户端请求时需在header加：Content-Type=application/json。
      
   ```
       @RequestMapping(value = "register6", method = RequestMethod.POST)
       @ResponseBody
       public String addUser6(@RequestBody User user) {
           System.out.println(user);
           return "addUser6=" + "id=" + user.getId() + "&name=" + user.getName();
       }
   ```
   
   2、@RequestBody 注解，获取json数组。参数形式:[{"id":"123","name":"rose"},{"id":"456","name":"杰克"}]
   
   ```
   @RequestMapping(value = "register7", method = RequestMethod.POST)
       @ResponseBody
       public String addUser7(@RequestBody List<User> users) {
           System.out.println(users.size());
           for (int i = 0; i < users.size(); i++) {
               User u = users.get(i);
               System.out.println(u.getId());
               System.out.println(u.getName());
           }
           return "addUser7=" + users.size();
       }
   ```
   
   3、@RequestBody 注解，获取json混合类型,json的key值和bean的属性名要一致。
      参数形式:{"type":"123","users":[{"id":"123","name":"rose"},{"id":"456","name":"杰克"}]}
      
   ```
       @RequestMapping(value = "register8", method = RequestMethod.POST)
       @ResponseBody
       public String addUser8(@RequestBody UserList users) {
           System.out.println(users);
           return "addUser8=" + users;
       }
   ```
  
三、文件上传。pom.xml文件添加文件上传需要的jar。 springmvc配置文件spring-servlet.xml添加:multipartResolver配置。
------------------------------------------------------------------------------------

   1、单文件上传
   
   ```
       @RequestMapping(value = "uploadfile1", method = RequestMethod.POST)
       @ResponseBody
       public String loadFile1(@RequestParam("file") MultipartFile file) {
           // 文件存放服务端的位置
           String rootPath = "H:/TestDir";
           if (!file.isEmpty()) {
               //保存上传的文件
               if (saveFile(file)) {
                   return "上传成功";
               }
           }
           return "上传失败";
       }
       //保存上传的文件
       private Boolean saveFile(MultipartFile file) {
           // 文件存放服务端的位置
           String rootPath = "H:/TestDir";
           try {
               File dir = new File(rootPath + File.separator + "tmpFiles");
               if (!dir.exists()) {
                   dir.mkdirs();
               }
               File serverFile = new File(dir.getAbsolutePath() + File.separator + file.getOriginalFilename());
               file.transferTo(serverFile);
               return true;
           } catch (Exception e) {
               return false;
           }
       }
   ```
   
   客户端表单:注意：enctype="multipart/form-data"
   
   ```
   <form method="post" enctype="multipart/form-data" action="/springmvc002/user/uploadfile1">
       <input type="file" name="file"/>
       <input type="submit" value="Submit"/>
   </form>
   ```
   
   2、多文件上传
   
   ```
       @RequestMapping(value = "uploadfile2", method = RequestMethod.POST)
       @ResponseBody
       public String loadFile2(@RequestParam("files") MultipartFile[] files) {
           List<String> list = new ArrayList<String>();
           if (files != null && files.length > 0) {
               //循环获取file数组中得文件
               for (int i = 0; i < files.length; i++) {
                   MultipartFile file = files[i];
                   if (saveFile(file)) {
                       list.add("ok");
                   } else {
                       list.add("fail");
                   }
               }
           }
           System.out.println(list);
           return list.toString();
       }
   ```
   客户端：注意：enctype="multipart/form-data"
   
   ```
       <form method="post" enctype="multipart/form-data" action="/springmvc002/user/uploadfile2">
           <input type="file" name="files"/>
           <input type="file" name="files"/>
           <input type="file" name="files"/>
           <input type="submit" value="Submit"/>
       </form>
   ```
   
   3、带额外参数的文件上传
   
   ```
       @RequestMapping(value = "uploadfile3", method = RequestMethod.POST)
       @ResponseBody
       public String loadFile3(String userid, @RequestParam("files") MultipartFile[] files) {
           List<String> list = new ArrayList<String>();
           if (files != null && files.length > 0) {
               //循环获取file数组中得文件
               for (int i = 0; i < files.length; i++) {
                   MultipartFile file = files[i];
                   if (saveFile(file)) {
                       list.add("ok");
                   } else {
                       list.add("fail");
                   }
               }
           }
           System.out.println("userid=" + userid);
           System.out.println(list);
           return "userid=" + userid + "&&" + list.toString();
       }
   ```
   客户端：注意：enctype="multipart/form-data"
   ```
       <form method="post" enctype="multipart/form-data" action="/springmvc002/user/uploadfile3">
           <input type="text" name="userid"/>
           <input type="file" name="files"/>
           <input type="file" name="files"/>
           <input type="file" name="files"/>
           <input type="submit" value="Submit"/>
       </form>
   ```
   
四、响应类型
------
   1、返回:ModelAndView。需要在springmvc配置文件spring-servlet.xml中加入配置(具体参考代码):
   
   ```
       <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver" p:prefix="/jsp/" p:suffix=".jsp"/>
   ```
   
   controler 代码：
   
   ```
       @RequestMapping(value = "resp1", method = RequestMethod.GET)
       public ModelAndView resp1(String id, String name) {
           ModelAndView mv = new ModelAndView();
           mv.setViewName("resp1");
           User user = new User();
           user.setId("123");
           user.setName("杰克"); 
           mv.addObject(user);
           System.out.println(user);
           return mv;
       }
   ```
   view 代码:
   
   ```
       <%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
       <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
       <%@ page isELIgnored="false" %>
       <html>
       <head>
           <title>Title</title>
       </head>
       <body>
       <p>用户ID：${user.id}</p>
       <p>用户名：${user.name}</p>
       </body>
       </html>
   ```
   
   2、直接将对象转为json字符串返回。需在pom.xml添加jackson依赖、加上@ResponseBody注解。
   
   ```
       //例子1
       @ResponseBody
       @RequestMapping(value = "/resp2")
       public Map<String, Object> resp2(String id, String name) {
           Map<String, Object> map = new HashMap<String, Object>();
           map.put("code", "2000");
           map.put("desc", "ok");
           return map;
       }
       //例子2
       @ResponseBody
      @RequestMapping(value = "/resp3")
      public Object resp3(String id, String name) {
          User user = new User();
          user.setName("rose");
          user.setId("1231");
  
          return user;
      }
   ```
   
五、获取request,session,ServletContext.

   ```
       @RequestMapping(value = "comm1", method = RequestMethod.GET)
       public Object comm1(HttpServletRequest request, HttpServletResponse response) {
           HttpSession session = request.getSession();
           System.out.println(session.getId());
   
           ServletContext context = session.getServletContext();
           System.out.println(context);
   
           return "comm1";
       }
   ```