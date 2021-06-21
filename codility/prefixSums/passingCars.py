# A non-empty array A consisting of N integers is given. The consecutive elements of array A represent consecutive cars on a road.

# Array A contains only 0s and/or 1s:

#         0 represents a car traveling east,
#         1 represents a car traveling west.

# The goal is to count passing cars. We say that a pair of cars (P, Q), where 0 ≤ P < Q < N, is passing when P is traveling to the east and Q is traveling to the west.

# For example, consider array A such that:
#   A[0] = 0
#   A[1] = 1
#   A[2] = 0
#   A[3] = 1
#   A[4] = 1

# We have five pairs of passing cars: (0, 1), (0, 3), (0, 4), (2, 3), (2, 4).

# Write a function that, given a non-empty array A of N integers, returns the number of pairs of passing cars.

# The function should return −1 if the number of pairs of passing cars exceeds 1,000,000,000.

################
# Approach: Sum up the array. This will keep track of how many 1s are to the right of the current idx. Loop through array, any time we see a 0, add the rightSum to the pairs variable. Return pairs at the end.
# O(n)t | O(1)s
################
def solution(A):
    if len(A) == 1: return 0

    rightSum = sum(A)
    pairs = 0
    for i in range(len(A)):
        if pairs > 1000000000: return -1
        if A[i]==0: pairs += rightSum
        else: rightSum -= 1
    return pairs


print(solution([0, 1, 0, 1, 1]))
print(solution([0, 1, 0, 1, 1, 1]))
print(solution([1, 1, 0, 1, 1, 1]))
