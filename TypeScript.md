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

- array

  - 数组类型

  - ```javascript
    // 语法1  元素类型[]
    let arr : string[]
    arr = ['1', '2', '3']
    // arr = [1, 2, 3] // 报错
    
    // 语法2  Array<元素类型>
    let arr2: Array<number>
    arr2 = [10, 20, 30] 
    // arr2 = ['10', '20', '30'] // 报错
    ```

- tupie

  - 元组，固定长度的数组

  - ```javascript
    // 元组tupie 固定长度的数组
    // 语法 [类型，类型 ...]
    // 定义了几个长度，就必须赋值几个长度，否则报错
    let Arr: [string, number]
    Arr = ['10',20]
    Arr = ['10',20, 20] // 报错
    
    let Arr2: [number, number, string]
    Arr2 = [10, 20, 'hello']
    Arr2 = [10, 20] // 报错
    ```

- enum

  - 枚举

  - ```javascript
    // enum 枚举类
    // 语法  enum 枚举的类名{ 成员1, 成员2, 成员3 }
    // 创建一个性别枚举
    enum Gender{
      man,
      women
    }
    // sex的值为Gender枚举的值，man | women
    let people:{name:string, sex:Gender}
    // 设置的时候，只能设置Gender.man | Gender.man
    people = {
      name:'张三',
      sex:Gender.man
    }
    // people = {
    //   name:'张三',
    //   sex:'man'  // 报错，不能将类型“string”分配给类型“Gender”。
    // }
    console.log('展示',people.sex === Gender.man);
    
    // 成员默认是从0开始
    enum Color {Red, Green, Blue}
    let colorName: string = Color[2];
    console.log(colorName);  // 显示'Blue'因为上面代码里它的值是2
    //也可手动赋值
    enum ColorCopy {Red = 1, Green, Blue}
    let colorNameCopy: string = ColorCopy[2];
    console.log(colorNameCopy);  // 显示'Green'因为上面代码里它的值是2
    ```

- 其他语法

  - & 且

  - ```javascript
    // 给obj赋值必须要满足 name属性是string和 age属性是number
    let obj : {name:string} & {age:number}
    obj = {
      name:'張三',
      age:20
    }
    // obj= {  // 报错， 缺少属性 "age"
    //   name :'李四'
    // }
    ```

  - 类型别名

  - ```javascript
    // 语法: type 名字 = 类型
    /*
      有一个需求，变量 mm的类型为 10 | 20 | 30 | 40,
      变量nn也一样是 10 | 20 | 30 | 40。
      这里就可以使用类型别名
    */ 
    type myType = 10 | 20 | 30 | 40
    let mm:myType
    let nn:myType
    mm = 10 
    mm = 40 
    mm = 50 // 报错,不能将类型“50”分配给类型“myType”
    
    nn = 20 
    nn = 30 
    nn = 0 // 报错,不能将类型“0”分配给类型“myType”
    ```

- 类型断言

  - 有时候我们知道变量是什么类型，而编译器不知道。要通过*类型断言*这种方式可以告诉编译器变量的类型。

  - ```javascript
    /*
    有两种形式
    	 变量 as 类型
    	 <类型>变量
    */	
    let b : unknow = '10'
    let c : string
    
    c = b // 报错,因为b是unknow类型的不能赋值给string类型。
    // 因为编译器不知道我们已经给unknow类型赋值了字符串。
    // 所以我们要使用类型断言，让编译器知道变量的真正类型
    c = b as string 
    c = <string>b
    ```

#### 4、Ts的编译、以及配置项

- 自动编译文件

  - 编译文件时，使用-w指令，Ts比以前会自动监视文件的变化，并且在文件发生变化时对文件进行重新编译。

    - ```
      tsc xxx.ts -w
      ```

- 自动编译整个文件
  - 在文件夹下创建一个tsconfig.json文件
  - 在终端使用 **tsc** 命令，可以编译文件夹内所有的ts文件
  - 使用 **tsc -w** 可以自动监视文件夹内所有的ts文件

- tsconfig.json文件配置

  - include

    - 定义希望被编译文件所在目录、

    - 示例：

      - ```json
         "include": ["./src/**/*","./tests/**/*"],
        ```

      - 上述示例中，src和tests目录下的所有文件都会被编译

  - exclude

    - 定义编译需要排除在外的目录

    - 默认值为 ["node_modules", "bower_components", "jspm_packages"]

    - 示例

      - ```json
         "exclude":["./src/hello/**/*"],
        ```

      - 上述示例中，src下hello目录下的所有文件都不会被编译
    
  - compilerOptions

    - 编译器的配置选项，对象模式。

      - target
        - 用来指定Ts被编译成的Es版本
        - 默认 ES3
        - 可编译选项'es3', 'es5', 'es6', 'es2015', 'es2016', 'es2017', 'es2018', 'es2019', 'es2020', 'es2021', 'esnext'.
      - module
        - 指定要使用的模块化规范
        - 可编译选项'none', 'commonjs', 'amd', 'system', 'umd', 'es6', 'es2015', 'es2020', 'es2022', 'esnext', 'node12', 'nodenext
      - lib
        - 用来指定项目中使用的库,一般不需要配置这个选项
      - outDir
        - 指定编译后文件所在的目录
      - outFile
        - 将编译后的代码合并为一个js文件。设置outFile后,所有的全局作用域中的代码会合并到同一个文件
      - allowJs
        - 对js文件进行编译，默认false
      - checkJs
        - 检查js代码符合语法规范，默认false
      - removeComments
        - 编译后移除注释，默认false
      - noEmit
        - 不生成编译后文件，默认false
      - noEmitOnError
        - 编译时发现文件有错时不生成编译后文件，默认false
      - strict
        - 所有严格检查的总开关。在开发时建议设置为true。
      - alwaysStrict
        - 用来设置编译后的文件是否使用严格模式 默认false
      - noImplicitAny
        - 不允许隐式的any类型
      - noImplicitThis
        -   不允许不明确类型的this
      - strictNullChecks
        -  严格检查空值
    
    - 示例
    
    - ```json
       "compilerOptions": {
        "target": "es5",
        "module": "system",
        "lib":[],
        "outDir": "./dist",
        "outFile": "./dist/app.js",
        "allowJs": false,
        "checkJs": false,
        "removeComments": false,
        "noEmit": false,
        "noEmitOnError": false，
        "strict": true,
       "alwaysStrict": true,
       "noImplicitAny": true,
       "noImplicitThis": true,
       "strictNullChecks": true
      }
      ```
      



#### 5、使用webpack打包ts代码

- 步骤：
  1. 初始化项目
     - 进入项目跟目录，执行命令`npm init -y`
     - 主要作用是创建package.json文件
  2. 下载构建工具
     - `npm i -D webpack webpack-cli webpack-dev-server typescript ts-loader clean-webpack-plugin`
     - webpack
       - 构建工具webpack
     - webpack-cli
       - webpack的命令行工具
     - webpack-dev-server
       - webpack的开发服务器
     - typeScript
       - ts编译器
     - ts-loader
       - ts加载器，用于在webpack中编译ts文件
     - clean-webpack-plugin
       - webpack中的清除插件，每次构建都会先清除目录

