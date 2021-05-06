function phoneNumberMnemonics(phoneNumber) {
	const dict = {
		0: '0',
		1: '1',
		2: 'abc',
		3: 'def',
		4: 'ghi',
		5: 'jkl',
		6: 'mno',
		7: 'pqrs',
		8: 'tuv',
		9: 'wxyz',
	}

	let permutations = []

	// Iterate through phone number
	phoneNumber.split('').forEach((num, idx) => {
		let currentPerms = []
		// For each number, iterate through matching letters
		dict[num].split('').forEach((letter) => {
			// Append new letters to each existing permutation of phone numbers
			permutations.forEach((perm) => {
				currentPerms.push(perm.concat(letter))
			})
			if (idx === 0) currentPerms.push(letter)
		})
		permutations = currentPerms
	})
	return permutations
}

// TIME: O(n*4^n)
// SPACE: O(n*4^n)
