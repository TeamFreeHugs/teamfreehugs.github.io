// ==UserScript==
// @name         Edit Bullet Fix
// @version      1.0
// @description  ► -> ⚫
// @author       Uni*
// @match        *://*.stackexchange.com/posts/*/edit
// @match        *://*.stackoverflow.com/posts/*/edit
// @match        *://*.mathoverflow.net/posts/*/edit
// @match        *://stackapps.com/posts/*/edit
// @match        *://*.superuser.com/posts/*/edit
// @match        *://*.serverfault.com/posts/*/edit
// @match        *://*.askubuntu.com/posts/*/edit
// @grant        none
// ==/UserScript==

(function() {
	console.log('EditBullets is loading...');
	  var head = document.getElementsByTagName('head')[0];
	  var link = document.createElement('link');
	  link.rel = "stylesheet";
	  link.href = "http://teamfreehugs.github.io/styles/stackexchange/edit-background.css";
	  head.appendChild(link);
	var arrows = document.getElementsByClassName('dingus');
	for (i = 0; i < arrows.length; ++i) {
		arrows[i].innerHTML = "⚫";
	}
	var panel = document.getElementById('scroller');
	panel.className += " background";
})();