/*
You are given a list of airline tickets where tickets[i] = [fromi, toi] represent the departure and the arrival airports of one flight. Reconstruct the itinerary in order and return it.

All of the tickets belong to a man who departs from "JFK", thus, the itinerary must begin with "JFK". If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string.

    For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].

You may assume all tickets form at least one valid itinerary. You must use all the tickets once and only once.

Approach:
1. build an adjacency list
2. sort adjacency list
3. DFS through adjaceny list (starting at JFK). If there are no more adjacent nodes, add current node to result
4. Return node reversed

*/

// var findItinerary = function (tickets) {
// 	let result = []
// 	let adjacencyList = {}

// 	// create adj list
// 	for (const ticket of tickets) {
// 		if (!adjacencyList[ticket[0]]) adjacencyList[ticket[0]] = []
// 		adjacencyList[ticket[0]].push(ticket[1])
// 	}

// 	//sort adj list
// 	for (let ticket in adjacencyList) {
// 		adjacencyList[ticket].sort()
// 	}

// 	// dfs + backtracking
// 	function dfs(dep) {
// 		let destination = adjacencyList[dep]
// 		while (destination && destination.length) {
// 			dfs(destination.shift())
// 		}
// 		result.push(dep)
// 	}

// 	dfs('JFK')
// 	return result.reverse()
// }

let itinerary = [
	['JFK', 'SFO'],
	['JFK', 'ATL'],
	['SFO', 'ATL'],
	['ATL', 'JFK'],
	['ATL', 'SFO'],
]

console.log(findItinerary(itinerary))
