 // AOP 面向切片编程，将跟核心业务无关的功能抽离出来，再通过动态织入
Function.prototype.before = function(beforeFunc) {
    let _self = this; //保存原函数的引用.
    return function() {  // 返回包含了原函数和新函数的"代理"函数
        beforeFunc.apply(this, arguments); // 执行新函数，修正this
        _self.apply(this, arguments); //执行原函数
    }
}

Function.prototype.after = function(afterFunc) {
    let _self = this;
    return function() {
        _self.apply(this, arguments);
        afterFunc.apply(this, arguments);
    }
}

let func = function() {
    global.console.log('2');
}
func = func.before(function() {
    global.console.log('1');
}).after(function() {
    global.console.log('3');
});
func();