function arrayOfProducts(arr) {
	return arr.map((el, idx) => {
		let arrCopy = [...arr];
		arrCopy.splice(idx, 1);
		return arrCopy.reduce((a, b) => a * b, 1);
	});
}
