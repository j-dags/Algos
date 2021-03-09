function cycleInGraph(edges) {
	// Create array to track visited nodes
	const visited = new Array(edges.length).fill(false)
	// Create array to track parent nodes
	const inStack = new Array(edges.length).fill(false)

	// Iterate through nodes
	for (const node in edges) {
		// Skip visited nodes
		if (visited[node]) continue

		// Perform DFS for node
		const containsCycle = isCycle(node, edges, visited, inStack)
		// If DFS finds a cycle, return true
		if (containsCycle) return true
	}
	// Return false if no cycle
	return false
}

function isCycle(node, edges, visited, inStack) {
	// Set current node as visited
	visited[node] = true
	// Set current node in stack of parent nodes
	inStack[node] = true

	// Iterate through children
	for (const neighbor of edges[node]) {
		// If child node has not been visited, perform DFS. Return true if cycle found
		if (!visited[neighbor]) {
			const containsCycle = isCycle(neighbor, edges, visited, inStack)
			if (containsCycle) return true
		}
		// If parent stack has this node already, return true
		else if (inStack[neighbor]) return true
	}

	// Remove node from parent stack
	inStack[node] = false
	// Return false if no cycles found
	return false
}

// TIME: O(v+e) - have to iterate through all vertices and their edges
// SPACE: O(v) - scales w/ vertices
