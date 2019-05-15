#### 一、react-router4
##### 1、react-router4理解
- 1)    react的一个插件库
- 2)	专门用来实现一个SPA应用
- 3)	基于react的项目基本都会用到此库

##### 2、SPA的理解
- 1)   单页Web应用（single page web application，SPA
- 2)	整个应用只有一个完整的页面
- 3)	点击页面中的链接不会刷新页面, 本身也不会向服务器发请求
- 4)	当点击路由链接时, 只会做页面的局部更新
- 5)	数据都需要通过ajax请求获取, 并在前端异步展现

##### 3、路由的理解
- 1) 什么是路由?

```
- a.一个路由就是一个映射关系(key:value)
- b.key为路由路径, value可能是function/component
```

- 2) 路由分类

```
- a.后台路由: node服务器端路由, value是function, 用来处理客户端提交的请求并返回一个响应数据
- b.前台路由: 浏览器端路由, value是component, 当请求的是路由path时, 浏览器端前没有发送http请求, 但界面会更新显示对应的组件
```
 
- 3) 后台路由

```
- a.注册路由: router.get(path, function(req, res))
- b.当node接收到一个请求时, 根据请求路径找到匹配的路由, 调用路由中的函数来处理请求, 返回响应数据
```

- 4)	前端路由

```
- a.注册路由: <Route path="/about" component={About}>
- b.当浏览器的hash变为#about时, 当前路由组件就会变为About组件
```
##### 4、前端路由
###### history库

```
a.网址: https://github.com/ReactTraining/history
b.管理浏览器会话历史(history)的工具库
c.包装的是原生BOM中window.history和window.location.hash
```
代码
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>history test</title>
</head>
<body>
  <p><input type="text"></p>
  <a href="/test1" onclick="return push('/test1')">test1</a><br><br>
  <button onClick="push('/test2')">push test2</button><br><br>
  <button onClick="back()">回退</button><br><br>
  <button onClick="forword()">前进</button><br><br>
  <button onClick="replace('/test3')">replace test3</button><br><br>

  <script type="text/javascript" src="https://cdn.bootcss.com/history/4.7.2/history.js"></script>
  <script type="text/javascript">
    let history = History.createBrowserHistory() // 方式一、a.得到封装window.history的管理对象
    // history = History.createHashHistory() // 方式二、得到封装window.location.hash的管理对象
    // console.log(history)

    function push (to) {
    //添加一个新的历史记录
      history.push(to)
      return false
    }

    function back() {
    //回退到上一个历史记录
      history.goBack()
    }

    function forword() {
    //前进到下一个历史记录
      history.goForward()
    }

    function replace (to) {
    //用一个新的历史记录替换当前的记录
      history.replace(to)
    }

    //监视历史记录的变化
    history.listen((location) => {
      console.log('请求路由路径变化了', location)
    })
  </script>
</body>
</html>
```

##### 5、react-router相关API
###### 组件

```
1)<BrowserRouter>
2)<HashRouter>
3)<Route>
4)<Redirect>
5)<Link>
6)<NavLink>
7)<Switch>

//其它
1)history对象
2)match对象
3)withRouter函数
```
##### 6、使用
###### 引用

```
//下载版本4的，如果不指定会下载最新的5版本
npm install --save react-router-dom@4
```

