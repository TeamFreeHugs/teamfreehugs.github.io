// ==UserScript==
// @name         Wave...
// @namespace    http://meta.stackexchange.com/users/257207/unikitty?tab=profile
// @version      1.0
// @description  this is a very useful pice of text...
// @author       Uni*
// @match        http://meta.stackexchange.com/users/257207/unikitty?tab=profile
// @match        http://*.stackexchange.com/users/*/*
// @match        http://stackoverflow.com/users/*/*
// @match        http://superuser.com/users/*/*
// @match        http://askubuntu.com/users/*/*
// @grant        none
// ==/UserScript==

function readTextFile(file) {
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", file, false);
	rawFile.onreadystatechange = function() {
		if (rawFile.readyState === 4) {
			if (rawFile.status === 200 || rawFile.status == 0) {
				return rawFile.responseText;
			}
		}
	}
	rawFile.send(null);
	return rawFile.responseText;
}

function go() {
	var aboutMe = document.getElementsByClassName('bio')[0];
	var title = document.getElementsByClassName('user-card-name')[0];
	title.innerHTML = "O_o";
	aboutMe.innerHTML = readTextFile('http://teamfreehugs.github.io/userscripts/wave-content');
}

go();