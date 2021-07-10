/*
Given three instances of an AncestralTree class that have an ancestor (parent) property, return the youngest common ancestor of the second two inputs.

Note that a descendant is considered its own ancestor.

1. Find depths of nodes
2. Iterate up to matching node depths
3. Traverse up tree until nodes match (this is youngest ancestor)

*/

class AncestralTree {
	constructor(name) {
		this.name = name
		this.ancestor = null
	}
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
	const depthOne = getDepth(topAncestor, descendantOne)
	const depthTwo = getDepth(topAncestor, descendantTwo)
	const deepNode = depthOne > depthTwo ? descendantOne : descendantTwo
	const shallowNode = depthOne > depthTwo ? descendantTwo : descendantOne

	return findCommonAncestor(
		deepNode,
		shallowNode,
		Math.abs(depthOne - depthTwo)
	)
}

function getDepth(root, target) {
	let depth = 0
	while (root !== target) {
		target = target.ancestor
		depth++
	}
	return depth
}

function findCommonAncestor(deepNode, shallowNode, depth) {
	while (depth > 0) {
		deepNode = deepNode.ancestor
		depth--
	}
	while (deepNode !== shallowNode) {
		deepNode = deepNode.ancestor
		shallowNode = shallowNode.ancestor
	}
	return deepNode
}
