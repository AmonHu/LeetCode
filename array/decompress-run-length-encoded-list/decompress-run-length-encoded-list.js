/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
    let arr = [];
    for (let i = 0; i < nums.length; i = i + 2) {
        arr.push(...(new Array(nums[i])).fill(nums[i + 1]));
    }

    return arr;
};

decompressRLElist([1,2,3,4]);