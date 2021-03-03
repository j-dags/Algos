function classPhotos(redShirtHeights, blueShirtHeights) {
	// Get height difference at each index
	let difference = redShirtHeights.map(
		(el, idx) => redShirtHeights[idx] - blueShirtHeights[idx]
	);
	return (
		Math.abs(difference.reduce((a, b) => a + b)) === redShirtHeights.length
	);
}

// Do not edit the line below.
exports.classPhotos = classPhotos;
