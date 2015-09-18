// ==UserScript==
// @name         Funny Logos
// @version      1.0
// @description  Funny logos...
// @author       Uni*
// @match        *://*.stackexchange.com/*
// @match        *://stackoverflow.com/*
// @match        *://mathoverflow.net/*
// @match        *://stackapps.com/*
// @match        *://superuser.com/*
// @match        *://serverfault.com/*
// @match        *://askubuntu.com/*
// @grant        none
// ==/UserScript==

function addScripts() {
	var head = document.head;
	var uri = document.createElement('script');
	uri.src = "https://teamfreehugs.github.io/js/URI.js";
	head.appendChild(uri);
}

(function() {
  addScripts()
  url = new URI(window.location.toString())
  logo = $('#hlogo > a')
  if (url.authority == "stackoverflow.com") {
    logo.css({
        "background-image" : "url(\"http://teamfreehugs.github.io/img/stackoverflow.svg\"), none",
        width : "250px",
        height : "80px"
    });
  }
})()