class Cat{
    name:String
    /*
        constructor被称为构造函数
        并且会在对象创建时调用
    */ 

    constructor(name:string) {
        /*  
            在实例方法中，this就 表示当前的实例
            在构造函数中，this就是新建的那个对象
            可以通过this象新建对象添加属性
        */ 
        this.name = name
    }
    
    say() {
        // 方法中谁调用，this就是谁
        console.log(this.name);
    }
}

const catOne = new Cat('小黑')
const catTwo = new Cat('小白')

console.log(catOne.name); // 小黑
console.log(catTwo.name); // 小白
catOne.say() // 小黑
catTwo.say() // 小白
