function load() {
	var quotes = document.getElementsByTagName('quote');
	for (var i = 0; i < quotes.length; ++i) {
		var entry = quotes[i];
		var quote = entry.innerHTML;
		var newQuote = document.createElement('blockquote');
		newQuote.className = "quote";
		newQuote.innerHTML = quote;
		entry.parentElement.insertBefore(newQuote, entry);
		entry.parentElement.removeChild(entry);
	}

	var hrs = document.getElementsByTagName('hr');
	for (var i = 0; i < hr.length; ++i) {
		var entry = hr[i];
		var hr = entry.innerHTML;
		var newHR = document.createElement('blockquote');
		newHR.className = "markdown-line";
		newHR.innerHTML = hr;
		entry.parentElement.insertBefore(newHR, entry);
		entry.parentElement.removeChild(entry);
	}

}

(function() {
	var head = document.getElementsByTagName('head')[0];
	var markdownCSS = document.createElement('link');
	markdownCSS.href = "http://teamfreehugs.github.io/styles/markdown-styles.css";
	markdownCSS.rel = "stylesheet";
	markdownCSS.type = "text/css";
	var jQuery = document.createElement('script');
	var codeHighlighter = document.createElement('script');
	var lua = document.createElement('script');
	var css = document.createElement('script');
	var code_style = document.createElement('link');
	var notify = document.createElement('script');
	jQuery.src = "http://code.jquery.com/jquery-1.11.3.min.js";
	codeHighlighter.src = "https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js";
	lua.src = "https://github.com/google/code-prettify/blob/master/src/lang-lua.js";
	css.src = "https://github.com/google/code-prettify/blob/master/src/lang-css.js";
	code_style.rel = "stylesheet";
	code_style.href = "https://cdn.rawgit.com/google/code-prettify/master/styles/sons-of-obsidian.css";
	code_style.type = "text/css";
	notify.src = "http://notifyjs.com/dist/notify-combined.min.js";
	head.appendChild(markdownCSS);
	head.appendChild(jQuery);
	head.appendChild(codeHighlighter);
	head.appendChild(lua);
	head.appendChild(css);
	head.appendChild(code_style);
	head.appendChild(notify);
})();