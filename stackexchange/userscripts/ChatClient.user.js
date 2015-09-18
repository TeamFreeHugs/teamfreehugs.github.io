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

function createCookie(name, value, days) {
	var expires;
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = "; expires=" + date.toGMTString();
	} else {
		expires = "";
	}
	document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(c_name) {
	if (document.cookie.length > 0) {
		c_start = document.cookie.indexOf(c_name + "=");
		if (c_start != -1) {
			c_start = c_start + c_name.length + 1;
			c_end = document.cookie.indexOf(";", c_start);
			if (c_end == -1) {
				c_end = document.cookie.length;
			}
			return unescape(document.cookie.substring(c_start, c_end));
		}
	}
	return "";
}

(function() {
	if (window.location.toString().indexOf('/login') != -1) {
		createCookie('fkey', document.getElementsByName('fkey')[0].value);
	}
	URI
	uri = new URI(window.location.toString());
	if (uri.authority.indexOf('chat') != -1
			&& uri.authority.indexOf('stack') != -1) {
		createCookie('fkey', fkey().fkey);
	}
	var toolbar = document.getElementsByClassName('network-items')[0];
	var head = document.getElementsByTagName('head')[0];
	var l = document.createElement('link');
	var s = document.createElement('script');
	var s2 = document.createElement('script');
	s.src = "https://teamfreehugs.github.io/js/ChatExchange.js";
	l.rel = "stylesheet";
	l.href = "https://teamfreehugs.github.io/styles/stackexchange/chatclient.css";
	s2.src = "https://teamfreehugs.github.io/js/URI.js";
	head.appendChild(l);
	head.appendChild(s);
	head.appendChild(s2);

	var chat = document.createElement('a');
	var chatTab = document.createElement('div');
	var frame = document.createElement('iframe');
	var links = document.getElementsByClassName('topbar-links')[0];
	var boxes = document.getElementsByClassName('js-topbar-dialog-corral')[0];

	frame.id = "chat-client";

	frame.style.opacity = 0;
	document.body.appendChild(frame);

	chatTab.className = "topbar-dialog chatDialog dno";
	chatTab.id = "chatTab";
	chat.id = "chatButton";
	chat.href = "javascript:void(0);";
	chat.addEventListener("click", function() {
	});
	chat.className = "hover chatButton";
	links.appendChild(chat);
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
	var titleDiv = document.createElement('div');
	titleDiv.className = "header";
	title.style.marginRight = "4px";

	var messageDiv = document.createElement('div');
	messageDiv.className = "modal-content";
	messageDiv.id = "messages";

	window.setInterval(function() {
		var frame = $('#chat-client')[0];
		frame.src = $('#link').val();
		URI
		u = new URI($('#link').val());
		var text = frame.contentWindow.$.ajax({
			url : 'http://' + u.authority + '/chats/' + u.path.split('/')[2]
					+ '/events',
			type : 'POST',
			data : {
				fkey : getCookie('fkey'),
				mode : 'Messages',
				since : 0,
				msgCount : messageCount
			},
			async : false,
			beforeSend : function(xhr) {
				xhr.setRequestHeader("Origin", "http://" + chatSite);
			}
		});
		var event = JSON.parse(text.responseText);
		messageId = event.message_id;
		text = event.content;
		user = event.user_name;
		userId = event.user_id;
		if (event.parent_id != undefined)
			reply = event.parent_id;
		var messageDiv = document.createElement('div');
		var content = document.createElement('div');
		var userSpan = document.createElement('span');
		var message = document.createElement('span');
		message.innerHTML = text;
		userSpan.innerHTML = '<a href="http://' + u.authority + '/users/'
				+ userId + ' target="_blank">' + user + '</a>"';
		content.id = "chat" + messageId;
		messageDiv.appendChild(message);
		messageDiv.style.padding = "3px";
		messageDiv.style.borderRaduis = "25px";
		content.appendChild(userSpan);
		content.appendChild(messageDiv);
		messageDiv.appendChild(content);
	}, 3000);

	set
			.addEventListener(
					"click",
					function() {
						window.clearInterval(id);
						$('#messages').empty();
						if ($('#link').val() === "") {
							return;
						}
						URI
						u = new URI($('#link').val());
						if (u.authority.indexOf('chat') == -1
								&& u.authority.indexOf('stack') == -1)
							return;
						$('#chat-client').attr('src', u.authority);
						var id = addMessageListener(
								u.authority,
								u.path.split('/')[2],
								getCookie('fkey'),
								function(event) {
									if (document.getElementById('chat'
											+ event.messageId) != undefined) {
										if (event.event_type == 1) {
											messageId = event.message_id;
											text = event.content;
											user = event.user_name;
											userId = event.user_id;
											if (event.parent_id != undefined)
												reply = event.parent_id;
											var messageDiv = document
													.createElement('div');
											var content = document
													.createElement('div');
											var userSpan = document
													.createElement('span');
											var message = document
													.createElement('span');
											message.innerHTML = text;
											userSpan.innerHTML = '<a href="http://'
													+ u.authority
													+ '/users/'
													+ userId
													+ ' target="_blank">'
													+ user + '</a>"';
											content.id = "chat" + messageId;
											messageDiv.appendChild(message);
											messageDiv.style.padding = "3px";
											messageDiv.style.borderRaduis = "25px";
											content.appendChild(userSpan);
											content.appendChild(messageDiv);
											messageDiv.appendChild(content);
										}
									}
								}, 100);
					});
	titleDiv.appendChild(title);
	titleDiv.appendChild(link);
	titleDiv.appendChild(set);
	chatTab.appendChild(titleDiv);
	chatTab.appendChild(messageDiv);
	boxes.appendChild(chatTab);
	links.appendChild(chat);

	$('#chatButton').click();
})();