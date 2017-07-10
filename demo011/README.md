AngularJS2-打包发布后的路径问题及404问题
===

一、打包发布后的路径问题
------- 

1、假设现在demo011已经开发完成，于是我们使用如下命令对demo011进行打包：

```
ng build
```
命令运行完成后，我们发现demo011目录下多了个dist目录，为了方便管理我想把生成的文件统一放在服务器的hello001目录下，

(此处以tomcat7为例)于是我在webapps目录下新建了hello001目录，将dist下的文件都拷贝到hell001目录里，然后启动了服务器。

我的服务器地址是 localhost,tomcat监听的端口号是8080，然后我在浏览器输入了地址:  http://localhost:8080/hello001  .

然后浏览器什么都没看到，白白的一片，然后打开控制台，一大推红色的字体。tomcat下明明有hello001/index.html文件，？？。

将dist下的文件拷贝到tomcat的根目录下试试呢？然后将dist目录下的文件全部拷贝到tomcat7的webapps/ROOT下，(之前的文件如果需要先备份)。

浏览器输入了地址:  http://localhost:8080，居然能访问了，这是为啥？

打开dist下的index.html,你会发现下面这句话：

```
<base href="/">
```
这句话的意思是：href 属性规定页面中所有相对链接的基准 URL。这大概就知道什么原因了。

2、为了将项目部署在hello001目录下，应该如何打包呢？我们用下面的命令打包试试：

```
ng build --base-href /hello001/
```
然后将dist下的文件全部拷贝到webapps/hello001目录下，浏览器输入：  http://localhost:8080/hello001/  。

居然能访问了，然后打开dist下的index.html，发现了

```
<base href="/hello001/">
```

3、如果需要部署在  hello001目录下的test目录呢？那么就使用下面的打包命令吧：

```
ng build --base-href /hello001/test/
```

二、打包发布后的404问题
------- 

项目中使用了路由，配置文件如下，然后我点击了 "进入help页面" 导航到 help组件页面，然后点击了浏览器 刷新 按钮，出现了下面的一幕：

![image](https://github.com/jiekekeji/MAngular2Webpack/blob/master/demo011/preview/demo0111.gif)

怎么刷新就变成404了呢？我们先看刷新时的地址：  http://localhost:8080/hello001/help  ，按照这个地址
粗略的说就是要访问服务端上hello001目录下的help文件，这时候你看你服务器hello001目录下根本就没有help这个东西，
当然就404了。

如何解决这个问题呢？参考  https://github.com/jiekekeji/MVueWebpack/tree/master/demo015，


