function tournamentWinner(competitions, results) {
	// Create a hash. key:value => team:team-score
	let hash = {};
	competitions.forEach((competition) => {
		if (!hash[competition[0]]) hash[competition[0]] = 0;
		if (!hash[competition[1]]) hash[competition[1]] = 0;
	});

	// Iterate through scores and assign +3 points to the winner
	for (const match in results) {
		if (results[match] === 0) hash[competitions[match][1]] += 3;
		else hash[competitions[match][0]] += 3;
	}

	// Find the highest scoring team
	let maxScore = 0;
	let winner = null;
	Object.keys(hash).forEach((key) => {
		if (hash[key] > maxScore) {
			maxScore = hash[key];
			winner = key;
		}
	});

	return winner;
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;
