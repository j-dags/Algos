function numberOfWaysToTraverseGraph(width, height) {
	if (width === 1 || height === 1) return 1;
	else
		return (
			numberOfWaysToTraverseGraph(width - 1, height) +
			numberOfWaysToTraverseGraph(width, height - 1)
		);
}

/*
TIME: O(2^(w+h)) - 2 recursive calls per recursion
SPACE: O(w+h) - takes us space on the call stack
*/
// Do not edit the line below.
exports.numberOfWaysToTraverseGraph = numberOfWaysToTraverseGraph;
