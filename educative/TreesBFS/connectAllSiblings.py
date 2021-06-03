from __future__ import print_function


class TreeNode:
  def __init__(self, val):
    self.val = val
    self.left, self.right, self.next = None, None, None

  # tree traversal using 'next' pointer
  def print_tree(self):
    print("Traversal using 'next' pointer: ", end='')
    current = self
    while current:
      print(str(current.val) + " ", end='')
      current = current.next

# straightforward BFS. set each node's next to the next item in the queue
def connect_all_siblings(root):
  queue = [root]

  while queue:
      curr = queue[0]
      queue = queue[1:]

      if curr.left: queue.append(curr.left)
      if curr.right: queue.append(curr.right)

      if queue: curr.next = queue[0]

  return


def main():
  root = TreeNode(12)
  root.left = TreeNode(7)
  root.right = TreeNode(1)
  root.left.left = TreeNode(9)
  root.right.left = TreeNode(10)
  root.right.right = TreeNode(5)
  connect_all_siblings(root)
  root.print_tree()


main()