(function(){
    /*
        class Dog {
            name:string
            age:number
            constructor (name:string, age:number) {
                this.name = name
                this.age = age
            }
            say() {
                console.log('汪汪汪');
            }
        }

        class Cat {
            name:string
            age:number
            constructor (name:string, age:number) {
                this.name = name
                this.age = age
            }
            say() {
                console.log('喵喵喵');
            }
        }

    
        创建Dog和Cat有着相同的属性和方法，这种情况我们可以将这些属性和方法提取出来
    */ 


    // 创建一个共同的类
    class Animal {
        name:string
        age:number
        constructor (name:string, age:number) {
            this.name = name
            this.age = age
        }
        say() {
            console.log(`${this.name}在叫~~~`);
        }
    }

    // 定义一个表示狗的类。使Dog继承Animal
    class Dog extends Animal {
        run() {
            console.log(this.name + '在跑') ;
        }
        say() {
            console.log('芜湖~起飞~');
        }
    }
    // 定义一个表示猫的类。使Cat继承Animal
    class Cat extends Animal {

    }

    /*
        以class Dog extends Animal 为例
        - 此时，Animal被称为父类，Dog被称为子类
        - 使用继承后，子类将会拥有父类所有的方法和属性
        - 通过继承可以将多个类中共有的代码写在一个父类中，
            这样只需要写一次即可让所有的子类都同时拥有父类中的属性
            如果希望在子类中添加一些父类没有的方法和属性，直接在子类中添加即可
        - 如果在子类中添加了和父类相同的方法，则子类方法会覆盖掉父类的方法
            这种子类覆盖掉父类方法的形式，称为方法重写
    */




    const dog = new Dog('狗狗', 3)
    const cat = new Cat('猫猫', 2)

    console.log(dog.name); // 狗狗
    console.log(dog.age); // 3 
    dog.run()   // 狗狗在跑 -- Dog自己添加的方法
    dog.say()   // 芜湖~起飞~  --方法重新

    console.log(cat.name); // 猫猫
    console.log(cat.age); // 2
    cat.say() // 猫猫在叫~~~





})()