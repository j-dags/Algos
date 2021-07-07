/*
You have a browser of one tab where you start on the homepage and you can visit another url, get back in the history number of steps or move forward in the history number of steps.

Implement the BrowserHistory class:

    BrowserHistory(string homepage) Initializes the object with the homepage of the browser.
    void visit(string url) Visits url from the current page. It clears up all the forward history.
    string back(int steps) Move steps back in history. If you can only return x steps in the history and steps > x, you will return only x steps. Return the current url after moving back in history at most steps.
    string forward(int steps) Move steps forward in history. If you can only forward x steps in the history and steps > x, you will forward only x steps. Return the current url after forwarding in history at most steps.


Approach:
Use an historyay and a pointer. Inc/dec the pointer as we go back() and forward().
When we call the visit method. Set this.history = this.history.slice(0, this.curr + 1)

O(1)t | O(n)s. Constant time complexity!!
*/

class browserHistory {
	constructor(homepage) {
		this.history = [homepage]
		this.curr = 0
		this.limit = 0
	}

	visit = function (url) {
		this.curr++
		// If we're at the end of the history, add a new url
		if (this.curr === this.history.length) this.history.push(url)
		// Otherwise rewrite the current this.curr value
		else this.history[this.curr] = url
		// Set a new limit, cannot exceed this limit when going forward
		this.limit = this.curr
	}

	back = function (steps) {
		// Set this.curr = 0, if steps > this.curr
		this.curr = Math.max(0, this.curr - steps)
		return this.history[this.curr]
	}

	forward = function (steps) {
		// Set this.curr = this.limit, if (this.curr + steps) exceeds limit
		this.curr = Math.min(this.limit, this.curr + steps)
		return this.history[this.curr]
	}
}

// Let's try a doubly linked-list implementation. SLOWER ACTUALLY.
// class Node {
// 	constructor(val, prev, next) {
// 		this.val = val
// 		this.prev = prev
// 		this.next = next
// 	}
// }

// class browserHistory {
// 	constructor(url, prev = null, next = null) {
// 		this.head = new Node(url, prev, next)
// 	}

// 	visit(url) {
// 		// this.head = new Node(url, this.head)
// 		// this.head.prev.next = this.head
// 		let node = new Node(url, this.head)
// 		// node.prev = this.head
// 		this.head.next = node
// 		this.head = node
// 	}

// 	back(steps) {
// 		while (steps > 0 && this.head.prev) {
// 			this.head = this.head.prev
// 			steps--
// 		}
// 		return this.head.val
// 	}

// 	forward(steps) {
// 		while (steps > 0 && this.head.next) {
// 			this.head = this.head.next
// 			steps--
// 		}
// 		return this.head.val
// 	}
// }

const myBrowser = new browserHistory('leetcode.com')
console.log(myBrowser.visit('google.com')) // You are in "leetcode.com". Visit "google.com"
console.log(myBrowser.visit('facebook.com')) // You are in "google.com". Visit "facebook.com"
console.log(myBrowser.visit('youtube.com')) // You are in "facebook.com". Visit "youtube.com"
console.log(myBrowser.back(1)) // You are in "youtube.com", move back to "facebook.com" return "facebook.com"
console.log(myBrowser.back(1)) // You are in "facebook.com", move back to "google.com" return "google.com"
console.log(myBrowser.forward(1)) // You are in "google.com", move forward to "facebook.com" return "facebook.com"
console.log(myBrowser.visit('linkedin.com')) // You are in "facebook.com". Visit "linkedin.com"
console.log(myBrowser.forward(2)) // You are in "linkedin.com", you cannot move forward any steps.
console.log(myBrowser.back(2)) // You are in "linkedin.com", move back two steps to "facebook.com" then to "google.com". return "google.com"
console.log(myBrowser.back(7)) // You are in "google.com", you can move back only one step to "leetcode.com". return "leetcode.com"
