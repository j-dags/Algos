/*
Given an array and a target integer, determine if any combination of numbers in the array add up to the target value.

Approach:
Dynamic Programming. We can either do bottom up (iteration) or top down (recursion). 
Recursion requires a memo to be more time efficient.

We initialize a set of sums. For each integer in the array, we add that value to all items in the set. 
Those new sums are then pushed into the set -- important that we don't overwrite anything.

O()

*/


// bottom up, iterative dynamic programming. array appraoch
// const subsetSum = (target, nums) => {
//     let sums = [0]

//     for (const num of nums) {
//         let sumsCopy = [...sums] // create copy of the array
//         for (const sum of sumsCopy) {
//             if (sum + num === target) return true
//             if (sum + num < target) sums.push(sum + num)
//         }
//     }
//     return false
// }

// bottom up, iterative dynamic programming. utilize set
// const subsetSum = (target, nums) => {
//     let subSums = new Set([0]) // declare a set to track subSums

//     for (const num of nums) {
//         let sums = new Set(subSums) // make a copy of the subSums
//         for (const sum of sums) {
//             let ans = num + sum // add current element of array (num) to each subSum
//             if (ans === target) return true 
//             if (ans < target) subSums.add(ans) // ignore any subSums that are >= target
//         }
//     }
//     return false
// }

// RECURSION. Top-down. Start at target value and work our way down to zero.
const subsetSum = (target, nums, memo = {}) => {
    // BASE CASES
    if (target < 0) return false
    if (target === 0) return true
    if (!nums.length) return false

    // If memo does not contain current combination of target and array, calculate
    if (!memo[target]) {
        // Recursive subSum that includes current number
        let include = subsetSum(target - nums[0], nums.slice(1), memo)
        // Recursive subSum that excludes current number
        let exclude = subsetSum(target, nums.slice(1), memo)
        
        // Any recursive calls will bubble up true values. Save to memo
        memo[target] = include || exclude
    }
    return memo[target]
}



console.log(subsetSum(11, [1, 10, 5, 3]))
console.log(subsetSum(12, [1, 10, 5, 3]))
console.log(subsetSum(13, [1, 10, 5, 3]))
console.log(subsetSum(19, [1, 10, 5, 3]))