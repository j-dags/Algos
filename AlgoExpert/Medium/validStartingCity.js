// For each starting city, loop through route. If we made it all the way return true
function validStartingCity(distances, fuel, mpg) {
	for (let city in distances) {
		city = parseInt(city);
		let ans = runLoop(distances, fuel, mpg, city);
		if (ans) return city;
	}
	return -1;
}

// Loop through route and return whether we ran out of fuel
function runLoop(distances, fuel, mpg, start) {
	let count = start;
	let currFuel = 0;

	for (const i in fuel) {
		let index = (parseInt(i) + count) % fuel.length;
		if (currFuel < 0) return false;
		currFuel += fuel[index];
		currFuel -= distances[index] / mpg;
		currFuel = Math.round(currFuel * 10) / 10;
	}
	return true;
}

// TIME: O(n) - iterate through distances loop twice (not nested)
// SPACE: O(1) - only storing variables
