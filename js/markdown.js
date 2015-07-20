function load() {
	var quotes = document.getElementsByTagName('quote');
	for (var i = 0; i < quotes.length; ++i) {
		var entry = quotes[i];
		var quote = entry.innerHTML;
		var newQuote = document.createElement('blockquote');
		newQuote.className = "quote";
		newQuote.innerHTML = quote;
		entry.parentElement.appendChild(newQuote);
		entry.parentElement.removeChild(entry);
	}
}

(function() {
	var head = document.getElementsByTagName('head')[0];
	var markdownCSS = document.createElement('link');
	markdownCSS.href = "http://teamfreehugs.github.io/styles/markdown-styles.css";
	markdownCSS.rel = "stylesheet";
	markdownCSS.type = "text/css";
	head.appendChild(markdownCSS);
})();