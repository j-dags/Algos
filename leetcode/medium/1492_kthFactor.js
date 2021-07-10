/*
Prompt: Given two positive integers n and k. A factor is an integer defined as n % i === 0. Return the kth factor of n, return -1 otherwise.

Approach: Loop from 1 to n. Have a counter. When we find a factor, increment counter. Return i if counter === k.
*/


const kthFactor = (n, k) => {
    let count = 0

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) count++
        if (count === k) return i
    }
    return -1
}


console.log(kthFactor(12, 3))
console.log(kthFactor(7, 2))
console.log(kthFactor(4, 4))