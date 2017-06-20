# 最近学习React的一些总结和经验

## 1\. ReactJS简介

> React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套，用来架设 Instagram 的网站。做出来以后，发现这套东西很好用，就在2013年5月开源了。由于 React 的设计思想极其独特，属于革命性创新，性能出众，代码逻辑却非常简单。所以，越来越多的人开始关注和使用，认为它可能是将来 Web 开发的主流工具。

ReactJS官网地址：<http://facebook.github.io/react/>

Github地址：<https://github.com/facebook/react>

掘进翻译的ReactJS中文文档：<https://discountry.github.io/react/>

--------------------------------------------------------------------------------

## 2\. React 和 Vue

说道 React 不得不提一嘴 Vue ，其实我是先学习 Vue 的。个人认为 Vue 比较简单容易上手。而且 Vue 是中国人写的，各种中文文档也很齐全，对新手比较友好吧。

- React 可能只能算一个类库，而 Vue 可以算的上是一个框架。

- React 和 Vue 都是专注于 View 层面的，然而 React 仅仅是一个 View 层，而 Vue 则是个 MVVM 框架。

- React 全家桶并非是官方的， Facebook 自己也很少使用，而 Vue 的全家桶是官方的。这里我们不做深入探讨。

- 现在React 和 Vue 都是支持服务端渲染的。

### React 和 Vue 的相似性多于差异性：

1. 都是用于创建 UI 的 JavaScript 库
2. 都是快速和轻量级的
3. 都有基于组件的架构
4. 都使用虚拟 DOM
5. 都可以放在单独的 HTML 文件中，或者在更复杂的 Webpack 设置中的一个模块
6. 都有独立但常用的路由器和状态管理库

  **它们最大的区别在于 Vue 通常使用 HTML 模板文件，而 React 是完全使用 JavaScript。Vue 还有具有可变状态和称为 "reactivity" 的重新渲染的自动系统。**

> 所以这里又提出了一个疑问： 是不是诸如 handlebars , artTemplate 等模板引擎是不是都可以用Vue和React取代了呢？

--------------------------------------------------------------------------------

## 3\. 对 React 的认识及 React 的一些优点

- 刚刚我们也说到了 React 不是一个完整的 MVC 框架，最多可以认为是 MVC 中的 V层（View），甚至 React 并不是非常认可 MVC (MV*) 开发模式。但是通过 Redx、React-router 等是可以变成一个MVC的。

- React 的服务器端 Render 能力只能算是一个锦上添花的功能，并不是其核心出发点，事实上 React 官方站点几乎没有提及其在服务器端的应用。（单页应用SEO优化等就可以用服务端渲染，以及同构的思想这里就不过多的解释了。）

- 有人拿 React 和 Web Component 相提并论，但两者并不是完全的竞争关系，你完全可以用 React 去开发一个真正的 Web Component。

- React 不是一个新的模板语言， JSX 只是一个表象，没有 JSX 的 React 也能工作。但是最好还是学习一下JSX。

--------------------------------------------------------------------------------

## 4\. JSX语法简介

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

### **注意JSX有坑**

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

--------------------------------------------------------------------------------

## 5\. React 组件

> 组件化思想无需我多说了吧，好处多多也是近几年前端发展的趋势了。

> 用一句深奥的话说就是:' 高内聚，低耦合' 。大家自行理解一下，哈哈。

言归正传，在 React 中创建组件有三种方式

1. 纯函数式定义的无状态组件
2. ES5原生方式`React.createClass`定义的组件
3. ES6形式的 `extends React.Component`定义的组件

虽然有三种方式可以定义react的组件，那么这三种定义组件方式有什么不同呢？或者说为什么会出现对应的定义方式呢？下面就简单介绍一下。

### 无状态函数式组件：

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

- **组件不会被实例化，整体渲染性能得到提升**

因为组件被精简成一个`render`方法的函数来实现的，由于是无状态组件，所以无状态组件就不会在有组件实例化的过程，无实例化过程也就不需要分配多余的内存，从而性能得到一定的提升。

- **组件不能访问 this 对象**

无状态组件由于没有实例化过程，所以无法访问组件this中的对象，例如：this.ref、this.state等均不能访问。若想访问就不能使用这种形式来创建组件。

