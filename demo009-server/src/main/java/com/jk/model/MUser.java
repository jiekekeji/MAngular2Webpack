package com.jk.model;

/**
 * Created by Handsome on 2017/5/10.
 */
public class MUser {


    private String id;

    @Override
    public String toString() {
        return "MUser{" +
                "id='" + id + '\'' +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", address='" + address + '\'' +
                ", password1='" + password1 + '\'' +
                ", password2='" + password2 + '\'' +
                '}';
    }

    private String username;

    private String email;
    private String address;
    private String password1;
    private String password2;


    public void setPassword1(String password1) {
        this.password1 = password1;
    }

    public void setPassword2(String password2) {
        this.password2 = password2;
    }


    public String getPassword1() {
        return password1;
    }


    public String getPassword2() {
        return password2;
    }


    public void setId(String id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setAddress(String address) {
        this.address = address;
    }


    public String getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }

    public String getAddress() {
        return address;
    }


}
