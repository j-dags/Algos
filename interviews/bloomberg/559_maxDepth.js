/*
Given a n-ary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

Approach:
Call DFS on all node children.
Return 1 + max(children)

O(n)t | O(h)s
*/

class Node {
	constructor(val, children = null) {
		this.val = val
		this.children = children
	}
}

var maxDepth = function (root) {
	if (!root) return 0
	if (!root.children) return 1
	// if (root.children.length < 1) return 1 // Use this for leetcode. Something about how their Node class is defined.

	return 1 + Math.max(...root.children.map((child) => maxDepth(child)))
}

const six = new Node(6)
const five = new Node(5)
const four = new Node(4)
const three = new Node(3, [six, five])
const two = new Node(2)
const one = new Node(1, [two, three, four])

console.log(maxDepth(one))
