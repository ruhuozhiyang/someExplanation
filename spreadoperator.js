var sets=new Set([1,2,3,4,5])
console.log([...sets])   //集合转为数组[ 1, 2, 3, 4, 5 ]

//字符串转为字符数组
var str="chen"
console.log([...str])  //[ 'c', 'h', 'e', 'n' ]

//两个数组合并
var arr1=[1,2,3]
var arr2=[3,4,5]
console.log([...arr1,...arr2]) //[ 1, 2, 3, 3, 4, 5 ]


//在函数中，用来代替arguments参数
//rest参数  ...参数名称
//rest参数是一个数组，后面不能再有参数，不然会报错
function test(...args){
    console.log(args)
}
function test1(x,...args){
    console.log(x)
    console.log(args)
}
test(1,2,3,4)    //[1,2,3,4]
test1(1,2,3,4)    //1 [2,3,4]
test1(1)  //1   []
test1()   //undefined  []


//移除（数组、对象）某几项
const number=[1,2,3,4,5]
const [first,...rest]=number
console.log(rest)

const user={
    id:01,
    name:'chenruyang',
    school:'north eastern university'
}
const{id,...rest1}=user
console.log(rest1)