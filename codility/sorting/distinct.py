# Return the number of unique integers in an array.

# O(n)t | O(1)s
def distinct(A):
    if len(A) == 0: return 0
    A.sort()
    unique = 0
    for i in range(len(A) - 1):
        if A[i] != A[i+1]: unique += 1
    return unique + 1


print(distinct([2, 1, 1, 2, 3, 1]))
