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

// 数组类型
// 语法1  元素类型[]
let arr : string[]
arr = ['1', '2', '3']
// arr = [1, 2, 3] // 报错
// 语法2  Array<元素类型>
let arr2: Array<number>
arr2 = [10, 20, 30] 
// arr2 = ['10', '20', '30'] // 报错

// 元组tupie 固定长度的数组
// 语法 [类型，类型 ...]
// 定义了几个长度，就必须赋值几个长度，否则报错
let Arr: [string, number]
Arr = ['10',20]
// Arr = ['10',20, 20] // 报错

let Arr2: [number, number, string]
Arr2 = [10, 20, 'hello']
// Arr2 = [10, 20] // 报错

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

// & 且
// 给obj赋值必须要满足 name属性是string和 age属性是number
let obj : {name:string} & {age:number}
obj = {
  name:'張三',
  age:20
}
// obj= {  // 报错， 缺少属性 "age"
//   name :'李四'
// }

// 类型别别名
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
// mm = 50 // 报错,不能将类型“50”分配给类型“myType”

nn = 20 
nn = 30 
// nn = 0 // 报错,不能将类型“0”分配给类型“myType”

// 类型断言
let num :unknown 
num = '10'
let str : string
str = num as string

console.log('str', str);
