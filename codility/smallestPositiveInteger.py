# Write a function that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

# Approach:
# Use cyclic sort. Whichever index is out of place will be our answer. Can also just use built in .sort() within Python

# # SORT APPROACH
# def solution(A):
#     for idx, val in enumerate(A):
#         if val < 1: continue

#         target = A[idx] - 1
#         targetVal = A[target]
#         A[target] = A[idx]
#         A[idx] = targetVal

#     if A[-1] < 1: return 1
#     for idx, val in enumerate(A):
#         if A[idx] != idx + 1: return idx + 1
#     return A[-1] + 1

# SIMPLER APPROACH: 1 is the min answer we return. Iterate through the list and if we we see the val of min then increment min.
# O(n)t | O(1)s
def solution(A):
    A.sort()
    min = 1

    for val in A:
        if val == min: min += 1
    return min
