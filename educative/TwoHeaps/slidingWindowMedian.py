# Given an array of numbers and a number 'k', find the median of all 'k' sized subarrays in the array.

# Approach:
# Sliding window. We add to and subtract from heaps as we move the window. For each iteration, we push the findMedian() into an arr and return the arr.
# Tricky part is we need to remember to rearrange the heaps as we slide add AND delete values from the heaps.

# O(logn * k)t | O(n)s. Time. Need to iterate through n values, the delete method will take O(k) time because we need to go through all of the heaps and the heap is k, the window size. O(k) because the max heap size will be k.

# Note that the __init__ is similar to constructor(). Assigns the variables to the instance of the class instead of the class itself.


from heapq import *

class SlidingWindowMedian:
  # if we don't declare variables inside __init__ then the heaps will be shared across ALL istances of the class
  def __init__(self):
        self.maxHeap = []
        self.minHeap = []
        self.windowMedians = []

  # insert num method
  def insertNum(self, num):
    if not self.maxHeap or self.maxHeap[0] >= num: heappush(self.maxHeap, num)
    else: heappush(self.minHeap, num)

    self.arrangeHeaps()

  # rearrange heaps method
  def arrangeHeaps(self):
    if len(self.maxHeap) - len(self.minHeap) > 1:
      heappush(self.minHeap, heappop(self.maxHeap))
    if len(self.minHeap) > len(self.maxHeap):
      heappush(self.maxHeap, heappop(self.minHeap))

    # this heap library is NOT self sorting
    self.maxHeap.sort(reverse=True)
    self.minHeap.sort()

  # find median method
  def findMedian(self):
    if len(self.maxHeap) == len(self.minHeap):
      return (self.maxHeap[0] + self.minHeap[0]) / 2
    return self.maxHeap[0]

  # sliding window method
  def findSlidingWindowMedian(self, nums, k):
    start = 0 # define left pointer

    # iterate through nums list
    for end, el in enumerate(nums):
      self.insertNum(nums[end]) # add value at end pointer to heaps

      # shrink window if greater than k
      if (1 + end - start > k):
        # delete nums[start] from heaps
        self.remove(self.maxHeap, nums[start])
        self.remove(self.minHeap, nums[start])

        self.arrangeHeaps()
        start += 1
      #  add median to answer list if window is size k
      if (1 + end - start == k):
        self.windowMedians.append(self.findMedian())

    return self.windowMedians

  # method to remove a value from a heap
  def remove(self, heap, num):
    if num in heap:
      ind = heap.index(num) # find the element in the heap
      del heap[ind]

      self.arrangeHeaps


def main():
  slidingWindowMedian = SlidingWindowMedian()
  result = slidingWindowMedian.findSlidingWindowMedian(
    [1, 2, -1, 3, 5], 2)
  print("Sliding window medians are: " + str(result))

  slide2 = SlidingWindowMedian()
  result2 = slide2.findSlidingWindowMedian(
    [1, 2, -1, 3, 5], 3)
  print("Sliding window medians are: " + str(result2))


main()
