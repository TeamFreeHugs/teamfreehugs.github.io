// ==UserScript==
// @name         Sticky Toolbar
// @version      1.0
// @description  Makes SE Toolbar be sticky
// @author       Uni*
// @match        *://*.stackexchange.com/
// @match        *://*.stackoverflow.com/
// @match        *://*.mathoverflow.net/
// @match        *://stackapps.com/
// @match        *://*.superuser.com/
// @match        *://*.serverfault.com/
// @match        *://*.askubuntu.com/
// @grant        none
// ==/UserScript==

(function() {
	console.log('AutoLoad is loading...');
	window.setInterval(function() {
		var activity = document.getElementsByClassName('new-post-activity')[0];
		if (activity != undefined) {
			activity.click();
			//Should have jQuery
		}
	}, 1000);
})();