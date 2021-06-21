# A non-empty array A consisting of N integers is given. A pair of integers (P, Q), such that 0 ≤ P < Q < N, is called a slice of array A (notice that the slice contains at least two elements). The average of a slice (P, Q) is the sum of A[P] + A[P + 1] + ... + A[Q] divided by the length of the slice. To be precise, the average equals (A[P] + A[P + 1] + ... + A[Q]) / (Q − P + 1).

# For example, array A such that:
#     A[0] = 4
#     A[1] = 2
#     A[2] = 2
#     A[3] = 5
#     A[4] = 1
#     A[5] = 5
#     A[6] = 8

# contains the following example slices:

#         slice (1, 2), whose average is (2 + 2) / 2 = 2;
#         slice (3, 4), whose average is (5 + 1) / 2 = 3;
#         slice (1, 4), whose average is (2 + 2 + 5 + 1) / 4 = 2.5.

# The goal is to find the starting position of a slice whose average is minimal.

# Write a function that, given a non-empty array A consisting of N integers, returns the starting position of the slice with the minimal average. If there is more than one slice with a minimal average, you should return the smallest starting position of such a slice.

##########################
# APPROACH: Because of math, we know that the largest avg windows can either be length 2 or 3. So for each index we check a 2length window and a 3length window. As we go we keep track of the minAvg. Because of how we did the indexing, need to manually check the average of the last two elements, outside of the for loop.

# O(n)t | O(1)s
##########################
def minAvgTwoSlice(arr):
  minAvg = float('inf')
  minIdx = 0

  for i in range(len(arr) - 2):
    twoAvg = (arr[i] + arr[i+1]) / 2
    threeAvg = (arr[i] + arr[i+1] + arr[i+2])/ 3

    if twoAvg < minAvg or threeAvg < minAvg:
      minAvg = min(twoAvg, threeAvg)
      minIdx = i

  lastAvg = (arr[len(arr) - 1] + arr[len(arr) - 2]) / 2
  if lastAvg < minAvg: minIdx = len(arr) - 2

  return minIdx

print(minAvgTwoSlice([4, 2, 2, 5, 1, 5, 8]))


# def solution(A):
#     avg = 0
#     minIdx = 0
#     P = 0 # keep track of start of window

#     # save sums
#     sums = [0] * len(A)
#     prefix = 0
#     for i in range(len(A)):
#       prefix += A[i]
#       sums[i] = prefix

#     # calculate averages
#     minAvg = float('inf')
#     for i in range(len(A)):
#       avg = (sums[i] - sums[P] + A[P]) / (1 + i - P)
#       if avg < minAvg:
#         minAvg = avg
#         minIdx = P
#       # reset P (windowStart) to current index if the current value is lower than the minAvg. minAvg can only go down if we see a lower value.
#       if A[i] < minAvg:
#         P = i
#     return minIdx
