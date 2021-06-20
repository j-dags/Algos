# You are given N counters, initially set to 0, and you have two possible operations on them:

#         increase(X) − counter X is increased by 1,
#         max counter − all counters are set to the maximum value of any counter.

# Write a function that, given an integer N and a non-empty array A consisting of M integers, returns a sequence of integers representing the values of the counters.

# Result array should be returned as an array of integers.

# For example, given:
#     A[0] = 3
#     A[1] = 4
#     A[2] = 4
#     A[3] = 6
#     A[4] = 1
#     A[5] = 4
#     A[6] = 4

# the function should return [3, 2, 2, 4, 2], as explained above.


##################################
# This solution LOOKS clean but is slow due to having to recreate the counters array.
# O(n*m)t | O(n)s
##################################
# def solution(N, A):
#     counters = [0] * N

#     for val in A:
#         if (val > N): counters = [max(counters)] * N
#         else: counters[val - 1] += 1
#     return counters


##################################
# This solution is less clean, but is more efficient. We're only updating a 'maxToSet' variable that we will update the array at the very end. In this way, time complexity is kept to O(n)
# O(n)t | O(n)s
##################################
def maxCounters(N, A):
  maxCounter = maxToSet = 0
  counters = [0] * N

  for i in range(len(A)):
    X = A[i] - 1

    if X == N:
      maxToSet = maxCounter
    elif 0 <= X and X < N:
      counters[X] = max(counters[X] + 1, maxToSet + 1)
      maxCounter = max(counters[X], maxCounter)

  for val in counters:
    val = max(val, maxToSet)

  return counters


print(maxCounters(6, [3, 4, 4, 6, 1, 4, 4])) # [3, 2, 2, 4, 2]
