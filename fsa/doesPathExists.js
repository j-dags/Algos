/*
Given a directed graph. Determine whether a path exists between two given nodes. The graph will be represented as an object, each of whose keys represents a vertex of the graph and whose value represents all vertices that can be reached from the aforementioned key.

Approach: Implement BFS and DFS to traverse graph.
*/

// BFS TRAVERSAL
const doesPathExist = (graph, start, target, visited = {}) => {
	if (!graph[start]) return false /// Return false if no edges
	let queue = [start]

	while (queue.length) {
		let node = queue.shift() // Shift node out of the queue
		visited[node] = true // Mark current node as visited
		let vertices = graph[node] // Check the connected vertices

		for (const neighbor of vertices) {
			if (neighbor === target) return true // Found our path, return true
			if (!visited[neighbor]) queue.push(neighbor) // Only push unvisited nodes/vertices to the queue
		}
	}
	return false
}

// DFS TRAVERSAL
const doesPathExistDFS = (graph, start, target, visited = {}) => {
	if (!graph[start]) return false // Return false if no edgesz
	visited[start] = true // Mark current node as visited

	// .some() will invoke the callback function on each child vertex. It will return true if any of the vertices return true
	return graph[start].some((vertex) => {
		if (vertex === target) return true // Return true if target found

		// If a vertex is unvisited, recursively call doesPathExist
		if (!visited[vertex]) return doesPathExist(graph, vertex, target, visited)

		return false // Otherwise return false
	})
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

console.log(doesPathExistDFS(graph1, 'a', 'a')) // true
console.log(doesPathExistDFS(graph1, 'c', 'c')) // true
console.log(doesPathExistDFS(graph1, 'r', 's')) // true
console.log(doesPathExistDFS(graph1, 's', 'a')) // false

console.log(doesPathExistDFS(graph2, 'a', 'b')) // true
console.log(doesPathExistDFS(graph2, 'b', 'a')) // false
console.log(doesPathExistDFS(graph2, 'a', 'd')) // true
console.log(doesPathExistDFS(graph2, 'a', 'a')) // false
