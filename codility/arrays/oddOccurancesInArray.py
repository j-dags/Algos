# A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

# Write a function: that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.


def oddOccurancesInArray(A):
    if len(A) == 1:
          return A[0]
    A = sorted(A)       # sort list
    # iterate through every other index
    for i in range(0 , len (A) , 2):
        # if next element is outside list, return last element
        if i+1 == len(A):
            return A[i]
        # if element doesnt match next element, return element
        if A[i] != A[i+1]:
            return A[i]


print(oddOccurancesInArray([9, 3, 9, 3, 9, 7, 9]))
