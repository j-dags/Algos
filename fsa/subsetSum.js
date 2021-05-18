/*
Given an array and a target integer, determine if any combination of numbers in the array add up to the target value.

Approach:
Dynamic Programming. We initialize a set of sums. For each integer in the array, we add that value to all items in the set. 
Those new sums are then pushed into the set -- important that we don't overwrite anything.

O()

*/



const subsetSum = (target, nums) => {
    let sums = [0]

    for (const num of nums) {
        let sumsCopy = [...sums] // create copy of the array
        for (const sum of sumsCopy) {
            if (sum + num === target) return true
            sums.push(sum + num)
        }
    }
    return false
}


console.log(subsetSum(17, [1, 10, 5, 3]))