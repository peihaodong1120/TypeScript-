"use strict";
(function () {
    class Father {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('你好呀');
        }
    }
    class Son extends Father {
        // 如果想在子类中添加属性
        constructor(name, age) {
            super(name); // 需要调用父类的构造函数
            this.age = age;
        }
        sayHello() {
            // 在类的方法中，super就代表当前的父类
            super.sayHello();
            console.log(this.name + '' + this.age);
        }
    }
    const son = new Son('小黑', 20);
    son.sayHello();
    // // 创建一个animal类
    // class Animal {
    //   // 定义属性以及类型
    //     name: string;
    //     // 构造函数，创建对象的时候回调用这个方法
    //     constructor(theName: string) { this.name = theName; }
    //     // 定义方法
    //     move(distanceInMeters: number = 0) {
    //         console.log(`${this.name} moved ${distanceInMeters}m.`);
    //     }
    // }
    // // snake继承了animal类型
    // class Snake extends Animal {
    //     constructor(name: string) { super(name); }
    //     move(distanceInMeters = 5) {
    //         console.log("Slithering...");
    //         super.move(distanceInMeters);
    //     }
    // }
    // class Horse extends Animal {
    //     constructor(name: string) { super(name); }
    //     move(distanceInMeters = 45) {
    //         console.log("Galloping...");
    //         super.move(distanceInMeters);
    //     }
    // }
    // let sam = new Snake("Sammy the Python");
    // let tom: Animal = new Horse("Tommy the Palomino");
    // sam.move();
    // tom.move(34);
})();
