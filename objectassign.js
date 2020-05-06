var target={}  //目标对象
var source1={
    id:01,
    name:'陈如阳'
}
var source2={
    sex:'female'
}
var source3={
    sex:'male'
}
Object.assign(target,source1,source2,source3)
console.log(target)