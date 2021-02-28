class Node {
	constructor(name) {
		this.name = name;
		this.children = [];
	}

	addChild(name) {
		this.children.push(new Node(name));
		return this;
	}

	breadthFirstSearch(array) {
		// See queue equal to an array containing current node
		const queue = [this];
		while (queue.length > 0) {
			const curr = queue.shift(); // Shift first item in queue
			array.push(curr.name); // Push item name to array
			// Add children's children to queue
			for (const child of curr.children) queue.push(child);
		}
		return array;
	}
}

/*
TIME: O(v+e) - Have to check children for each node AND check those nodes once they're in the queue
SPACE: O(v)
*/
