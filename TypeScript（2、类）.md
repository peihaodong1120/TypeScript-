#### 类（class）

- **定义类**		

  - ```js
    // 简单定义一个类
    /*
    	语法
    	class 类名 {
            属性名:类型 
            方法名(){}
            constructor(参数:类型) {
                this.属性名 = 参数
            }
    	}
    	
    	static写在属性方法前，这个属性称为类属性，也叫静态属性
    	readonly 写在属性前
    
    */
    	
    
    // 示例
    class Person {
        name:string  //  必须先在类中定义
        static age:number = 18	// 静态属性，通过Person.age访问
        readonly sex:string = '男'	// 只读属性，只能读取不能修改
    
    	constructor(theName:string) {
            this.name = theName 	// 构造函数中才可以使用
        }
    }
    
    const people = new Person('张三')
    console.log(Person.age) // 18
    console.log(people.name) // 张三
    // people.sex = '女' // 直接报错，因为是只读属性
    ```

- **类的继承**

  - 如果有一个需求让我们去创建两个类，一个狗的类，一个猫的类。这两个类中都有name属性，age属性，say方法。我们可以这样写：

  - ```js
    class Dog {
        name:string
        age:number
        constructor (theName:string, theAge:number) {
            this.name = theName
            this.age = theAge
        }
        say() {
            console.log('汪汪汪');
        }
    }
    class Cat {
        name:string
        age:number
        constructor (theName:string, theAge:number) {
            this.name = theName
            this.age = theAge
        }
        say() {
            console.log('喵喵喵');
        }
    }
    ```

  - 这是我们发现，当我们创建了多个类，而且这些类里有大量相同的属性和方法。能不能把相同的属性和方法提取出来从而减少大量重复代码的出现呢？这种情况下，可以将相同的属性和方法提取出来放在一个类中。让其他的类去继承这个公共的类，从而减少大量重复代码的出现。

  - 使用extends关键字

  - ```js
    // 创建一个共同的类
    class Animal {
        name:string
        age:number
        constructor (theName:string, theAge:number) {
            this.name = theName
            this.age = theAge
        }
        say() {
            console.log(`${this.name}在叫~~~`);
        }
    }
    
    // 创建Dog去继承Animal
    class Dog extends Animal{
        
    }
    // 实例dog对象
    const dog = new Dog('狗狗', 3)
    // 打印属性使用方法
    console.log(dog.name); // 狗狗
    console.log(dog.age); // 3 
    dog.say() // 狗狗在叫~~~
    
    // 创建Cat去继承Animal
    class Cat extends Animal{
        run() {
            console.log('go,go,go')
        }
        say() {
        	console.log('芜湖~起飞~');
    	}
    }
    // 实例cat对象
    const cat = new Cat('猫猫'，2)
    // 打印属性使用方法
    console.log(cat.name); // 猫猫
    console.log(cat.age); // 2
    cat.run() // go,go,go
    cat.say() // 芜湖~起飞~
    ```

  - 以class Dog extends Animal 为例：

    - 此时，Animal被称为父类（基类），Dog被称为子类（派生类）
    - 使用继承后，子类将会拥有父类所有的方法和属性
    - 通过继承可以将多个类中共有的代码写在一个父类中
    - 这样只需要写一次即可让所有的子类都同时拥有父类中的属性

  - 以class Cat extends Animal为例：
    - 如果希望在子类中添加一些父类没有的方法和属性，直接在子类中添加即可
    - 如果在子类中添加了和父类相同的方法，则子类方法会覆盖掉父类的方法，这种子类覆盖掉父类方法的形式，称为方法重写

- **super关键字**
  
  - 在上面继承中，子类继承了父类的属性和方法，但是子类想要有自己的属性该怎么办？
  
  - ```javascript
    // 父类
    class Father{
        name:string
        constructor(name:string) {
            this.name = name
        }
        sayHello() {
            console.log('你好呀');
        }
    }
    
    // 子类继承父类
    class Son extends Father{
        age:number
        // 子类想拥有自己的属性，必须使用构造函数，而使用构造函数必须调用 super()
        constructor(name:string, age:number ) {
            super(name) // 需要调用父类的构造函数
            this.age = age
        }
        sayHello(): void {
            // 在类的方法中，super就代表当前的父类
            super.sayHello()
            console.log(this.name + '' + this.age)
        }
    }
    
    const son = new Son('小黑',20)
    son.sayHello() // '你好呀' '小黑' 20
    ```
  
  - 子类（派生类）包含了一个构造函数，它 *必须*调用 `super()`，它会执行父类（基类）的构造函数。 而且，在构造函数里访问 `this`的属性之前，我们 *一定*要调用 `super()`。 这个是TypeScript强制执行的一条重要规则。
  
- **抽象类**

  - 抽象类做为其它派生类的基类使用，以关键字abstract开头，抽象类不能被实例化，只能用来被继承。

  - ```javascript
    // 定义一个抽象类
    abstract class Animal {
        name:String
        constructor(theName:String) {
            this.name = theName
        }
    	
    	abstract sayHello():void
    }
        
    // 继承抽象类
    class Dog extends Animal {
        sayHello():void {
            console.log('汪汪')
        }
    }
    // 抽象类是不能够被实例化的
    const dog = new Animal('狗') // 报错
    const dog2 = new Dog('狗')
    dog2.sayHello() // 汪汪
    ```

    

