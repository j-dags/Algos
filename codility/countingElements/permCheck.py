# A non-empty array A consisting of N integers is given.

# A permutation is a sequence containing each element from 1 to N once, and only once.

# For example, array A such that:
#     A[0] = 4
#     A[1] = 1
#     A[2] = 3
#     A[3] = 2

# is a permutation, but array A such that:
#     A[0] = 4
#     A[1] = 1
#     A[2] = 3

# is not a permutation, because value 2 is missing.

# The goal is to check whether array A is a permutation.

# Write a function that, given an array A, returns 1 if array A is a permutation and 0 if it is not.

# Write an efficient algorithm for the following assumptions:

#         N is an integer within the range [1..100,000];
#         each element of array A is an integer within the range [1..1,000,000,000].


# O(n)t | O(n)s
def permCheck(A):
    memo = {}
    limit = len(A)

    for element in A:
        if not 1 <= element <= limit: return 0
        else:
            if element in memo: return 0
            else:
                memo[element] = True
    return 1
