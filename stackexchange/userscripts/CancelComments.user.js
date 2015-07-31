// ==UserScript==
// @name         Comment Cancel
// @version      1.0
// @description  Auto Clicks the Load New Content Button
// @author       Uni*
// @match        *://*.stackexchange.com/*
// @match        *://*.stackoverflow.com/*
// @match        *://*.mathoverflow.net/*
// @match        *://stackapps.com/*
// @match        *://*.superuser.com/*
// @match        *://*.serverfault.com/*
// @match        *://*.askubuntu.com/*
// @grant        none
// @updateURL    http://teamfreehugs.github.io/stackexchange/userscripts/AutoLoad.user.js
// ==/UserScript==

(function() {
	var commentHelpLink = document.getElementsByClassName('comment-help-link');
	for (i = 0; i < commentHelpLink.length; ++i) {
		button = commentHelpLink[i];
		var cancelLink = document.createElement('a');
		cancelLink.innerHTML = "Cancel";
		cancelLink.href = "#";
		cancelLink.className = "comment-help-link";
		cancelLink.addEventListener("click", function() {
		});
		button.parentElement.appendChild(cancelLink);
	}
})();