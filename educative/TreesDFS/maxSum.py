# Given a bst, find the path with the maximum sum.

# Approach: Similar to treeDiameter except instead of checking diameter we'll be checking the sums of the node values along a path. NOTE: need to ignore negative sums

# O(n)t | O(h)s. Need to iterate through all nodes in the tree. Recursive callstack will be max height of the tree.

import math

class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

class MaxSum:
    def __init__(self):
        self.maxSum = -math.inf

    def find_maximum_path_sum(self, root):
        self.maxSum = -math.inf # reset self.maxSum
        self.calcMax(root)
        return self.maxSum

    def calcMax(self, node):
        # base case
        if not node: return 0

        # recursive calls
        left = self.calcMax(node.left)
        right = self.calcMax(node.right)

        # maxSum is equal to max of itself, current node val, or node val + its children
        self.maxSum = max(self.maxSum, node.val, node.val + left + right)

        # bubble up max path up recursive stack
        return node.val + max(left, right)


def main():
  maximumPathSum = MaxSum()

  root = TreeNode(1)
  root.left = TreeNode(2)
  root.right = TreeNode(3)
  print("Maximum Path Sum: " + str(maximumPathSum.find_maximum_path_sum(root)))
  
  root.left.left = TreeNode(1)
  root.left.right = TreeNode(3)
  root.right.left = TreeNode(5)
  root.right.right = TreeNode(6)
  root.right.left.left = TreeNode(7)
  root.right.left.right = TreeNode(8)
  root.right.right.left = TreeNode(9)
  print("Maximum Path Sum: " + str(maximumPathSum.find_maximum_path_sum(root)))

  rut = TreeNode(-1)
  rut.left = TreeNode(-3)
  print("Maximum Path Sum: " + str(maximumPathSum.find_maximum_path_sum(rut)))


main()