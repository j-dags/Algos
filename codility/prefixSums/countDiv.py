# Write a function that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:

#     { i : A ≤ i ≤ B, i mod K = 0 }

# For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

# Write an efficient algorithm for the following assumptions:

#         A and B are integers within the range [0..2,000,000,000];
#         K is an integer within the range [1..2,000,000,000];
#         A ≤ B.


import math

# just did math on this one
# O(1)t | O(1)
def countDiv(A, B, K):
  return 1 + math.floor(B / K) - math.ceil(A / K)


# this solution works but is too slow. need something more optimized!
# def countDiv(A, B, K):
#     count = 0
#     for i in range(A, B + 1):
#         print('i > ', i)
#         if i % K == 0: count += 1
#     return count

print(countDiv(10, 10, 5))
