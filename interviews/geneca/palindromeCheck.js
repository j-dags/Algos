/*
Given an string str, create a function that returns a boolean, corresponding to whether that string is a palindrome (spelled the same backwards and forwards). Our palindrome check should be case-insensitive. AVOID using too many JS built in as

*/

// JS built-in
// function palindromeCheck(str) {
// 	str = str.toLowerCase()
// 	return str === str.split('').reverse().join('')
// }

// pointers
function palindromeCheck(str) {
	let left = 0
	let right = str.length - 1
	str = str.toLowerCase()

	while (left < right) {
		if (str[left] !== str[right]) return false
		left++
		right--
	}
	return true
}

console.log(palindromeCheck('racecar'))
console.log(palindromeCheck('car'))
console.log(palindromeCheck('RaceCar'))
