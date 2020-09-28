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