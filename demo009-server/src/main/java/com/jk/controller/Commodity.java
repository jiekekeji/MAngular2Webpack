package com.jk.controller;

import com.jk.model.MCommodity;
import com.jk.model.MUser;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.*;

@Controller
@RequestMapping(value = "/commodity")
public class Commodity {
    private static List<MCommodity> list;

    static {
        list = new ArrayList<MCommodity>();

        MCommodity commodity1 = new MCommodity();
        commodity1.setId("123456");
        commodity1.setTitle("飞利浦（PHILIPS）50PUF6061/T3 50英寸 64位十一核4K超高清智能液晶平板电视机（黑色）");
        commodity1.setPrice(530561.202);

        MCommodity commodity2 = new MCommodity();
        commodity2.setId("654123");
        commodity2.setTitle("创维（Skyworth）55V9 55英寸25核4色4K超薄HDR金属机身超高清智能电视(金色)");
        commodity2.setPrice(3993.20);

        MCommodity commodity3 = new MCommodity();
        commodity3.setId("8562563");
        commodity3.setTitle("小熊（Bear）JYH-A30A1 煎药壶 全自动中药壶电煎药锅养生壶3L");
        commodity3.setPrice(23.00);

        MCommodity commodity4 = new MCommodity();
        commodity4.setId("15161252");
        commodity4.setTitle("荣事达（Royalstar）养生壶煮茶壶玻璃电水壶烧水壶多功能YSH18Q 1.8L");
        commodity4.setPrice(5263.00);

        list.add(commodity1);
        list.add(commodity2);
        list.add(commodity3);
        list.add(commodity4);
    }

    /**
     * 用户登录
     *
     * @param request
     * @param response
     * @return
     */
    @RequestMapping(value = "list", method = RequestMethod.POST)
    @ResponseBody
    public Object login(HttpServletRequest request, HttpServletResponse response) {

        Map<Object, Object> map = new HashMap<Object, Object>();
        map.put("code", 2200);
        map.put("desc", "成功");
        map.put("commoditys", list);
        return map;
    }


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

}