- **组件无法访问生命周期的方法**

因为无状态组件是不需要组件生命周期管理和状态管理，所以底层实现这种形式的组件时是不会实现组件的生命周期方法。所以无状态组件是不能参与组件的各个生命周期管理的。

- **无状态组件只能访问输入的 props ，同样的 props 会得到同样的渲染结果，不会有副作用**

无状态组件被鼓励在大型项目中尽可能以简单的写法来分割原本庞大的组件，未来React也会这种面向无状态组件在譬如无意义的检查和内存分配领域进行一系列优化，所以只要有可能，**尽量使用无状态组件**。

### React.createClass方式：

`React.createClass`是react刚开始推荐的创建组件的方式，这是ES5的原生的JavaScript来实现的React组件，其形式如下：

```javascript
var InputControlES5 = React.createClass({
    propTypes: {//定义传入props中的属性各种类型
        initialValue: React.PropTypes.string
    },
    defaultProps: { //组件默认的props对象
        initialValue: ''
    },
    // 设置 initial state
    getInitialState: function() {//组件相关的状态对象
        return {
            text: this.props.initialValue || 'placeholder'
        };
    },
    handleChange: function(event) {
        this.setState({ //this represents react component instance
            text: event.target.value
        });
    },
    render: function() {
        return (
            <div>
                Type something:
                <input onChange={this.handleChange} value={this.state.text} />
            </div>
        );
    }
});
InputControlES6.propTypes = {
    initialValue: React.PropTypes.string
};
InputControlES6.defaultProps = {
    initialValue: ''
};
```

与无状态组件相比，`React.createClass`和后面要描述的`React.Component`都是创建有状态的组件，这些组件是要被实例化的，并且可以访问组件的生命周期方法。但是随着React的发展，`React.createClas`s形式自身的问题暴露出来：

1. `React.createClass`会自绑定函数方法（不像`React.Component`只绑定需要关心的函数）导致不必要的性能开销，增加代码过时的可能性。

2. `React.createClass`的`mixins`不够自然、直观；`React.Component`形式非常适合高阶组件（Higher Order Components--HOC）,它以更直观的形式展示了比`mixins`更强大的功能，并且HOC是纯净的JavaScript，不用担心他们会被废弃。HOC可以参考无状态组件(Stateless Component) 与高阶组件。

### React.Component 方式：

`React.Component`是以ES6的形式来创建 React 的组件的，是 React 目前 **极为推荐** 的创建有状态组件的方式，最终会取代`React.createClass`形式；相对于 `React.createClass`可以更好实现代码复用。将上面`React.createClass`的形式改为`React.Component`形式如下：

```javascript
class InputControlES6 extends React.Component {
    constructor(props) {
        super(props);

        // 设置 initial state
        this.state = {
            text: props.initialValue || 'placeholder'
        };

        // ES6 类中函数必须手动绑定或者使用箭头函数或者在使用的时候bind(this)
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            text: event.target.value
        });
    }

    render() {
        return (
            <div>
                Type something:
                <input onChange={this.handleChange}
               value={this.state.text} />
            </div>
        );
    }
}
InputControlES6.propTypes = {
    initialValue: React.PropTypes.string
};
InputControlES6.defaultProps = {
    initialValue: ''
};
```

### React.createClass与React.Component区别:

- 函数this自绑定

`React.createClass`创建的组件，其每一个成员函数的 `this` React都会自动绑定，任何时候使用，直接使用`this.method`即可，函数中的`this`会被正确设置。

```javascript
const Contacts = React.createClass({  
  handleClick() {
    console.log(this); // React Component instance
  },
  render() {
    return (
      <div onClick={this.handleClick}></div>/*不用.bind(this)*/
    );
  }
});
```

`React.Component`创建的组件，其成员函数不会自动绑定`this`，需要开发者手动绑定，否则`this`不能获取当前组件实例对象。

```javascript
class Contacts extends React.Component {  
  constructor(props) {
    super(props);
  }
  handleClick() {
    console.log(this); // null 没有绑定this
  }
  render() {
    return (
      <div onClick={this.handleClick}></div>
    );
  }
}
```

