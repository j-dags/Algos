# Rewriting for python practice

def TripleSum(arr):
    triplets = []
    arr.sort() #sort input array

    # iterate through array. each element will serve as left pointer
    for left in range(0, len(arr) - 2):
        # declare middle and right pointers. Two pointer problem at this point
        middle = left + 1
        right = len(arr) - 1

        while middle < right:
            # skip over duplicated numbers
            while arr[middle] == arr[middle - 1]: 
                middle += 1
            if right < len(arr) == 1:
                while arr[right] == arr[right - 1]: 
                    right -= 1

            currSum = arr[left] + arr[middle] + arr[right]
            currArr = [arr[left], arr[middle], arr[right]]

            # if array sums to 0, save
            # else decrement/increment pointers accordingly
            if currSum == 0 and currArr not in triplets: 
                triplets.append(currArr)
            if currSum < 0: middle += 1
            else: right -= 1
    return triplets


print(TripleSum([-3, 0, 1, 2, -1, 1, -2]))
print(TripleSum([-5, 2, -1, -2, 3]))


# O(n^2)t | O(n)s. Nested loops to O(n^2)t. At most we have 3n array,
# which reduces to n.