// ==UserScript==
// @name         Chat Client
// @version      1.1
// @description  Adds in a chat button
// @author       Uni*
// @match        *://*.stackexchange.com/*
// @match        *://*.stackoverflow.com/*
// @match        *://*.mathoverflow.net/*
// @match        *://stackapps.com/*
// @match        *://*.superuser.com/*
// @match        *://*.serverfault.com/*
// @match        *://*.askubuntu.com/*
// @grant        none
// @updateURL    http://teamfreehugs.github.io/stackexchange/userscripts/ChatClient.user.js
// ==/UserScript==

(function() {
	var toolbar = document.getElementsByClassName('network-items')[0];
	var head = document.getElementsByTagName('head')[0];
	var l = document.createElement('link');
	l.rel = "stylesheet";
	l.href = "http://teamfreehugs.github.io/styles/stackexchange/chatclient.css";
	head.appendChild(l);
	var chat = document.createElement('a');
	var chatTab = document.createElement('div');
	
	chatTab.className = "topbar-dialog chatDialog dno";
	
	chat.href = "javascript:void(0);";
	chat.addEventListener("click", function() {
	});
	chat.className = "hover chatButton";
	toolbar.appendChild(chat);
	chat.addEventListener("click", function() {
		console.log('Loading chat...');
	});
	var title = document.createElement('h3');
	title.className = "header";
})();