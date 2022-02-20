#### 类（class）

- 定义类		

  - ```js
    // 简单定义一个类
    /*
    	语法
    	class 类名 {
            属性名:类型 
            方法名(){}
            constructor(属性名:类型) {
                this.属性名 = 属性名
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
    
    	constructor(name:string) {
            this.name = name 	// 构造函数中才可以使用
        }
    }
    
    const people = new Person('张三')
    console.log(Person.age) // 18
    console.log(people.name) // 张三
    // people.sex = '女' // 直接报错，因为是只读属性
    ```

- 类的继承
