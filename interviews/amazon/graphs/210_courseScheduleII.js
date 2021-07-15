/*
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

    For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.

Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

Repeat:
Given a n courses, and a list of edges [course, prerequisiteCourse]. Determine the order in which a student should take their courses. If not possible, return []

Approach:
Topological sort, specifically this implementation will use BFS.
- Create an adjacency list
- Create an indegree list (how many prerequisites a course has)
- Add courses without prerequisites to the queue
- For each course in the queue:
    - Push the course into answer array
    - For each 'next' course in the adjacency list, dec the indegree
    - If indegree === 0, add the course to the queue (all prereqs have been satisfied)
- At the end, return if ans.length === num courses, otherwise return []

Complexity:
O(v+e)t | O(v)s
This implementation takes up a lot of additional space. Between the adjacencyList and inDegree list and queue and ans that's a lot of additional structures.
*/

const findOrder = (numCourses, prerequisites) => {
	let adjList = {}
	let inDegree = new Array(numCourses).fill(0)
	let queue = []
	let ans = []

	for (let [course, preCourse] of prerequisites) {
		if (!adjList[preCourse]) adjList[preCourse] = []
		adjList[preCourse].push(course)
		inDegree[course]++
	}

	// Start with courses with no prerequisites
	for (let i = 0; i < numCourses; i++) {
		if (inDegree[i] === 0) queue.push(i)
	}

	while (queue.length) {
		let curr = queue.shift()
		ans.push(curr)
		if (!adjList[curr]) continue
		for (let next of adjList[curr]) {
			inDegree[next]--
			if (inDegree[next] === 0) queue.push(next)
		}
	}

	return ans.length == numCourses ? ans : []
}

console.log(
	findOrder(4, [
		[1, 0],
		[2, 0],
		[3, 1],
		[3, 2],
	])
)

console.log(findOrder(2, [[0, 1]]))

console.log(
	findOrder(3, [
		[1, 0],
		[1, 2],
		[0, 1],
	])
)
