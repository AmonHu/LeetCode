/**
 * 位运算取位
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    let count = 0;
    while (n) {
        count += n & 1;
        n = n >>> 1;
    }

    return count;
};