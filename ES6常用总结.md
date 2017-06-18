# ES6这些就够了

> 刚开始用Vue或者React，很多时候我们都会把ES6这个大兄弟加入我们的技术栈中。
> 但是ES6那么多那么多特性，我们需要全部都掌握吗？秉着二八原则，掌握好常用的，有用的这个可以让我们快速起飞。 
> 接下来我们就聊聊ES6那些实用(常用)的新特性吧。

### 1.变量声明const和let

我们都是知道在ES6以前，`var`关键字声明变量。无论声明在何处，都会被视为声明在函数的最顶部(不在函数内即在全局作用域的最顶部)。这就是函数变量提升例如:

```javascript
function aa() {
    if(bool) {
        var test = 'hello world'
    } else {
        console.log(test)
    }
  }
```

以上的代码实际上是：

```javascript
function aa() {
    var test; // 变量提升
    if(bool) {
        test = 'hello world'
    } else {
        //此处访问test 值为undefined
        console.log(test)
    }
    //此处访问test 值为undefined
  }
```
**所以不用关心bool是否为true or false。实际上，无论如何test都会被创建声明。**  

接下来我们换 __ES6__ 登场：  

我们通常用`let`和`const`来声明，`let`表示变量、`const`表示常量。 
 
`let`和`const`都是块级作用域。那怎么理解这个块级作用域？

* 在一个函数内部  

* 在一个代码块内部

> 说白了 `{}`大括号内的代码块即为`let` 和 `const`的作用域。

我们来看下代码：  

```ecmascript 6
function aa() {
    if(bool) {
       let test = 'hello man'
    } else {
        //test 在此处访问不到
        console.log(test)
    }
  }
```

*`let`的作用域是在它所在当前代码块，但不会被提升到当前函数的最顶部。*  

我么再来看`const`:

```ecmascript 6
const name = 'lzx';
name = 'flylee' //再次赋值就会报错,因为const是常量的意思，不能再次被赋值
```
接下来我们来看一道面试题：  

```ecmascript 6
 var funcs = [];
    for (var i = 0; i < 10; i++) {
        funcs.push(function() { console.log(i) })
    }
    funcs.forEach(function(func) {
        func()
    })
```

这样的面试题是大家常见，很多同学一看就知道输出 10 十次  
但是如果我们想依次输出0到9呢？两种解决方法。直接上代码。

```javascript
    //在ES3/ES5中我们可以利用闭包解决这个问题
    var funcs = [];
    for (var i = 0; i < 10; i++) {
        func.push((function(value) {
            return function() {
                console.log(value)
            }
        }(i)))
    }
```
```ecmascript 6
    // 我们再来看ES6，用let很容易就解决这个问题了
    let funcs = [];
    for (let i = 0; i < 10; i++) {
        func.push(function() {
            console.log(i)
        })
    }
```
达到同样的效果，ES6简洁的语法是不是令你心动了？尝试下ES6的新特性吧！

***

### 2.模板字符串

ES6模板字符简直是开发者的福音啊，解决了ES5在字符串功能上的痛点。

1. 第一个用途，基本的字符串格式化。将表达式嵌入字符串中进行拼接。用`${}`来界定。

```javascript
    //es5 
    var name = 'lzx';
    console.log('hello' + name);
```
```ecmascript 6
    //es6
    const name = 'lzx';
    console.log(`hello ${name}`) //hello lzx
```
2. 第二个用途，在ES5时我们通过反斜杠` \ `来做多行字符串或者字符串一行行拼接。ES6反引号 ` `` ` 直接搞定。

```javascript
    //ES5
   var msg = 'hello\ 
    world\
    '
```
```ecmascript 6
    //ES6
    let msg = `
        <div>
           <span>hello</span>
        </div>
    `
```

*对于字符串ES6当然也提供了很多厉害的方法。说几个常用的。*  

```ecmascript 6
    // 1.includes：判断是否包含然后直接返回布尔值
    let str = 'haha';
    console.log(str.includes('a')); // true
    // 2.repeat: 获取字符串重复n次
    let s = 'he';
    console.log(s.repeat(2)); // 'hehe'
    //如果你带入小数, Math.floor(num) 来处理
```

***

### 3. 函数

**函数默认参数**

在ES5我们给函数定义参数默认值是怎么样？

```javascript
 function action(num) {
        num = num || 200;
        //当传入num时，num为传入的值
        //当没传入参数时，num即有了默认值200
        return num
    }
action(); //200
action(0); //false 
```

但细心观察的同学们肯定会发现，`num`传入为`0`的时候就是`false`， 此时`num = 200` 与我们的实际要的效果明显不一样

ES6为参数提供了默认值。在定义函数时便初始化了这个参数，以便在参数没有被传递进去时使用。

```ecmascript 6
function action(num = 200) {
        console.log(num)
    }
action(); //200
action(300) //300
```

**箭头函数**

ES6很有意思的一部分就是函数的快捷写法。也就是箭头函数。

箭头函数最直观的三个特点。

* 不需要`function`关键字来创建函数
* 省略`return`关键字
* 继承当前上下文的`this`关键字

```ecmascript 6
    //例如：
    [1,2,3].map( x => x + 1 );

    //等同于：
    [1,2,3].map((function(x){
        return x + 1
    }).bind(this));
```

**说个小细节:**

当你的函数有且仅有一个参数的时候，是可以省略掉括号的。当你函数返回有且仅有一个表达式的时候可以省略`{}`例如:

```ecmascript 6
 let people = name => 'hello' + name ;
 //参数name就没有括号
```

作为参考  
```javascript
//如果缺少()或者{}就会报错
 let people = (name, age) => {
        const fullName = 'h' + name;
        return fullName;
    }; 
```

***

### 4.对象的扩展