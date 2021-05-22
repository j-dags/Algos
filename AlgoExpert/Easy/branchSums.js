// This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function branchSums(root) {
    let arr = []
      calcSums(root, 0, arr)
      return arr
  }
  
  const calcSums = (node, sum, arr) => {
      sum += node.value
      
      if (!node.left && !node.right) arr.push(sum)
      
      if (node.left) calcSums(node.left, sum, arr)
      if (node.right) calcSums(node.right, sum, arr)
  }
  
const one = new BinaryTree(1)
one.left = new BinaryTree(2)
one.right = new BinaryTree(3)
one.left.left = new BinaryTree(4)
one.left.right = new BinaryTree(5)
one.right.left = new BinaryTree(6)
one.right.right = new BinaryTree(7)
one.left.left.left = new BinaryTree(8)
one.left.left.right = new BinaryTree(9)
one.left.right.left = new BinaryTree(10)

console.log(branchSums(one))