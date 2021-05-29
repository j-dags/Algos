function findThreeLargestNumbers(array: number[]) {
	// Write your code here.
	return bubbleSorts(array).slice(array.length - 3, array.length)
}

const bubbleSorts = (inputArr: number[]) => {
	let len = inputArr.length
	for (let i = 0; i < len; i++) {
		for (let j = 0; j < len; j++) {
			if (inputArr[j] > inputArr[j + 1]) {
				let tmp = inputArr[j]
				inputArr[j] = inputArr[j + 1]
				inputArr[j + 1] = tmp
			}
		}
	}
	return inputArr
}

console.log(findThreeLargestNumbers([13, 10, 5, 3, 1]))
