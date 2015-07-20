function load() {
	var quotes = document.getElementsByTagName('quote');
	for (var i = 0; i < quotes.length; ++i) {
		var entry = quotes[i];
		if (!entry.attributes.getNamedItem("exclude")) {
		var quote = entry.innerHTML;
		var newQuote = document.createElement('blockquote');
		newQuote.className = "quote";
		newQuote.innerHTML = quote;
		entry.parentElement.insertBefore(newQuote, entry);
		entry.parentElement.removeChild(entry);}
	}

	var hrs = document.getElementsByTagName('hr');
	for (var i = 0; i < hrs.length; ++i) {
		var entry = hrs[i];
		if (!entry.attributes.getNamedItem("exclude"))
			entry.className = "markdown-line";
	}

	var codeBlocks = document.getElementsByTagName('code');
	for (var i = 0; i < codeBlocks.length; ++i) {
		var entry = hrs[i];
		if (!entry.attributes.getNamedItem("exclude")) {
			var preBlock = document.createElement('pre');
			preBlock.className = "code prettyprint prettyprinted";
			preBlock.innerHTML = entry.innerHTML;
			entry.parentElement.insertBefore(preBlock, entry);
			entry.parentElement.removeChild(entry);
		}
	}

}

(function() {
	var head = document.getElementsByTagName('head')[0];
	var jqueryScript = document.createElement('script');
	jqueryScript.src = "http://code.jquery.com/jquery-1.11.3.min.js";
	head.appendChild(jqueryScript);
	var markdownCSS = document.createElement('link');
	markdownCSS.href = "http://teamfreehugs.github.io/styles/markdown-styles.css";
	markdownCSS.rel = "stylesheet";
	markdownCSS.type = "text/css";
	var codeHighlighter = document.createElement('script');
	var lua = document.createElement('script');
	var css = document.createElement('script');
	var code_style = document.createElement('link');
	codeHighlighter.src = "https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js";
	lua.src = "https://github.com/google/code-prettify/blob/master/src/lang-lua.js";
	css.src = "https://github.com/google/code-prettify/blob/master/src/lang-css.js";
	code_style.rel = "stylesheet";
	code_style.href = "https://cdn.rawgit.com/google/code-prettify/master/styles/sons-of-obsidian.css";
	code_style.type = "text/css";
	head.appendChild(markdownCSS);
	head.appendChild(codeHighlighter);
	head.appendChild(lua);
	head.appendChild(css);
	head.appendChild(code_style);
})();

function addNotify() {
	var head = document.getElementsByTagName('head')[0];
	var notify = document.createElement('script');
	notify.src = "http://notifyjs.com/dist/notify-combined.js";
	head.appendChild(notify);

}