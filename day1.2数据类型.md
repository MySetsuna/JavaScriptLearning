# 数据类型
最新的 ECMAScript 标准定义了 8 种数据类型：

## 七种基本 boolean\null\undefined\Number\BigInt\string\Symbol(es6) 和Object

## Objects[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object] 和 functions[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function] 对象：存放值得命名容器 函数： 程序能够执行的步骤

# 数据类型的转换
# 数字转换为字符串
## number + string
    ` ``"37" - 7 // 30
    "37" + 7 // "377" ```
# 字符串转换为数字
    ` parseInt() `[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt]
    parseInt 方法只能返回整数，所以使用它会丢失小数部分。另外，调用 parseInt 时最好总是带上进制 (radix) 参数，这个参数用于指定使用哪一种进制
    ` parseFloat() `[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseFloat]
    将字符串转换为数字的另一种方法是使用一元加法运算符。
# 字面量 (Literals)
## 数组字面量 (Array literals)[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide#array_object]
## 数组字面值中的多余逗号 :显式地将缺失的元素声明为undefined，将大大提高你的代码的清晰度和可维护性
## 布尔字面量 (Boolean literals) [https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean]
` const x = new Boolean(false);
if (x) {
  // 这里的代码会被执行
} `
# 数字字面量
    语言标准要求数字字面量必须是无符号的，但是像-123.4这样的代码片段，会被解释为一元操作符` - `应用于数字字面量123.4
## 整数字面量
-十进制 、
-八进制：0 \0O、0o 开头 0-7 
-十六进制：  0x（或 0X）开头，可以包含数字（0-9）和字母 a~f 或 A~F。
-2进制： 二进制整数以 0b（或 0B）开头，只能包含数字 0 和 1
## 浮点数字面量
` [(+|-)][digits][.digits][(E|e)[(+|-)]digits]
`

` 3.14
-.2345789 // -0.23456789
-3.12e+12  // -3.12*10^12
.1e-23    // 0.1*10^(-23)=10^(-24)=1e-24
`

# 对象字面量 (Object literals)
属性的名字不合法,需要用`["x"]`访问

## 增强的对象字面量 (Enhanced Object literals)
    ` {['prop_' + (() => 42)()]:42} `

# RegExp 字面值
    ` var re = /ab+c/; `

# 字符串字面量 (String literals)
 ES2015 提供模板字面量 [https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Template_literals]
 支持多行，值注入
 ` `Hello ${name}, how are you ${time}?` `

 非特别需要不使用，字符串对象[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide#string_object]

 ## 在字符串中使用的特殊字符

 ` 字符	意思
\0	Null 字节
\b	退格符
\f	换页符
\n	换行符
\r	回车符
\t	Tab (制表符)
\v	垂直制表符
\'	单引号
\"	双引号
\\	反斜杠字符（\）
\XXX	由从 0 到 377 最多三位八进制数XXX表示的 Latin-1 字符。例如，\251 是版权符号的八进制序列。
\xXX	由从 00 和 FF 的两位十六进制数字 XX 表示的 Latin-1 字符。例如，\ xA9 是版权符号的十六进制序列。
\uXXXX	由四位十六进制数字 XXXX 表示的 Unicode 字符。例如，\ u00A9 是版权符号的 Unicode 序列。见Unicode escape sequences (Unicode 转义字符).
\u*{XXXXX}*	Unicode 代码点 (code point) 转义字符。例如，\u{2F804} 相当于 Unicode 转义字符 \uD87E\uDC04 的简写。 `
