/*
You are given a string s and an integer k, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them, causing the left and the right side of the deleted substring to concatenate together.

We repeatedly make k duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It is guaranteed that the answer is unique.

Approach:
1. Use a stack
2. If character matches stack top, increment stack top. Otherwise push new char to stack
3. If character count === k, pop() stack
4. Return the stack joined together

(Tried to do with just strings and it was way slower)
O(n)t | O(n)s
*/

var removeDuplicates = function (str, k) {
	let stack = [[str[0], 1]]
	let arr = str.split('')

	for (let i = 1; i < arr.length; i++) {
		// if char matches increment
		if (stack.length > 0 && arr[i] === stack[stack.length - 1][0])
			stack[stack.length - 1][1] += 1
		// if char doesn't match
		else stack.push([arr[i], 1])
		// if char count === k, remove
		if (stack[stack.length - 1][1] === k) stack.pop()
	}

	return stack
		.map((letter) => {
			let str = ''
			for (let i = 0; i < letter[1]; i++) str += letter[0]
			return str
		})
		.join('')
}

console.log(removeDuplicates('abcd', 2))
console.log(removeDuplicates('deeedbbcccbdaa', 3))
console.log(removeDuplicates('pbbcggttciiippooaais', 2))
console.log(removeDuplicates('yfttttfbbbbnnnnffbgffffgbbbbgssssgthyyyy', 4))
;('ybth')
4
