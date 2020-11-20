/*
问题描述： 在一个函数里封装一个异步操作，并需要得到异步操作中的请求结果，以便外部使用。例如:
*/
function testResult(url) {
    axios.get(url).then(res => {
     return res
    })
}
console.log( testResult('/url/test'));
//undefined
// 当然上面这种肯定是得不到正确的输出结果的。
//解决方法一如下:
function testResult1(url, callback) {
    axios.get(url).then(res => {
        typeof callback === 'function' && callback.call(window, res)
    })
}
testResult1('/url/test', (res) => {
    global.console.log(res);
});

//解决方法二如下：
function testResult2(url) {
    return new Promise((resolve, reject) => {
        axios.get(url).then(res => {
            resolve(res);
        })
    });
}
testResult2('/url/test').then((res) => {
    global.console.log(res);
});
