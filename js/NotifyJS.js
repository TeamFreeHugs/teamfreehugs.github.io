(function($) {
  $.fn.notify = function(options) {
    var settings = $.extend({
      mode : "info",
      text : "Notify! How are you?",
      title : "Notification",
      icon : ""
    }, options);
    var popup = $('<div>').css({
      position : "fixed",
      width : "500px",
      height : "500px",
      "margin-top" : "-250px",
      "margin-left" : "-250px",
      "background-color" : "#000000",
      "border" : "none"
    });
    var bg = $('<div>').css({
      position : "absolute",
      top : 0,
      left : 0,
      width : "100%",
      height : "100%",
      "z-index" : 10000,
      "background-color" : "#FFFFFF",
      opacity : "0.6"
    });
    
    var titleColor = "blue";
    
    if (settings.mode == "info") {
      titleColor = "blue";
    } else if (settings.mode == "warn") {
      titleColor = "yellow";
    } else if (settings.mode == "error") {
      titleColor = "red";
    } else if (settings.mode == "sucess") {
      titleColor = "green";
    }
    var title = $('<span>').html(settings.title).css({
      "font-family" : "Impact, Charcoal, sans-serif",
      "font-weight" : 700,
      "color" : titleColor,
      "font-size" : "20px"
    });
    
    popup.append(title[0]);
    
    var content = $('<div>').html(settings.text).css({
      "font-family" : "Impact, Charcoal, sans-serif"
    });
    
    icon = $('<div>');
    if (settings.icon != "") {
      var img = $('<img>');
      img.attr('src', settings.icon).attr('alt', settings.mode).attr('width',
          '32px').attr('width', '32px');
    } else {
      var img = $('<span>').css({
        width : "32px",
        height : "32px"
      }).show(function() {
        var i = $(this);
        i.animate({
          
        });
      });
    }
  }
}(jQuery));