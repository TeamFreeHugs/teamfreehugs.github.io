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
  profile.style.overflowX = "auto";
})();
