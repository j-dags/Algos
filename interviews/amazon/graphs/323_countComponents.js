/*
You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.

Return the number of connected components in the graph.

Approach:
Use union-find algorithm
- Initialize array [0,1...n-1]. Represents root node for each node.
- For each node find the root node and save to array
- Loop through 0...n-1. For each i, find the root node and add to set
- Return set size

O(v+e)t | O(v)s
*/

// Union Find
const countComponents = (n, edges) => {
	const ids = [...Array(n).keys()] // Initialize array [0...n-1]

	// Find helper function. Gets the representative/root node
	const getRoot = (node) => {
		if (node !== ids[node]) return getRoot(ids[node])
		return node
	}

	// Union helper function. Merges/union representative nodes.
	const connect = ([a, b]) => {
		const start = getRoot(a)
		const end = getRoot(b)
		ids[end] = start // end's root node becomes start
	}

	edges.forEach(connect) // Union-find nodes. Note, only performs one pass so may not merge all paths.

	const set = new Set()
	for (let i = 0; i < n; i++) {
		set.add(getRoot(i))
	}

	return set.size
}

// // DFS Implementation
// const countComponents = (n, edges) => {
// 	let adjList = {}
// 	let visited = new Set()
// 	let groups = 0

// 	// Populate an adjacency list
// 	for (const [start, end] of edges) {
// 		if (!adjList[start]) adjList[start] = []
// 		if (!adjList[end]) adjList[end] = []

// 		adjList[start].push(end)
// 		adjList[end].push(start)
// 	}

// 	// DFS helper function
// 	const dfs = (node) => {
// 		visited.add(node)
// 		for (const child of adjList[node]) {
// 			if (!visited.has(child)) dfs(child)
// 		}
// 	}

// 	// Iterate through 0...n-1. If node hasn't already been visited, call dfs helper function
// 	for (let i = 0; i < n; i++) {
// 		if (!visited.has(i)) {
// 			groups++
// 			if (adjList[i]) dfs(i)
// 		}
// 	}
// 	return groups
// }

console.log(
	countComponents(4, [
		[2, 3],
		[1, 2],
		[1, 3],
	])
)

console.log(
	countComponents(5, [
		[0, 1],
		[1, 2],
		[3, 4],
	])
)

// 	return groups
// }

// BFS implementation
// var countComponents = function (n, edges) {
// 	let adjList = {}
// 	let groups = 0
// 	for (const [start, end] of edges) {
// 		if (!adjList[start]) adjList[start] = []
// 		if (!adjList[end]) adjList[end] = []

// 		adjList[start].push(end)
// 		adjList[end].push(start)
// 	}

// 	let visited = {}
// 	for (let i = 0; i < n; i++) {
// 		if (i in visited) continue
// 		if (!adjList[i]) {
// 			groups++
// 			continue
// 		}
// 		groups++
// 		let queue = [i]

// 		while (queue.length) {
// 			let curr = queue.shift()
// 			visited[curr] = true

// 			for (const child of adjList[curr]) {
// 				if (!visited[child]) queue.push(child)
// 			}
// 		}
// 	}
// 	return groups
// }

module.exports = countComponents
