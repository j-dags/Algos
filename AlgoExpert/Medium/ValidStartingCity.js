function validStartingCity(distances, fuel, mpg) {
	// Write your code here.

	for (let city in distances) {
		city = parseInt(city);
		let ans = runLoop(distances, fuel, mpg, city);
		// console.log("ans > ", ans, city)
		// console.log('loop > ', runLoop(distances, fuel, mpg, 0))
		if (ans) return city;
	}
	return -1;
}

function runLoop(distances, fuel, mpg, start) {
	let count = start;
	let currFuel = 0;
	for (const i in fuel) {
		let index = i + count;
		console.log(index % fuel.length, currFuel);
		currFuel += fuel[index % fuel.length];
		currFuel -= distances[index % fuel.length] / mpg;
		if (currFuel < 0) return false;
	}
	return true;
}
// Do not edit the line below.
exports.validStartingCity = validStartingCity;
