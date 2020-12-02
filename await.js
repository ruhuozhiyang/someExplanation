// function test() {
//     const response = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('test...');
//         }, 1000);
//     });
//     global.console.log(response);
// }
// test();

// async function test1() {
//     const response = await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('test...');
//         }, 1000);
//     });
//     global.console.log(response);
// }
// test1();
// //=================================================
// async function asyncAwaitFn(str) {
//     return await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(str);
//         }, 1000);
//     })
// }
// const serialFn = async () => { //串行执行
//     console.time('serialFn');
//     console.log(await asyncAwaitFn('string 1'));
//     console.log(await asyncAwaitFn('string 2'));
//     console.timeEnd('serialFn')
// }
// serialFn(); // 执行结果: 'string 1' 'string2' serialFn: 2006.139ms

// //=================================================
// async function asyncAwaitFn1(str) {
//     return await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(str);
//         }, 1000);
//     })
// }
// const serialFn1 = async () => { //串行执行
//     console.time('serialFn');
//     console.log(await asyncAwaitFn1('string 1'));
//     console.log(await asyncAwaitFn1('string 2'));
//     console.timeEnd('serialFn')
// }
// serialFn1(); // 执行结果: 双双报错. await asyncAwaitFn('string 1')返回的是成功回调函数即对应resolve,
//             // reject需要指定.catch内容.

//=================================================
async function asyncAwaitFn2(str) {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(str);
        }, 1000);
    })
}
const serialFn2 = async () => { //串行执行
    console.time('serialFn');
    try {
        global.console.log(await asyncAwaitFn2('string 1'));
        global.console.log(await asyncAwaitFn2('string 2'));
    } catch (error) {
        global.console.log('这是catch捕捉到的' + error);
    }
    console.timeEnd('serialFn')
}
serialFn2(); // 这是catch捕捉到的string 1 serialFn: 1010.791ms
             // 因为加上了try catch所以reject返回的错误可以被捕捉到catch中，相当于指定了Promise.catch((error) => {...});

