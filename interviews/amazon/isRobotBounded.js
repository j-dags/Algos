/*
On an infinite plane, a robot initially stands at (0, 0) and faces north. The robot can receive one of three instructions:

    "G": go straight 1 unit;
    "L": turn 90 degrees to the left;
    "R": turn 90 degrees to the right.

The robot performs the instructions given in order, and repeats them forever.

Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.

Approach:
Calculate the change in position/direction from one cycle. The robot will remain in a circle if either, it doesn't change position or it is not facing north.

O(n)t | O(1)s
*/

const isRobotBounded = (instructions) => {
	const moves = [
		[0, 1],
		[1, 0],
		[0, -1],
		[-1, 0],
	]
	let direction = 0 // track what direction robot faces
	let x = 0 // track of robots x-position
	let y = 0 // track of robots y-position

	for (const instruction of instructions) {
		if (instruction === 'G') {
			x += moves[direction][0]
			y += moves[direction][1]
		} else if (instruction === 'L') direction = (direction + 1) % 4
		else direction = (direction + 3) % 4
	}

	// return true if [x,y] === [0, 0] or direction is not north
	return (x === 0 && y === 0) || direction !== 0
}

// // Initial appraoch. Works but is slow.
// var isRobotBounded = function (instructions) {
// 	let directions = {
// 		north: 0,
// 		south: 0,
// 		east: 0,
// 		west: 0,
// 	}
// 	let cardinal = ['north', 'east', 'south', 'west']
// 	let pointing = 0

// 	for (const instruction of instructions) {
// 		if (instruction === 'G') directions[cardinal[pointing]]++
// 		else if (instruction === 'L') pointing = (pointing + 3) % 4
// 		else pointing = ++pointing % 4
// 		console.log(instruction, cardinal[pointing])
// 	}

// 	let moved =
// 		directions['north'] -
// 		directions['south'] +
// 		directions['east'] -
// 		directions['west']

// 	return moved === 0 || pointing !== 0
// }
