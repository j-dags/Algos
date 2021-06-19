# An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

# Your goal is to find that missing element.
# Write a function that, given an array A, returns the value of the missing element.

# Approach: Calculate the sum of [1...N+1] -- through math we know that this is equal to (n+1)(n+2)/2. Then we calculate the sum of arr. The difference is the missing number.

# O(n)t | O(1)s

def permMissingElem(arr):
    consecutiveSum = sum(arr)
    arrSum = (len(arr) + 1) * (len(arr) + 2) / 2
    return int(arrSum) - consecutiveSum

print(permMissingElem([1, 2, 3, 1, 5]))
print(permMissingElem([5, 3, 2, 1, 1]))
print(permMissingElem([2, 3, 1, 5]))
