---
title: Javascript - 输入URL发生了什么
date: 2020-11-06
categories:
 - JS
---

![从URL输入到页面展现](https://img2018.cnblogs.com/blog/1626845/201909/1626845-20190906155725405-2078840564.png)

## 主要步骤

### 1. 根据地址栏输入的地址向DNS（Domain Name System 域名系统）查询IP

DNS解析是一个递归查询的过程（递归查询和迭代查询）

![DNS解析过程](https://user-gold-cdn.xitu.io/2018/6/4/163c83c423b021ca?imageslim)

查找顺序： 浏览器缓存--> 操作系统缓存--> 本地host文件 --> 路由器缓存--> ISP DNS缓存 --> 顶级DNS服务器/根DNS服务器

本地DNS服务器向域名的解析服务器发出请求，这时就能收到一个域名和IP地址对应关系，本地DNS服务器不仅要把IP地址返回给用户电脑，还要把这个对应关系保存在缓存中，以备下次别的用户查询时，可以直接返回结果，加快网络访问

DNS负载均衡：DNS可以返回一个合适的机器的IP给用户，可以根据每台机器的负载量，该机器离用户地理位置的距离，这种过程就是DNS负载均衡，又叫做DNS重定向。大家耳熟能详的CDN(Content Delivery Network)就是利用DNS的重定向技术

### 2. 建立TCP连接

浏览器通过操作OS的socket与服务器进行TCP连接 `三次握手过程`

1. `第一次握手` 客户端发送网络包，服务端收到了；

> 客户端的发送能力、服务端的接收能力是正常的。

2. `第二次握手` 服务端发包，客户端收到了；

> 服务端的接收、发送能力，客户端的接收、发送能力是正常的。 从客户端的视角来看，我接到了服务端发送过来的响应数据包，说明服务端接收到了我在第一次握手时发送的网络包，并且成功发送了响应数据包，这就说明，服务端的接收、发送能力正常。而另一方面，我收到了服务端的响应数据包，说明我第一次发送的网络包成功到达服务端，这样，我自己的发送和接收能力也是正常的。

3. `第三次握手` 客户端发包，服务端收到了；

> 客户端的接收、发送能力，服务端的发送、接收能力是正常的。 第一、二次握手后，服务端并不知道客户端的接收能力以及自己的发送能力是否正常。而在第三次握手时，服务端收到了客户端对第二次握手作的回应。从服务端的角度，我在第二次握手时的响应数据发送出去了，客户端接收到了。所以，我的发送能力是正常的。而客户端的接收能力也是正常的。

### 3. 发送HTTP请求

请求是浏览器的一个优化点，我们可以通过缓存来减少不必要的请求，进而加快页面的呈现。通过简单地设置http头部可以使用缓存的功能。

1. Last-Modify(响应头) + If-Modified-Since（请求头）

2. ETag（响应头） + If-None-Match（请求头）

3. Cache-Control/Expires(响应头)

```
POST / HTTP1.1
Host:www.wrox.com
User-Agent:Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 2.0.50727; .NET CLR 3.0.04506.648; .NET CLR 3.5.21022)
Content-Type:application/x-www-form-urlencoded
Content-Length:40
Connection: Keep-Alive

name=Professional%20Ajax&publisher=Wiley
第一部分：请求行，第一行明了是post请求，以及http1.1版本。
第二部分：请求头部，第二行至第六行。
第三部分：空行，第七行的空行。
第四部分：请求数据，第八行。
```

### 4. 服务器处理请求并响应 HTTP 报文

HTTP响应报文也是由三部分组成: 状态码, 响应报头和响应报文。

```
1xx：指示信息–表示请求已接收，继续处理。

2xx：成功–表示请求已被成功接收、理解、接受。

3xx：重定向–要完成请求必须进行更进一步的操作。

4xx：客户端错误–请求有语法错误或请求无法实现。

5xx：服务器端错误–服务器未能实现合法的请求。
```

### 5. 浏览器开始解析渲染页面并显示

通过HTML解析器解析HTML文档，构建一个DOM Tree，同时通过CSS解析器解析HTML中存在的CSS，构建Style Rules，两者结合形成一个Attachment。
通过Attachment构造出一个呈现树（Render Tree）
Render Tree构建完毕，进入到布局阶段（layout/reflow），将会为每个阶段分配一个应出现在屏幕上的确切坐标。
最后将全部的节点遍历绘制出来后，一个页面就展现出来了。

### 6. 关闭连接

现在的页面为了优化请求的耗时，默认都会开启持久连接（keep-alive），那么一个TCP连接确切关闭的时机，是这个tab标签页关闭的时候。这个关闭的过程就是著名的四次挥手。
