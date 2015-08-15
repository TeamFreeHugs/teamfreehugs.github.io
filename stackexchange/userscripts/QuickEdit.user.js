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

(function() {
  toolbar = document.getElementsByClassName('wmd-button-row')[0];
  button = document.createElement('li');
  button.id = "wmd-edit-button";
  button.style = "background-image: url('')";
})();