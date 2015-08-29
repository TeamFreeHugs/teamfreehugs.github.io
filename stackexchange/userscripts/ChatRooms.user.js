// ==UserScript==
// @name         Chat Room Combiner
// @version      1.2
// @description  Mashes Many Chat Rooms Into One Big Room
// @author       Uni*
// @match        *://chat.stackexchange.com/rooms/*
// @match        *://chat.meta.stackexchange.com/rooms/*
// @match        *://chat.stackoverflow.com/rooms/*
// @grant        none
// @require      http://teamfreehugs.github.io/js/ChatExchange.js
// @require      http://teamfreehugs.github.io/js/URI.js
// ==/UserScript==
roomDivs = [];
(function() {
  window.setInterval(function() {
    var roomsList = $("li[id*='room']");
    var room = $('.sidebar-widget')[1];
    roomsList
        .each(function(i) {
          roomID = this.getAttribute('id').substring(5);
          if ($('#popup-room-' + roomID).length != 1) {
            roomDiv = $("<div>");
            roomDivs.push(roomDiv);
            roomDiv.css({
              display : "none",
              border : "1px solid #000000",
              "border-radius" : "25px",
              width : "500px",
              height : "400px",
              left : "-500px",
              top : "-150px",
              "z-index" : "999",
              position : "absolute",
              background : "#FFFFFF",
              "overflow-y": "scroll",
              "overflow-x": "wrap"
            });
            roomDiv.attr('id', 'popup-room-' + roomID);
            roomsList.mouseover(function() {
              roomDiv.fadeIn("fast");
            });
            roomsList.mouseleave(function() {
              window.setTimeout(function() {
                if (!roomDiv.is(":hover")) {
                  roomDiv.fadeOut("fast");
                }
              }, 1000);
            });
            roomDiv.mouseleave(function() {
              roomDiv.fadeOut("fast");
            });
            id = addMessageListener(
                new URI(window.location.toString()).authority, $(
                    roomsList[i].children[0]).attr('href').split('/')[2],
                fkey().fkey, function(event) {
                  if ($('#popup-room-' + roomID + '-message-'
                      + event.message_id) != null) {
                    newMessage = $('<div>');
                    newMessage.attr('id', 'popup-room-' + roomID + '-message-'
                        + event.message_id);
                    owner = $('span');
                    owner.html('<a href="' + event.user_id + '">'
                        + event.user_name + '</a>');
                    msgContent = $('<div>');
                    msgContent.html(event.content);
                    
                    newMessage.css({
                      display : "inline-block"
                    });
                    
                    msgContent.css({
                      display : "inline-block"
                    });
                    newMessage.append(owner[0]);
                    newMessage.append(msgContent[0]);
                    roomDiv.append(newMessage[0]);
                  }
                }, 50);
            room.appendChild(roomDiv[0]);
          }
        });
  }, 3000);
})();