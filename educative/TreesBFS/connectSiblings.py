# Prompt: Given a bst, connect each node with its level order successor. The last node of each level should point to the first node of the next level
# Approach: Traverse through the tree. Set curr.right? equal to the next sibling node.
# O(n)t | O(n)s

def connectSiblings(head):
    queue = [head]

    while queue:
        levelSize = len(queue)

        # keep track of each level of the tree
        while(levelSize):
            curr = queue[0]
            queue = queue[1:]

            if curr.left: queue.append(curr.left)
            if curr.right: queue.append(curr.right)

            # if curr is not the last element in the level, set its curr.next to the next node
            if levelSize > 1: curr.next = queue[0]
            levelSize -= 1
            
    return head



class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
        self.next = None

one = Node(1)
two = Node(2)
three = Node(3)
four = Node(4)
five = Node(5)
six = Node(6)
seven = Node(7)

one.left = two
one.right = three
two.left = four
two.right = five
three.left = six
three.right = seven

print(connectSiblings(one))