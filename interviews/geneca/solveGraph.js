/*
Write a function that determines if a path exists between two vertices of a directed graph.

Approach:
Start at a given index in a graph. If we traverse graph and either hit a cycle or hit the end and DON'T see the target node, return false.

Let's try this recursively
*/

function doesPathExist(graph, start, end, visited = {}) {
	visited[start] = true // keep track of visited nodes, in case of cycles

	if (!start) return false // return false at end of path

	// will return true if any of the recursive paths return true
	return graph[start].some((child) => {
		if (child === end) return true
		if (!visited[child]) return doesPathExist(graph, child, end, visited)
	})
}

let graph = {
	a: ['b'],
	b: ['c', 'd'],
	c: ['d'],
	d: [],
}

console.log(doesPathExist(graph, 'a', 'b')) // true
console.log(doesPathExist(graph, 'b', 'a')) // false
console.log(doesPathExist(graph, 'a', 'd')) // true
console.log(doesPathExist(graph, 'a', 'a')) // false
