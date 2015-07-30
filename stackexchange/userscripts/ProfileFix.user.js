// ==UserScript==
// @name         Profile Fix
// @version      1.1
// @description  Fixes the profile
// @author       Uni*
// @match        *://*.stackexchange.com/*
// @match        *://*.stackoverflow.com/*
// @match        *://*.mathoverflow.net/*
// @match        *://stackapps.com/*
// @match        *://*.superuser.com/*
// @match        *://*.serverfault.com/*
// @match        *://*.askubuntu.com/*
// @grant        none
// @updateURL    http://teamfreehugs.github.io/stackexchange/userscripts/ProfileFix.user.js
// ==/UserScript==

(function() {
  var profile = document.getElementsByClassName('about')[0];
  var head = document.getElementsByTagName('head')[0];
  var link = document.createElement('link');
  link.rel = "stylesheet";
  link.href = "http://teamfreehugs.github.io/styles/stackexchange/profilefix.css";
  head.appendChild(link);
  profile.className += " profile";
})();
