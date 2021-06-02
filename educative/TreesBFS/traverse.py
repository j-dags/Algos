

def traverse(head):
  queue = [head]
  result = []

  while len(queue) > 0:
    arr = []
    levelSize = len(queue)

    for i in range(levelSize):
      curr = queue[0]
      queue = queue[1:]

      if curr.left: queue.append(curr.left)
      if curr.right: queue.append(curr.right)
      arr.append(curr.val)

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

print(traverse(one))
