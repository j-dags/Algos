
# define TripleSum function
def TripleSum(arr, target, first = 0):
    triplets = []

    for left in range(first, len(arr) - 2):
        # declare middle and right pointers
        middle = left + 1
        right = len(arr) - 1

        while middle < right:
            currSum = arr[left] + arr[middle] + arr[right]
            currArr = [arr[left], arr[middle], arr[right]]

            # save a match
            if currSum == target and currArr not in triplets:
                triplets.append(currArr)
                middle += 1
                right -= 1

            # shrink window if sum is larger/smaller
            if currSum < target: middle += 1
            else: right -= 1

    return triplets


# define QuadrupleSum function
def QuadrupleSum(arr, target):
    quads = []
    arr.sort() # sort input array

    # iterate through input array and call TripleSum function
    for left in range(0, len(arr) - 3):
        triplets = TripleSum(arr, target - arr[left], left + 1)

        for triplet in triplets:
            newQuad = [arr[left]] + triplet # append result of TripleSum to left pointer
            quads.append(newQuad)

    return quads

print(QuadrupleSum([4, 1, 2, -1, 1, -3], 1))
print(QuadrupleSum([2, 0, -1, 1, -2, 2], 2))