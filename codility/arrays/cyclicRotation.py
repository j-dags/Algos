# An array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is moved to the first place. For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] (elements are shifted right by one index and 6 is moved to the first place).

# The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.

# Write a function:

#     def solution(A, K)

# that, given an array A consisting of N integers and an integer K, returns the array A rotated K times.

# For example, given
#     A = [3, 8, 9, 7, 6]
#     K = 3

# the function should return [9, 7, 6, 3, 8].

# O(n)t | O(1)s

def cyclicRotation(A, K):
    if len(A) == 0:return A
    K = K % len(A)
    return A[-K:] + A[:-K]



print(cyclicRotation([-1, -2, -3, -4, -5, -6], 4))
