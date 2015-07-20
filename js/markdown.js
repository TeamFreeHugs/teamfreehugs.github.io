function load() {
	var quotes = document.getElementsByTagName('quote');
	quotes.foreach(function(entry) {
		var quote= entry.innerHTML;
		var newQuote = document.createElement('blockquote');
		newQuote.className = "quote";
		newQuote.innerHTML = quote;
		quote.parentElement.appendChild(newQuote);
		quote.parentElement.removeChild(quote);
	});
}