# ES6这些就够了

> 刚开始用Vue或者React，很多时候我们都会把ES6这个大兄弟加入我们的技术栈中。 但是ES6那么多那么多特性，我们需要全部都掌握吗？秉着二八原则，掌握好常用的，有用的这个可以让我们快速起飞。 接下来我们就聊聊ES6那些实用(常用)的新特性吧。

## 1.变量声明const和let

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

接下来我们换 **ES6** 登场：

我们通常用`let`和`const`来声明，`let`表示变量、`const`表示常量。

`let`和`const`都是块级作用域。那怎么理解这个块级作用域？

- 在一个函数内部

- 在一个代码块内部

> 说白了 `{}`大括号内的代码块即为`let` 和 `const`的作用域。

我们来看下代码：

```javascript
function aa() {
    if(bool) {
       let test = 'hello man'
    } else {
        //test 在此处访问不到
        console.log(test)
    }
  }
```

_`let`的作用域是在它所在当前代码块，但不会被提升到当前函数的最顶部。_

我么再来看`const`:

```javascript
const name = 'lzx';
name = 'flylee' //再次赋值就会报错,因为const是常量的意思，不能再次被赋值
```

接下来我们来看一道面试题：

```javascript
 var list = [];
    for (var i = 0; i < 10; i++) {
        list.push(function() { console.log(i) })
    }
    list.forEach(function(list) {
        list()
    })
```

这样的面试题是大家常见，很多同学一看就知道输出 10 十次<br>
但是如果我们想依次输出0到9呢？两种解决方法。直接上代码。

```javascript
    //在ES3/ES5中我们可以利用闭包解决这个问题
    var list = [];
    for (var i = 0; i < 10; i++) {
        list.push((function(value) {
            return function() {
                console.log(value)
            }
        }(i)))
    }
```

```javascript
    // 我们再来看ES6，用let很容易就解决这个问题了
    let list = [];
    for (let i = 0; i < 10; i++) {
        list.push(function() {
            console.log(i)
        })
    }
```

达到同样的效果，ES6简洁的语法是不是令你心动了？尝试下ES6的新特性吧！

--------------------------------------------------------------------------------

## 2.模板字符串

ES6模板字符简直是开发者的福音啊，解决了ES5在字符串功能上的痛点。

1. 第一个用途，基本的字符串格式化。将表达式嵌入字符串中进行拼接。用`${}`来界定。

```javascript
    //ES5
    var name = 'LZX';
    console.log('hello' + name);
```

```javascript
    //ES6
    const name = 'LZX';
    console.log(`hello ${name}`) //hello LZX
```

1. 第二个用途，在ES5时我们通过反斜杠`\`来做多行字符串或者字符串一行行拼接。ES6反引号 ` `` ` 直接搞定。

```javascript
    //ES5
   var msg = 'hello\
    world\
    '
```

```javascript
    //ES6
    let msg = `
        <div>
           <span>hello</span>
        </div>
    `
```

_对于字符串ES6当然也提供了很多厉害的方法。说几个常用的。_

```javascript
    // 1.includes：判断是否包含然后直接返回布尔值
    let str = 'haha';
    console.log(str.includes('a')); // true
    // 2.repeat: 获取字符串重复n次
    let s = 'he';
    console.log(s.repeat(2)); // 'hehe'
    //如果你带入小数, Math.floor(num) 来处理
```

--------------------------------------------------------------------------------

## 3\. 函数

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

```javascript
function action(num = 200) {
        console.log(num)
    }
action(); //200
action(300) //300
```

**箭头函数**

ES6很有意思的一部分就是函数的快捷写法。也就是箭头函数。

箭头函数最直观的三个特点。

- 不需要`function`关键字来创建函数
- 省略`return`关键字
- 继承当前上下文的`this`关键字

```javascript
    //例如：
    [1,2,3].map( x => x + 1 );

    //等同于：
    [1,2,3].map((function(x){
        return x + 1
    }).bind(this));
```

**说个小细节:**

当你的函数有且仅有一个参数的时候，是可以省略掉括号的。当你函数返回有且仅有一个表达式的时候可以省略`{}`例如:

```javascript
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

--------------------------------------------------------------------------------

## 4.对象的扩展

**对象初始化简写**

ES5我们对于对象都是以键值对的形式书写，是有可能出现键值对重名的。例如：

```javascript
function people(name, age) {
        return {
            name: name,
            age: age
        };
    }
```

这种写法很繁琐，我们再看看ES6的写法

键值对重名，ES6可以简写如下：

```javascript
function people(name, age) {
        return {
            name,
            age
        };
    }
```

ES6 同样改进了为对象字面量方法赋值的语法。ES5为对象添加方法：

