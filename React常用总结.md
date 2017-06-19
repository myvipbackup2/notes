## 最近学习React的一些总结和经验  
***

### 1. ReactJS简介
> React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套，用来架设 Instagram 的网站。做出来以后，发现这套东西很好用，就在2013年5月开源了。由于 React 的设计思想极其独特，属于革命性创新，性能出众，代码逻辑却非常简单。所以，越来越多的人开始关注和使用，认为它可能是将来 Web 开发的主流工具。

ReactJS官网地址：http://facebook.github.io/react/

Github地址：https://github.com/facebook/react  

***

### 2. React 和 Vue

说道 React 不得不提一嘴 Vue ，其实我是先学习 Vue 的。个人认为 Vue 比较简单容易上手。而且 Vue 是中国人写的，各种中文文档也很齐全，对新手比较友好吧。  

* React 可能只能算一个类库，而 Vue 可以算的上是一个框架。  

* React 和  Vue 都是专注于 View 层面的，然而 React 仅仅是一个 View 层，而 Vue 则是个 MVVM 框架。  

*  React 全家桶并非是官方的， Facebook 自己也很少使用，而 Vue 的全家桶是官方的。这里我们不做深入探讨。

* 现在React 和 Vue 都是支持服务端渲染的。

***

### 3. 对 React 的认识及 React 的一些优点  

* 刚刚我们也说到了 React 不是一个完整的 MVC 框架，最多可以认为是 MVC 中的 V层（View），甚至 React 并不是非常认可 MVC (MV*) 开发模式。但是通过 Redx、React-router 等是可以变成一个MVC的。  

* React 的服务器端 Render 能力只能算是一个锦上添花的功能，并不是其核心出发点，事实上 React 官方站点几乎没有提及其在服务器端的应用。（单页应用SEO优化等就可以用服务端渲染，以及同构的思想这里就不过多的解释了。）  

* 有人拿 React 和 Web Component 相提并论，但两者并不是完全的竞争关系，你完全可以用 React 去开发一个真正的 Web Component。  

*  React 不是一个新的模板语言， JSX 只是一个表象，没有 JSX 的 React 也能工作。但是最好还是学习一下JSX。

***

### 4. JSX语法简介

正如我们上面说的
> JSX 只是一个表象，没有 JSX 的 React 也能工作  

JSX就是Javascript和XML结合的一种格式。React发明了JSX，利用HTML语法来创建虚拟DOM。当遇到`<`，JSX就当HTML解析，遇到`{`就当JavaScript解析。

不使用JSX写法如下:

```javascript
React.render(
    React.createElement('div', null,
        React.createElement('div', null,
            React.createElement('div', null, 'content')
        )
    ),
    document.getElementById('example')
);
```

JSX写法如下:

```javascript
React.render(
    <div>
        <div>
            <div>content</div>
        </div>
    </div>,
    document.getElementById('example')
);
```  
是不是使用JSX以后简洁明了方便很多了？

在JSX语法中写Javascript表达式只需要用`{}`即可，比如下面这个使用 **三目运算符** 的例子：

```javascript
// Input (JSX):
const content = <Container>{window.isLoggedIn ? <Nav /> : <Login />}</Container>;
// Output (JS):
const content = React.createElement(
    Container,
    null,
    window.isLoggedIn ? React.createElement(Nav) : React.createElement(Login)
);
```

**要注意** 的是，JSX 语法只是语法糖，它的背后是调用 `ReactElement` 的构造方法 `React.createElement`的，所以类似这样的写法是 **不可以** 的：

```javascript
// This JSX:
<div id={if (condition) { 'msg' }}>Hello World!</div>

// Is transformed to this JS:
React.createElement("div", {id: if (condition) { 'msg' }}, "Hello World!");
```
从转化后的 Javascript 代码中可以看出明显的语法错误，所以要么用三目运算符，要么就这样写：

```javascript
if (condition) { <div id='msg'>Hello World!</div> } else { <div>Hello World!</div> }
```

#### **注意JSX有坑**  

**style属性**

在React中写行内样式时，要这样写，不能采用引号的书写方式：

```javascript
//right way
React.render(
    <div style={{color:'red'}}>  //第一个{}代表解析js，第二个{}代表样式对象
        xxxxx
    </div>,
    document.body
);
```

初学者很容易进入这个坑：
```javascript
//wrong way
style="opacity:{this.state.opacity};"
```

这样写才是正确的：
```javascript
//right way
style={{opacity: this.state.opacity}}
```

**HTML转义**

比如我们有一些内容是用户输入的富文本，从后台取到数据后展示在页面上，希望展示相应的样式：

```javascript
let content='<strong>content</strong>';

React.render(
    <div>{content}</div>,
    document.body
);
```

但是结果和我们想象的并不一样：

```html
//html
<strong>content</strong>
```

因为 React 默认会进行HTML的转义，避免XSS攻击，如果不需要转义，可以这么写：

```javascript
let content='<strong>content</strong>';    

React.render(
    <div dangerouslySetInnerHTML={{__html: content}}></div>,
    document.body
);
```

更多JSX的知识这里就不做过多的介绍了，大家自行Google。  

***

### 5. React 组件

> 现  


### 6. React 无状态组件
