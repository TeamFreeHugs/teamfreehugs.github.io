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
// ==/UserScript==
roomDivs = [];
(function() {
  window.setInterval(function() {
    var roomsList = $("li[id*='room']");
    var room = $('.sidebar-widget')[1];
    roomsList.each(function(i) {
      roomID = this.getAttribute('id').substring(5);
      if ($('#popup-room-' + roomID).length != 1) {
        alert();
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
          background : "#FFFFFF"
        });
        roomDiv.attr('id', 'popup-room-' + roomID);
        roomsList.mouseover(function() {
          roomDiv.fadeIn("fast");
        });
        roomDiv.mouseout(function() {
          roomDiv.fadeOut("fast");
        });
        roomsList.mouseout(function() {
          if (roomDiv.is(":hover"))
            clearTimeout($(this).data('timeoutId'));
        }).mouseleave(function() {
          if (roomDiv.is(":hover")) {
          } else {
            var someElement = $(this), timeoutId = setTimeout(function() {
              roomDiv.fadeOut("fast");
            }, 650);
            someElement.data('timeoutId', timeoutId);
          }
        });
        room.appendChild(roomDiv[0]);
      }
    });
  }, 3000);
})();