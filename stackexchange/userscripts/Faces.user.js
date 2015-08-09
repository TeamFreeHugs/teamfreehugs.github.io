// ==UserScript==
// @name         Faces
// @version      1.0
// @description  http://stackapps.com/questions/6296/replacing-identicons-with-face-like-avatars
// @author       Normal Human
// @match        *://*.stackexchange.com/*
// @match        *://*.stackoverflow.com/*
// @match        *://*.mathoverflow.net/*
// @match        *://stackapps.com/*
// @match        *://*.superuser.com/*
// @match        *://*.serverfault.com/*
// @match        *://*.askubuntu.com/*
// @grant        none
// ==/UserScript==

(function() {
  var i, t, images = document.getElementsByTagName('img');
  for (i = 0; i < images.length; i++) {
    t = images[i].src;
    if (t.indexOf('identicon') != -1) {
      images[i].src = t.replace(/identicon/, 'wavatar');
    }
  }
})();