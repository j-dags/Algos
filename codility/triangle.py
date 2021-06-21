# An array A consisting of N integers is given. A triplet (P, Q, R) is triangular if 0 ≤ P < Q < R < N and:

#         A[P] + A[Q] > A[R],
#         A[Q] + A[R] > A[P],
#         A[R] + A[P] > A[Q].

# For example, consider array A such that:
#   A[0] = 10    A[1] = 2    A[2] = 5
#   A[3] = 1     A[4] = 8    A[5] = 20

# Triplet (0, 2, 4) is triangular.

# Write a function that, given an array A consisting of N integers, returns 1 if there exists a triangular triplet for this array and returns 0 otherwise.

#######################
# Approach: Simple here. We sort the array. Since it's sorted, A[i+2] + A[i+1] > A[i] will ALWAYS BE TRUE. Similarly, A[i+2] + A[i] > A[i+1] will ALWAYS BE TRUE. So we only have to check A[i] + A[i + 1] > A[i + 2].
# O(nlogn)t | O(1)s. Time complexity depends on the sorting algorithm.
#######################
def triangle(A):
    A.sort()

    for i in range(len(A) - 2):
      if A[i] + A[i + 1] > A[i + 2]: return 1
    return 0

print(triangle([10, 2, 5, 1, 8, 20]))
