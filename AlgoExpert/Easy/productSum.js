function productSum(array, level = 1) {
	let sum = 0
	
	array.forEach(el => {
		if(Array.isArray(el)) sum += productSum(el, level + 1)
		else sum += el
	})
	
	return sum * level
}