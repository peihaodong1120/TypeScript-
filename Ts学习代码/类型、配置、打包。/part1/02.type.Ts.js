// 对象类型
var a;
a = {};
a = function () { };
// {} 可以指定对象中包含哪些属性
var b;
// b = {}  // 报错必须要有name属性
b = { name: '张三' };
// ? 表示这个属性是可选的
var c;
c = { name: '李四' };
c = { name: '王五', age: 28 };
// 设置对象类型，并且对象类型可以添加任意属性
// 声明变量d并且为object类型，有一个必要属性为name，并且可以添加其他任意类型属性
// 中括号中propName是随便定义的，就表示为属性名
var d;
// d = {} // 报错。没有添加name属性
d = { name: '张三' };
// d = {age:20} // 报错，没有添加name属性
d = { name: '张三', age: 20 };
// 设置函数结构的类型声明
// 语法 (参数1:类型,参数2:类型,参数3:类型,.....) => 返回值类型
// 声明
var fun;
// 设置
fun = function (num1, num2) {
    return num1 + num2;
};
// 传参
fun(1, 2);
// 打印返回值
console.log(fun);
// 数组类型
// 语法1  元素类型[]
var arr;
arr = ['1', '2', '3'];
// arr = [1, 2, 3] // 报错
// 语法2  Array<元素类型>
var arr2;
arr2 = [10, 20, 30];
// arr2 = ['10', '20', '30'] // 报错
// 元组tupie 固定长度的数组
// 语法 [类型，类型 ...]
// 定义了几个长度，就必须赋值几个长度，否则报错
var Arr;
Arr = ['10', 20];
// Arr = ['10',20, 20] // 报错
var Arr2;
Arr2 = [10, 20, 'hello'];
// Arr2 = [10, 20] // 报错
// enum 枚举类
// 语法  enum 枚举的类名{ 成员1, 成员2, 成员3 }
// 创建一个性别枚举
var Gender;
(function (Gender) {
    Gender[Gender["man"] = 0] = "man";
    Gender[Gender["women"] = 1] = "women";
})(Gender || (Gender = {}));
// sex的值为Gender枚举的值，man | women
var people;
// 设置的时候，只能设置Gender.man | Gender.man
people = {
    name: '张三',
    sex: Gender.man
};
// people = {
//   name:'张三',
//   sex:'man'  // 报错，不能将类型“string”分配给类型“Gender”。
// }
console.log('展示', people.sex === Gender.man);
// 成员默认是从0开始
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var colorName = Color[2];
console.log(colorName); // 显示'Blue'因为上面代码里它的值是2
//也可手动赋值
var ColorCopy;
(function (ColorCopy) {
    ColorCopy[ColorCopy["Red"] = 1] = "Red";
    ColorCopy[ColorCopy["Green"] = 2] = "Green";
    ColorCopy[ColorCopy["Blue"] = 3] = "Blue";
})(ColorCopy || (ColorCopy = {}));
var colorNameCopy = ColorCopy[2];
console.log(colorNameCopy); // 显示'Green'因为上面代码里它的值是2
// & 且
// 给obj赋值必须要满足 name属性是string和 age属性是number
var obj;
obj = {
    name: '張三',
    age: 20
};
var mm;
var nn;
mm = 10;
mm = 40;
// mm = 50 // 报错,不能将类型“50”分配给类型“myType”
nn = 20;
nn = 30;
// nn = 0 // 报错,不能将类型“0”分配给类型“myType”
var num;
num = 10;
var str;
str = num;
console.log('str', str);
