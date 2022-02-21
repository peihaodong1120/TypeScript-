"use strict";
(function () {
    /*
        抽象类
        以abstract开头的类，称为抽象类
            抽象类和其他类区别不大，只是不能用来创建实例对象
            抽象类就是专门用来被继承的类
    
    */
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        sayHello() {
            console.log('雷猴');
        }
    }
    class Cat extends Animal {
        sayHello() {
            console.log('喵喵');
        }
    }
    const dog = new Dog('小黑');
    // const cat = new Animal('小黑') // 报错 无法创建抽象类的实例。
    dog.sayHello();
    const cat = new Cat('小猫猫');
    cat.sayHello();
})();
