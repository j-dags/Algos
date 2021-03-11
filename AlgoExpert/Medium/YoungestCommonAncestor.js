// This is an input class. Do not edit.
class AncestralTree {
	constructor(name) {
		this.name = name
		this.ancestor = null
	}
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
	// Check depths of each descendant
	let oneDepth = getDepth(descendantOne, topAncestor)
	let twoDepth = getDepth(descendantTwo, topAncestor)
	// Designate lower and higher descendants. Obv lower descendant has greater depth
	const lower = oneDepth > twoDepth ? descendantOne : descendantTwo
	const higher = lower === descendantOne ? descendantTwo : descendantOne
	// Call checkAncestor helper function
	return checkAncestor(lower, higher, Math.abs(oneDepth - twoDepth))
}

// Function to move up BST until descendant meet up at the same node
function checkAncestor(lower, higher, depth) {
	while (depth > 0) {
		lower = lower.ancestor
		depth--
	}
	while (lower !== higher) {
		lower = lower.ancestor
		higher = higher.ancestor
	}
	return lower
}

// Function to check depth of a descendant
function getDepth(descendant, top) {
	let depth = 0
	while (descendant.ancestor) {
		depth++
		descendant = descendant.ancestor
	}
	return depth
}

// TIME: O(n)
// SPACE: O(1)
