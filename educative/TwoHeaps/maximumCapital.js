/*
Given a set of investment projects with their respective profits, we need to find the most profitable projects. We are given an initial capital and are allowed to invest only in a fixed number of projects. Our goal is to choose projects that give us the maximum profit. Write a function that returns the maximum total capital after selecting the most profitable projects.

We can start an investment project only when we have the required capital. Once a project is selected, we can assume that its profit has become our capital.

find_maximum_capital([0, 1, 2], [1, 2, 3], 2, 1) --> 6
find_maximum_capital([0, 1, 2, 3], [1, 2, 3, 5], 3, 0) --> 8
*/

const maximumCapital = (reqCapitals, profits, numProjects, capital) => {
	let start = 0
	debugger
	for (let end = 0; end < profits.length; end++) {
		// if we have enough capital, add project profit to capital
		if (capital >= reqCapitals[end]) capital += profits[end]

		// shrink window
		if (1 + end - start > numProjects) {
			capital -= profits[start]
			start++
		}
	}
	return capital
}

// console.log(maximumCapital([0, 1, 2], [1, 2, 3], 2, 1))
console.log(maximumCapital([0, 1, 2, 3], [1, 2, 3, 5], 3, 0))
