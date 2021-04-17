// Feel free to add new properties and methods to the class.
class MinMaxStack {
	constructor() {
		this.stack = []
		// Keep running arrays of mins and maxes
		this.mins = []
		this.maxes = []
	}

	peek() {
		return this.stack[this.stack.length - 1]
	}

	pop() {
		this.mins.pop()
		this.maxes.pop()
		return this.stack.pop()
	}

	// Check new number against previous min and max. Push the new mins and maxes into respective arrays
	push(number) {
		let newMin = number
		let newMax = number
		if (this.mins.length) {
			const lastMin = this.mins[this.mins.length - 1]
			const lastMax = this.maxes[this.maxes.length - 1]
			newMin = Math.min(lastMin, number)
			newMax = Math.max(lastMax, number)
		}
		this.mins.push(newMin)
		this.maxes.push(newMax)
		this.stack.push(number)
	}

	getMin() {
		return this.mins[this.mins.length - 1]
	}

	getMax() {
		return this.maxes[this.maxes.length - 1]
	}
}

// TIME: O(1)
// SPACE: O(1)
