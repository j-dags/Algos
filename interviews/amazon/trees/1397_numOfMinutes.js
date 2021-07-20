/*
A company has n employees with a unique ID for each employee from 0 to n - 1. The head of the company is the one with headID.

Each employee has one direct manager given in the manager array where manager[i] is the direct manager of the i-th employee, manager[headID] = -1. Also, it is guaranteed that the subordination relationships have a tree structure.

The head of the company wants to inform all the company employees of an urgent piece of news. He will inform his direct subordinates, and they will inform their subordinates, and so on until all employees know about the urgent news.

The i-th employee needs informTime[i] minutes to inform all of his direct subordinates (i.e., After informTime[i] minutes, all his direct subordinates can start spreading the news).

Return the number of minutes needed to inform all the employees about the urgent news.

Approach:
Tree DFS
- Build adjacency list
- Traverse through each node
- For each node:
  - have a max variable. max = current employes inform time + the max of their child employeess
- Return dfs(headId)

O(n)t | O(n)s
*/

/*
Greedy algorithm
O(n) | O(1)
Don't need extra space!
- Bottom-up approach: each index in informTime will store how long it takes to get from that employee to the top
- Calculate informTime array then return the max value
*/
function numOfMinutes(n, headId, manager, informTime) {
	const informCostIt = (_, id) => {
		let next = manager[id]
		while (next !== -1) {
			informTime[id] += informTime[next] // informTime array becomes sum for each employee
			next = manager[next] // move up manager chain until we hit -1 (head or prev visited employee)
		}

		manager[id] = -1 // mark employee as visited
		return informTime[id]
	}

	// return Math.max(...manager.map((_, idx) => informCostIt(idx)))
	return Math.max.apply(null, manager.map(informCostIt))
}

// var numOfMinutes = function (n, headID, manager, informTime) {
// 	const adjList = {}

// 	for (let i = 0; i < manager.length; i++) {
// 		if (manager[i] === -1) continue
// 		manager[i] in adjList
// 			? adjList[manager[i]].push(i)
// 			: (adjList[manager[i]] = [i])
// 	}

// 	const dfs = (node) => {
// 		let max = 0
// 		if (!adjList[node]) return 0
// 		for (const child of adjList[node]) {
// 			max = Math.max(max, dfs(child))
// 		}
// 		return max + informTime[node]
// 	}

// 	return dfs(headID)
// }

const input = [8, 0, [-1, 5, 0, 6, 7, 0, 0, 0], [89, 0, 0, 0, 0, 523, 241, 519]]
console.log(numOfMinutes(...input))
