(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
console.log('Index.js');

var math = require('./math');

var result = math.add(10, 20);
console.log('Result - ', result);
},{"./math":2}],2:[function(require,module,exports){
function add(a, b) {
    console.log(a, b);
    return a + b;
}

function muliply(a, b) {
    console.log(a, b);
    return a * b;
}

module.exports = {
    add: add,
    muliply: muliply
}
},{}]},{},[1]);
