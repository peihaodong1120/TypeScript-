// 对象类型
let a :object
a = {}
a = function () {}

// {} 可以指定对象中包含哪些属性
let b :{name: string}
// b = {}  // 报错必须要有name属性
b = {name:'张三'}

// ? 表示这个属性是可选的
let c:{name:string, age?:Number}
c = {name:'李四'}
c = {name:'王五', age:28}

// 设置对象类型，并且对象类型可以添加任意属性
// 声明变量d并且为object类型，有一个必要属性为name，并且可以添加其他任意类型属性
// 中括号中propName是随便定义的，就表示为属性名
let d :{name:String, [propName:string]:any}
// d = {} // 报错。没有添加name属性
d = {name:'张三'}
// d = {age:20} // 报错，没有添加name属性
d = {name:'张三',age:20}


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
