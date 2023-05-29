# 循环与迭代
- `for` 语句
- `do...while` 语句
- `while` 语句
- `label` 语句
- `break` 语句
- `continue` 语句
- `for...in` 语句
- `for...of` 语句

## `for` 语句
`for ([initialExpression]; [condition]; [incrementExpression])
  statement
`
### 执行过程：
1. 如果有初始化表达式 initialExpression，它将被执行。可以声明变量
2. condition ： false 终止；true 执行循环；省略视为true；
3. 循环中的 statement 被执行，可以用`{}`执行多条语句
4. 如果有更新表达式 incrementExpression，执行更新表达式
5. 回到步骤2

## `do...while` 语句
statement 在检查条件之前会执行一次。condition 为真（true），statement 将再次执行

## `while` 语句
一个 while 语句只要指定的条件求值为真（true）就会一直执行它的语句块。

## `label` 语句
一个 label 提供了一个让你在程序中其他位置引用它的标识符。例如，你可以用 label 标识一个循环，然后使用 break 或者 continue 来指出程序是否该停止循环还是继续循环。
可以用来决定break 或continue所生效的循环

## `break` 语句

使用 break 语句来终止循环，switch，或者是链接到 label 语句。

- 当你使用不带 label 的 break 时，它会立即终止当前所在的 while，do-while，for，或者 switch 并把控制权交回这些结构后面的语句。
- 当你使用带 label 的 break 时，它会终止指定的带标记（label）的语句。

## `continue` 语句
continue 语句可以用来继续执行（跳过代码块的剩余部分并进入下一循环）一个 while、do-while、for，或者 label 语句。

- 当你使用不带 label 的 continue 时，它终止当前 while，do-while，或者 for 语句到结尾的这次的循环并且继续执行下一次循环。
- 当你使用带 label 的 continue 时，它会应用被 label 标识的循环语句。

## `for...in` 语句
for...in 语句循环一个指定的变量来循环一个对象所有-可枚举-的属性。JavaScript 会为每一个不同的属性执行指定的语句。

## `for...of` 语句
for...of 语句在可迭代对象（包括Array、Map、Set、arguments 等等）上创建了一个循环，对值的每一个独特属性调用一次迭代。