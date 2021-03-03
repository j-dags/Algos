function minHeightBst(array, depth = 0) {
	// Find mid point of array
	const mid = Math.floor(array.length / 2);
	// Split array at midpoint
	const leftArr = array.slice(0, mid);
	const rightArr = array.slice(mid + 1, array.length);

	// Create a new tree. Set the tree value to array[mid]
	const tree = new BST(array[mid]);
	// If not at end of node, keep recursing and adding nodes
	if (leftArr.length > 0) tree.left = minHeightBst(leftArr, depth + 1);
	if (rightArr.length > 0) tree.right = minHeightBst(rightArr, depth + 1);

	return tree;
}

// Time: O(n) - Length of array
// Space: O(n) - Length of array
