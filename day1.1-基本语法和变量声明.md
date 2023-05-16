# JavaScript 的基本语法，变量声明，数据类型 和 字面量
## 1.JavaScript 区分大小写，并使用Unicode字符集
## 2.JavaScript 语句 Statement https://developer.mozilla.org/zh-CN/docs/Glossary/Statement，用`;` 分隔
## 3.JavaScipt 源码从左到右扫描并转换成一系列由token、控制字符、行终止符、注释和空白字符组成的输入元素。空白字符指空格符、制表符、换行符等
## 4.`#!/usr/bin/env node` hashbang 注释 (hashbang comment) https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#hashbang_%E6%B3%A8%E9%87%8A

# 声明 
    - var 声明一个变量，可选初始化一个值
    - let 声明一个块作用域的局部变量，可选初始化一个值
    - const 声明一个块作用域的只读常量
# 变量
## 在应用程序中，使用变量来作为一个值的符号名。变量的名字又叫做标识符https://developer.mozilla.org/zh-CN/docs/Glossary/Identifier

可以使用大部分 ISO 8859-1 或 Unicode 编码的字符作标识符：https://mathiasbynens.be/notes/javascript-identifiers-es6。你也可以使用 Unicode（https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals） 转义字符 作标识符。

# 声明变量
 1.var x = 1 
 2.x=42  会产生一个全局变量。在严格模式下会产生错误。
 3.let y = 13。这个语法可以用来声明块作用域的局部变量
 (
    const 是常量！
 )

## 结构赋值 以使用解构赋值[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/]将对象字面量[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#%E5%AF%B9%E8%B1%A1%E5%AD%97%E9%9D%A2%E9%87%8F_object_literals]的属性绑定到变量（let { bar } = foo）

## 变量求值 未声明变量，let var，值为undefined 访问一个未声明的变量会导致抛出一个引用错误（ReferenceError）[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError]异常

1.undefined 值在布尔类型环境中会被当作 false 
2.数值类型环境中 undefined 值会被转换为 NaN
3.null 值在布尔类型环境中会被当作 false ,数值环境会被当做0

# 变量的作用域
ECMAScript 6 之前的 JavaScript 没有 语句块[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#block_statement] 作用域；相反，语句块中声明的变量将成为语句块所在函数（或全局作用域）的局部变量。

# 变量提升
JavaScript 变量的另一个不同寻常的地方是，你可以先使用变量稍后再声明变量而不会引发异常。这一概念称为变量提升；提升后的变量将返回 undefined 值

# 函数提升
只有函数声明会被提升到顶部，而函数表达式不会被提升
    ``` 
/* 函数声明 */

foo(); // "bar"

function foo() {
  console.log("bar");
}


/* 函数表达式 */

baz(); // 类型错误：baz 不是一个函数
console.log(baz === undefined); // true //但是变量提升仍是有效的

var baz = function() {
  console.log("bar2");
};```

# 全局变量
 window[https://developer.mozilla.org/zh-CN/docs/Web/API/Window]

# Constants
    1.在同一作用域中，不能使用与变量名或函数名相同的名字来命名常量 关键字`const `
    2.对象属性被赋值为常量不受保护
    3.数组属性被赋值为常量不受保护