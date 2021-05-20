/*
Given an input with the api url, unix time, and API key, make a fetch to the api and return the data, essentially. User needs to convert the unixTime to utcTime and include the day of the week, hours, and minutes as req parameters.

*/

const whereCanIEat = (inputData) => {
	const [url, unixTime, apiKey] = inputData.split('\n')

	const ms = unixTime * 1000
	const date = new Date(ms)
	console.log(date, date.toUTCString(), date.getDay())
}

console.log(whereCanIEat(`http://wtv.com\n1575909015\nZvjklsdmF89fjd`))
