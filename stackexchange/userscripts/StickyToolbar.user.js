// ==UserScript==
// @name         Sticky Toolbar
// @namespace    http://stackexchange.com/
// @version      1.0
// @description  Makes SE Toolbar be sticky
// @author       Uni*
// @match        *://*.stackexchange.com/
// @match        *://*.stackoverflow.com/
// @match        *://*.mathoverflow.net/
// @match        *://stackapps.com/
// @match        *://*.superuser.com/
// @match        *://*.serverfault.com/
// @exclude      *://*.askubuntu.com/
// @grant        none
// ==/UserScript==

(function() {
	console.log('StickyToolbar loading...');
	var head = document.getElementsByTagName('head')[0];
	var stickStyle = document.createElement('link');
	stickStyle.rel = 'stylesheet';
	stickStyle.href = 'http://teamfreehugs.github.io/styles/stackexchange/sticky.css';
	head.appendChild(stickStyle);
	var toolbar = document.getElementsByClassName('topbar-wrapper')[0];
	toolbar.className = "stickyToolbarWrapper";
})();