/*
You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and a list of edges where edges[i] = [ai, bi] indicates that there is an undirected edge between nodes ai and bi in the graph.

Return true if the edges of the given graph make up a valid tree, and false otherwise.
*/

/* ----------------------------
Union find Implementation
- Create a root array to keep track of representative/root nodes for each node
- For each edge in edges, find the roots of the start/end nodes. Set the idx of the end note in roots equal to the root of the start node.
			i.e. roots[end] = start
- Iterate from 0 to n-1. For each i, find the root node and add it to a set
- If there are more than 1 element in set, that means graph/tree is not fully connected.

O(n)t | O(n)s
---------------------------- */

const validTree = (n, edges) => {
	if (edges.length !== n - 1) return false
	if (n === 1) return true
	let roots = [...Array(n).keys()]

	// find helper function
	const find = (x) => {
		if (roots[x] !== x) return find(roots[x])
		return x
	}

	// union helper function
	const union = ([a, b]) => {
		const start = find(a)
		const end = find(b)
		roots[end] = start
	}

	const set = new Set()
	edges.forEach(union)

	for (let i = 0; i < n; i++) {
		let root = find(i)
		set.add(root)
	}

	return set.size === 1
}

let input = [
	[0, 1],
	[0, 2],
	[0, 3],
	[1, 4],
]

console.log('UF > ', validTree(5, input))

/* ----------------------------
DFS Implementation
- Create an adjacency list from the list of edges
- Starting with node 0, DFS through adjacency list. Keeping track of visited nodes as we go
- If number of visited nodes !== n then we don't have a connected tree

O(n)t | O(n)s
---------------------------- */
var validTreeDFS = function (n, edges) {
	console.time()
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
	console.timeEnd()
	return visited.size === n
}

console.log('DFS > ', validTreeDFS(5, input))
