setTimeout(function(){
    console.log(0)
},0)
var promise1=new Promise((resolve,reject)=>{
    console.log("立即执行")
    let success=true
    setTimeout(function(){
        if(success){
            resolve("成功")
        }else{
            reject("失败")
        }
    },2000)
}).then((data)=>{
    console.log("卧槽"+data+"返回一个Promise")
    return new Promise((resolve,reject)=>{
        let success=false
        setTimeout(function(){
            if(success){
                resolve("success")
            }else{
                reject("failure")
            }
        },2000)
    })
},(data)=>{
    console.log("遗憾"+data)
    return "failure"
}).then((data)=>{
    console.log("第二个then成功数据"+data)
},(data)=>{
    console.log("第二个then失败数据"+data)
})
console.log(promise1)
setTimeout(function(){
    console.log(promise1)
},5000)
console.log(2)

//执行结果
//立即执行
// Promise { <pending> }
// 2
// 0
// 卧槽成功返回一个promise
// 第二个then失败数据failure
// Promise { undefined }
