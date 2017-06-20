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

#### React 和 Vue 的相似性多于差异性：

1. 都是用于创建 UI 的 JavaScript 库
2. 都是快速和轻量级的
3. 都有基于组件的架构
4. 都使用虚拟 DOM
5. 都可以放在单独的 HTML 文件中，或者在更复杂的    Webpack 设置中的一个模块
6. 都有独立但常用的路由器和状态管理库  

   **它们最大的区别在于 Vue 通常使用 HTML 模板文件，而 React 是完全使用 JavaScript。Vue 还有具有可变状态和称为 “reactivity” 的重新渲染的自动系统。**

> 所以这里又提出了一个疑问：
  是不是诸如 handlebars , artTemplate 等模板引擎是不是都可以用Vue和React取代了呢？

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

> 组件化思想无需我多说了吧，好处多多也是近几年前端发展的趋势了。

> 用一句深奥的话说就是:' 高内聚，低耦合' 。大家自行理解一下，哈哈。  

言归正传，在 React 中创建组件有三种方式  

1. 函数式定义的无状态组件
2. ES5原生方式`React.createClass`定义的组件
3. ES6形式的 `extends React.Component`定义的组件

虽然有三种方式可以定义react的组件，那么这三种定义组件方式有什么不同呢？或者说为什么会出现对应的定义方式呢？下面就简单介绍一下。  

#### 无状态函数式组件  

创建无状态函数式组件形式是从 `React 0.14`版本开始出现的。它是为了创建纯展示组件，这种组件只负责根据传入的 `props` 来展示，不涉及到要`state` 状态的操作。   

具体的无状态函数式组件，其官方指出：

> 在大部分React代码中，大多数组件被写成无状态的组件，通过简单组合可以构建成其他的组件等；这种通过多个简单然后合并成一个大应用的设计模式被提倡。  

无状态函数式组件形式上表现为一个只带有一个`render`方法的组件类，通过函数形式或者 ES6 箭头函数的形式在创建，并且该组件是无`state`状态的。具体的创建形式如下：

```javascript
function HelloComponent(props, /* context */) {
  return <div>Hello {props.name}</div>
}
ReactDOM.render(<HelloComponent name="LZX" />, mountNode)
```

无状态组件的创建形式使代码的可读性更好，并且减少了大量冗余的代码，精简至只有一个`render`方法，大大的增强了编写一个组件的便利，除此之外无状态组件还有以下几个显著的特点：  

1. **组件不会被实例化，整体渲染性能得到提升**  

因为组件被精简成一个`render`方法的函数来实现的，由于是无状态组件，所以无状态组件就不会在有组件实例化的过程，无实例化过程也就不需要分配多余的内存，从而性能得到一定的提升。

2. **组件不能访问 this 对象**  

无状态组件由于没有实例化过程，所以无法访问组件this中的对象，例如：this.ref、this.state等均不能访问。若想访问就不能使用这种形式来创建组件。

3. **组件无法访问生命周期的方法**  

因为无状态组件是不需要组件生命周期管理和状态管理，所以底层实现这种形式的组件时是不会实现组件的生命周期方法。所以无状态组件是不能参与组件的各个生命周期管理的。


***

### 6. React 无状态组件

一整理发现还有好多知识点

### 7. React 中使用纯函数式声明组件
···
