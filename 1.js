function fib(n) {
    var i;
    var a = 0, b = 1, sum = a + b;
    for (i = 0; i < n - 1; i++) {
        sum = a + b;
        a = b;
        b = sum;
    }
    return sum;
}

module.exports.fib = fib;