// ==UserScript==
// @name         Chat Bot
// @version      1.0
// @description  Chat Bot
// @author       Uni*
// @match        *://chat.stackexchange.com/rooms/*
// @match        *://chat.meta.stackexchange.com/rooms/*
// @match        *://chat.stackoverflow.com/rooms/*
// @grant        none
// @require      http://teamfreehugs.github.io/js/ChatExchange.js
// ==/UserScript==

$.fn.watch = function(property, callback) {
  return $(this).each(function() {
    var self = this;
    var old_property_val = this[property];
    var timer;
    
    function watch() {
      if ($(self).data(property + '-watch-abort') == true) {
        timer = clearInterval(timer);
        $(self).data(property + '-watch-abort', null);
        return;
      }
      
      if (self[property] != old_property_val) {
        old_property_val = self[property];
        callback.call(self);
      }
    }
    timer = setInterval(watch, 700);
  });
};

$.fn.unwatch = function(property) {
  return $(this).each(function() {
    $(this).data(property + '-watch-abort', true);
  });
};

var old_users = [];

var users = [];

(function() {
  usersList = $('#present-users');
  usersList.watch('innerHTML',
      function() {
        for (p = 0; p < usersList.children().length - 1; ++p) {
          e = usersList.children()[p];
          users.push(e.id.substring('present-user-'.length));
          if ($.inArray(e.id.substring('present-user-'.length), old_users)) {
            window.setTimeout(function() {
              sendMessage(new URI(window.location.toString()).authority,
                  new URI(window.location.toString()).path.split('/')[2],
                  'Sup @' + e.children[0].children[0].alt, fkey().fkey);
            }, 1000);
            users.push(e.id.substring('present-user-'.length));
          } else if (!$.inArray(e.id.substring('present-user-'.length),
              old_users)) {
            window.setTimeout(function() {
              sendMessage(new URI(window.location.toString()).authority,
                  new URI(window.location.toString()).path.split('/')[2],
                  'Bye @' + e.children[0].children[0].alt, fkey().fkey);
            }, 1000);
          }
        }
        
        old_users = users;
        users = [];
      })
})();