"use strict";
(function () {
    // // 描述一个对象类型
    // type myObj = {
    //     name:string,
    //     age:number
    // }
    function printLabel(labelledObj) {
        console.log(labelledObj.label);
    }
    let myObj = { size: 10, label: "Size 10 Object" };
    printLabel(myObj);
})();
