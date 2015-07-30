// ==UserScript==
// @name         Sticky Toolbar
// @version      1.0
// @description  Makes SE Toolbar be sticky
// @author       Uni*
// @match        *://*.stackexchange.com/*
// @match        *://*.stackoverflow.com/*
// @match        *://*.mathoverflow.net/*
// @match        *://stackapps.com/*
// @match        *://*.superuser.com/*
// @match        *://*.serverfault.com/*
// @exclude      *://*.askubuntu.com/*
// @grant        none
// ==/UserScript==

(function() {
	console.log('StickyToolbar is loading...');
	var head = document.getElementsByTagName('head')[0];
	var stickStyle = document.createElement('link');
	stickStyle.rel = 'stylesheet';
	stickStyle.href = 'http://teamfreehugs.github.io/styles/stackexchange/sticky.css';
	head.appendChild(stickStyle);

	var toolbar = document.getElementsByClassName('topbar')[0];
	var empty = document.createElement('p');
	empty.innerHTML = "&nbsp;";
	toolbar.className += " stickyToolbar";

	var toolbarWrap = document.getElementsByClassName('topbar-wrapper')[0];
	toolbarWrap.className += " stickyToolbarWrapper";
	toolbar.parentElement.insertBefore(empty, toolbar);

})();