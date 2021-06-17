/*
Given an array of grants and a budget, find a cap such that all grants sum to the budget. 
Any grant equal to or great than the cap will be reduced to the cap.

Approach:
Iterate through the (sorted) array. Calculate the sum of the remaining grants and divide but number of grants.
If the new cap is greater than the current grant, save the new cap.

O(nlogn)t | O(1)s
*/

function findGrantsCap(grantsArray, newBudget) {
    let cap = 0
    let arr = grantsArray.sort((a,b) => a - b)

    for (let i = 0; i < grantsArray.length; i++) {
        newBudget -= arr[i]
        let remainder = Math.floor(newBudget / (arr.length - i - 1))

        if (remainder > arr[i]) cap = remainder
    }
    return cap
}

console.log(findGrantsCap([2, 100, 50, 120, 1000], 190))