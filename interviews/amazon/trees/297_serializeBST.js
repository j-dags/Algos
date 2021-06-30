/*
Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Approach:
BFS made more sense to me here.

Serialize:
BFS through tree. When node is a leaf, add nulls for children. While loop at end of function will remove all the null children of the lowest level of the tree.
O(n)t | O(n)s

Deserialize:
Create tree using BFS. We split input string into an array. We use a variable i to keep track of the child nodes within the array. Since its BFS we use a queue to traverse through nodes as we create them.
O(n)t | O(n)s
*/

function TreeNode(val) {
	this.val = val
	this.left = this.right = null
}

var serialize = function (root) {
	let nodes = []
	let queue = [root]

	while (queue.length) {
		let curr = queue.shift()
		curr ? nodes.push(curr.val) : nodes.push('null')

		if (curr) queue.push(curr.left)
		if (curr) queue.push(curr.right)
	}

	// remove nulls at end
	let i = nodes.length - 1
	while (nodes[i] === 'null') i--

	return nodes.slice(0, i + 1).join(',')
}

var deserialize = function (data) {
	if (!data) return null

	let arr = data.split(',') // convert str to arr
	let i = 1 // position to track child nodes
	let root = new TreeNode(arr[0])
	let queue = [root]

	while (queue.length) {
		// set left to appropriate child node or null
		// node that child nodes are tracked in arr, not queue
		let left =
			i >= arr.length || arr[i] === 'null' ? null : new TreeNode(Number(arr[i]))
		// set right to appropriate child node or null
		let right =
			i + 1 >= arr.length || arr[i + 1] === 'null'
				? null
				: new TreeNode(Number(arr[i + 1]))

		i += 2 // increment i + 2 for next set of child nodes

		let root = queue.shift()
		root.left = left
		root.right = right

		if (left) queue.push(left)
		if (right) queue.push(right)
	}
	return root
}

console.log(deserialize('1,2,3,null,null,4,5'))
