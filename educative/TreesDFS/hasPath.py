# Prompt: Given a binary tree and number S, find if the tree has a path from root-to-leaf such that the sum of all the nodes values in that path equal S.

# Approach: Add each node's value to its parents. As we traverse through the tree, we subtract the current nodes value from the target value. If at any point the current node value === target value we found a valid path.

# O(n)t | O(h)s. Recursive stack is height of BST. In the worst case, this would be O(n) in a single-branch bst.


def hasPath(head, target):
    return calcPath(head, target)

def calcPath(node, target):
    # base case if node is None
    if not node: return False 

    # found a valid path
    if target == node.val and not node.left and not node.right: 
        return True

    # recursive case
    diff = target - node.val
    return calcPath(node.left, diff) or calcPath(node.right, diff)


class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None


root = Node(12)
root.left = Node(7)
root.right = Node(1)
root.left.left = Node(9)
root.right.left = Node(10)
root.right.right = Node(5)

print(hasPath(root, 23))
print(hasPath(root, 28))
print(hasPath(root, 111))
print(hasPath(root, 18))