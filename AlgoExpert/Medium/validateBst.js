// This is an input class. Do not edit.
class BST {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

function validateBst(tree, min = -Infinity, max = Infinity) {
	// If tree is null, return true
	if (tree === null) return true;
	// If node value is outside allowed range, return false
	if (tree.value < min || tree.value >= max) return false;
	// Recurse through left branch, setting max value to current node value
	const leftValid = validateBst(tree.left, min, tree.value);
	// Recurse through right branch, setting min value to current node value
	const rightValid = validateBst(tree.right, tree.value, max);
	// AND branches together. If either is false, return false
	return leftValid && rightValid;
}

// TIME: O(N) - Traverse through every single node in the tree
// SPACE: O(D) - Using up space on the callstack. Recursions take up space on the callstack until they're finished. Space complexity relates to longest branch in the tree, hence O(D)
