// ==UserScript==
// @name         Wave...
// @namespace    http://meta.stackexchange.com/users/257207/unikitty?tab=profile
// @version      1.0
// @description  this is a very useful pice of text...
// @author       UniKitty
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
	var title = document.getElemenyByClassName('user-card-name')[0];
	title.innerHTML = "O_o";
	aboutMe.innerHTML = readTextFile('https://gist.githubusercontent.com/TheCodingMonster/44b13788de780242afa7/raw/29108f549c14a8fd8ebf60279ed316336d60d727/wave.html');
}

go();