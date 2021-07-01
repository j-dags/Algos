/*
Convert a non-negative integer num to its English words representation.

O(n)t | O(n)s
*/

const ones = {
	1: 'One',
	2: 'Two',
	3: 'Three',
	4: 'Four',
	5: 'Five',
	6: 'Six',
	7: 'Seven',
	8: 'Eight',
	9: 'Nine',
}
const teens = {
	10: 'Ten',
	11: 'Eleven',
	12: 'Twelve',
	13: 'Thirteen',
	14: 'Fourteen',
	15: 'Fifteen',
	16: 'Sixteen',
	17: 'Seventeen',
	18: 'Eighteen',
	19: 'Nineteen',
}

const twos = {
	1: 'Ten',
	2: 'Twenty',
	3: 'Thirty',
	4: 'Forty',
	5: 'Fifty',
	6: 'Sixty',
	7: 'Seventy',
	8: 'Eighty',
	9: 'Ninety',
}

const places = {
	2: 'Hundred',
	3: 'Thousand',
	5: 'Hundred',
	6: 'Million',
	8: 'Hundred',
	9: 'Billion',
}

var numberToWords = function (num) {
	if (num === 0) return 'Zero'
	const arr = String(num).split('').reverse()
	let ans = []

	for (let i = 0; i < arr.length; i++) {
		// Skip over 0s
		if (arr[i] === '0') continue
		// ZEROS/THOUSANDS/MILLIONS/BILLIONS PLACE
		else if (i % 3 === 0) {
			if (arr[i + 1] === '1') continue // Skip to next loop if we're dealing with a number b/w 10 and 19
			if (i > 0) ans.push(places[i])
			ans.push(ones[arr[i]])
		}

		// TENS PLACE
		else if ((i - 1) % 3 === 0) {
			// If we have a number in the teens, or the prev integer was a 0, push places into the array
			if (i > 1) {
				if (arr[i] === '1' || arr[i - 1] === '0') ans.push(places[i - 1])
			}

			// If we have a number in the teens, push both this and prev integer into array
			if (arr[i] === '1') {
				ans.push(teens[arr[i] + arr[i - 1]])
			} else ans.push(twos[arr[i]])
		}

		// HUNDREDS PLACE
		else {
			// Add 'Hundred' if last two digits were 0s
			if (i > 2 && arr[i - 1] === '0' && arr[i - 2] === '0')
				ans.push(places[i - 2])
			ans.push(`${ones[arr[i]]} ${places[i]}`)
		}
	}

	return ans.reverse().join(' ')
}

console.log(numberToWords(0))
console.log(numberToWords(1))
console.log(numberToWords(10))
console.log(numberToWords(20))
console.log(numberToWords(100))
console.log(numberToWords(10000))
console.log(numberToWords(12345))
console.log(numberToWords(50868))
console.log(numberToWords(100000))
console.log(numberToWords(1000000))
console.log(numberToWords(1234567))
console.log(numberToWords(123456789))
console.log(numberToWords(1000000000))
