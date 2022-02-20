// 声明变量
let a:number = 10

// 函数的参数类型声明，函数fnc的参数数都是number类型的
function fnc (a:number, b:number) {
  return a + b
}

console.log(fnc(10 , 20)); 
// console.log(fnc(10 , '30')); // 报错, 参数类型错误
// console.log(fnc(10 , 20, 30)); // 报错，只有两个参数，但是却传了3个值

// // 指定函数的返回值类型
// function fnc2(a:number, b:number):number {
//   return a + b +'hello'  // 报错。因为此函数的返回值只能为number
// }

// 布尔类型
let bool:Boolean  = false
bool= true

// 字面量
let aaa :120
aaa = 120
// aaa = 111 //报错 现在a只能是120

// 联合类型 用|
let sex: 'men' | 'women'
sex = 'men'
sex = 'women'
// sex = 'xxx' // 报错

let age: string | number
age = 1
age = '15'
age = 20
// age = true // 报错

// any 任意类型
let AAA : any
AAA = 10
// AAA = '20'
// AAA = true
// AAA = [10]

// unknow  未知类型
let knowNo : unknown
knowNo = 10 
// knowNo = '20' 
// knowNo = true

let shuzi: number

shuzi = AAA // 将任意类型的AAA赋值给shuzhi不会报错
// shuzi = knowNo // 将unknow类型的knowNo赋值给shuzi就会报错.

// shuzi = knowNo as number
shuzi = <number>knowNo

// void 表示空，一般函数没有返回值，函数的类型就是void
function func() {
  const a:number = 10
  const b:number = 20
  console.log(a+b);
}

// never 类型
function func1() {
   throw new Error("报错了");
}

