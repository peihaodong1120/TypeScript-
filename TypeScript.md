# TypeScript



[TOC]



#### 1、什么是TypeScript                  

- 以JavaScript为基础构建的语言，是一个JavaScript的超集。
- TypeScript 扩展了JavaScript并添加了类型。
- Type可以在任何支持JavaScript的平台中执行。
- TypeScript不能被Js解析器直接执行，需要先编译成js，再去执行



#### 2、TypeScript开发环境搭建

​	1.安装node.js 

​	2.安装TypeScript

```
npm install -g typescript
```

​	输入tsc查看是否安装成功

​	3.创建一个Ts文件

​	4.使用tsc对Ts文件进行编译

- 进入命令行
- 进入ts文件所在目录
- 执行命令：tsc xxx.ts



#### 3、Ts类型声明

- 类型声明
  - 类型声明是Ts非常重要的一个特点。
  - 通过类型声明可以指定Ts中变量（参数，形参）的类型。
  - 指定类型后，当为变量赋值时，Ts编译器会自动检查值是否符合类型声明，赋值则赋值，否则报错。
  - 类型声明给变量设置了类型，使变量只能存储某种类型的值
  - Ts拥有自动类型判断机制
  - 当变量的声明和赋值是同时进行的，Ts编译器会自动判断变量的类型
  - 如果变量的声明和赋值是同时进行的，可以省略类型声明

```JavaScript
//  先声明后赋值法：
let 变量名:声明类型
// Ts声明一个变量a指定类型为number。 此后a的值必须为数值型，如果赋值其他类型则会报错。
let a: number

a = 1
a = 2 
a = 'hellow' // 报错


// 直接声明并且赋值
let 变量名:声明类型 = 值
// 声明变量知道类型为String，并且赋值为'hellow'
let b:String = 'hellow'

b = 'world'
b = 111111 // 报错

// TS中 声明变量c没有声明类型，但是给c赋值了数值型的值。 次变量就默认类型为number
let c = 10
c = 11 
c = '12' // 报错
```

```JavaScript
// 语法
function 函数名( 参数1:类型,参数2:类型.....):类型(返回值类型) {}

// 函数的参数类型声明，函数fnc的参数都是number类型的
function fnc (a:number, b:number) {
  return a + b
}

console.log(fnc(10 , 20));
console.log(fnc(10 , '30')); // 报错, 参数类型错误
console.log(fnc(10 , 20, 30)); // 报错，只有两个参数，但是却传了3个值

// 指定函数的返回值类型
function fnc2(a:number, b:number):number {
  return a + b +'hello'  // 报错。因为此函数的返回值只能为number
}

```

- 类型列表

|  类型   |       例子        |              描述              |
| :-----: | :---------------: | :----------------------------: |
| Number  |    1,10,20,30     |            任意数字            |
| String  | ’hellow‘，’world‘ |           任意字符串           |
| Boolean |    true, false    |       布尔值true或false        |
| 字面量  |      其本身       |  限制变量的值就是该字面量的值  |
|   any   |         *         |            任意类型            |
| unknow  |         *         |         类型安全的any          |
|  void   | 空值（undefined） |     没有值（或undefined）      |
|  never  |      没有值       |          不能是任何值          |
| object  |  {nema：’张三‘}   |          任意的js对象          |
|  array  |      [1,2,3]      |          任意的js数组          |
|  tupie  |       [4,5]       | 元素，Ts新增类型，固定长度数组 |
|  enum   |     enum{A,B}     |       枚举,Ts中新增类型        |

- Number

  - 数值类型。可以是二进制，八进制，十进制和十六进制

  - ```javascript
    let decLiteral: number = 6;
    let hexLiteral: number = 0xf00d; 
    let binaryLiteral: number = 0b1010;
    let octalLiteral: number = 0o744;
    ```

- String

  - 字符类型

  - ```javascript
    let name: string = "bob";
    name = "smith";
    ```

- Boolean

  - 布尔值

  - ```javascript
    let bool:Boolean  = false
    bool = true
    ```

- 字面量

  - ```javascript
    // 直接指定
    let a：10
    a = 10 
    a = 11 // 报错
    
    // 字面量可以连接多个类型，用|(或)。联合类型
    let sex: 'men' | 'women'
    sex = 'men'
    sex = 'women'
    sex = '张三' // 报错
    
    // 指定变量为两个的类型
    let age: string | number
    age = 1
    age = '15'
    age = true // 报错
    ```

- any 

  - 任意类型

  - ```javascript
    // 设置了any类型，相当于关闭了Ts的类型检测，不建议使用
    let a：any
    a = 10
    a = '20'
    a = true
    
    // Ts声明变量如果不指定类型，则Ts会自动判断未any类型，(隐式any)
    let b
    b = 20 
    b = 'hello'
    b = false
    ```

- unknow

  - 未知类型，和any一样可以赋值任意类型，但是是一个安全的any

  - unknow类型不能直接赋值给其他变量

  - ```javascript
    let a:any
    a = 10
    
    let b:unknow
    b = 20
    
    let c:number
    c = a  // 不会报错 
    c = b	// 报错，unknow 不是 number类型
    
    // 可以使用类型断言, 告诉解析器该变量的实际类型
    /*
    语法：
    	变量 = 变量 as 类型
    	变量 = <类型>变量
    */	
    c = b as number 
    c = <number>b
    
    ```

- void

  - 它表示没有任何类型，表示为空，函数没有返回值的时候返回的类型就是void

  - ```javascript
    function func() {		// func的类型为void
      const a:number = 10
      const b:number = 20
      console.log(a+b);
    }
    ```
    

- never

  - 表示永远不会有返回值

  - ```javascript
    // 返回never的函数必须存在无法达到的终点
    // 函数根本执行不完
    function error(message: string): never {
        throw new Error(message);
    }
    ```

- object

  - 对象类型

  - ```javascript
    // 对象类型
    let a :object
    a = {}
    a = function () {}
    
    // {} 可以指定对象中包含哪些属性
    let b :{name: String}
    b = {}  // 报错,必须要有name属性
    b = {name:'张三'}
    
    // ? 表示这个属性是可选的
    let c:{name:String, age?:Number}
    c = {name:'李四'}
    c = {name:'王五', age:28}
           
    // 设置对象类型，并且对象类型可以添加任意属性
    // 声明变量d并且为object类型，有一个必要属性为name，并且可以添加其他任意类型属性
    // 中括号中propName是随便定义的，就表示为属性名
    let d :{name:String, [propName:string]:any}
    d = {} // 报错。没有添加name属性
    d = {name:'张三'}
    d = {age:20} // 报错，没有添加name属性
    d = {name:'张三',age:20}
    ```

- 函数结构

  - ```javascript
    // 设置函数结构的类型声明
    // 语法 (参数1:类型,参数2:类型,参数3:类型,.....) => 返回值类型
    
    // 声明
    let fun:(num1:number, num2:number) => number
    // 设置
    fun = function (num1, num2) {
      return num1 + num2
    }
    // 传参
    fun(1,2)
    // 打印返回值
    console.log(fun);
    ```

  - 
