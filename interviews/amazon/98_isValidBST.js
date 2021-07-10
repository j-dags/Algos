// LEETCODE definiton. Checks (tree.value <= min).
// I don't think this is the correct definition of a BST.
// var isValidBST = function (root) {
// 	const validateBST = (node, low = -Infinity, high = Infinity) => {
// 		if (!node) return true
// 		if (node.val <= low || node.val >= high) return false
// 		return (
// 			validateBST(node.left, low, node.val) &&
// 			validateBST(node.right, node.val, high)
// 		)
// 	}

// 	return validateBST(root)
// }

// ALGOEXPERT definition. Checks (tree.value < min).
// I believe this is the correct definition.
// O(n)t | O(h)s
function validateBst(tree, min = -Infinity, max = Infinity) {
	// If tree is null, return true
	// if (tree === null) return true
	if (!tree) return true
	// If node value is outside allowed range, return false
	if (tree.value < min || tree.value >= max) return false
	// Recurse through left branch, setting max value to current node value
	const leftValid = validateBst(tree.left, min, tree.value)
	// Recurse through right branch, setting min value to current node value
	const rightValid = validateBst(tree.right, tree.value, max)
	// AND branches together. If either is false, return false
	return leftValid && rightValid
}

class Node {
	constructor(val) {
		this.val = val
		this.left = null
		this.right = null
	}
}

let head = new Node(1)
head.right = new Node(1)

console.log(validateBst(head))
