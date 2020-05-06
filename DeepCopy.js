import { extend } from 'jquery'
var obj1={
    id:1,
    name:'chenruyang',
    shoes:{
        material:'goat',
        price:30
    }
}

var obj2=extend(true,{},obj1)
console.log(obj1===obj2)