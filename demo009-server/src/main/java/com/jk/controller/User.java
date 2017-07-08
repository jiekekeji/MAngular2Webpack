package com.jk.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.jk.model.MUser;
import org.apache.commons.io.IOUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.*;

@Controller
@RequestMapping(value = "/user")
public class User {

    /**
     * 用户登录
     *
     * @param request
     * @param response
     * @return
     */
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

    /**
     * 用户登录
     *
     * @param request
     * @param response
     * @return
     */
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

    @RequestMapping(value = "userinfo", method = RequestMethod.GET)
    @ResponseBody
    public Object userinfo(HttpServletRequest request, HttpServletResponse response) {

        String tokenKey = request.getHeader("token");
        //验证码token等等

        System.out.println("token=" + tokenKey);

        Map<Object, Object> map = new HashMap<Object, Object>();

        MUser user = new MUser();
        user.setId("123456789");
        user.setUsername("rose");
        user.setAddress("地球村");
        user.setEmail("asd@asdf.com");

        map.put("code", 2200);
        map.put("desc", "成功");

        map.put("user", user);
        return map;
    }

}
