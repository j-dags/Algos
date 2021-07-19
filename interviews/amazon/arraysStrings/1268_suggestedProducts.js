/*
Given an array of strings products and a string searchWord. We want to design a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have common prefix with the searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.

Return list of lists of the suggested products after each character of searchWord is typed.

Approach:
Found an even simpler one! Similar to my first approach but easier. For each letter in searchWord filter the products array. Then we push the first 3 words into result. NOTE: We set the result of the filter to the products variable. This removes any words that fail in each iteration.

O(products * searchWord)t | O(products)s

*/

// // THIS IS EVEN BETTER
const suggestedProducts = (products, searchWord) => {
	let result = []
	products = products.sort()

	for (let i = 0; i < searchWord.length; ++i) {
		// Redeclaring the value of products will filter out any words that don't work in a given iteration!!
		products = products.filter((product) => product[i] === searchWord[i])
		result.push(products.slice(0, 3))
	}
	return result
}

const test2 = [['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad'], 'mouse']
const test3 = [['havana'], 'havana']
const test4 = [['havana'], 'tatiana']
const test5 = [['bags', 'baggage', 'banner', 'box', 'cloths'], 'bags']
console.log(suggestedProducts(test2[0], test2[1]))
console.log(suggestedProducts(test3[0], test3[1]))
console.log(suggestedProducts(test4[0], test4[1]))
