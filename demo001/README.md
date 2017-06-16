AngularJS2——使用Angular Cli 快速搭建工程
--------------------

软件安装：nodejs5.0以上；npm3.0以上（安装nodejs的时候自动就安装了npm）,然后配置相关环境变量。

由于npm 较慢，我们使用淘宝的npm镜像，安装cnpm:

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

1、安装angular-cli

```
cnpm install -g angular-cli
```

2、卸载angular-cli；如果之前已安装需要卸载干净

```
cnpm uninstall -g angular-cli
cnpm cache clean
```

3、创建Angular2工程,如创建demo001工程，进入工程存放目录，demo001为工程名，执行如下命令：

```
ng new demo001
```

执行如上命令后，等待初始化和安装相应的包，完成后的项目项目大致如下：

![image](https://github.com/jiekekeji/MAngular2Webpack/blob/master/demo001/preview/demo001.png)

4、启动工程：进入demo001目录 执行

```
ng serve
```
浏览器输入：http://localhost:4200/ 就可以看到 app works!。


5、创建一个angular的组件,如下创建一个home组件：在demo001目录下执行 

```
ng g component home
```
完成后app目录下多了一个home目录：

![image](https://github.com/jiekekeji/MAngular2Webpack/blob/master/demo001/preview/demo001-1.png)

6、创建一个angular的模块，如下创建一个about模块：在demo001目录下执行 

```
ng g module about
```
完成后app目录下多了一个about目录：

![image](https://github.com/jiekekeji/MAngular2Webpack/blob/master/demo001/preview/demo001-2.png)

就先到这里。~~~

