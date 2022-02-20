// 使用class对象来定义一个类
/*
* 
*
**/
class Person {
    // 定义实例属性。通过Person的实例对象来读取。
    name:string = '张三'
    // 用static定义类属性（静态属性） ，通过当前类读取。
    static age:number = 182
    // 使用readonly定义只读属性，只能读取
    readonly sex:string = '男'
    // 定义实例方法，方法前面加static则为类方法
    sayHello() {
        console.log('你好');
    }
    static sayBay() {
        console.log('再见');
    }
}

const people =new Person() 
console.log(Person.age); // 182
people.name = '李四' // 可以修改
// people.sex = '女' // 直接报错，因为是只读属性
people.sayHello() //  你好。  实例方法
Person.sayBay() // 再见。   类方法


