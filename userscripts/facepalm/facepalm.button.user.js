// ==UserScript==
// @name         FacePalm Button
// @namespace    http://gaming.stackexchange.com/users/108497/unikitty
// @version      0.1
// @description  Adds a shiny rainbow facepalm button to the stackexchange sites.
// @author       Uni*
// @match        http://*.stackexchange.com/*
// @match        http://stackoverflow.com/*
// @match        http://superuser.com/*
// @match        http://askubuntu.com/*
// @grant        none
// ==/UserScript==

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ')
			c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) === 0)
			return c.substring(nameEQ.length, c.length);
	}
	return null;
}

function go() {
	var bar = document.getElementsByClassName('topbar-menu-links')[0];

	var visited = readCookie('FACEPALMCHECK');

	var text = "";

	var fp = "<font color=\"red\">F</font><font color=\"orange\">A</font><font color=\"yellow\">C</font><font color=\"green\">E</font><font color=\"blue\">P</font><font color=\"purple\">A</font><font color=\"red\">L</font><font color=\"yellow\">M</font>";
	// Yas, I know about the famous CSS.
	text = "<a href=\"/facepalm\" title=\"FACEPALM\">" + fp + "</a>";

	bar.innerHTML = text + bar.innerHTML;
}

go();