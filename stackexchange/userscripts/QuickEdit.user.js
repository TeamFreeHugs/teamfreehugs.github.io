// ==UserScript==
// @name         Quick Editor
// @version      1.0
// @description  Gives bad posts a quick fixer-upper
// @author       Uni*
// @match        *://*.stackexchange.com/posts/*/edit
// @match        *://*.stackoverflow.com/posts/*/edit
// @match        *://*.mathoverflow.net/posts/*/edit
// @match        *://stackapps.com/posts/*/edit
// @match        *://*.superuser.com/posts/*/edit
// @match        *://*.serverfault.com/posts/*/edit
// @match        *://*.askubuntu.com/posts/*/edit
// @grant        none
// @updateURL    http://teamfreehugs.github.io/stackexchange/userscripts/QuickEdit.user.js
// ==/UserScript==

var words = [];

function addWord(word, ignoreCap) {
  var o = new Object();
  o.word = word;
  o.ignore = ignoreCap;
  words.push(o);
}
(function() {
  addWord('Java', false);
  addWord('Ruby', false);
  addWord('Python', false);
  addWord('Ubuntu', false);
  addWord('Windows', false);
  addWord('system', true);
  addWord('');
})();

(function() {
  toolbar = $(document.getElementsByClassName('wmd-button-row')[0]);
  button = $(document.createElement('li'));
  button.attr('id', 'wmd-edit-button');
  button
      .css({
        "background-image" : "url('http://teamfreehugs.github.io/img/editbutton.svg')",
        width : "20px",
        height : "32px",
        padding : "12px 0px 0px",
        position : "absolute",
        display : "inline-block",
        "list-style" : "outside none none",
        cursor : "pointer",
        left : "460px",
        top : "10px"
      });
  button.click(function(e) {
    e.preventDefault();
    post = $(document.getElementsByName('post-text'));
    text = post.val();
    lines = text.split('\n');
    cleaned = "";
    prevIsCode = false;
    lines.forEach(function(e) {
      // Check if its code;
      if (e.startsWith('    ')) {
        if (!prevIsCode) {
          cleaned += "\n";
        }
        cleaned += '    ' + e + '\n';
        prevIsCode = true;
        return;
      }
      if (e.trim() == "\n") {
        cleaned += "\n";
        return;
      }
      prevIsCode = false;
      e = e.replace(/(\.) (  *)/, '.');
      e = e.replace(/(,) (  *)/, ',');
      e = e.replace(new RegExp(' i\\\'', 'g'), ' I\'');
      e = e.replace(new RegExp('.i\\\'', 'g'), ' I\'');
      e = e.replace(new RegExp(' ,', 'g'), ', ');
      e = e.replace(new RegExp(' \\.', 'g'), '. ');
      e = e.replace(new RegExp(' i ', 'g'), ' I ');
      e = e.replace(new RegExp(' .i ', 'g'), ' I ');
      e = e.replace(new RegExp(' wanna ', 'g'), ' want to ');
      e = e.replace(new RegExp('(I|i) am having', 'g'), 'I have');
      e = e.replace(new RegExp('everytime', 'g'), 'every time');
      e = e.replace(new RegExp('i ', 'g'), 'I ');
      e = e.replace(new RegExp(' y ', 'g'), ' why ');
      e = e.replace(new RegExp(' u ', 'g'), ' you ');
      e = e.replace(new RegExp(' wont ', 'g'), ' won\\\'t ');
      e = e.replace(new RegExp(' cant ', 'g'), ' can\\\'t ');
      e = e.replace(new RegExp(' didnt ', 'g'), ' did\\\'t ');
      e = e.replace(new RegExp(
          '(p*l*[s|z|ease]* h*[e|a]*l*p* m[e|i]*[\\!*\w*]*.?)', 'i'), '');
      e = e.replace(/(Pl[s|z|ease] provide a solution[ \w*]*.?)/, '');
    //  e = e.replace(new RegExp('(T(h?an(k|y)s?|hx))* '
       //   + '((you|u) in adv(ance)?|in adv(ance)?|(you|u))' + '(.*|\!*)?', i),
         // '');
      cleaned += e + "\n";
    });
    end = "";
    i = 0;
    parts = cleaned.split('.');
    parts.forEach(function(e) {
      ++i;
      trimmed = e.trim();
      result = trimmed.substring(0, 1).toUpperCase() + trimmed.substring(1);
      end += result;
      if (i != parts.length)
        end += ". ";
      else
        end += ".";
    });
    post.val(end);
    post.keydown();
  });
  toolbar.append(button[0]);
})();