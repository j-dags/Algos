/*
You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and a list of edges where edges[i] = [ai, bi] indicates that there is an undirected edge between nodes ai and bi in the graph.

Return true if the edges of the given graph make up a valid tree, and false otherwise.

Approach:
Build a graph given the edges. Each key is a node and its value is its edges. DFS recurse through the tree and populate a visited object.

IF there are not precisely n-1 edges, return false
IF there are no edges, return true
IF the number of visited nodes === n, return true

O(n)t | O(n)s
*/

var validTree = function (n, edges) {
	if (edges.length !== n - 1) return false
	if (n === 1) return true

	// Build adjacency list
	let graph = {}
	for (const edge of edges) {
		if (!graph[edge[0]]) graph[edge[0]] = []
		if (!graph[edge[1]]) graph[edge[1]] = []

		graph[edge[0]].push(edge[1])
		graph[edge[1]].push(edge[0])
	}

	// Use set to track visited nodes
	let visited = new Set()

	const dfs = function (node) {
		if (visited.has(node)) return
		visited.add(node)
		if (node in graph) {
			for (const child of graph[node]) {
				if (!visited.has(child)) dfs(child)
			}
		}
	}

	dfs(0)
	return visited.size === n
}

let input = [
	[0, 1],
	[1, 2],
	[2, 3],
	[1, 3],
	[1, 4],
]

console.log(validTree(5, input))
