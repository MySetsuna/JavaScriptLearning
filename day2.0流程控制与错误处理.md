# 流程控制与错误处理
## 语句块 ：` { }` 
    用 `;`间隔语句(statement)
    let 和 const 是块级作用域的；

## 条件判断语句
###  `if...else`语句 ；
不建议在条件表达式中使用赋值语。必须时，可以加一对括号 
 `if ((x = y)) {
  /* statements here */
} `
1. 错误值
- `false`
- `undefined`
- `null`
- `0`
- `NaN`
- `空字符串："" `
-- 当传递给条件语句所有其他的值，包括所有对象会被计算为真
2. 注意Boolean对象 请不要混淆 原始的布尔值true和false 与 Boolean对象的真和假
` var b = new Boolean(false);
if (b) //结果视为真
if (b == true) // 结果视为假 `
### switch语句
 break 和default 可选
### 异常处理语句
1. `throw` 语句
throw 可以跑出任意表达式，但通常是ECMAScript exceptions （[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Control_flow_and_error_handling]） DOMException and DOMError
2. `try...catch` 语句
finally块 
- finally块无论是否抛出异常都会执行
- 如果finally块返回一个值，该值会是整个try-catch-finally流程的返回值，不管在try和catch块中语句返回了什么
- finally的返回，会在catch块内部的throw 抛出异常之前执行。即，如果finally有返回值，则在catch中无法抛出异常。即使是只是返回undefined

3. 嵌套 try...catch 语句

### 使用Error对象