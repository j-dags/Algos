// TOO SLOW
var validPalindrome = function (s) {
	for (let i = 0; i < s.length; i++) {
		let slice = s.slice(0, i).concat(s.slice(i + 1))
		if (slice === slice.split('').reverse().join('')) return true
	}
	return false
}

console.log(validPalindrome('abca'))
console.log(validPalindrome('abbc'))
