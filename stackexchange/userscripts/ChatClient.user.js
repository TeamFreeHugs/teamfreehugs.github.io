// ==UserScript==
// @name         Chat Client
// @version      1.2
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
// @require      http://teamfreehugs.github.io/js/ChatExchange.js
// @updateURL    http://teamfreehugs.github.io/stackexchange/userscripts/ChatClient.user.js
// ==/UserScript==

var id = 0;

(function() {
	var toolbar = document.getElementsByClassName('network-items')[0];
	var head = document.getElementsByTagName('head')[0];
	var l = document.createElement('link');
	var s = document.createElement('script');
	s.src = "http://teamfreehugs.github.io/js/ChatExchange.js";
	l.rel = "stylesheet";
	l.href = "http://teamfreehugs.github.io/styles/stackexchange/chatclient.css";
	head.appendChild(l);
	head.appendChild(s);

	var chat = document.createElement('a');
	var chatTab = document.createElement('div');
	var links = document.getElementsByClassName('topbar-links')[0];
	var boxes = document.getElementsByClassName('js-topbar-dialog-corral')[0];

	chatTab.className = "topbar-dialog chatDialog dno";
	chatTab.id = "chatTab";
	chat.href = "javascript:void(0);";
	chat.addEventListener("click", function() {
	});
	chat.className = "hover chatButton";
	toolbar.appendChild(chat);
	chat.addEventListener("click", function() {
		console.log('Loading chat...');
		chatTab = document.getElementById('chatTab');
		if (chatTab.style.display == "none")
			chatTab.style.display = "block";
		else
			chatTab.style.display = "none";
	});

	var title = document.createElement('h3');
	title.innerHTML = "Chat";
	var link = document.createElement('input');
	var set = document.createElement('button');
	set.innerHTML = "Go!";
	link.type = "text";
	link.id = "link";
	link.style.width = "300px";
	link.style.marginRight = "30px";
	set.addEventListener("click", function() {
		window.clearInterval(id);
		$('#messages').empty();
	});
	var titleDiv = document.createElement('div');
	titleDiv.className = "header";
	title.style.marginRight = "4px";
	titleDiv.appendChild(title);
	titleDiv.appendChild(link);
	titleDiv.appendChild(set);
	var messageDiv = document.createElement('div');
	messageDiv.className = "modal-content";
	messageDiv.id = "messages";
	chatTab.appendChild(titleDiv);
	chatTab.appendChild(messageDiv);
	boxes.appendChild(chatTab);
	links.appendChild(chat);
})();