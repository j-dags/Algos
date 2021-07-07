/*
Design a Leaderboard class, which has 3 functions:

    addScore(playerId, score): Update the leaderboard by adding score to the given player's score. If there is no player with such id in the leaderboard, add him to the leaderboard with the given score.
    top(K): Return the score sum of the top K players.
    reset(playerId): Reset the score of the player with the given id to 0 (in other words erase it from the leaderboard). It is guaranteed that the player was added to the leaderboard before calling this function.

Initially, the leaderboard is empty.

Approach:
First thought is to just create an object. I think this will be a slow implementation. If we use it a heap, it should be sorted, no?
*/

class Leaderboard {
	constructor() {
		this.leaderboard = {}
	}

	addScore(playerId, score) {
		if (!this.leaderboard[playerId]) this.leaderboard[playerId] = 0
		this.leaderboard[playerId] += score
	}

	top(K) {
		let scores = Object.values(this.leaderboard).sort((a, b) => b - a)
		return scores.slice(0, K).reduce((a, b) => a + b)

		/*
    More space efficient:
    let ans = 0
    for (let i = 0; i < K; i++) ans += scores[i]
    return ans
    */
	}

	reset(playerId) {
		this.leaderboard[playerId] = 0
	}
}