```javascript
const people = {
        name: 'LZX',
        getName: function() {
            console.log(this.name)
        }
    }
```

ES6通过省略冒号与 function 关键字，将这个语法变得更简洁:

```javascript
const people = {
        name: 'LZX',
        getName () {
            console.log(this.name)
        }
    }
```

ES6 对象提供了`Object.assign()`这个方法来实现浅复制。`Object.assign()`可以把任意多个源对象自身可枚举的属性拷贝给目标对象，然后返回目标对象。第一参数即为目标对象。在实际项目中，我们为了不改变源对象。一般会把目标对象传为`{}`

```javascript
const obj = Object.assign({}, objA, objB)
```

--------------------------------------------------------------------------------

## 5.更方便的数据访问--解构(很有用)

数组和对象是JS中最常用也是最重要表示形式。为了简化提取信息，ES6新增了解构，这是将一个数据结构分解为更小的部分的过程。

ES5我们提取对象中的信息形式如下：

```javascript
var people = {
        name: 'LZX',
        age: 21,
    }
    var name = people.name
    var age = people.age
    console.log(name + ' --- ' + age)
```

是不是觉得很熟悉，没错，在ES6之前我们就是这样获取对象信息的，一个一个获取。现在，解构能让我们从对象或者数组里取出数据存为变量，如下:

```javascript
    //对象
    const people = {
        name: 'LZX',
        age: 21,
    }
    const { name, age } = people
    console.log(`${name} --- ${age}`)
    //数组
    const color = ['red', 'blue']
    const [first, second] = color
    console.log(first) //'red'
    console.log(second) //'blue'
```

--------------------------------------------------------------------------------

## 6.Spread Operator 展开运算符(rest参数)

ES6 引入 rest 参数（形式为"...变量名"），用于获取函数的多余参数，这样就不需要使用`arguments`对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。

组装对象或者数组:

```javascript
    //数组
    const color = ['red', 'yellow']
    const colorful = [...color, 'green', 'pink']
    console.log(colorful) //[red, yellow, green, pink]

    //对象
    const alp = { fist: 'a', second: 'b'}
    const alphabets = { ...alp, third: 'c' }
    console.log(alphabets) //{ "fist": "a", "second": "b", "third": "c"}
```

有时候我们想获取数组或者对象除了前几项或者除了某几项的其他项,这时候我们可以这么做:

```javascript
    //数组
    const number = [1,2,3,4,5]
    const [first, ...rest] = number
    console.log(rest) //2,3,4,5
    //对象
    const user = {
        username: 'LZX',
        gender: 'male',
        age: 22,
        address: 'shanghai'
    }
    const { username, ...rest } = user
    console.log(rest) //{"address": "shanghai", "age": 22, "gender": "female"}
```

对于 Object 而言，还可以用于组合成新的 Object 。(ES2017 stage-2 proposal) 当然如果有重复的属性名，右边覆盖左边

```javascript
const first = {
       a: 1,
       b: 2,
       c: 6,
   }
   const second = {
       c: 3,
       d: 4
   }
   const total = { ...first, ...second }
   console.log(total) // { a: 1, b: 2, c: 3, d: 4 }
```

替换push方法 push方法常用于将一个数组加入到另一个数组的结尾。在ES5中是这样做的：

```javascript
var arr1 = [0, 1, 2], arr2 = [3, 4, 5];
// Append all items in arr2 onto arr1
Array.prototype.push.apply(arr1, arr2);
```

由于`push`方法的参数不能是数组，所以只好通过apply方法变通使用push方法。有了展开运算符，就可以像下面直接将数组传入`push`方法。

```javascript
const arr1 = [0, 1, 2],arr2 = [3, 4, 5];
arr1.push(...arr2);
console.log(arr1); // [0, 1, 2, 3, 4, 5]
```

--------------------------------------------------------------------------------

## 7.import 和 export

`import`导入模块、`export`导出模块

```javascript
//全部导入
import people from './people'  //people.js 后缀.js可以省略

//有一种特殊情况，即允许你将整个模块当作单一对象进行导入
//该模块的所有导出都会作为对象的属性存在
import * as people from "./people"
console.log(people.name)
console.log(people.age)
console.log(people.getName())

//导入部分
import { name, age } from './people'

// 导出默认, 有且只有一个默认

const App = () => {
  //...some code
};
export default App;

// 部分导出
export class App extend Component {
  //...some code
};
```

肯定有同学会有疑惑，导入的时候有没有大括号的区别是什么。下面是我在工作和学习中的总结：

1. 当使用`export default people`导出时，就用 `import people from './people'` 导入（不带大括号）

2. 一个文件里，**有且只能有一个** `export default`。但可以有多个`export`。

