// This is an input class. Do not edit.
class BST {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

function findKthLargestValueInBst(tree, k) {
	return descTraverse(tree, [], k)[k - 1];
}

function descTraverse(tree, arr = [], k) {
	if (tree) {
		if (arr.length >= k) return arr;
		else {
			descTraverse(tree.right, arr, k);
			arr.push(tree.value);
			descTraverse(tree.left, arr, k);
		}
	}
	return arr;
}

/*
TIME: O(h + k)
SPACE: O(k) - arr size of K
*/
