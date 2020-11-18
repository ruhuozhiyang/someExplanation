/*
apply 、 call 、bind 三者都是用来改变函数的this对象的指向的；
apply 、 call 、bind 三者第一个参数都是this要指向的对象，也就是想指定的上下文；
apply 、 call 、bind 三者都可以利用后续参数传参；
bind是返回对应函数，便于稍后调用；apply、call则是立即调用 。
call 需要把参数按顺序传递进去，而 apply 则是把参数放在数组里。
某个函数的参数是明确知道数量时用 call ; 而不确定的时候用 apply，然后把参数 push进数组传递进去。当参数数量不确定时，函数内部也可以通过 arguments 这个数组来遍历所有的参数

func.call(this, arg1, arg2);
func.apply(this, [arg1, arg2])

在 javascript 中，call 和 apply 都是为了改变某个函数运行时的上下文（context）而存在的，换句话说，就是为了改变函数体内部 this 的指向。
JavaScript 的一大特点是，函数存在「定义时上下文」和「运行时上下文」以及「上下文是可以改变的」这样的概念。
bind是返回对应函数，便于稍后调用；apply、call则是立即调用 。
*/
function log(){
    console.log.apply(console, arguments);
};
log(1); //1
log(1,2); //1 2

function fruits() {}
fruits.prototype = {
    color: 'red',
    say: function() {
        console.log('my color is' + this.color);
    }
}
var apple = new fruits;
apple.say();

/*
所以，可以看出 call 和 apply 是为了动态改变 this 而出现的，当一个 object 没有某个方法（本栗子中banana没有say方法），但是其他的有（本栗子中apple有say方法），我们可以借助call或apply用其它对象的方法来操作。
*/
var banana = {
    color: 'yellow',
}
apple.say.apply(banana);
apple.say.call(banana);
