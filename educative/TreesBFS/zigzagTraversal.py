def zigzagTraversal(root):
  queue = [root] # initialize queue to root node
  result = []

  while queue: # iterate through loop while queue is not empty
    arr = []
    # levelSize prevents us from looping pasts current level in queue
    levelSize = len(queue)

    for _ in range(levelSize):
      # these two lines act as .shift() method
      curr = queue[0]
      queue = queue[1:]

      # .unshift() curr.val on odd levels
      if len(result) % 2 == 0: arr.append(curr.val)
      else: arr = [curr.val] + arr

      # add child nodes to queue
      if curr.left: queue.append(curr.left)
      if curr.right: queue.append(curr.right)

    result.append(arr)
  return result


class Node:
  def __init__(self, val):
    self.val = val
    self.right = None
    self.left = None

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

print(zigzagTraversal(one))
