// Sets allow only unique values and have other methods (.has and .add). Acts similar to array answer
function firstDuplicateValue(arr) {
	let prevArr = new Set();
	for (const val of arr) {
		if (prevArr.has(val)) return val;
		prevArr.add(val);
	}
	return -1;
}

// Witchcraft answer. Use element value as its own index. If we saw that value before then the current value at said index should be negative.
// Time - O(n) | Space - O(1)
function firstDuplicateValue(array) {
	for (const value of array) {
		let absVal = Math.abs(value);
		if (array[absVal - 1] < 0) return absVal;
		array[absVal - 1] *= -1;
	}
	return -1;
}
