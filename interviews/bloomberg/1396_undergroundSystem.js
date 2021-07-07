/*
An underground railway system is keeping track of customer travel times between different stations. They are using this data to calculate the average time it takes to travel from one station to another.

Implement the UndergroundSystem class:

    void checkIn(int id, string stationName, int t)
        A customer with a card ID equal to id, checks in at the station stationName at time t.
        A customer can only be checked into one place at a time.
    void checkOut(int id, string stationName, int t)
        A customer with a card ID equal to id, checks out from the station stationName at time t.
    double getAverageTime(string startStation, string endStation)
        Returns the average time it takes to travel from startStation to endStation.
        The average time is computed from all the previous traveling times from startStation to endStation that happened directly, meaning a check in at startStation followed by a check out from endStation.
        The time it takes to travel from startStation to endStation may be different from the time it takes to travel from endStation to startStation.
        There will be at least one customer that has traveled from startStation to endStation before getAverageTime is called.

You may assume all calls to the checkIn and checkOut methods are consistent. If a customer checks in at time t1 then checks out at time t2, then t1 < t2. All events happen in chronological order.


*/

class UndergroundSystem {
	constructor() {
		this.checkins = new Map()
		this.routes = new Map()
	}

	checkIn(id, stationName, t) {
		this.checkins.set(id, [stationName, t]) // map will only ever store one trip at a time
	}

	checkOut(id, stationName, t) {
		let [stn, start] = this.checkins.get(id) // grab trip from this.checkins
		let route = stn + ',' + stationName // ex: route = 'Leyton,Paradise'
		this.checkins.delete(id) // clear out the checkin

		if (!this.routes.has(route)) this.routes.set(route, [0, 0]) // create blank route if it doesn't exist
		let trip = this.routes.get(route) // grab route (this route is the cumulative sum of all prev trips matching source and dest)
		trip[0]++ // inc number of trips
		trip[1] += t - start // inc travel time
	}

	getAverageTime(startStation, endStation) {
		let [count, sum] = this.routes.get(startStation + ',' + endStation)
		return sum / count
	}
}

// ----------------------------------
// Original implementation. Using two objects. Good if we want to save all the prev data, but didn't pass all the test cases.
// ----------------------------------

// class UndergroundSystem {
// 	constructor() {
// 		this.users = {}
// 		this.stations = {}
// 	}

// 	checkIn(id, stationName, time) {
// 		// check if user exists in hash
// 		if (!this.users[id])
// 			this.users[id] = [
// 				{
// 					departed: time,
// 					arrived: null,
// 					startStation: stationName,
// 					endStation: null,
// 				},
// 			]
// 		else {
// 			const len = this.users[id].length - 1
// 			const lastTrip = this.users[id][len]

// 			// check if user currently in transit
// 			if (lastTrip.arrived === null) {
// 				lastTrip.arrived = time
// 			}
// 			// add a departure time
// 			else
// 				this.users[id].push({
// 					departed: time,
// 					arrive: null,
// 					startStation: stationName,
// 					endStation: null,
// 				})
// 		}
// 	}
// 	checkOut(id, stationName, time) {
// 		// check if user exists
// 		if (!this.users[id]) console.log('User doesnt exist!')
// 		else {
// 			const len = this.users[id].length - 1
// 			const lastTrip = this.users[id][len]

// 			if (lastTrip.arrived !== null) console.log('User already arrived!')
// 			else if (time <= lastTrip.departed) console.log('User went back in time!')
// 			else {
// 				lastTrip.arrived = time
// 				lastTrip.endStation = stationName
// 			}
// 			// SAVE TRIP TO this.stations
// 			if (!this.stations[lastTrip.startStation])
// 				this.stations[lastTrip.startStation] = []
// 			this.stations[lastTrip.startStation].push(lastTrip)
// 		}
// 	}
// 	getAverageTime(startStation, endStation) {
// 		let numTrips = 0

// 		const totalTripTime = this.stations[startStation].reduce((a, b) => {
// 			if (b.endStation === endStation) {
// 				numTrips++
// 				a += b.arrived - b.departed
// 			}
// 			return a
// 		}, 0)

// 		return totalTripTime / numTrips
// 	}
// }

const system = new UndergroundSystem()
console.log(system.checkIn(45, 'Leyton', 3))
console.log(system.checkIn(32, 'Paradise', 8))
console.log(system.checkIn(27, 'Leyton', 10))
console.log(system.checkOut(45, 'Waterloo', 15)) // Customer 45 "Leyton" -> "Waterloo" in 15-3 = 12
console.log(system.checkOut(27, 'Waterloo', 20)) // Customer 27 "Leyton" -> "Waterloo" in 20-10 = 10
console.log(system.checkOut(32, 'Cambridge', 22)) // Customer 32 "Paradise" -> "Cambridge" in 22-8 = 14
console.log(system.getAverageTime('Paradise', 'Cambridge')) // return 14.00000. One trip "Paradise" -> "Cambridge", (14) / 1 = 14
console.log(system.getAverageTime('Leyton', 'Waterloo')) // return 11.00000. Two trips "Leyton" -> "Waterloo", (10 + 12) / 2 = 11
console.log(system.checkIn(10, 'Leyton', 24))
console.log(system.getAverageTime('Leyton', 'Waterloo')) // return 11.00000
console.log(system.checkOut(10, 'Waterloo', 38)) // Customer 10 "Leyton" -> "Waterloo" in 38-24 = 14
console.log(system.getAverageTime('Leyton', 'Waterloo'))
