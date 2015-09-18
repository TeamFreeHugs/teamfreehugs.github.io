function sendMessage(chatSite, room_id, message, fkey) {
	$.ajax({
		type : 'POST',
		url : 'http://' + chatSite + '/chats/' + room_id + '/messages/new',
		data : {
			text : message,
			fkey : fkey
		},
		beforeSend : function(xhr) {
			xhr.setRequestHeader("Origin", "http://" + chatSite);
		}
	});
};

function editMessage(chatSite, message_id, newMessage, fkey) {
	$.ajax({
		type : 'POST',
		url : 'http://' + chatSite + '/messages/' + message_id,
		data : {
			fkey : fkey,
			text : newMessage
		},
		beforeSend : function(xhr) {
			xhr.setRequestHeader("Origin", "http://" + chatSite);
		}
	});
}

function deleteMessage(chatSite, message_id, fkey) {
	$.ajax({
		type : 'POST',
		url : 'http://' + chatSite + '/messages/' + message_id + '/delete',
		data : {
			fkey : fkey
		},
		beforeSend : function(xhr) {
			xhr.setRequestHeader("Origin", "http://" + chatSite);
		}
	});
}

function toggleStar(chatSite, message_id, fkey) {
	$.ajax({
		type : 'POST',
		url : 'http://' + chatSite + '/messages/' + message_id + '/star',
		data : {
			fkey : fkey
		},
		beforeSend : function(xhr) {
			xhr.setRequestHeader("Origin", "http://" + chatSite);
		}
	});
}

function getMessageLink(chatSite, message_id) {
	return 'http://' + chatSite + 'transcript/message/' + message_id + '#'
			+ message_id;
}

function getEvents(chatSite, room_id, fkey, messageCount) {
	url = 'http://' + chatSite + '/chats/' + room_id + '/events';
	a = $.ajax({
		type : 'POST',
		url : url,
		data : {
			fkey : fkey,
			mode : 'Messages',
			since : 0,
			msgCount : messageCount
		},
		async : false,
		beforeSend : function(xhr) {
			xhr.setRequestHeader("Origin", "http://" + chatSite);
		}
	});
	return a.responseText;
}

function addMessageListener(chatSite, room_id, fkey, run, eventCount) {
	id = window.setInterval(function() {
		req = getEvents(chatSite, room_id, fkey, eventCount);
		events = JSON.parse(req).events;
		for (pos = 0; pos < events.length; ++pos) {
			event = events[pos];
			if (run !== null | typeof run != 'function') {
				window.setTimeout(function() {
					run(event);
				}, 1);
			}
		}
	}, 5000);
	return id;
}

function contains(array, test) {
	for (a = 0; a < array.length; ++a) {
		if (array[a] == test)
			return true;
	}
	return false;
}

function demoWithTavern() {
	var seen = [];
	id = addMessageListener('chat.meta.stackexchange.com', 89, fkey().fkey,
			function(event) {
				if (!contains(seen, event.message_id)) {
					alert('New Event!');
					alert('Message ID: ' + event.message_id);
					alert('Room Name: ' + event.room_name);
					alert('Username: ' + event.user_name);
					alert('Time Stamp: ' + event.time_stamp);
					seen.push(event.message_id);
				}
			});
	return id;
}