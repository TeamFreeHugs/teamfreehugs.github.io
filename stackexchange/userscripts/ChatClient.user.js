// ==UserScript==
// @name         Chat Client
// @version      1.0
// @description  Adds in a chat button
// @author       Uni*
// @match        *://*.stackexchange.com/*
// @match        *://*.stackoverflow.com/*
// @match        *://*.mathoverflow.net/*
// @match        *://stackapps.com/*
// @match        *://*.superuser.com/*
// @match        *://*.serverfault.com/*
// @match        *://*.askubuntu.com/*
// @require      http://teamfreehugs.github.io/styles/stackexchange/chatclient.css
// @grant        none
// ==/UserScript==

(function() {
	var toolbar = document.getElementsByClassName('network-items')[0];
	var head = document.getElementsByTagName('head')[0];
	var l = document.createElement('link');
	l.rel = "stylesheet";
	l.href = "http://teamfreehugs.github.io/styles/stackexchange/chat.css";
	var chat = document.createElement('a');
	chat.href = "javascript:void(0);";
	chat.addEventListener("click", function() {
	});
	chat.className = "hover chatButton";
	toolbar.appendChild(chat);
})();