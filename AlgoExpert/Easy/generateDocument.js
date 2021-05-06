function generateDocument(characters, document) {
	if (!document) return true;

	for (const char of document.split('')) {
		const re = new RegExp(char, 'g');
		let doc = document.match(re);
		let chars = characters.match(re);

		if (chars === null) return false;
		if (chars.length < doc.length) return false;
	}
	return true;
}

// Do not edit the line below.
exports.generateDocument = generateDocument;
