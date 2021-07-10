/*
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
You must solve this problem without using the library's sort function.

Approach:
Dutch National Flag problem. Single-pass implementation. Have a zero pointer and two pointer. Zero pointer starts at 0,
two pointer starts at end of array. We also have a current/middle pointer.
- When we encounter a 0, swap curr and zero pointer. Inc zero/curr pointer
- When we encouter a 2, swap curr and two pointer. Dec two pointer
- When we encounter a 1, incr curr pointer
- While (curr <= p2)

*/


var sortColors = function(nums) {
    let p0 = 0
    let curr = 0
    
    let p2 = nums.length - 1
    while (curr <= p2) {
        if (nums[curr] === 0) {
            [nums[curr], nums[p0]] = [nums[p0], nums[curr]]
            curr++
            p0++
        } else if (nums[curr] === 2) {
            [nums[curr], nums[p2]] = [nums[p2], nums[curr]]
            p2--
        } else curr++
    }
    return nums
};

console.log(sortColors([2,0,2,1]))
console.log(sortColors([2,0,1]))
console.log(sortColors([2,0,1,0,1,2,2,1,0]))