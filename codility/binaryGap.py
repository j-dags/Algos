# Write a function that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

# For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

# Approach:
# Sliding window. Keep track of max size of 0s as we slide. When end pointer encounters a 1, we take the max of current window and prev largest window. At this point we need to move the start pointer to the end pointer because we will start a new window.

def binaryGap(N):
    binary = f'{N:08b}' # convert int to binary string

    maxZeroes = 0
    start = 0
    arr = list(binary)

    for end, val in enumerate(arr): # sliding window
        # shrink window
        if arr[start] == '0': start += 1

        if val == '1':
            maxZeroes = max(maxZeroes,  end - start - 1)
            start = end # move starting pointer to end pointer
    return maxZeroes
