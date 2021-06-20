# A non-empty array A consisting of N integers is given. Array A represents numbers on a tape.
# Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].
# The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|
# In other words, it is the absolute difference between the sum of the first part and the sum of the second part.
# For example, consider array A such that:
#   A[0] = 3
#   A[1] = 1
#   A[2] = 2
#   A[3] = 4
#   A[4] = 3

# We can split this tape in four places:

#         P = 1, difference = |3 − 10| = 7
#         P = 2, difference = |4 − 9| = 5
#         P = 3, difference = |6 − 7| = 1
#         P = 4, difference = |10 − 3| = 7

# Write a function that, given a non-empty array A of N integers, returns the minimal difference that can be achieved.

# ----------------------
# Approach: Keep a left sum and right sum (total). Inc/dec current value from sums as we loop and compare the sums to find the min
# O(n)t | O(1)s

import math

def tapeEquilibrium(A):
    leftSum = 0
    rightSum = sum(A)
    diffMin = math.inf
    for i in range(1, len(A)):
        leftSum += A[i-1]
        rightSum -= A[i-1]

        diffMin = min(diffMin, abs(rightSum - leftSum))
    return diffMin
