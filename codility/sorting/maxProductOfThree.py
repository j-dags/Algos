# Find the max product of any three elements in an array.

# Approach: Sort array. Then either return the first two elements times the last, or the product of the last three elements.

# O(n)t | O(1)s



def maxProductOfThree(A):
    A.sort()
    negatives = A[0] * A[1] * A[len(A)-1]
    positives = A[len(A)-1] * A[len(A)-2] * A[len(A)-3]

    return positives if positives > negatives else negatives