3. 当用`export name` 时，就用`import { name } from './name'`导入（记得带上大括号）

4. 当一个文件里，既有一个`export default people`, 又有多个`export name` 或者 `export age`时，导入就用 `import people, { name, age } from './people'`

5. 当一个文件里出现n多个 `export` 导出很多模块，导入时除了一个一个导入，也可以用`import * as _ from './util'`

> 这里的 from './people' 或者 * as _ 只是做个例子，大家按照实际文件名导入或导出

--------------------------------------------------------------------------------

## 8\. Promise

> 在promise之前代码过多的回调或者嵌套，可读性差、耦合度高、扩展性低。通过`Promise`机制，扁平化的代码机构，大大提高了代码可读性；用同步编程的方式来编写异步代码，保存线性的代码逻辑，极大的降低了代码耦合性而提高了程序的可扩展性。

> Promise 是异步编程的一种解决方案，比传统的解决方案----回调函数和事件----更合理和更强大。它由社区最早提出和实现，ES6将其写进了语言标准，统一了用法，原生提供了`Promise`对象。

> 所谓`Promise`，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。

`Promise`简单的来说就是用同步的方式去写异步代码。

发起异步请求:

```javascript
fetch('/api/todo')
      .then(res => res.json())
      .then(data => ({ data }))
      .catch(err => ({ err }));
```

> 今天看到一篇关于面试题的很有意思。

```javascript
setTimeout(function() {
     console.log(1)
   }, 0);
   new Promise(function executor(resolve) {
     console.log(2);
     for( var i=0 ; i<10000 ; i++ ) {
       i == 9999 && resolve();
     }
     console.log(3);
   }).then(function() {
     console.log(4);
   });
   console.log(5);
```

