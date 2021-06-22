// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.

// Use a stack. Push opening brackets into stack, compare closing brackets to top of stack. Return false if brackets don't match or stack length is > 0.
// O(n)t | O(1)s

var isValid = function (s) {
	const memo = {
		'{': '}',
		'(': ')',
		'[': ']',
	}

	let stack = []

	for (const char of s) {
		if (char in memo) stack.push(char)
		else {
			let top = stack.pop()
			if (char !== memo[top]) return false
		}
	}
	return stack.length === 0
}
