(function() {
    class Father{
        name:string
        constructor(name:string) {
            this.name = name
        }
        sayHello() {
            console.log('你好呀');
        }
    }


    class Son extends Father{
        age:number
        // 如果想在子类中添加属性
        constructor(name:string, age:number ) {
            super(name) // 需要调用父类的构造函数
            this.age = age
        }

        sayHello(): void {
            // 在类的方法中，super就代表当前的父类
            super.sayHello()
        }
    }


    const son = new Son('小黑',20)
    son.sayHello()
})()