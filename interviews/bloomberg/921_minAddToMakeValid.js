/*
Given a string s of '(' and ')' parentheses, we add the minimum number of parentheses ( '(' or ')', and in any positions ) so that the resulting parentheses string is valid.

Formally, a parentheses string is valid if and only if:

    It is the empty string, or
    It can be written as AB (A concatenated with B), where A and B are valid strings, or
    It can be written as (A), where A is a valid string.

Given a parentheses string, return the minimum number of parentheses we must add to make the resulting string valid.

Approach:
We can't just count opens/closes and return the difference because we need to keep track of balance as we go. "openSurplus" variable keeps track of how many more opening brackets there are than closing brackets. If there are more closing brackets, we inc "closedSurplus"
*/

const minAddToMakeValid = (s) => {
	let openSurplus = 0
	let closedSurplus = 0

	for (const char of s) {
		if (char === '(') openSurplus++
		else if (openSurplus > 0) openSurplus--
		else closedSurplus++
	}
	return openSurplus + closedSurplus
}
