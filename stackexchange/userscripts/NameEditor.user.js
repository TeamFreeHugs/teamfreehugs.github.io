// ==UserScript==
// @name         Name Fix
// @version      1.1
// @description  Fixes the usernames
// @author       Uni*
// @match        *://*.stackexchange.com/*
// @match        *://*.stackoverflow.com/*
// @match        *://*.mathoverflow.net/*
// @match        *://stackapps.com/*
// @match        *://*.superuser.com/*
// @match        *://*.serverfault.com/*
// @match        *://*.askubuntu.com/*
// @grant        none
// @updateURL    http://teamfreehugs.github.io/stackexchange/userscripts/NameEditor.user.js
// ==/UserScript==

(function() {
	var usernames = document.getElementsByClassName('user-details');
	var info = document.getElementsByClassName('.user-info ');
	for (i = 0; i < usernames.length; i += 1) {
		entry = usernames[i];
		if (info[i] != undefined) {
			info[i].style.textOverflow = "ellipsis";
		}
		entry.style.textOverflow = "ellipsis";
		entry.title = entry.firstElementChild.innerHTML;
	}

})();