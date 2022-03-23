(function() {

    // // 描述一个对象类型
    // type myObj = {
    //     name:string,
    //     age:number
    // }

    // const myObj = {
    //     name:'张三',
    //     age:20
    // }

    // interface myObject{
    //     name :string
    //     age:number
    // }
    
    // const myObject = {
    //     name:'李四',
    //     age:40
    // }

    // console.log(myObj,myObject);



    interface LabelledValue {
      label: string;
    }
    
    function printLabel(labelledObj: LabelledValue) {
      console.log(labelledObj.label);
    }
    
    let myObj = {size: 10, label: "Size 10 Object"};
    printLabel(myObj);
    
})()