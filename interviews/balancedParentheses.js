/*
Given a string that consists of left and right parentheses, balance the parentheses by inserting parentheses as necessary. Determine the minimum number of characters that must be inserted.

Approach:
Count how many left and right paren there are, return the difference.

Alternate approach: use a stack and pop off as needed.

*/

// NAIVE. Doesn't work
// const balancedParentheses = (string) => {
// 	let left = 0
// 	let right = 0

// 	for (const char of string) {
// 		if (char === '(') left++
// 		if (char === ')') right++
// 	}

// 	return Math.abs(left - right)
// }

const balancedParentheses = (string) => {
	let open = 0
	let close = 0

	for (const char of string) {
		// If we encounter an opening bracket, increment close
		if (char === '(') close++
		// If we encounter a closing bracket and close is > 0, decrement close
		else if (char === ')' && close > 0) close--
		// Otherwise we encounter a closing bracket and have an excess of closing brackets
		else open++
	}
	return open + close
}

// console.log(balancedParentheses('()))'))
console.log(balancedParentheses('((()())))'))
