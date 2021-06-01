def PairSum(arr, target):
    left = 0;
    right = len(arr) - 1

    while left < right:
        sum = arr[left] + arr[right]
        if sum == target:
            return [left, right]
        elif sum < target:
            left += 1
        else:
            right -= 1
    return false

print(PairSum([1,2,3,4,6], 6))
print(PairSum([2, 5, 9, 11], 11))