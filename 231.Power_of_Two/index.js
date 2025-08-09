var isPowerOfTwo = function (n) {
    return n > 0 && !(n & (n - 1))
};

console.log(isPowerOfTwo(1));// true
console.log(isPowerOfTwo(2));// true
console.log(isPowerOfTwo(3));// false

