# Javascript代码段合集

> 花30秒或者更短的时间就能理解的Javascript代码段

*   可以使用`Ctrl + F` 或者 `command + F`搜索
*   代码段使用ES6编写，使用 [Babel transpiler](https://babeljs.io/) 保证兼容.
*   作者在持续更新[传送门](https://github.com/Chalarangelo/30-seconds-of-code)

## [](#目录 "目录")目录

### [](#Array "Array")Array

*   [`arrayMax`](#arrayMax)
*   [`arrayMin`](#arrayMin)
*   [`chunk`](#chunk)
*   [`compact`](#compact)
*   [`countOccurrences`](#countOccurrences)
*   [`deepFlatten`](#deepFlatten)
*   [`difference`](#difference)
*   [`distinctValuesOfArray`](#distinctValuesOfArray)
*   [`dropElements`](#dropElements)
*   [`everyNth`](#everyNth)
*   [`filterNonUnique`](#filterNonUnique)
*   [`flatten`](#flatten)
*   [`flattenDepth`](#flattenDepth)
*   [`groupBy`](#groupBy)
*   [`head`](#head)
*   [`initial`](#initial)
*   [`initializeArrayWithRange`](#initializeArrayWithRange)
*   [`initializeArrayWithValues`](#initializeArrayWithValues)
*   [`intersection`](#intersection)
*   [`last`](#last)
*   [`mapObject`](#mapObject)
*   [`nthElement`](#nthElement)
*   [`pick`](#pick)
*   [`pull`](#pull)
*   [`remove`](#remove)
*   [`sample`](#sample)
*   [`shuffle`](#shuffle)
*   [`similarity`](#similarity)
*   [`symmetricDifference`](#symmetricDifference)
*   [`tail`](#tail)
*   [`take`](#take)
*   [`takeRight`](#takeRight)
*   [`union`](#union)
*   [`without`](#without)
*   [`zip`](#zip)

### [](#Browser "Browser")Browser

*   [`bottomVisible`](#bottomVisible)
*   [`currentURL`](#currentURL)
*   [`elementIsVisibleInViewport`](#elementIsVisibleInViewport)
*   [`getScrollPosition`](#getScrollPosition)
*   [`getURLParameters`](#getURLParameters)
*   [`redirect`](#redirect)
*   [`scrollToTop`](#scrollToTop)

### [](#Date "Date")Date

*   [`getDaysDiffBetweenDates`](#getDaysDiffBetweenDates)
*   [`JSONToDate`](#JSONToDate)
*   [`toEnglishDate`](#toEnglishDate)

### [](#Function "Function")Function

*   [`chainAsync`](#chainAsync)
*   [`compose`](#compose)
*   [`curry`](#curry)
*   [`functionName`](#functionName)
*   [`pipe`](#pipe)
*   [`promisify`](#promisify)
*   [`runPromisesInSeries`](#runPromisesInSeries)
*   [`sleep`](#sleep)

### [](#Math "Math")Math

*   [`arrayAverage`](#arrayAverage)
*   [`arraySum`](#arraySum)
*   [`collatz`](#collatz)
*   [`digitize`](#digitize)
*   [`distance`](#distance)
*   [`factorial`](#factorial)
*   [`fibonacci`](#fibonacci)
*   [`gcd`](#gcd)
*   [`hammingDistance`](#hammingDistance)
*   [`isDivisible`](#isDivisible)
*   [`isEven`](#isEven)
*   [`lcm`](#lcm)
*   [`median`](#median)
*   [`palindrome`](#palindrome)
*   [`percentile`](#percentile)
*   [`powerset`](#powerset)
*   [`randomIntegerInRange`](#randomIntegerInRange)
*   [`randomNumberInRange`](#randomNumberInRange)
*   [`round`](#round)
*   [`standardDeviation`](#standardDeviation)

### [](#Media "Media")Media

*   [`speechSynthesis`](#speechSynthesis)

### [](#Node "Node")Node

*   [`JSONToFile`](#JSONToFile)
*   [`readFileLines`](#readFileLines)

### [](#Object "Object")Object

*   [`cleanObj`](#cleanObj)
*   [`objectFromPairs`](#objectFromPairs)
*   [`objectToPairs`](#objectToPairs)
*   [`shallowClone`](#shallowClone)
*   [`truthCheckCollection`](#truthCheckCollection)

### [](#String "String")String

*   [`anagrams`](#anagrams)
*   [`capitalize`](#capitalize)
*   [`capitalizeEveryWord`](#capitalizeEveryWord)
*   [`escapeRegExp`](#escapeRegExp)
*   [`fromCamelCase`](#fromCamelCase)
*   [`reverseString`](#reverseString)
*   [`sortCharactersInString`](#sortCharactersInString)
*   [`toCamelCase`](#toCamelCase)
*   [`truncateString`](#truncateString)

### [](#Utility "Utility")Utility

*   [`coalesce`](#coalesce)
*   [`coalesceFactory`](#coalesceFactory)
*   [`extendHex`](#extendHex)
*   [`getType`](#getType)
*   [`hexToRGB`](#hexToRGB)
*   [`isArray`](#isArray)
*   [`isBoolean`](#isBoolean)
*   [`isFunction`](#isFunction)
*   [`isNumber`](#isNumber)
*   [`isString`](#isString)
*   [`isSymbol`](#isSymbol)
*   [`RGBToHex`](#RGBToHex)
*   [`timeTaken`](#timeTaken)
*   [`toOrdinalSuffix`](#toOrdinalSuffix)
*   [`UUIDGenerator`](#UUIDGenerator)
*   [`validateEmail`](#validateEmail)
*   [`validateNumber`](#validateNumber)

## [](#Array-1 "Array")Array

### [](#arrayMax "arrayMax")arrayMax

返回数组中的最大值.

使用 `Math.max()` 配合展开操作符 (`...`) 得到数组中的最大值.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> arrayMax = <span class="function"><span class="params">arr</span> =&gt;</span> <span class="built_in">Math</span>.max(...arr);</div><div class="line"><span class="comment">// arrayMax([10, 1, 5]) -&gt; 10</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#arrayMin "arrayMin")arrayMin

返回数组中的最小值.

使用 `Math.min()` 配合展开操作符 (`...`) 得到数组中的最小值.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> arrayMin = <span class="function"><span class="params">arr</span> =&gt;</span> <span class="built_in">Math</span>.min(...arr);</div><div class="line"><span class="comment">// arrayMin([10, 1, 5]) -&gt; 1</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#chunk "chunk")chunk

将一个数组分割成几个数组段.

使用 `Array.from()` 创建一个适合它长度的新的数组
使用 `Array.slice()` 分割为指定 `size` 长度的数组段
如果指定的数组不能被平均分割，最后的块将包含剩余的元素。

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> chunk = <span class="function">(<span class="params">arr, size</span>) =&gt;</span></div><div class="line">  <span class="built_in">Array</span>.from(&#123;<span class="attr">length</span>: <span class="built_in">Math</span>.ceil(arr.length / size)&#125;, (v, i) =&gt; arr.slice(i * size, i * size + size));</div><div class="line"><span class="comment">// chunk([1,2,3,4,5], 2) -&gt; [[1,2],[3,4],[5]]</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#compact "compact")compact

移除数组中的非真值

使用 `Array.filter()` 过滤非真值 (`false`, `null`, `0`, `&quot;&quot;`, `undefined`, 和 `NaN`).

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> compact = <span class="function">(<span class="params">arr</span>) =&gt;</span> arr.filter(<span class="built_in">Boolean</span>);</div><div class="line"><span class="comment">// compact([0, 1, false, 2, '', 3, 'a', 'e'*23, NaN, 's', 34]) -&gt; [ 1, 2, 3, 'a', 's', 34 ]</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#countOccurrences "countOccurrences")countOccurrences

计算元素出现的次数.

使用 `Array.reduce()` 计算指定元素在数组中出现的次数

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> countOccurrences = <span class="function">(<span class="params">arr, value</span>) =&gt;</span> arr.reduce(<span class="function">(<span class="params">a, v</span>) =&gt;</span> v === value ? a + <span class="number">1</span> : a + <span class="number">0</span>, <span class="number">0</span>);</div><div class="line"><span class="comment">// countOccurrences([1,1,2,1,2,3], 1) -&gt; 3</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#deepFlatten "deepFlatten")deepFlatten

深度降维

使用递归.
使用 `Array.concat()` 和一个空数组 (`[]`) 还有展开运算符 (`...`) 降维一个多维数组.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> deepFlatten = <span class="function"><span class="params">arr</span> =&gt;</span> [].concat(...arr.map(<span class="function"><span class="params">v</span> =&gt;</span> <span class="built_in">Array</span>.isArray(v) ? deepFlatten(v) : v));</div><div class="line"><span class="comment">// deepFlatten([1,[2],[[3],4],5]) -&gt; [1,2,3,4,5]</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#difference "difference")difference

返回两个数组的差集

创建一个 `b` 的 `Set`, 然后使用 `Array.filter()` 查找 `a` 中不包含 `b`的元素.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> difference = <span class="function">(<span class="params">a, b</span>) =&gt;</span> &#123; <span class="keyword">const</span> s = <span class="keyword">new</span> <span class="built_in">Set</span>(b); <span class="keyword">return</span> a.filter(<span class="function"><span class="params">x</span> =&gt;</span> !s.has(x)); &#125;;</div><div class="line"><span class="comment">// difference([1,2,3], [1,2,4]) -&gt; [3]</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#distinctValuesOfArray "distinctValuesOfArray")distinctValuesOfArray

返回数组中不重复的元素

使用 ES6的 `Set` 和展开运算符 `...rest` 过滤重复的元素.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> distinctValuesOfArray = <span class="function"><span class="params">arr</span> =&gt;</span> [...new <span class="built_in">Set</span>(arr)];</div><div class="line"><span class="comment">// distinctValuesOfArray([1,2,2,3,4,4,5]) -&gt; [1,2,3,4,5]</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#dropElements "dropElements")dropElements

给函数传递一个表达式和数组，只保留表达式为true的元素

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div><div class="line">5</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> dropElements = <span class="function">(<span class="params">arr, func</span>) =&gt;</span> &#123;</div><div class="line">  <span class="keyword">while</span> (arr.length &gt; <span class="number">0</span> &amp;&amp; !func(arr[<span class="number">0</span>])) arr.shift();</div><div class="line">  <span class="keyword">return</span> arr;</div><div class="line">&#125;;</div><div class="line"><span class="comment">// dropElements([1, 2, 3, 4], n =&gt; n &gt;= 3) -&gt; [3,4]</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#everyNth "everyNth")everyNth

返回数组中每一个第n的元素.

使用 `Array.filter()` 返回每一个第n的元素.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> everyNth = <span class="function">(<span class="params">arr, nth</span>) =&gt;</span> arr.filter(<span class="function">(<span class="params">e, i</span>) =&gt;</span> i % nth === <span class="number">0</span>);</div><div class="line"><span class="comment">// everyNth([1,2,3,4,5,6], 2) -&gt; [ 1, 3, 5 ]</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#filterNonUnique "filterNonUnique")filterNonUnique

过滤不唯一的元素.

使用 `Array.filter()` 只保留唯一的元素.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> filterNonUnique = <span class="function"><span class="params">arr</span> =&gt;</span> arr.filter(<span class="function"><span class="params">i</span> =&gt;</span> arr.indexOf(i) === arr.lastIndexOf(i));</div><div class="line"><span class="comment">// filterNonUnique([1,2,2,3,4,4,5]) -&gt; [1,3,5]</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#flatten "flatten")flatten

降维数组.

使用 `Array.reduce()` 获取到每一个元素然后使用 `concat()` 降维.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> flatten = <span class="function"><span class="params">arr</span> =&gt;</span> arr.reduce(<span class="function">(<span class="params">a, v</span>) =&gt;</span> a.concat(v), []);</div><div class="line"><span class="comment">// flatten([1,[2],3,4]) -&gt; [1,2,3,4]</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#flattenDepth "flattenDepth")flattenDepth

根据指定的深度降维数组.

使用递归，为所有维度的数组降低一维.
使用 `Array.reduce()` 和 `Array.concat()` 合并降维后的数组或元素.
此时如果 `depth` 为 `1` 停止递归.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> flattenDepth = <span class="function">(<span class="params">arr, depth = <span class="number">1</span></span>) =&gt;</span></div><div class="line">  depth != <span class="number">1</span> ? arr.reduce(<span class="function">(<span class="params">a, v</span>) =&gt;</span> a.concat(<span class="built_in">Array</span>.isArray(v) ? flattenDepth(v, depth - <span class="number">1</span>) : v), [])</div><div class="line">  : arr.reduce(<span class="function">(<span class="params">a, v</span>) =&gt;</span> a.concat(v), []);</div><div class="line"><span class="comment">// flattenDepth([1,[2],[[[3],4],5]], 2) -&gt; [1,2,[3],4,5]</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#groupBy "groupBy")groupBy

根据指定的表达式为数组分组

使用 `Array.map()` 映射为根据表达式或属性名值计算后的数组
使用 `Array.reduce()` 创建一个键值是上一步map出来的结果，值是相对应的数组的对象

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div><div class="line">5</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> groupBy = <span class="function">(<span class="params">arr, func</span>) =&gt;</span></div><div class="line">  arr.map(<span class="keyword">typeof</span> func === <span class="string">'function'</span> ? func : <span class="function"><span class="params">val</span> =&gt;</span> val[func])</div><div class="line">    .reduce(<span class="function">(<span class="params">acc, val, i</span>) =&gt;</span> &#123; acc[val] = (acc[val] || []).concat(arr[i]); <span class="keyword">return</span> acc; &#125;, &#123;&#125;);</div><div class="line"><span class="comment">// groupBy([6.1, 4.2, 6.3], Math.floor) -&gt; &#123;4: [4.2], 6: [6.1, 6.3]&#125;</span></div><div class="line"><span class="comment">// groupBy(['one', 'two', 'three'], 'length') -&gt; &#123;3: ['one', 'two'], 5: ['three']&#125;</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#head "head")head

返回集合的第一个元素

使用 `arr[0]` 返回给定数组的第一个元素.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> head = <span class="function"><span class="params">arr</span> =&gt;</span> arr[<span class="number">0</span>];</div><div class="line"><span class="comment">// head([1,2,3]) -&gt; 1</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#initial "initial")initial

返回一个数组中除去最后一个元素的其他元素.

使用 `arr.slice(0,-1)` 返回除去最后一个元素的其他元素.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> initial = <span class="function"><span class="params">arr</span> =&gt;</span> arr.slice(<span class="number">0</span>, <span class="number">-1</span>);</div><div class="line"><span class="comment">// initial([1,2,3]) -&gt; [1,2]</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#initializeArrayWithRange "initializeArrayWithRange")initializeArrayWithRange

初始化一个指定范围的数组

使用 `Array(end-start)` 创建一个期望长度的数组, 根据给定的范围使用`Array.map()`填充数组.
参数`start` 默认值为 `0`.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> initializeArrayWithRange = <span class="function">(<span class="params">end, start = <span class="number">0</span></span>) =&gt;</span></div><div class="line">  <span class="built_in">Array</span>.from(&#123; <span class="attr">length</span>: end - start &#125;).map(<span class="function">(<span class="params">v, i</span>) =&gt;</span> i + start);</div><div class="line"><span class="comment">// initializeArrayWithRange(5) -&gt; [0,1,2,3,4]</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#initializeArrayWithValues "initializeArrayWithValues")initializeArrayWithValues

初始化并且根据给定的值填充数组.

使用 `Array(n)` 创建一个期望长度的数组, 根据给定的值使用 `fill(v)` 填充数组.
参数 `value` 默认值为 `0`.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> initializeArrayWithValues = <span class="function">(<span class="params">n, value = <span class="number">0</span></span>) =&gt;</span> <span class="built_in">Array</span>(n).fill(value);</div><div class="line"><span class="comment">// initializeArrayWithValues(5, 2) -&gt; [2,2,2,2,2]</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#intersection "intersection")intersection

返回两个数组的交集.

创建一个 `b` 的 `Set`, 然后使用 `a` 的 `Array.filter()` 查找含 `b` 元素.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> intersection = <span class="function">(<span class="params">a, b</span>) =&gt;</span> &#123; <span class="keyword">const</span> s = <span class="keyword">new</span> <span class="built_in">Set</span>(b); <span class="keyword">return</span> a.filter(<span class="function"><span class="params">x</span> =&gt;</span> s.has(x)); &#125;;</div><div class="line"><span class="comment">// intersection([1,2,3], [4,3,2]) -&gt; [2,3]</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#last "last")last

返回数组中的最后一个元素.

使用 `arr.length - 1` 计算出最后一个元素的索引，然后返回它的值.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> last = <span class="function"><span class="params">arr</span> =&gt;</span> arr[arr.length - <span class="number">1</span>];</div><div class="line"><span class="comment">// last([1,2,3]) -&gt; 3</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#mapObject "mapObject")mapObject

映射一个数组，结果是键值为他的每一个元素的值，值为给定表达式结果的对象

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div><div class="line">5</div><div class="line">6</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> mapObject = <span class="function">(<span class="params">arr, fn</span>) =&gt;</span> </div><div class="line">  (<span class="function"><span class="params">a</span> =&gt;</span> (a = [arr, arr.map(fn)], a[<span class="number">0</span>].reduce( <span class="function">(<span class="params">acc,val,ind</span>) =&gt;</span> (acc[val] = a[<span class="number">1</span>][ind], acc), &#123;&#125;) )) ( );</div><div class="line"><span class="comment">/*</span></div><div class="line"><span class="comment">const squareIt = arr =&gt; mapObject(arr, a =&gt; a*a)</span></div><div class="line"><span class="comment">squareIt([1,2,3]) // &#123; 1: 1, 2: 4, 3: 9 &#125;</span></div><div class="line"><span class="comment">*/</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#nthElement "nthElement")nthElement

返回数组的第n个对象.

使用 `Array.slice()` 获取满足给定条件的数组的第一个元素
如果给定的索引超出范围，返回 `[]`.
参数 `n` 默认为第一个元素

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> nthElement = <span class="function">(<span class="params">arr, n=<span class="number">0</span></span>) =&gt;</span> (n&gt;<span class="number">0</span>? arr.slice(n,n+<span class="number">1</span>) : arr.slice(n))[<span class="number">0</span>];</div><div class="line"><span class="comment">// nthElement(['a','b','c'],1) -&gt; 'b'</span></div><div class="line"><span class="comment">// nthElement(['a','b','b'],-3) -&gt; 'a'</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#pick "pick")pick

返回对象的一个拷贝，返回的对象只含有给定的键的键值对

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> pick = <span class="function">(<span class="params">obj, arr</span>) =&gt;</span></div><div class="line">  arr.reduce(<span class="function">(<span class="params">acc, curr</span>) =&gt;</span> (curr <span class="keyword">in</span> obj &amp;&amp; (acc[curr] = obj[curr]), acc), &#123;&#125;);</div><div class="line"><span class="comment">// pick(&#123; 'a': 1, 'b': '2', 'c': 3 &#125;, ['a', 'c']) -&gt; &#123; 'a': 1, 'c': 3 &#125;</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#pull "pull")pull

抽取数组中指定的元素

使用 `Array.filter()` 和 `Array.includes()` 抽出不需要的元素.
使用 `Array.length = 0` 重置数组并且使用 `Array.push()` 重新填充抽取后的数组.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div><div class="line">5</div><div class="line">6</div><div class="line">7</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> pull = <span class="function">(<span class="params">arr, ...args</span>) =&gt;</span> &#123;</div><div class="line">  <span class="keyword">let</span> pulled = arr.filter(<span class="function">(<span class="params">v, i</span>) =&gt;</span> !args.includes(v));</div><div class="line">  arr.length = <span class="number">0</span>; pulled.forEach(<span class="function"><span class="params">v</span> =&gt;</span> arr.push(v));</div><div class="line">&#125;;</div><div class="line"><span class="comment">// let myArray = ['a', 'b', 'c', 'a', 'b', 'c'];</span></div><div class="line"><span class="comment">// pull(myArray, 'a', 'c');</span></div><div class="line"><span class="comment">// console.log(myArray) -&gt; [ 'b', 'b' ]</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#remove "remove")remove

移除数组中给定表达式为 `false`. 的值

使用 `Array.filter()` 找到表达式为 `true` 的值，然后通过 `Array.reduce()` 使用 `Array.splice()` 移除.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div><div class="line">5</div><div class="line">6</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> remove = <span class="function">(<span class="params">arr, func</span>) =&gt;</span></div><div class="line">  <span class="built_in">Array</span>.isArray(arr) ? arr.filter(func).reduce(<span class="function">(<span class="params">acc, val</span>) =&gt;</span> &#123;</div><div class="line">    arr.splice(arr.indexOf(val), <span class="number">1</span>); <span class="keyword">return</span> acc.concat(val);</div><div class="line">    &#125;, [])</div><div class="line">  : [];</div><div class="line"><span class="comment">// remove([1, 2, 3, 4], n =&gt; n % 2 == 0) -&gt; [2, 4]</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#sample "sample")sample

返回数组的一个随机元素

使用 `Math.random()` 创建一个随机数，然后和 `length` 相乘之后通过 `Math.floor()` 找到一个最接近的数.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> sample = <span class="function"><span class="params">arr</span> =&gt;</span> arr[<span class="built_in">Math</span>.floor(<span class="built_in">Math</span>.random() * arr.length)];</div><div class="line"><span class="comment">// sample([3, 7, 9, 11]) -&gt; 9</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#shuffle "shuffle")shuffle

打乱数组中值的顺序

使用 `Array.sort()` 重新排序, 使用 `Math.random() - 0.5` 作为`compareFunction`.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> shuffle = <span class="function"><span class="params">arr</span> =&gt;</span> arr.sort(<span class="function"><span class="params">()</span> =&gt;</span> <span class="built_in">Math</span>.random() - <span class="number">0.5</span>);</div><div class="line"><span class="comment">// shuffle([1,2,3]) -&gt; [2,3,1]</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#similarity "similarity")similarity

返回一个数组，它的值两个数组里面都存在.

使用 `includes()` 找出`values`不含有的元素，使用`filter()`移除.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> similarity = <span class="function">(<span class="params">arr, values</span>) =&gt;</span> arr.filter(<span class="function"><span class="params">v</span> =&gt;</span> values.includes(v));</div><div class="line"><span class="comment">// similarity([1,2,3], [1,2,4]) -&gt; [1,2]</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#symmetricDifference "symmetricDifference")symmetricDifference

返回两个数组的对称差异.

通过两个数组分别创建 `Set`, 然后使用 `Array.filter()` 找出不在另外一个集合中的元素.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div><div class="line">5</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> symmetricDifference = <span class="function">(<span class="params">a, b</span>) =&gt;</span> &#123;</div><div class="line">  <span class="keyword">const</span> sA = <span class="keyword">new</span> <span class="built_in">Set</span>(a), sB = <span class="keyword">new</span> <span class="built_in">Set</span>(b);</div><div class="line">  <span class="keyword">return</span> [...a.filter(<span class="function"><span class="params">x</span> =&gt;</span> !sB.has(x)), ...b.filter(<span class="function"><span class="params">x</span> =&gt;</span> !sA.has(x))];</div><div class="line">&#125;</div><div class="line"><span class="comment">// symmetricDifference([1,2,3], [1,2,4]) -&gt; [3,4]</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#tail "tail")tail

返回数组中除去第一个元素的集合

如果数组`length` 大于 `1`, 返回 `arr.slice(1)` 否则就返回整个数组.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> tail = <span class="function"><span class="params">arr</span> =&gt;</span> arr.length &gt; <span class="number">1</span> ? arr.slice(<span class="number">1</span>) : arr;</div><div class="line"><span class="comment">// tail([1,2,3]) -&gt; [2,3]</span></div><div class="line"><span class="comment">// tail([1]) -&gt; [1]</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#take "take")take

返回前n个元素.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> take = <span class="function">(<span class="params">arr, n = <span class="number">1</span></span>) =&gt;</span> arr.slice(<span class="number">0</span>, n);</div><div class="line"><span class="comment">// take([1, 2, 3], 5) -&gt; [1, 2, 3]</span></div><div class="line"><span class="comment">// take([1, 2, 3], 0) -&gt; []</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#takeRight "takeRight")takeRight

返回后n个元素.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> takeRight = <span class="function">(<span class="params">arr, n = <span class="number">1</span></span>) =&gt;</span> arr.slice(arr.length - n, arr.length);</div><div class="line"><span class="comment">// takeRight([1, 2, 3], 2) -&gt; [ 2, 3 ]</span></div><div class="line"><span class="comment">// takeRight([1, 2, 3]) -&gt; [3]</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#union "union")union

合并两个集合（结果不含重复元素）

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> union = <span class="function">(<span class="params">a, b</span>) =&gt;</span> <span class="built_in">Array</span>.from(<span class="keyword">new</span> <span class="built_in">Set</span>([...a, ...b]));</div><div class="line"><span class="comment">// union([1,2,3], [4,3,2]) -&gt; [1,2,3,4]</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#without "without")without

根据指定的值过滤数组

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> without = <span class="function">(<span class="params">arr, ...args</span>) =&gt;</span> arr.filter(<span class="function"><span class="params">v</span> =&gt;</span> !args.includes(v));</div><div class="line"><span class="comment">// without([2, 1, 2, 3], 1, 2) -&gt; [3]</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#zip "zip")zip

根据原始数组的位置把多个数组压缩

使用 `Math.max.apply()` 获取输入数组中最大的长度，根据这个长度使用`Array.from()`创建一个新的数组，之后把输入数组的映射压缩到里面，如果某个数组缺少元素使用`undefined`代替

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div><div class="line">5</div><div class="line">6</div><div class="line">7</div><div class="line">8</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> zip = <span class="function">(<span class="params">...arrays</span>) =&gt;</span> &#123;</div><div class="line">  <span class="keyword">const</span> maxLength = <span class="built_in">Math</span>.max(...arrays.map(<span class="function"><span class="params">x</span> =&gt;</span> x.length));</div><div class="line">  <span class="keyword">return</span> <span class="built_in">Array</span>.from(&#123;<span class="attr">length</span>: maxLength&#125;).map(<span class="function">(<span class="params">_, i</span>) =&gt;</span> &#123;</div><div class="line">   <span class="keyword">return</span> <span class="built_in">Array</span>.from(&#123;<span class="attr">length</span>: arrays.length&#125;, (_, k) =&gt; arrays[k][i]);</div><div class="line">  &#125;)</div><div class="line">&#125;</div><div class="line"><span class="comment">//zip(['a', 'b'], [1, 2], [true, false]); -&gt; [['a', 1, true], ['b', 2, false]]</span></div><div class="line"><span class="comment">//zip(['a'], [1, 2], [true, false]); -&gt; [['a', 1, true], [undefined, 2, false]]</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

## [](#Browser-1 "Browser")Browser

### [](#bottomVisible "bottomVisible")bottomVisible

如果到达页面底部，返回`true`否则返回`false`

使用 `scrollY`, `scrollHeight` 和 `clientHeight` 判断是否到达页面底部

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> bottomVisible = <span class="function"><span class="params">()</span> =&gt;</span></div><div class="line">  <span class="built_in">document</span>.documentElement.clientHeight + <span class="built_in">window</span>.scrollY &gt;= <span class="built_in">document</span>.documentElement.scrollHeight || <span class="built_in">document</span>.documentElement.clientHeight;</div><div class="line"><span class="comment">// bottomVisible() -&gt; true</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#currentURL "currentURL")currentURL

返回当前页面的URL.

使用 `window.location.href` 获取当前页面URL.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> currentURL = <span class="function"><span class="params">()</span> =&gt;</span> <span class="built_in">window</span>.location.href;</div><div class="line"><span class="comment">// currentUrl() -&gt; 'https://google.com'</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#elementIsVisibleInViewport "elementIsVisibleInViewport")elementIsVisibleInViewport

如果一个元素在视口可见，返回`true`否则返回`false`

使用 `Element.getBoundingClientRect()` 和 `window.inner(Width|Height)` 判断元素是否在视口可见，第二个参数设置为`true`表示是否部分可见，默认值为`false`

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div><div class="line">5</div><div class="line">6</div><div class="line">7</div><div class="line">8</div><div class="line">9</div><div class="line">10</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> elementIsVisibleInViewport = <span class="function">(<span class="params">el, partiallyVisible = <span class="literal">false</span></span>) =&gt;</span> &#123;</div><div class="line">  <span class="keyword">const</span> &#123; top, left, bottom, right &#125; = el.getBoundingClientRect();</div><div class="line">  <span class="keyword">return</span> partiallyVisible</div><div class="line">    ? ((top &gt; <span class="number">0</span> &amp;&amp; top &lt; innerHeight) || (bottom &gt; <span class="number">0</span> &amp;&amp; bottom &lt; innerHeight)) &amp;&amp;</div><div class="line">      ((left &gt; <span class="number">0</span> &amp;&amp; left &lt; innerWidth) || (right &gt; <span class="number">0</span> &amp;&amp; right &lt; innerWidth))</div><div class="line">    : top &gt;= <span class="number">0</span> &amp;&amp; left &gt;= <span class="number">0</span> &amp;&amp; bottom &lt;= innerHeight &amp;&amp; right &lt;= innerWidth;</div><div class="line">&#125;;</div><div class="line"><span class="comment">// e.g. 100x100 viewport and a 10x10px element at position &#123;top: -1, left: 0, bottom: 9, right: 10&#125;</span></div><div class="line"><span class="comment">// elementIsVisibleInViewport(el) -&gt; false (not fully visible)</span></div><div class="line"><span class="comment">// elementIsVisibleInViewport(el, true) -&gt; true (partially visible)</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#getScrollPosition "getScrollPosition")getScrollPosition

返回滚动条在当前页面的位置.

如果 `pageXOffset` 和 `pageYOffset` 未定义，使用 `scrollLeft` and `scrollTop`.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> getScrollPosition = <span class="function">(<span class="params">el = <span class="built_in">window</span></span>) =&gt;</span></div><div class="line">  (&#123;<span class="attr">x</span>: (el.pageXOffset !== <span class="literal">undefined</span>) ? el.pageXOffset : el.scrollLeft,</div><div class="line">    y: (el.pageYOffset !== <span class="literal">undefined</span>) ? el.pageYOffset : el.scrollTop&#125;);</div><div class="line"><span class="comment">// getScrollPosition() -&gt; &#123;x: 0, y: 200&#125;</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#getURLParameters "getURLParameters")getURLParameters

返回URL查询字符串对象.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div><div class="line">5</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> getURLParameters = <span class="function"><span class="params">url</span> =&gt;</span></div><div class="line">  url.match(<span class="regexp">/([^?=&amp;]+)(=([^&amp;]*))/g</span>).reduce(</div><div class="line">    (a, v) =&gt; (a[v.slice(<span class="number">0</span>, v.indexOf(<span class="string">'='</span>))] = v.slice(v.indexOf(<span class="string">'='</span>) + <span class="number">1</span>), a), &#123;&#125;</div><div class="line">  );</div><div class="line"><span class="comment">// getURLParameters('http://url.com/page?name=Adam&amp;surname=Smith') -&gt; &#123;name: 'Adam', surname: 'Smith'&#125;</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#redirect "redirect")redirect

重定向到指定的URL.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> redirect = <span class="function">(<span class="params">url, asLink = <span class="literal">true</span></span>) =&gt;</span></div><div class="line">  asLink ? <span class="built_in">window</span>.location.href = url : <span class="built_in">window</span>.location.replace(url);</div><div class="line"><span class="comment">// redirect('https://google.com')</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#scrollToTop "scrollToTop")scrollToTop

平滑滚动到页面顶部.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div><div class="line">5</div><div class="line">6</div><div class="line">7</div><div class="line">8</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> scrollToTop = <span class="function"><span class="params">()</span> =&gt;</span> &#123;</div><div class="line">  <span class="keyword">const</span> c = <span class="built_in">document</span>.documentElement.scrollTop || <span class="built_in">document</span>.body.scrollTop;</div><div class="line">  <span class="keyword">if</span> (c &gt; <span class="number">0</span>) &#123;</div><div class="line">    <span class="built_in">window</span>.requestAnimationFrame(scrollToTop);</div><div class="line">    <span class="built_in">window</span>.scrollTo(<span class="number">0</span>, c - c / <span class="number">8</span>);</div><div class="line">  &#125;</div><div class="line">&#125;;</div><div class="line"><span class="comment">// scrollToTop()</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

## [](#Date-1 "Date")Date

### [](#getDaysDiffBetweenDates "getDaysDiffBetweenDates")getDaysDiffBetweenDates

返回两个Date对象的天数差

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> getDaysDiffBetweenDates = <span class="function">(<span class="params">dateInitial, dateFinal</span>) =&gt;</span> (dateFinal - dateInitial) / (<span class="number">1000</span> * <span class="number">3600</span> * <span class="number">24</span>);</div><div class="line"><span class="comment">// getDaysDiffBetweenDates(new Date("2017-12-13"), new Date("2017-12-22")) -&gt; 9</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#JSONToDate "JSONToDate")JSONToDate

转换一个JSON对象为时间.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div><div class="line">5</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> JSONToDate = <span class="function"><span class="params">arr</span> =&gt;</span> &#123;</div><div class="line">  <span class="keyword">const</span> dt = <span class="keyword">new</span> <span class="built_in">Date</span>(<span class="built_in">parseInt</span>(arr.toString().substr(<span class="number">6</span>)));</div><div class="line">  <span class="keyword">return</span> <span class="string">`<span class="subst">$&#123; dt.getDate() &#125;</span>/<span class="subst">$&#123; dt.getMonth() + <span class="number">1</span> &#125;</span>/<span class="subst">$&#123; dt.getFullYear() &#125;</span>`</span></div><div class="line">&#125;;</div><div class="line"><span class="comment">// JSONToDate(/Date(1489525200000)/) -&gt; "14/3/2017"</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#toEnglishDate "toEnglishDate")toEnglishDate

把美国时间转换为英国时间.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> toEnglishDate  = <span class="function">(<span class="params">time</span>) =&gt;</span></div><div class="line">  &#123;<span class="keyword">try</span>&#123;<span class="keyword">return</span> <span class="keyword">new</span> <span class="built_in">Date</span>(time).toISOString().split(<span class="string">'T'</span>)[<span class="number">0</span>].replace(<span class="regexp">/-/g</span>, <span class="string">'/'</span>)&#125;<span class="keyword">catch</span>(e)&#123;<span class="keyword">return</span>&#125;&#125;;</div><div class="line"><span class="comment">// toEnglishDate('09/21/2010') -&gt; '21/09/2010'</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

## [](#Function-1 "Function")Function

### [](#chainAsync "chainAsync")chainAsync

串联异步方法.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div><div class="line">5</div><div class="line">6</div><div class="line">7</div><div class="line">8</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> chainAsync = <span class="function"><span class="params">fns</span> =&gt;</span> &#123; <span class="keyword">let</span> curr = <span class="number">0</span>; <span class="keyword">const</span> next = <span class="function"><span class="params">()</span> =&gt;</span> fns[curr++](next); next(); &#125;;</div><div class="line"><span class="comment">/*</span></div><div class="line"><span class="comment">chainAsync([</span></div><div class="line"><span class="comment">  next =&gt; &#123; console.log('0 seconds'); setTimeout(next, 1000); &#125;,</span></div><div class="line"><span class="comment">  next =&gt; &#123; console.log('1 second');  setTimeout(next, 1000); &#125;,</span></div><div class="line"><span class="comment">  next =&gt; &#123; console.log('2 seconds'); &#125;</span></div><div class="line"><span class="comment">])</span></div><div class="line"><span class="comment">*/</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#compose "compose")compose

从右往左执行函数组合

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div><div class="line">5</div><div class="line">6</div><div class="line">7</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> compose = <span class="function">(<span class="params">...fns</span>) =&gt;</span> fns.reduce(<span class="function">(<span class="params">f, g</span>) =&gt;</span> (...args) =&gt; f(g(...args)));</div><div class="line"><span class="comment">/*</span></div><div class="line"><span class="comment">const add5 = x =&gt; x + 5</span></div><div class="line"><span class="comment">const multiply = (x, y) =&gt; x * y</span></div><div class="line"><span class="comment">const multiplyAndAdd5 = compose(add5, multiply)</span></div><div class="line"><span class="comment">multiplyAndAdd5(5, 2) -&gt; 15</span></div><div class="line"><span class="comment">*/</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#curry "curry")curry

对函数进行柯里化

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div><div class="line">5</div><div class="line">6</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> curry = <span class="function">(<span class="params">fn, arity = fn.length, ...args</span>) =&gt;</span></div><div class="line">  arity &lt;= args.length</div><div class="line">    ? fn(...args)</div><div class="line">    : curry.bind(<span class="literal">null</span>, fn, arity, ...args);</div><div class="line"><span class="comment">// curry(Math.pow)(2)(10) -&gt; 1024</span></div><div class="line"><span class="comment">// curry(Math.min, 3)(10)(50)(2) -&gt; 2</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#functionName "functionName")functionName

打印函数名称

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> functionName = <span class="function"><span class="params">fn</span> =&gt;</span> (<span class="built_in">console</span>.debug(fn.name), fn);</div><div class="line"><span class="comment">// functionName(Math.max) -&gt; max (logged in debug channel of console)</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#pipe "pipe")pipe

从左往右执行函数组合

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div><div class="line">5</div><div class="line">6</div><div class="line">7</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> pipeFunctions = <span class="function">(<span class="params">...fns</span>) =&gt;</span> fns.reduce(<span class="function">(<span class="params">f, g</span>) =&gt;</span> (...args) =&gt; g(f(...args)));</div><div class="line"><span class="comment">/*</span></div><div class="line"><span class="comment">const add5 = x =&gt; x + 5</span></div><div class="line"><span class="comment">const multiply = (x, y) =&gt; x * y</span></div><div class="line"><span class="comment">const multiplyAndAdd5 = pipeFunctions(multiply, add5)</span></div><div class="line"><span class="comment">multiplyAndAdd5(5, 2) -&gt; 15</span></div><div class="line"><span class="comment">*/</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#promisify "promisify")promisify

把异步函数转化为promise

_In Node 8+, you can use [`util.promisify`](https://nodejs.org/api/util.html#util_util_promisify_original)_

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div><div class="line">5</div><div class="line">6</div><div class="line">7</div><div class="line">8</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> promisify = <span class="function"><span class="params">func</span> =&gt;</span></div><div class="line">  (...args) =&gt;</div><div class="line">    <span class="keyword">new</span> <span class="built_in">Promise</span>(<span class="function">(<span class="params">resolve, reject</span>) =&gt;</span></div><div class="line">      func(...args, (err, result) =&gt;</div><div class="line">        err ? reject(err) : resolve(result))</div><div class="line">    );</div><div class="line"><span class="comment">// const delay = promisify((d, cb) =&gt; setTimeout(cb, d))</span></div><div class="line"><span class="comment">// delay(2000).then(() =&gt; console.log('Hi!')) -&gt; Promise resolves after 2s</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#runPromisesInSeries "runPromisesInSeries")runPromisesInSeries

执行一系列promise函数

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> runPromisesInSeries = <span class="function"><span class="params">ps</span> =&gt;</span> ps.reduce(<span class="function">(<span class="params">p, next</span>) =&gt;</span> p.then(next), <span class="built_in">Promise</span>.resolve());</div><div class="line"><span class="comment">// const delay = (d) =&gt; new Promise(r =&gt; setTimeout(r, d))</span></div><div class="line"><span class="comment">// runPromisesInSeries([() =&gt; delay(1000), () =&gt; delay(2000)]) -&gt; executes each promise sequentially, taking a total of 3 seconds to complete</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#sleep "sleep")sleep

延迟执行异步函数

Delay executing part of an `async` function, by putting it to sleep, returning a `Promise`.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div><div class="line">5</div><div class="line">6</div><div class="line">7</div><div class="line">8</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> sleep = <span class="function"><span class="params">ms</span> =&gt;</span> <span class="keyword">new</span> <span class="built_in">Promise</span>(<span class="function"><span class="params">resolve</span> =&gt;</span> setTimeout(resolve, ms));</div><div class="line"><span class="comment">/*</span></div><div class="line"><span class="comment">async function sleepyWork() &#123;</span></div><div class="line"><span class="comment">  console.log('I\'m going to sleep for 1 second.');</span></div><div class="line"><span class="comment">  await sleep(1000);</span></div><div class="line"><span class="comment">  console.log('I woke up after 1 second.');</span></div><div class="line"><span class="comment">&#125;</span></div><div class="line"><span class="comment">*/</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

## [](#Math-1 "Math")Math

### [](#arrayAverage "arrayAverage")arrayAverage

返回数组的平均值

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> arrayAverage = <span class="function"><span class="params">arr</span> =&gt;</span> arr.reduce(<span class="function">(<span class="params">acc, val</span>) =&gt;</span> acc + val, <span class="number">0</span>) / arr.length;</div><div class="line"><span class="comment">// arrayAverage([1,2,3]) -&gt; 2</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#arraySum "arraySum")arraySum

返回数组的和

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> arraySum = <span class="function"><span class="params">arr</span> =&gt;</span> arr.reduce(<span class="function">(<span class="params">acc, val</span>) =&gt;</span> acc + val, <span class="number">0</span>);</div><div class="line"><span class="comment">// arraySum([1,2,3,4]) -&gt; 10</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#collatz "collatz")collatz

实现Collatz算法.

如果 `n` 是偶数, 返回 `n/2`. 否则返回 `3n+1`.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> collatz = <span class="function"><span class="params">n</span> =&gt;</span> (n % <span class="number">2</span> == <span class="number">0</span>) ? (n / <span class="number">2</span>) : (<span class="number">3</span> * n + <span class="number">1</span>);</div><div class="line"><span class="comment">// collatz(8) --&gt; 4</span></div><div class="line"><span class="comment">// collatz(5) --&gt; 16</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#digitize "digitize")digitize

把数字转为数组

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> digitize = <span class="function"><span class="params">n</span> =&gt;</span> [...<span class="string">''</span>+n].map(<span class="function"><span class="params">i</span> =&gt;</span> <span class="built_in">parseInt</span>(i));</div><div class="line"><span class="comment">// digitize(2334) -&gt; [2, 3, 3, 4]</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#distance "distance")distance

返回两点距离.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> distance = <span class="function">(<span class="params">x0, y0, x1, y1</span>) =&gt;</span> <span class="built_in">Math</span>.hypot(x1 - x0, y1 - y0);</div><div class="line"><span class="comment">// distance(1,1, 2,3) -&gt; 2.23606797749979</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#factorial "factorial")factorial

计算一个数字的阶乘.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> factorial = <span class="function"><span class="params">n</span> =&gt;</span></div><div class="line">  n &lt; <span class="number">0</span> ? <span class="function">(<span class="params">(</span>) =&gt;</span> &#123; <span class="keyword">throw</span> <span class="keyword">new</span> <span class="built_in">TypeError</span>(<span class="string">'Negative numbers are not allowed!'</span>) &#125;)()</div><div class="line">  : n &lt;= <span class="number">1</span> ? <span class="number">1</span> : n * factorial(n - <span class="number">1</span>);</div><div class="line"><span class="comment">// factorial(6) -&gt; 720</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#fibonacci "fibonacci")fibonacci

指定一个长度，输出斐波那契数列

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> fibonacci = <span class="function"><span class="params">n</span> =&gt;</span></div><div class="line">  <span class="built_in">Array</span>(n).fill(<span class="number">0</span>).reduce(<span class="function">(<span class="params">acc, val, i</span>) =&gt;</span> acc.concat(i &gt; <span class="number">1</span> ? acc[i - <span class="number">1</span>] + acc[i - <span class="number">2</span>] : i), []);</div><div class="line"><span class="comment">// fibonacci(5) -&gt; [0,1,1,2,3]</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#gcd "gcd")gcd

计算两个数字之间的最大公约数。

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> gcd = <span class="function">(<span class="params">x, y</span>) =&gt;</span> !y ? x : gcd(y, x % y);</div><div class="line"><span class="comment">// gcd (8, 36) -&gt; 4</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#hammingDistance "hammingDistance")hammingDistance

计算两个值的Hamming距离.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> hammingDistance = <span class="function">(<span class="params">num1, num2</span>) =&gt;</span></div><div class="line">  ((num1 ^ num2).toString(<span class="number">2</span>).match(<span class="regexp">/1/g</span>) || <span class="string">''</span>).length;</div><div class="line"><span class="comment">// hammingDistance(2,3) -&gt; 1</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#isDivisible "isDivisible")isDivisible

检查第一个数字是否可被第二个数字整除.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> isDivisible = <span class="function">(<span class="params">dividend, divisor</span>) =&gt;</span> dividend % divisor === <span class="number">0</span>;</div><div class="line"><span class="comment">// isDivisible(6,3) -&gt; true</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#isEven "isEven")isEven

检查数字是否为偶数

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> isEven = <span class="function"><span class="params">num</span> =&gt;</span> num % <span class="number">2</span> === <span class="number">0</span>;</div><div class="line"><span class="comment">// isEven(3) -&gt; false</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#lcm "lcm")lcm

计算两个数字的最小公倍数.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div><div class="line">5</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> lcm = <span class="function">(<span class="params">x,y</span>) =&gt;</span> &#123;</div><div class="line">  <span class="keyword">const</span> gcd = <span class="function">(<span class="params">x, y</span>) =&gt;</span> !y ? x : gcd(y, x % y);</div><div class="line">  <span class="keyword">return</span> <span class="built_in">Math</span>.abs(x*y)/(gcd(x,y));</div><div class="line">&#125;;</div><div class="line"><span class="comment">// lcm(12,7) -&gt; 84</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#median "median")median

返回数组的中位数

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div><div class="line">5</div><div class="line">6</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> median = <span class="function"><span class="params">arr</span> =&gt;</span> &#123;</div><div class="line">  <span class="keyword">const</span> mid = <span class="built_in">Math</span>.floor(arr.length / <span class="number">2</span>), nums = arr.sort(<span class="function">(<span class="params">a, b</span>) =&gt;</span> a - b);</div><div class="line">  <span class="keyword">return</span> arr.length % <span class="number">2</span> !== <span class="number">0</span> ? nums[mid] : (nums[mid - <span class="number">1</span>] + nums[mid]) / <span class="number">2</span>;</div><div class="line">&#125;;</div><div class="line"><span class="comment">// median([5,6,50,1,-5]) -&gt; 5</span></div><div class="line"><span class="comment">// median([0,10,-2,7]) -&gt; 3.5</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#palindrome "palindrome")palindrome

判断给定字符串是否是回文字符串（回文字符串是正读和反读都一样的字符串，比如“level”或者“noon”）

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div><div class="line">5</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> palindrome = <span class="function"><span class="params">str</span> =&gt;</span> &#123;</div><div class="line">  <span class="keyword">const</span> s = str.toLowerCase().replace(<span class="regexp">/[\W_]/g</span>,<span class="string">''</span>);</div><div class="line">  <span class="keyword">return</span> s === s.split(<span class="string">''</span>).reverse().join(<span class="string">''</span>);</div><div class="line">&#125;</div><div class="line"><span class="comment">// palindrome('taco cat') -&gt; true</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#percentile "percentile")percentile

使用百分位数公式来计算给定数组中有多少数字小于或等于给定值。

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> percentile = <span class="function">(<span class="params">arr, val</span>) =&gt;</span></div><div class="line">  <span class="number">100</span> * arr.reduce(<span class="function">(<span class="params">acc,v</span>) =&gt;</span> acc + (v &lt; val ? <span class="number">1</span> : <span class="number">0</span>) + (v === val ? <span class="number">0.5</span> : <span class="number">0</span>), <span class="number">0</span>) / arr.length;</div><div class="line"><span class="comment">// percentile([1,2,3,4,5,6,7,8,9,10], 6) -&gt; 55</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#powerset "powerset")powerset

输出给定数组的所有子集

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> powerset = <span class="function"><span class="params">arr</span> =&gt;</span></div><div class="line">  arr.reduce(<span class="function">(<span class="params">a, v</span>) =&gt;</span> a.concat(a.map(<span class="function"><span class="params">r</span> =&gt;</span> [v].concat(r))), [[]]);</div><div class="line"><span class="comment">// powerset([1,2]) -&gt; [[], [1], [2], [2,1]]</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#randomIntegerInRange "randomIntegerInRange")randomIntegerInRange

返回指定范围内的随机整数

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> randomIntegerInRange = <span class="function">(<span class="params">min, max</span>) =&gt;</span> <span class="built_in">Math</span>.floor(<span class="built_in">Math</span>.random() * (max - min + <span class="number">1</span>)) + min;</div><div class="line"><span class="comment">// randomIntegerInRange(0, 5) -&gt; 2</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#randomNumberInRange "randomNumberInRange")randomNumberInRange

返回指定范围内的随机数

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> randomNumberInRange = <span class="function">(<span class="params">min, max</span>) =&gt;</span> <span class="built_in">Math</span>.random() * (max - min) + min;</div><div class="line"><span class="comment">// randomNumberInRange(2,10) -&gt; 6.0211363285087005</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#round "round")round

将数字四舍五入到指定的数字位数.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> round = <span class="function">(<span class="params">n, decimals=<span class="number">0</span></span>) =&gt;</span> <span class="built_in">Number</span>(<span class="string">`<span class="subst">$&#123;<span class="built_in">Math</span>.round(<span class="string">`<span class="subst">$&#123;n&#125;</span>e<span class="subst">$&#123;decimals&#125;</span>`</span>)&#125;</span>e-<span class="subst">$&#123;decimals&#125;</span>`</span>);</div><div class="line"><span class="comment">// round(1.005, 2) -&gt; 1.01</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#standardDeviation "standardDeviation")standardDeviation

返回数组的标准差

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div><div class="line">5</div><div class="line">6</div><div class="line">7</div><div class="line">8</div><div class="line">9</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> standardDeviation = <span class="function">(<span class="params">arr, usePopulation = <span class="literal">false</span></span>) =&gt;</span> &#123;</div><div class="line">  <span class="keyword">const</span> mean = arr.reduce(<span class="function">(<span class="params">acc, val</span>) =&gt;</span> acc + val, <span class="number">0</span>) / arr.length;</div><div class="line">  <span class="keyword">return</span> <span class="built_in">Math</span>.sqrt(</div><div class="line">    arr.reduce(<span class="function">(<span class="params">acc, val</span>) =&gt;</span> acc.concat(<span class="built_in">Math</span>.pow(val - mean, <span class="number">2</span>)), [])</div><div class="line">       .reduce(<span class="function">(<span class="params">acc, val</span>) =&gt;</span> acc + val, <span class="number">0</span>) / (arr.length - (usePopulation ? <span class="number">0</span> : <span class="number">1</span>))</div><div class="line">  );</div><div class="line">&#125;;</div><div class="line"><span class="comment">// standardDeviation([10,2,38,23,38,23,21]) -&gt; 13.284434142114991 (sample)</span></div><div class="line"><span class="comment">// standardDeviation([10,2,38,23,38,23,21], true) -&gt; 12.29899614287479 (population)</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

## [](#Media-1 "Media")Media

### [](#speechSynthesis "speechSynthesis")speechSynthesis

语音合成 (实验特性).

详情查看 [SpeechSynthesisUtterance interface of the Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance).

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div><div class="line">5</div><div class="line">6</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> speechSynthesis = <span class="function"><span class="params">message</span> =&gt;</span> &#123;</div><div class="line">  <span class="keyword">const</span> msg = <span class="keyword">new</span> SpeechSynthesisUtterance(message);</div><div class="line">  msg.voice = <span class="built_in">window</span>.speechSynthesis.getVoices()[<span class="number">0</span>];</div><div class="line">  <span class="built_in">window</span>.speechSynthesis.speak(msg);</div><div class="line">&#125;;</div><div class="line"><span class="comment">// speechSynthesis('Hello, World') -&gt; plays the message</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

## [](#Node-1 "Node")Node

### [](#JSONToFile "JSONToFile")JSONToFile

将一个JSON对象转换为文件.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> fs = <span class="built_in">require</span>(<span class="string">'fs'</span>);</div><div class="line"><span class="keyword">const</span> JSONToFile = <span class="function">(<span class="params">obj, filename</span>) =&gt;</span> fs.writeFile(<span class="string">`<span class="subst">$&#123;filename&#125;</span>.json`</span>, <span class="built_in">JSON</span>.stringify(obj, <span class="literal">null</span>, <span class="number">2</span>))</div><div class="line"><span class="comment">// JSONToFile(&#123;test: "is passed"&#125;, 'testJsonFile') -&gt; writes the object to 'testJsonFile.json'</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#readFileLines "readFileLines")readFileLines

读取指定的文件并且根据行生成数组

  <figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div><div class="line">5</div><div class="line">6</div><div class="line">7</div><div class="line">8</div><div class="line">9</div><div class="line">10</div><div class="line">11</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> fs = <span class="built_in">require</span>(<span class="string">'fs'</span>);</div><div class="line"><span class="keyword">const</span> readFileLines = <span class="function"><span class="params">filename</span> =&gt;</span> fs.readFileSync(filename).toString(<span class="string">'UTF8'</span>).split(<span class="string">'\n'</span>);</div><div class="line"><span class="comment">/*</span></div><div class="line"><span class="comment">  contents of test.txt :</span></div><div class="line"><span class="comment">    line1</span></div><div class="line"><span class="comment">    line2</span></div><div class="line"><span class="comment">    line3</span></div><div class="line"><span class="comment">    ___________________________</span></div><div class="line"><span class="comment">  let arr = readFileLines('test.txt')</span></div><div class="line"><span class="comment">  console.log(arr) // -&gt; ['line1', 'line2', 'line3']</span></div><div class="line"><span class="comment"> */</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

## [](#Object-1 "Object")Object

### [](#cleanObj "cleanObj")cleanObj

移除对象中除去给定的属性名之外的属性

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div><div class="line">5</div><div class="line">6</div><div class="line">7</div><div class="line">8</div><div class="line">9</div><div class="line">10</div><div class="line">11</div><div class="line">12</div><div class="line">13</div><div class="line">14</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> cleanObj = <span class="function">(<span class="params">obj, keysToKeep = [], childIndicator</span>) =&gt;</span> &#123;</div><div class="line">  <span class="built_in">Object</span>.keys(obj).forEach(<span class="function"><span class="params">key</span> =&gt;</span> &#123;</div><div class="line">    <span class="keyword">if</span> (key === childIndicator) &#123;</div><div class="line">      cleanObj(obj[key], keysToKeep, childIndicator);</div><div class="line">    &#125; <span class="keyword">else</span> <span class="keyword">if</span> (!keysToKeep.includes(key)) &#123;</div><div class="line">      <span class="keyword">delete</span> obj[key];</div><div class="line">    &#125;</div><div class="line">  &#125;)</div><div class="line">&#125;</div><div class="line"><span class="comment">/*</span></div><div class="line"><span class="comment">  const testObj = &#123;a: 1, b: 2, children: &#123;a: 1, b: 2&#125;&#125;</span></div><div class="line"><span class="comment">  cleanObj(testObj, ["a"],"children")</span></div><div class="line"><span class="comment">  console.log(testObj)// &#123; a: 1, children : &#123; a: 1&#125;&#125;</span></div><div class="line"><span class="comment">*/</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#objectFromPairs "objectFromPairs")objectFromPairs

根据给定的键值对生成对象

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> objectFromPairs = <span class="function"><span class="params">arr</span> =&gt;</span> arr.reduce(<span class="function">(<span class="params">a, v</span>) =&gt;</span> (a[v[<span class="number">0</span>]] = v[<span class="number">1</span>], a), &#123;&#125;);</div><div class="line"><span class="comment">// objectFromPairs([['a',1],['b',2]]) -&gt; &#123;a: 1, b: 2&#125;</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#objectToPairs "objectToPairs")objectToPairs

转换一个对象为数组

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> objectToPairs = <span class="function"><span class="params">obj</span> =&gt;</span> <span class="built_in">Object</span>.keys(obj).map(<span class="function"><span class="params">k</span> =&gt;</span> [k, obj[k]]);</div><div class="line"><span class="comment">// objectToPairs(&#123;a: 1, b: 2&#125;) -&gt; [['a',1],['b',2]])</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#shallowClone "shallowClone")shallowClone

创建一个对象的浅拷贝.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div><div class="line">5</div><div class="line">6</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> shallowClone = <span class="function"><span class="params">obj</span> =&gt;</span> <span class="built_in">Object</span>.assign(&#123;&#125;, obj);</div><div class="line"><span class="comment">/*</span></div><div class="line"><span class="comment">const a = &#123; x: true, y: 1 &#125;;</span></div><div class="line"><span class="comment">const b = shallowClone(a);</span></div><div class="line"><span class="comment">a === b -&gt; false</span></div><div class="line"><span class="comment">*/</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#truthCheckCollection "truthCheckCollection")truthCheckCollection

检查某个属性名是否在一个数组中都存在

 <figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td><td class="code"><pre><div class="line">truthCheckCollection = <span class="function">(<span class="params">collection, pre</span>) =&gt;</span> (collection.every(<span class="function"><span class="params">obj</span> =&gt;</span> obj[pre]));</div><div class="line"><span class="comment">// truthCheckCollection([&#123;"user": "Tinky-Winky", "sex": "male"&#125;, &#123;"user": "Dipsy", "sex": "male"&#125;], "sex") -&gt; true</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

## [](#String-1 "String")String

### [](#anagrams "anagrams")anagrams

生成一个字符串的所有字符排列组合（包含重复）

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div><div class="line">5</div><div class="line">6</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> anagrams = <span class="function"><span class="params">str</span> =&gt;</span> &#123;</div><div class="line">  <span class="keyword">if</span> (str.length &lt;= <span class="number">2</span>) <span class="keyword">return</span> str.length === <span class="number">2</span> ? [str, str[<span class="number">1</span>] + str[<span class="number">0</span>]] : [str];</div><div class="line">  <span class="keyword">return</span> str.split(<span class="string">''</span>).reduce(<span class="function">(<span class="params">acc, letter, i</span>) =&gt;</span></div><div class="line">    acc.concat(anagrams(str.slice(<span class="number">0</span>, i) + str.slice(i + <span class="number">1</span>)).map(<span class="function"><span class="params">val</span> =&gt;</span> letter + val)), []);</div><div class="line">&#125;;</div><div class="line"><span class="comment">// anagrams('abc') -&gt; ['abc','acb','bac','bca','cab','cba']</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#Capitalize "Capitalize")Capitalize

将给定字符串首字母大写.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> capitalize = <span class="function">(<span class="params">[first,...rest], lowerRest = <span class="literal">false</span></span>) =&gt;</span></div><div class="line">  first.toUpperCase() + (lowerRest ? rest.join(<span class="string">''</span>).toLowerCase() : rest.join(<span class="string">''</span>));</div><div class="line"><span class="comment">// capitalize('myName') -&gt; 'MyName'</span></div><div class="line"><span class="comment">// capitalize('myName', true) -&gt; 'Myname'</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#capitalizeEveryWord "capitalizeEveryWord")capitalizeEveryWord

将给定字符串的每个单词首字母大写.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> capitalizeEveryWord = <span class="function"><span class="params">str</span> =&gt;</span> str.replace(<span class="regexp">/\b[a-z]/g</span>, char =&gt; char.toUpperCase());</div><div class="line"><span class="comment">// capitalizeEveryWord('hello world!') -&gt; 'Hello World!'</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#escapeRegExp "escapeRegExp")escapeRegExp

转义字符串以便在正则表达式中使用

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> escapeRegExp = <span class="function"><span class="params">str</span> =&gt;</span> str.replace(<span class="regexp">/[.*+?^$&#123;&#125;()|[\]\\]/g</span>, <span class="string">'\\$&amp;'</span>);</div><div class="line"><span class="comment">// escapeRegExp('(test)') -&gt; \\(test\\)</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#fromCamelCase "fromCamelCase")fromCamelCase

把camelcase字符串转换成其他格式

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div><div class="line">5</div><div class="line">6</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> fromCamelCase = <span class="function">(<span class="params">str, separator = <span class="string">'_'</span></span>) =&gt;</span></div><div class="line">  str.replace(<span class="regexp">/([a-z\d])([A-Z])/g</span>, <span class="string">'$1'</span> + separator + <span class="string">'$2'</span>)</div><div class="line">    .replace(<span class="regexp">/([A-Z]+)([A-Z][a-z\d]+)/g</span>, <span class="string">'$1'</span> + separator + <span class="string">'$2'</span>).toLowerCase();</div><div class="line"><span class="comment">// fromCamelCase('someDatabaseFieldName', ' ') -&gt; 'some database field name'</span></div><div class="line"><span class="comment">// fromCamelCase('someLabelThatNeedsToBeCamelized', '-') -&gt; 'some-label-that-needs-to-be-camelized'</span></div><div class="line"><span class="comment">// fromCamelCase('someJavascriptProperty', '_') -&gt; 'some_javascript_property'</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#reverseString "reverseString")reverseString

反转字符串

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> reverseString = <span class="function"><span class="params">str</span> =&gt;</span> [...str].reverse().join(<span class="string">''</span>);</div><div class="line"><span class="comment">// reverseString('foobar') -&gt; 'raboof'</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#sortCharactersInString "sortCharactersInString")sortCharactersInString

按照字母顺序重新排列字符串

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> sortCharactersInString = <span class="function"><span class="params">str</span> =&gt;</span></div><div class="line">  str.split(<span class="string">''</span>).sort(<span class="function">(<span class="params">a, b</span>) =&gt;</span> a.localeCompare(b)).join(<span class="string">''</span>);</div><div class="line"><span class="comment">// sortCharactersInString('cabbage') -&gt; 'aabbceg'</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#toCamelCase "toCamelCase")toCamelCase

把一个字符串转换为camelcase.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div><div class="line">5</div><div class="line">6</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> toCamelCase = <span class="function"><span class="params">str</span> =&gt;</span></div><div class="line">  str.replace(<span class="regexp">/^([A-Z])|[\s-_]+(\w)/g</span>, (match, p1, p2, offset) =&gt;  p2 ? p2.toUpperCase() : p1.toLowerCase());</div><div class="line"><span class="comment">// toCamelCase("some_database_field_name") -&gt; 'someDatabaseFieldName'</span></div><div class="line"><span class="comment">// toCamelCase("Some label that needs to be camelized") -&gt; 'someLabelThatNeedsToBeCamelized'</span></div><div class="line"><span class="comment">// toCamelCase("some-javascript-property") -&gt; 'someJavascriptProperty'</span></div><div class="line"><span class="comment">// toCamelCase("some-mixed_string with spaces_underscores-and-hyphens") -&gt; 'someMixedStringWithSpacesUnderscoresAndHyphens'</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#truncateString "truncateString")truncateString

根据指定长度截取字符串

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> truncateString = <span class="function">(<span class="params">str, num</span>) =&gt;</span></div><div class="line">  str.length &gt; num ? str.slice(<span class="number">0</span>, num &gt; <span class="number">3</span> ? num - <span class="number">3</span> : num) + <span class="string">'...'</span> : str;</div><div class="line"><span class="comment">// truncateString('boomerang', 7) -&gt; 'boom...'</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

## [](#Utility-1 "Utility")Utility

### [](#coalesce "coalesce")coalesce

返回第一个不为null/undefined的参数

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> coalesce = <span class="function">(<span class="params">...args</span>) =&gt;</span> args.find(<span class="function"><span class="params">_</span> =&gt;</span> ![<span class="literal">undefined</span>, <span class="literal">null</span>].includes(_))</div><div class="line"><span class="comment">// coalesce(null,undefined,"",NaN, "Waldo") -&gt; ""</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#coalesceFactory "coalesceFactory")coalesceFactory

实现自定义coalesce函数

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> coalesceFactory = <span class="function"><span class="params">valid</span> =&gt;</span> (...args) =&gt; args.find(valid);</div><div class="line"><span class="comment">// const customCoalesce = coalesceFactory(_ =&gt; ![null, undefined, "", NaN].includes(_))</span></div><div class="line"><span class="comment">// customCoalesce(undefined, null, NaN, "", "Waldo") //-&gt; "Waldo"</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#extendHex "extendHex")extendHex

将3位数的颜色代码扩展为6位数的颜色代码

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> extendHex = <span class="function"><span class="params">shortHex</span> =&gt;</span></div><div class="line">  <span class="string">'#'</span> + shortHex.slice(shortHex.startsWith(<span class="string">'#'</span>) ? <span class="number">1</span> : <span class="number">0</span>).split(<span class="string">''</span>).map(<span class="function"><span class="params">x</span> =&gt;</span> x+x).join(<span class="string">''</span>)</div><div class="line"><span class="comment">// extendHex('#03f') -&gt; '#0033ff'</span></div><div class="line"><span class="comment">// extendHex('05a') -&gt; '#0055aa'</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#getType "getType")getType

获取一个值的原生类型.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> getType = <span class="function"><span class="params">v</span> =&gt;</span></div><div class="line">  v === <span class="literal">undefined</span> ? <span class="string">'undefined'</span> : v === <span class="literal">null</span> ? <span class="string">'null'</span> : v.constructor.name.toLowerCase();</div><div class="line"><span class="comment">// getType(new Set([1,2,3])) -&gt; "set"</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#hexToRGB "hexToRGB")hexToRGB

将hex色值转换为RGB

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div><div class="line">5</div><div class="line">6</div><div class="line">7</div><div class="line">8</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> hexToRgb = <span class="function"><span class="params">hex</span> =&gt;</span> &#123;</div><div class="line">  <span class="keyword">const</span> extendHex = <span class="function"><span class="params">shortHex</span> =&gt;</span></div><div class="line">    <span class="string">'#'</span> + shortHex.slice(shortHex.startsWith(<span class="string">'#'</span>) ? <span class="number">1</span> : <span class="number">0</span>).split(<span class="string">''</span>).map(<span class="function"><span class="params">x</span> =&gt;</span> x+x).join(<span class="string">''</span>);</div><div class="line">  <span class="keyword">const</span> extendedHex = hex.slice(hex.startsWith(<span class="string">'#'</span>) ? <span class="number">1</span> : <span class="number">0</span>).length === <span class="number">3</span> ? extendHex(hex) : hex;</div><div class="line">  <span class="keyword">return</span> <span class="string">`rgb(<span class="subst">$&#123;<span class="built_in">parseInt</span>(extendedHex.slice(<span class="number">1</span>), <span class="number">16</span>) &gt;&gt; <span class="number">16</span>&#125;</span>, <span class="subst">$&#123;(<span class="built_in">parseInt</span>(extendedHex.slice(<span class="number">1</span>), <span class="number">16</span>) &amp; <span class="number">0x00ff00</span>) &gt;&gt; <span class="number">8</span>&#125;</span>, <span class="subst">$&#123;<span class="built_in">parseInt</span>(extendedHex.slice(<span class="number">1</span>), <span class="number">16</span>) &amp; <span class="number">0x0000ff</span>&#125;</span>)`</span>;</div><div class="line">&#125;</div><div class="line"><span class="comment">// hexToRgb('#27ae60') -&gt; 'rgb(39, 174, 96)'</span></div><div class="line"><span class="comment">// hexToRgb('#acd') -&gt; 'rgb(170, 204, 221)'</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#isArray "isArray")isArray

检查给定对象是否是数组

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> isArray = <span class="function"><span class="params">val</span> =&gt;</span> !!val &amp;&amp; <span class="built_in">Array</span>.isArray(val);</div><div class="line"><span class="comment">// isArray(null) -&gt; false</span></div><div class="line"><span class="comment">// isArray([1]) -&gt; true</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#isBoolean "isBoolean")isBoolean

检查给定对象是否是布尔值

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> isBoolean = <span class="function"><span class="params">val</span> =&gt;</span> <span class="keyword">typeof</span> val === <span class="string">'boolean'</span>;</div><div class="line"><span class="comment">// isBoolean(null) -&gt; false</span></div><div class="line"><span class="comment">// isBoolean(false) -&gt; true</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#isFunction "isFunction")isFunction

检查给定对象是否是方法

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> isFunction = <span class="function"><span class="params">val</span> =&gt;</span> val &amp;&amp; <span class="keyword">typeof</span> val === <span class="string">'function'</span>;</div><div class="line"><span class="comment">// isFunction('x') -&gt; false</span></div><div class="line"><span class="comment">// isFunction(x =&gt; x) -&gt; true</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#isNumber "isNumber")isNumber

检查给定对象是否是数字

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> isNumber = <span class="function"><span class="params">val</span> =&gt;</span> <span class="keyword">typeof</span> val === <span class="string">'number'</span>;</div><div class="line"><span class="comment">// isNumber('1') -&gt; false</span></div><div class="line"><span class="comment">// isNumber(1) -&gt; true</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#isString "isString")isString

检查给定对象是否是字符串

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> isString = <span class="function"><span class="params">val</span> =&gt;</span> <span class="keyword">typeof</span> val === <span class="string">'string'</span>;</div><div class="line"><span class="comment">// isString(10) -&gt; false</span></div><div class="line"><span class="comment">// isString('10') -&gt; true</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#isSymbol "isSymbol")isSymbol

检查给定对象是否是symbol.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> isSymbol = <span class="function"><span class="params">val</span> =&gt;</span> <span class="keyword">typeof</span> val === <span class="string">'symbol'</span>;</div><div class="line"><span class="comment">// isSymbol('x') -&gt; false</span></div><div class="line"><span class="comment">// isSymbol(Symbol('x')) -&gt; true</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#RGBToHex "RGBToHex")RGBToHex

将RGB色值转换为Hex

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> RGBToHex = <span class="function">(<span class="params">r, g, b</span>) =&gt;</span> ((r &lt;&lt; <span class="number">16</span>) + (g &lt;&lt; <span class="number">8</span>) + b).toString(<span class="number">16</span>).padStart(<span class="number">6</span>, <span class="string">'0'</span>);</div><div class="line"><span class="comment">// RGBToHex(255, 165, 1) -&gt; 'ffa501'</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#timeTaken "timeTaken")timeTaken

计算函数执行时间

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div><div class="line">5</div><div class="line">6</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> timeTaken = <span class="function"><span class="params">callback</span> =&gt;</span> &#123;</div><div class="line">  <span class="built_in">console</span>.time(<span class="string">'timeTaken'</span>);  <span class="keyword">const</span> r = callback();</div><div class="line">  <span class="built_in">console</span>.timeEnd(<span class="string">'timeTaken'</span>);  <span class="keyword">return</span> r;</div><div class="line">&#125;;</div><div class="line"><span class="comment">// timeTaken(() =&gt; Math.pow(2, 10)) -&gt; 1024</span></div><div class="line"><span class="comment">// (logged): timeTaken: 0.02099609375ms</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#toOrdinalSuffix "toOrdinalSuffix")toOrdinalSuffix

Adds an ordinal suffix to a number.

Use the modulo operator (`%`) to find values of single and tens digits.
Find which ordinal pattern digits match.
If digit is found in teens pattern, use teens ordinal.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div><div class="line">5</div><div class="line">6</div><div class="line">7</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> toOrdinalSuffix = <span class="function"><span class="params">num</span> =&gt;</span> &#123;</div><div class="line">  <span class="keyword">const</span> int = <span class="built_in">parseInt</span>(num), digits = [(int % <span class="number">10</span>), (int % <span class="number">100</span>)],</div><div class="line">    ordinals = [<span class="string">'st'</span>, <span class="string">'nd'</span>, <span class="string">'rd'</span>, <span class="string">'th'</span>], oPattern = [<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>],</div><div class="line">    tPattern = [<span class="number">11</span>, <span class="number">12</span>, <span class="number">13</span>, <span class="number">14</span>, <span class="number">15</span>, <span class="number">16</span>, <span class="number">17</span>, <span class="number">18</span>, <span class="number">19</span>];</div><div class="line">  <span class="keyword">return</span> oPattern.includes(digits[<span class="number">0</span>]) &amp;&amp; !tPattern.includes(digits[<span class="number">1</span>]) ? int + ordinals[digits[<span class="number">0</span>] - <span class="number">1</span>] : int + ordinals[<span class="number">3</span>];</div><div class="line">&#125;;</div><div class="line"><span class="comment">// toOrdinalSuffix("123") -&gt; "123rd"</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#UUIDGenerator "UUIDGenerator")UUIDGenerator

生成UUID.

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div><div class="line">5</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> UUIDGenerator = <span class="function"><span class="params">()</span> =&gt;</span></div><div class="line">  ([<span class="number">1e7</span>] + <span class="number">-1e3</span> + <span class="number">-4e3</span> + <span class="number">-8e3</span> + <span class="number">-1e11</span>).replace(<span class="regexp">/[018]/g</span>, c =&gt;</div><div class="line">    (c ^ crypto.getRandomValues(<span class="keyword">new</span> <span class="built_in">Uint8Array</span>(<span class="number">1</span>))[<span class="number">0</span>] &amp; <span class="number">15</span> &gt;&gt; c / <span class="number">4</span>).toString(<span class="number">16</span>)</div><div class="line">  );</div><div class="line"><span class="comment">// UUIDGenerator() -&gt; '7982fcfe-5721-4632-bede-6000885be57d'</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#validateEmail "validateEmail")validateEmail

验证是否为邮箱

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> validateEmail = <span class="function"><span class="params">str</span> =&gt;</span></div><div class="line">  /^(([^&lt;&gt;()\[\]\\.,;:\s@"]+(\.[^&lt;&gt;()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]&#123;1,3&#125;\.[0-9]&#123;1,3&#125;\.[0-9]&#123;1,3&#125;\.[0-9]&#123;1,3&#125;\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]&#123;2,&#125;))$/.test(str);</div><div class="line">// validateEmail(mymail@gmail.com) -&gt; true</div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

### [](#validateNumber "validateNumber")validateNumber

验证是否为数字

<figure class="highlight js"><table><tr><td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td><td class="code"><pre><div class="line"><span class="keyword">const</span> validateNumber = <span class="function"><span class="params">n</span> =&gt;</span> !<span class="built_in">isNaN</span>(<span class="built_in">parseFloat</span>(n)) &amp;&amp; <span class="built_in">isFinite</span>(n) &amp;&amp; <span class="built_in">Number</span>(n) == n;</div><div class="line"><span class="comment">// validateNumber('10') -&gt; true</span></div></pre></td></tr></table></figure>

[⬆ back to top](#目录)

## [](#Credits "Credits")Credits