> [Excuse me？这个前端面试在搞事！](https://zhuanlan.zhihu.com/p/25407758)

当然以上promise的知识点，这个只是冰山一角。需要更多地去学习应用。公司里会使用`async`和`await`结合`promise`一起使用，下一节我会介绍。

--------------------------------------------------------------------------------

## 9.async 函数

> ES2017 标准引入了 async 函数，使得异步操作变得更加方便。

> async 函数是什么？一句话，它就是 Generator 函数的语法糖。

简单的来说 `async` 函数就是将 `Generator` 函数的星号 `*` 替换成 `async`，将 `yield` 替换成 `await`，仅此而已。

具体介绍大家请看 [阮一峰老师写的](http://es6.ruanyifeng.com/?search=promise&x=0&y=0#docs/async) ，我在这里就不过多的介绍了。

**async/await 小技巧**

### sleep 函数

以前只接使用 `setTimeout` 和回调函数实现一个 `sleep` 会有很多的副作用，用起来很不方便。

所以让 `setTimeout` 搭配使用 `async/await`

```javascript
const sleep = delay => {
  return new Promise(resolve => {
    setTimeout(resolve, delay)
  })
}

const fn = async _ => {
  console.log('starting....')
  await sleep(1000)
  console.log('after sleeping for 1 second')
}
```

### 搭配 map() 函数

在 `map` 中引入异步处理:

```javascript
const arr = [1,2,3,4,5]
const asyncFn = data => {
  // 异步处理函数
}

const results = arr.map(async num => {
  await asyncFn(num)
  return ++num
})

console.log(results) //[2, 3, 4, 5, 6]
```

### 使用 await 代替 then() 函数

上面的例子最后使用了 `Promise.all` 还是回到了使用回调函数的方式

这个也很好解决，只需要在外层再加一个 `async` 函数

```javascript
const main = async _ => {
  const results = await; Promise.all(arr.map(num => {
    await asyncFn();
    return ++num;
  }))
  console.log(results);
}

main();
```

## 搭配 reduce() 函数

通过引入 `async/await` 可以把 `reduce` 扩展成一个按顺序执行异步函数的工具

`reduce` 用起来很简单:

```javascript
const arr = [1,2,3,4,5];
const result = arr.reduce((prev, next) => {
  return prev+next;
}, 0)

console.log(result);
```

像 `map` 函数一样引入 `async/await` :

```javascript
const main = async _ => {
  const result = await arr.reduce(async (prev, next) => {
    const tmp = await prev;
    return tmp + next;
  }, Promise.resolve(0));
  console.log(result);
}

main();
```

而且还可以在 `reduce` 内部加入异步函数:

```javascript
const arr = [1,2,3,4,5];
const main = async _ => {
  const result = await arr.reduce(async (prev, next) => {
    const tmp = await prev;

    // 异步处理 暂停1s
    await sleep(1000);
    console.log(tmp + next);

    return tmp + next
  }, Promise.resolve(0));
}

main();
```

上述代码会每隔一秒依次打出 1 3 6 10 15

> 参考自<br>
> <https://github.com/ccforward/cc/issues/6><br>
> <http://fred-zone.blogspot.hk/2017/04/javascript-asyncawait.html><br>
> <http://2ality.com/2016/10/async-function-tips.html>

--------------------------------------------------------------------------------

## 10.Set和Map数据结构(面试数组去重的简便方法)

> ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

> Set 本身是一个构造函数，用来生成 Set 数据结构。

详细介绍请看 阮一峰 老师写的[Set和Map数据结构](http://es6.ruanyifeng.com/?search=promise&x=0&y=0#docs/set-map)

让我们直接上代码来看吧：

```javascript
// 例一
const set = new Set([1, 2, 3, 4, 4]);
console.log([...set]);// [1, 2, 3, 4]

// 例二
const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
console.log(items.size); // 5

// 例三
function divs () {
  return [...document.querySelectorAll('div')];
}

const set = new Set(divs());
console.log(set.size); // 56

// 类似于
divs().forEach(div => set.add(div));
console.log(set.size); // 56
```

让我们来看一道面试题：

> 例如： 'abcabcbb'去重后没有重复字符的最长子串 'abc' 结果为：3

```javascript
//使用Set很方便的就可以完成
const str = 'abcabcbb';
const newStr = new Set(str);  //'abc'
console.log(newStr.size);  //3
```

有没有很简单？

--------------------------------------------------------------------------------

## 11\. Object.assign (对象拷贝问题)

> Object.assign() 方法用于将所有可枚举的属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。

> 详细用法和说明请查看文档：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

我们废话不多说直接上代码，小伙伴们应该很容易理解

**示例**

复制一个 object：

```javascript
var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }
```

深度拷贝问题

针对深度拷贝，需要使用其他方法，因为 `Object.assign()`拷贝的是属性值。假如源对象的属性值是一个指向对象的引用，它也只拷贝那个引用值。

```javascript
function test() {
  let a = { b: {c:4} , d: { e: {f:1}} }
  let g = Object.assign({},a)
  let h = JSON.parse(JSON.stringify(a));
  console.log(g.d) // { e: { f: 1 } }
  g.d.e = 32
  console.log('g.d.e set to 32.') // g.d.e set to 32.
  console.log(g) // { b: { c: 4 }, d: { e: 32 } }
  console.log(a) // { b: { c: 4 }, d: { e: 32 } }
  console.log(h) // { b: { c: 4 }, d: { e: { f: 1 } } }
  h.d.e = 54
  console.log('h.d.e set to 54.') // h.d.e set to 54.
  console.log(g) // { b: { c: 4 }, d: { e: 32 } }
  console.log(a) // { b: { c: 4 }, d: { e: 32 } }
  console.log(h) // { b: { c: 4 }, d: { e: 54 } }
}
test();
```

合并 objects:

```javascriptt
let o1 = { a: 1 };
let o2 = { b: 2 };
let o3 = { c: 3 };

let obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, 注意目标对象自身也会改变。
```

**来上一道面试题：**

> 撰写find函数，实现：

> ```javascript
>   var obj = {a:{b:{c:1}}};
>   find(obj, 'a.b.c')  //1
>   find(obj, 'a.b.c')  //undefined
> ```

废话不多说直接上代码，若有不正确的地方欢迎指正：

```javascript
    let obj = {a: {b: {c: 1}}};
    function find(obj, str) {
        let result = Object.assign({}, obj);  //这里进行一次浅拷贝，如果直接把obj赋值给一个新的变量是对obj的引用哦！要注意！
        let arr = str.split('.');
        for (let i = 0, len = arr.length; i < len; i++) {
            result = result[arr[i]]
        }
        return result;
    }
    console.log(find(obj, 'a.b.c'))  //1
```

```javascript
    let obj = {a: {b: {c: 1}}};
    function find(obj, str) {
        let result = Object.assign({}, obj);
        return newObj[str]
    }
    console.log(find(obj, 'a.b.c'))  //undefined
```

这里首先要注意，直接`newObj = obj`的话是对`obj`的引用！当心有坑！一开始我是用后面那个简便的方法的，以为obj["prop"]可以直接取到结果1，结果出来却是`undefined`，估计面试官问的也是这个吧？后来老老实实用递归出来，如果有更简便的方法欢迎issue。

> 详细用法和说明请查看文档：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

--------------------------------------------------------------------------------

## 总结

ES6的特性远不止于此!但对于我们日常的开发开说。这些估计已经够用了，但是还有很多有意思的方法。<br>
比如findIndex...等等。包括用`set`来完成面试题常客数组去重问题。我和我的小伙伴们都惊呆了!
