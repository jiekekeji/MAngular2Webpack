package com.jk.model;

/**
 * Created by Handsome on 2017/7/7.
 */
public class MCommodity {
    private String id;

    @Override
    public String toString() {
        return "MCommodity{" +
                "id='" + id + '\'' +
                ", title='" + title + '\'' +
                ", price=" + price +
                '}';
    }

    private String title;
    private double price;
    public void setPrice(double price) {
        this.price = price;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setId(String id) {
        this.id = id;
    }



    public double getPrice() {
        return price;
    }

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }




}
