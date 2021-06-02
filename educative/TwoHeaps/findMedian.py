# import heap library
from heapq import *

# define a heap class
class Median:
  maxHeap = []
  minHeap = []

  # note that we need to pass self into the class method
  # The self parameter is a reference to the current instance of the class, and is used to access variables that belongs to the class.
  def insertNum(self, num):
    if not self.maxHeap or self.maxHeap[0] >= num: heappush(self.maxHeap, num)
    else: heappush(self.minHeap, num)
    self.adjustHeaps()

  # rearrange heaps
  def adjustHeaps(self):
    if len(self.maxHeap) - len(self.minHeap) > 1:
      heappush(self.minHeap, heappop(self.maxHeap))
    elif len(self.minHeap) > len(self.maxHeap):
      heappush(self.maxHeap, heappop(self.minHeap))

    # this heap library is not self sorting? JS library IS self sorting
    self.minHeap.sort()
    self.maxHeap.sort(reverse=True)

  # find median method
  def findMedian(self):
    if len(self.maxHeap) == len(self.minHeap):
      return (self.maxHeap[0] + self.minHeap[0]) / 2
    return self.maxHeap[0]



def main():
  median = Median()
  median.insertNum(3)
  median.insertNum(1)
  print("The median is: " + str(median.findMedian()))
  median.insertNum(5)
  print("The median is: " + str(median.findMedian()))
  median.insertNum(4)
  print("The median is: " + str(median.findMedian()))


main()
