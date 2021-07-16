/*
Given a BST and a target value. Find the closest value in the BST.

Approach:
- BFS through the bst and track whichever node is closest.
- We can optimize this by only calling recursion in the direction that gets us closer to target (leverage bst)

*/

class Node {
	constructor(value) {
		this.value = value
		this.left = null
		this.right = null
	}
}

function findClosestValueInBst(tree, target) {
	console.time()
	let ans = -Infinity

	const dfs = (node) => {
		if (!node) return
		ans =
			Math.abs(target - node.value) < Math.abs(target - ans) ? node.value : ans

		if (target < node.value) dfs(node.left)
		if (target > node.value) dfs(node.right)
	}
	dfs(tree)
	console.timeEnd()
	return ans
}

const ten = new Node(10)
ten.left = new Node(5)
ten.left.left = new Node(2)
ten.left.right = new Node(5)
ten.left.left.left = new Node(1)
ten.right = new Node(15)
ten.right.left = new Node(13)
ten.right.right = new Node(22)
ten.right.left.right = new Node(14)

console.log(findClosestValueInBst(ten, 12))
