// ==UserScript==
// @name         Auto Load Post Activity
// @version      1.0
// @description  Auto Clicks the Load New Content Button
// @author       Uni*
// @match        *://*.stackexchange.com/posts/*/edit/*
// @match        *://*.stackoverflow.com/posts/*/edit/*
// @match        *://*.mathoverflow.net/posts/*/edit/*
// @match        *://stackapps.com/posts/*/edit/*
// @match        *://*.superuser.com/posts/*/edit/*
// @match        *://*.serverfault.com/posts/*/edit/*
// @exclude      *://*.askubuntu.com/posts/*/edit/*
// @grant        none
// ==/UserScript==

(function() {
	console.log('EditBullets is loading...');
	var arrows = document.getElementsByClassName('dingus');
	for (i = 0; i < arrows.length; ++i) {
		a = arrows[i];
		a.className = "";
		a.innerHTML = "\u26AB" + a.innerHTML;
	}
})();