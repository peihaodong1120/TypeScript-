(function() {

    // 描述一个对象类型
    type myObj = {
        name:string,
        age:number
    }

    const myObj = {
        name:'张三',
        age:20
    }

    interface myObject{
        name :string
        age:number
    }
    
    const myObject = {
        name:'战三',
        age:20
    }

})()