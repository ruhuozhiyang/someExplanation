//乘法
const multi = function() {
    if (arguments.length === 0) {
        return;
    }
    let temp = 1;
    for (let index = 0; index < arguments.length; index++) {
        const element = arguments[index];
        temp = temp * element;
    }
    return temp;
}
global.console.log(multi(4, 6));

//进阶1 添加缓存机制
let cache = {};
const multi2 = function() {
    if (arguments.length === 0) {
        return;
    }
    let argString = Array.prototype.join.call(arguments, ',');
    // cache中存在原先的计算结果，则直接返回结果
    if (cache[argString]) {
        global.console.log('从缓存返回的值');
        return cache[argString];
    }
    let temp = 1;
    for (let index = 0; index < arguments.length; index++) {
        const element = arguments[index];
        temp = temp * element;
    }
    cache[argString] = temp;
    return temp;
}
global.console.log(multi2(4,6));
global.console.log(multi2(4,6));
// 24
// 从缓存返回的值
// 24


//进阶三 使用闭包封装cache，因为这个cache是单独属于mult3的，所以可以封装到mult3中
const multi3 = (function() {
    let cache = {};
    return function() {
        if (arguments.length === 0) {
            return;
        }
        let argString = Array.prototype.join.call(arguments, ',');
        // cache中存在原先的计算结果，则直接返回结果
        if (cache[argString]) {
            global.console.log('从缓存3返回的值');
            return cache[argString];
        }
        let temp = 1;
        for (let index = 0; index < arguments.length; index++) {
            const element = arguments[index];
            temp = temp * element;
        }
        cache[argString] = temp;
        return temp;
    }
})();
global.console.log(multi3(4, 6));
global.console.log(multi3(4, 6));
// 24
// 从缓存3返回的值
// 24

const multi4 = (function() {
    let cache = {};
    // 将重复使用到的计算提炼出来
    const caculate = function(arguments) {
        let temp = 1;
        for (let index = 0; index < arguments.length; index++) {
            const element = arguments[index];
            temp = temp * element;
        }
        return temp;
    };
    return function() {
        if (arguments.length === 0) {
            return;
        }
        let argString = Array.prototype.join.call(arguments, ',');
        // cache中存在原先的计算结果，则直接返回结果
        if (cache[argString]) {
            global.console.log('从缓存4返回的值');
            return cache[argString];
        }
        cache[argString] = caculate.call(null, arguments);
        return cache[argString];
    }
})();
global.console.log(multi4(4, 6));
global.console.log(multi4(4, 6));
// 24
// 从缓存4返回的值
// 24

const addData = function() {
    let temp = '';
    return {
      setTemp(value) {
        global.console.log(value);
        temp += value;
      },
      getTemp() {
        return temp;
      },
    };
};
addData().setTemp(3); //3
global.console.log(addData().getTemp());//''

const addData2 = (function() {
  let temp = '';
  return {
    setTemp(value) {
      global.console.log(value);
      temp += value;
    },
    getTemp() {
      return temp;
    },
  };
})();// 此处匿名函数立即执行 才能拿到同一个变量
addData2.setTemp(3);//3
global.console.log(addData2.getTemp());//3