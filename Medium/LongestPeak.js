function longestPeak(array) {
	let max = 0;

	for (let i = 1; i < array.length - 1; i++) {
		let peak = i;
		let leftIdx = i - 2;
		let rightIdx = i + 2;

		// Check if current value is a peak. If not, next iteration.
		const checkPeak = array[i - 1] < array[i] && array[i + 1] < array[i];
		if (!checkPeak) {
			continue;
		}

		// decrement left pointer while it is strictly decreasing
		while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
			leftIdx--;
		}
		// increment right pointer while it is strictly increasing
		while (rightIdx >= 0 && array[rightIdx] < array[rightIdx - 1]) {
			rightIdx++;
		}
		// correct decrement/increment
		leftIdx++;
		rightIdx--;

		// verify no values are the same then check if peak is larger than previous peaks
		if (array[leftIdx] < array[peak] && array[rightIdx] < array[peak]) {
			max = rightIdx - leftIdx > max ? rightIdx - leftIdx + 1 : max;
		}
	}
	return max;
}
