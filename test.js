function test(){       //函数声明到最上面
    console.log(1234);
}
var test;    //变量的声明
test=function(){         //变量的赋值
    console.log(5678);
}
console.log(test);
test();
//输出的结果为5678，因为下面的函数会覆盖上面的声明。

var a={
    i:0,
    valueOf:function(){
        return ++this.i
    }
}
if(a==1&&a==2&&a==3){
console.log("成功来");
}   

// var http=require('http');
// var server=http.createServer(function(request,response){
//     response.end('the path is：'+request.url)
// })
// server.listen(9000,function(){
//     console.log("正在监听%s端口",9000);
// });


// var flag=true
// var p=new Promise(function(resolve,reject){
//     console.log("执行器立即执行");
//     if(!flag){
//         reject("调用失败返回的内容");
//     }else{
//         resolve("调用成功返回的内容")
//     }  
// });
// p.then((res)=>{
//     console.log("调用成功："+res);
// },(reason)=>{
//     console.log("调用失败："+reason);
// })

// //手写一个Promise
// function Promise(executor){

// }

function outer(){
    var inval=0;
    return function(){
        inval++;
        console.log(inval);
    }
}
var res=outer();
res()


function sum(i){
    if(i==1)return 1
    else
     return sum(i-1)+i
}
console.log(sum(100));



var array=['a','b','d']
var string=array.join("尼玛")
console.log(string)


var numbers=[2,3,5,1,8]
var max=Math.max.apply(null,numbers);
console.log(max);

var arg=function(){
    console.log(arguments[1]);
}
arg(2324,456);

Function.prototype.bind=function(){
    var self=this
    var content=Array.prototype.shift.call(arguments)
    var args=Array.prototype.slice.call(arguments)
    return function(){
        self.apply(content,Array.prototype.concat(args,Array.prototype.slice(arguments)))
    }
}


let o={
    fn:function(){
        console.log(this)
    }
}
o.fn()


Function.prototype.Mycall=function(obj,...arg){   //ES6中的拓展运算符 剩余运算符
    if(obj===null||obj===undefined)
        obj=window
    else
        obj=Object(obj)
    obj._fn_=this
    val=obj._fn_(...arg)
    delete obj._fn_
    return val
}

Function.prototype.Myapply=function(obj,arr){
    let arrs=[]
    if(arr){
        for (let i = 0; i < arr.length; i++) {
            arrs.push(arr[i])
        }
    }
    return this.Mycall(obj,...arrs)
}

Function.prototype.Myapply1=function(obj,arr){
    let arrs=[]
    obj._fn_=this
    if(arr){
        for (let i = 0; i < arr.length; i++) {
            arrs.push('arguments['+i+']')
        }
    }
    val=eval('obj._fn_('+arrs+')')
    return val
}


let test1={
    name:"test"
}
let example={
    name:"example",
    fn:function(){
        console.log(this.name)
    }
}
example.fn.Myapply1(test1)

var str="abcdefg"
console.log(str[3])

var data={
    name:''
}
Object.defineProperty(data,'name',{
    enumerable:true,
    configurable:true,
    get:function(){
        console.log('get')
    },
    set:function(newVal){
        console.log(`大家好我是：${newVal}`)
    }
})
data.name="陈如阳"



var fax="obj"
var obj={
    zhi:fax
}
console.log(obj.zhi)

var obj={
    name:"陈如阳",
    id:12,
    msg:'优秀'
}
var {name,msg,id}=obj
console.log(msg)