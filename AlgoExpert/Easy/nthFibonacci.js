/*
Given an integer n, return the nth number in the fibonacci sequence.

Approach:
Dynamic programming. Solve for i=2 through n. Store results in an array.

O(n)t | O(1)s. If we fix the array to two indices, we can keep the space complexity to O(1)
*/

function nthFibonacci(n) {
    let lastTwo = [0, 1]
      if (n < 2) return 0 
      if (n === 2) return 1
      
      // Update the array as necessary.
      for (let i = 2; i < n; i++) {
          let newFib = lastTwo[0] + lastTwo[1]
          lastTwo[0] = lastTwo[1]
          lastTwo[1] = newFib
      }
      
      // Return last element in array
      return lastTwo[1]
  }


  console.log(nthFibonacci(2))
  console.log(nthFibonacci(3))
  console.log(nthFibonacci(4))

  console.log(nthFibonacci(6))
  