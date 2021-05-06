function balancedBrackets(string) {
	let arr = []
	let stack = []
	let matchingBrackets = { '[': ']', '{': '}', '(': ')' }
	let openBrackets = '({['

	for (const char of string) {
		// If character is not a bracket, skip
		if (/([^({[\]})])/.test(char)) continue
		// Push open brackets into stack
		if (openBrackets.includes(char)) stack.push(char)
		else {
			// Compare closing bracket to the top bracket in the stack
			let top = stack.pop()
			if (char !== matchingBrackets[top]) return false
		}
	}
	// If stack is not empty then brackets are imbalanced
	return stack.length === 0
}

// TIME: O(n) - iterate through string
// SPACE: O(n) - stack scales w/ string