绑定`this`的方法有3种：

```javascript
//在构造函数中绑定
class Contacts extends React.Component {  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log(this);
  }
  render() {
    return (
      <div onClick={this.handleClick}></div>
    );
  }
}
```

```javascript
//在使用中bind(this)
class Contacts extends React.Component {  
  constructor(props) {
    super(props);
  }
  handleClick() {
    console.log(this);
  }
  render() {
    return (
      <div onClick={this.handleClick.bind(this)}></div>
    );
  }
}
```

```javascript
//使用箭头函数
class Contacts extends React.Component {  
  constructor(props) {
    super(props);
  }
  handleClick = () => {
    console.log(this);
  }
  render() {
    return (
      <div onClick={this.handleClick}></div>
    );
  }
}
```

```javascript
//使用箭头函数
class Contacts extends React.Component {  
  constructor(props) {
    super(props);
  }
  handleClick() {
    console.log(this);
  }
  render() {
    return (
      <div onClick={() => this.handleClick}></div>
    );
  }
}
```

### 组件属性类型propTypes及其默认props属性defaultProps配置不同:

`React.createClass`在创建组件时，有关组件`props`的属性类型及组件默认的属性会作为组件实例的属性来配置，其中`defaultProps`是使用`getDefaultProps`的方法来获取默认组件属性的。

```javascript
//React.createClass
const TodoItem = React.createClass({
    propTypes: { // as an object
        name: React.PropTypes.string
    },
    getDefaultProps(){   // return a object
        return {
            name: 'LZX'    
        }
    };
    render(){
        return (
          <div>{this.props.name}</div>
        );
    };
})
```

`React.Component`在创建组件时配置这两个对应信息时，他们是作为组件类的属性，不是组件实例的属性，也就是所谓的类的静态属性来配置的。对应上面配置如下：

```javascript
class TodoItem extends React.Component{
  constructor(props){
    super(props)
  }
  static propTypes = {//类的静态属性
          name: React.PropTypes.string
      };

      static defaultProps = {//类的静态属性
          name: ''
      };

      ...
}
```

### 组件初始状态state的配置不同:

`React.createClass`创建的组件，其状态`state`是通过`getInitialState`方法来配置组件相关的状态。

```javascript
const TodoItem = React.createClass({
    // return an object
    getInitialState(){
        return {
            isEditing: false
        }
    }
    render(){
        return (
          <div>{this.state.isEditing ? 'isEditing' : 'notEditing'}</div>
        );
    }
})
```

`React.Component`创建的组件，其状态`state`是在`constructor`中像初始化组件属性一样声明的。

```javascript
class TodoItem extends React.Component{
    constructor(props){
        super(props);
        this.state = { // define this.state in constructor
            isEditing: false
        }
    }
    render(){
      return (
        <div>{this.state.isEditing ? 'isEditing' : 'notEditing'}</div>
      );
    }
}
```

### Mixins的支持不同:

