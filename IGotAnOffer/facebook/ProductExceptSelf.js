/* O(n)t | O(1)s space excluding product ray
I have NO idea what algorithm this is

Apparently first pass gets the products before the target number. I think because we are setting the product equal to left before multiplying. Similarly, the second pass gets the products before the target number, but on the other side.

*/
const ProductExceptSelf = (nums) => {
	let left = 1
	let right = 1
	let product = []

	for (let i = 0; i < nums.length; i++) {
		product[i] = left
		left *= nums[i]
	}
	for (let i = nums.length - 1; i > -1; i--) {
		product[i] = right * product[i] // left * right
		right *= nums[i]
	}
	return product
}

console.log(ProductExceptSelf([-1, 1, 0, -3, 3]))
console.log(ProductExceptSelf([0, 0]))
console.log(ProductExceptSelf([1, 2, 3, 4]))
