function binarySearch(array, target, leftPt=0, rightPt=array.length-1) {
    // Write your code here.
      let midPt = Math.floor((rightPt+leftPt)/2)
      
      if(rightPt - leftPt > 1) {
          if (target === array[leftPt]) return leftPt
          else if (target === array[midPt]) return midPt
          else if (target === array[rightPt]) return rightPt
          else if (target < array[midPt]) return binarySearch(array, target, leftPt, midPt)
          else if (target > array[midPt]) return binarySearch(array, target, midPt, rightPt)
      }
  
      return -1
  }