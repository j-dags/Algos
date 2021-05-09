/*
Given a binary tree, find the length of its diameters. The diameter of a tree is the number of nodes on the longest path between any two leaf nodes. The diameter of a tree may or may not pass through the route.

Approach: Traverse through the tree in a DFS manner and keep track of depth as we treverse (but in reverse order, i.e. a leaf has a depth of 1, the node above has a depth 2, etc.). The max diameter will be the node with the two greatest depths of children summed together.

My approach was pretty much spot on! Could simplify by not having to declare and invoke a function though. Let's attempt to further simplify. Update: defined the calcDiameter class method instead of declaring and invoking a helper function within the find_Diameter method.
*/

class TreeNode {
	constructor(val) {
		this.val = val
		this.left = null
		this.right = null
	}
}

class TreeDiameter {
	constructor() {
		this.treeDiameter = 0
	}

	find_diameter(root) {
		this.calcDiameter(root)
		return this.treeDiameter
	}

	calcDiameter(head) {
		if (!head) return 0 // Return 0 depth is node is null

		// Define vars left and right that are either 0 or the depths of each child path.
		let left = this.calcDiameter(head.left) || 0
		let right = this.calcDiameter(head.right) || 0
		this.treeDiameter = Math.max(this.treeDiameter, 1 + left + right) // Update max if we find a larger diameter

		return 1 + Math.max(left, right) // Return depth of node
	}
}

var treeDiameter = new TreeDiameter()
var root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(5)
root.right.right = new TreeNode(6)
console.log(`Tree Diameter: ${treeDiameter.find_diameter(root)}`)
root.left.left = null
root.right.left.left = new TreeNode(7)
root.right.left.right = new TreeNode(8)
root.right.right.left = new TreeNode(9)
root.right.left.right.left = new TreeNode(10)
root.right.right.left.left = new TreeNode(11)
console.log(`Tree Diameter: ${treeDiameter.find_diameter(root)}`)
