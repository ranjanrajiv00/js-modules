define([], function () {
    'use strict';
    function add(a, b) {
        console.log(a, b);
        return a + b;
    }

    function muliply(a, b) {
        console.log(a, b);
        return a * b;
    }

    return {
        add: add,
        muliply: muliply
    }
});