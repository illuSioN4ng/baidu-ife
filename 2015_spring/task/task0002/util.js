/**
 * Created by Administrator on 2016/1/6.
 */
// 判断arr是否为一个数组，返回一个bool值
function isArray1(arr) {//不推荐使用，因为可能会有多窗体(frame)存在，这样每一个窗口都有一个自己的 JavaScript 环境，有自己的全局对象。并且每个全局对象都有自己的一组构造函数。因此一个窗体中的对象不可能是另外窗体中的构造函数的实例。
    // your implement
    console.log(arr instanceof Array);
    return arr instanceof Array;
}

function isArray2(arr) {
    // your implement
    console.log(Object.prototype.toString.call(arr));
    console.log(Object.prototype.toString.call(arr) == '[object Array]');
    return Object.prototype.toString.call(arr) == '[object Array]';
}

function isArray3(arr) {//ES5提供的Array.isArray() 方法
    // your implement
    console.log(Array.isArray(arr));
    return Array.isArray(arr);
}

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
    console.log(typeof fn === "function");
    return typeof fn === "function";
}

var a = [1, 2, 3],
    b = 3,
    c = [{ abac : 1, abc : 2 }];
var d = function(){};
isArray1(a);//true
isArray1(b);//false
isArray1(c);//true
isArray2(a);//[object Array] true
isArray2(b);//[object Number] false
isArray2(c);//[object Array] true
isArray3(a);//true
isArray3(b);//false
isArray3(c);//true
isFunction(a);//false
isFunction(d);//true