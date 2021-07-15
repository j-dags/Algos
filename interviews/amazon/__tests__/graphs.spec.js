const countComponents = require('../graphs/323_countComponents')
const validTree = require('../graphs/261_validTree')

describe('LC323_countComponents', () => {
	test('It should return the number of connected components in a graph', () => {
		// prettier-ignore
		expect(countComponents(5, [[0,1],[1,2],[3,4]])).toEqual(2)
		// prettier-ignore
		expect(countComponents(5, [[0,1],[1,2],[2,3],[3,4]])).toEqual(1)
	})
})

describe('LC261_validTree.js', () => {
	test('It should return true if a graph is a valid tree', () => {
		// prettier-ignore
		expect(validTree(5, [[0,1],[0,2],[0,3],[1,4]])).toEqual(true)
	})

	test('It should return false if the number of edges does not equal nodes - 1', () => {
		// prettier-ignore
		expect(validTree(5, [[0,1],[1,2],[2,3],[1,3],[1,4]])).toEqual(false)
	})

	test('It should return true if the input is one node', () => {
		expect(validTree(1, [])).toEqual(true)
	})
})
