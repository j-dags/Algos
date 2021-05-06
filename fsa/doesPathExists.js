/*
Given a directed graph. Determine whether a path exists between two given nodes. The graph will be represented as an object, each of whose keys represents a vertex of the graph and whose value represents all vertices that can be reached from the aforementioned key.

Approach: Implement BFS and DFS to traverse graph.
*/

const doesPathExist = (graph, start, target, visited = {}) => {
	if (!graph[start]) return false // Return false if empty graph
	let queue = [start]

	// BFS traversal
	while (queue.length > 0) {
		// Shift node out of the queue
		let node = queue.shift()
		// Mark current node as visited
		visited[node] = true
		// Check the connected vertices
		let neighbors = graph[node]

		for (const neighbor of neighbors) {
			// Found our path, return true
			if (neighbor === target) return true
			// Only push unvisited nodes/vertices to the queue
			if (!visited[neighbor]) queue.push(neighbor)
		}
	}
	return false
}

const graph1 = {
	a: ['a', 'c'],
	c: ['r', 's'],
	r: ['a'],
	s: [],
}

const graph2 = {
	a: ['b'],
	b: ['c', 'd'],
	c: ['d'],
	d: [],
}

console.log(doesPathExist(graph1, 'a', 'a')) // true
console.log(doesPathExist(graph1, 'c', 'c')) // true
console.log(doesPathExist(graph1, 'r', 's')) // true
console.log(doesPathExist(graph1, 's', 'a')) // false

console.log(doesPathExist(graph2, 'a', 'b')) // true
console.log(doesPathExist(graph2, 'b', 'a')) // false
console.log(doesPathExist(graph2, 'a', 'd')) // true
console.log(doesPathExist(graph2, 'a', 'a')) // false
