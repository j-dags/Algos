// Push to array in between left and right recursive calls
function inOrderTraverse(tree, arr = []) {
	if (tree) {
		inOrderTraverse(tree.left, arr);
		arr.push(tree.value);
		inOrderTraverse(tree.right, arr);
	}
	return arr;
}

// Push to array before recursive calls
function preOrderTraverse(tree, arr = []) {
	if (tree) {
		arr.push(tree.value);
		preOrderTraverse(tree.left, arr);
		preOrderTraverse(tree.right, arr);
	}
	return arr;
}

// Push to array after recursive calls
function postOrderTraverse(tree, arr = []) {
	if (tree) {
		postOrderTraverse(tree.left, arr);
		postOrderTraverse(tree.right, arr);
		arr.push(tree.value);
	}
	return arr;
}

/*
TIME: O(N) - Hit each node in the tree
SPACE: O(N) - Arr prop to N nodes
*/
