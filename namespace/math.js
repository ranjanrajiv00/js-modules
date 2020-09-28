function add(a, b) {
    console.log(a, b);
    return a + b;
}

function muliply(a, b) {
    console.log(a, b);
    return a * b;
}

window.App = window.App || {};
window.App.math = {
    add: add,
    muliply: muliply
};