`Mixins`(混入)是面向对象编程OOP的一种实现，其作用是为了复用共有的代码，将共有的代码通过抽取为一个对象，然后通过`Mixins`进该对象来达到代码复用。具体可以参考[React Mixin的前世今生](https://www.w3ctech.com/topic/1599)。

`React.createClass`在创建组件时可以使用`mixins`属性，以数组的形式来混合类的集合。

```javascript
var SomeMixin = {  
  doSomething() {
    //do something ...
  }
};
const Contacts = React.createClass({  
  mixins: [SomeMixin],
  handleClick() {
    this.doSomething(); // use mixin
  },
  render() {
    return (
      <div onClick={this.handleClick}></div>
    );
  }
});
```

但是遗憾的是`React.Component`这种形式并不支持Mixins，至今React团队还没有给出一个该形式下的官方解决方案；但是React开发者社区提供一个全新的方式来取代Mixins,那就是`Higher-Order Components`，具体细节可以参考[这篇文章](https://leozdgao.me/chushi-hoc/)。

### 那么到底选择哪种方式创建组件？

由于React团队已经声明`React.createClass`最终会被`React.Component`的类形式所取代。<br>
但是在找到`Mixins`替代方案之前是不会废弃掉`React.createClass`形式。所以：

能用`React.Component`创建的组件的就尽量不用`React.createClass`形式创建组件。

尽量使用类的方式创建组件。

除此之外，创建组件的形式选择还应该根据下面来决定：

1. 只要有可能，尽量使用无状态组件创建形式(性能更好)。

2. 否则（如需要state、生命周期方法等），使用`React.Component`这种ES6形式创建组件。

#### Tips:

> 无状态组件内部其实是可以使用ref功能的，虽然不能通过this.refs访问到，但是可以通过将ref内容保存到无状态组件内部的一个本地变量中获取到。

例如下面这段代码可以使用 ref 来获取组件挂载到 Dom 中后所指向的Dom元素：

```javascript
function TestComp(props){
    let ref;
    return (
      <div>
        <div ref={(node) => ref = node}>
            ...
        </div>
    </div>
  );
}
```

--------------------------------------------------------------------------------

## 6\. React单向数据流

React组件是一个状态机，每个组件内部都有自己的状态(state)，其状态只在内部作用域下操作修改。多个组件之间可以是复合的关系，即从属组件关系，React组件提供设置组件属性(props)，属性可以从主组件获取传递到各属组件。

> 主组件与属组件通信，最简单的方式是通过props,主组件通过props传递回调函数给属组件，在回调函数里可以更新state,触发组件重绘；在属组件中调用回调函数，也可以传入数据参数。

**PROPS**

props即属性，我们可以给React组件设置属性，属性值可以是任意JavaScript数据类型，且在组件内应该是只读的。

- this.props

我们可以通过this.props访问到所有组件属性，但是该属性值是只读的。如果要改变请使用state。

- 挂载组件属性

可以在挂载组件时传入组件props，指定其属性值：

```javascript
let HelloReact = React.createClass({
       render: function() {
           return (
               <h1>{this.props.greetWord}</h1>
           );
       }   
   });

   let greet = "Hello, React";
   React.render(
       <HelloReact greetWord={greet} />,
       document.querySelector('body')
     );
```

```javascript
class HelloReact extends React.Component{
    constructor(props){
      super(props)
    }
    render() {
       return (
           <h1>{this.props.greetWord}</h1>
       );
    }   
   };

   let greet = "Hello, React";
   React.render(
       <HelloReact greetWord={greet} />,
       document.querySelector('body')
     );
```

**STATE**

我们说每一个组件都是一个状态机，管理着各自的状态，就是所谓的state，state只存在于组件的内部。

- this.state

可以通过this.state访问组件状态值。

- getInitialState (ES5)

React组件state默认是null，在定义组件类时我们可以定义getInitialState方法指定组件初始state值。

- constructor (ES6)

在ES6中，我们更加推崇构造函数的写法，下面是例子。

```javascript
class example extends React.Component{
  constructor(props){
    super(props);
    // 设置 initial state
    this.state = {
        name: props.name || 'LZX'
    };
  }
  render(){
    return (
      <div>{this.state.name}</div>
    );
  }
}
```

> 更多例子请查看第5章，在上一章节我们已经讲得很详细了。但是我觉得还是有必要把props和state拆分出一个章节讲。

## 7\. 一个井字棋游戏

接下来我们来一个井字棋游戏小例子:

> 我在这里就只贴出代码了，请自行查看 [完整教程](https://discountry.github.io/react/tutorial/tutorial.html#开始编码)

> 我们现在来说一下需求，我们现在有3个组件：<br>
> Square<br>
> Board<br>
> Game<br>
> Square 组件代表一个单独的 `<button>`，Board 组件包含了9个squares，也就是棋盘的9个格子。Game 组件则为我们即将要编写的代码预留了一些位置。现在这几个组件都是不具备任何的交互功能的。

```javascript
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 ? false : true
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? "Move #" + move : "Game start";
      return (
        <li key={move}>
          <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
```

> 我在这里就只贴出js代码，请自行查看：<br>
> [完整教程](https://discountry.github.io/react/tutorial/tutorial.html#开始编码)<br>
> [完整代码以及效果](https://codepen.io/gaearon/pen/gWWZgR?editors=0010)
