// ==UserScript==
// @name         Sticky Toolbar For AskUbuntu
// @version      1.0
// @description  Improves AskUbuntu page
// @author       Uni*
// @match        *://*.askubuntu.com/*
// @grant        none
// ==/UserScript==


(function() {

	console.log('AskUbuntu StickyToolbar is loading...');
	
	var head = document.getElementsByTagName('head')[0];
	var stickStyle = document.createElement('link');
	stickStyle.rel = 'stylesheet';
	stickStyle.href = 'http://teamfreehugs.github.io/styles/stackexchange/askubuntu.css';
	head.appendChild(stickStyle);

	var ubuntuLinks = document.getElementsByClassName('nav-global')[0];
	ubuntuLinks.parentElement.removeChild(ubuntuLinks);

	var remove = document.getElementById('custom-header');
	remove.parentElement.removeChild(remove);
	
	var newUbuntuLinks = document.createElement('div');
	newUbuntuLinks.className = "links";
	var linksWrapper = document.createElement('div');
	var listOfSites = document.createElement('ul');
	linksWrapper.className = "linksList";

	listOfSites.className = "siteLink";
	
	var ubuntuHome = document.createElement('li');
	var ubuntuCommunity = document.createElement('li');
	var askubuntu = document.createElement('li');
	var developer = document.createElement('li');
	var design = document.createElement('li');
	var discourse = document.createElement('li');
	var hardware = document.createElement('li');
	var insights = document.createElement('li');
	var juju = document.createElement('li');
	var shop = document.createElement('li');
	var more = document.createElement('li');
	// var more = document.createElement('li');

	ubuntuHome.innerHTML = "<a href=\"http://www.ubuntu.com\">Ubuntu</a>";
	ubuntuCommunity.innerHTML = "<a href=\"http://community.ubuntu.com/\">Community</a>";
	askubuntu.innerHTML = "<a href=\"http://askubuntu.com\">Ask!</a>";
	askubuntu.className = "activeSite";
	developer.innerHTML = "<a href=\"http://developer.ubuntu.com\">Developer</a>";
	design.innerHTML = "<a href=\"http://design.ubuntu.com\">Design</a>";
	discourse.innerHTML = "<a href=\"http://discourse.ubuntu.com\">Discourse</a>";
	hardware.innerHTML = "<a href=\"http://www.ubuntu.com/certification\">Hardware</a>";
	insights.innerHTML = "<a href=\"http://insights.ubuntu.com/\">Insights</a>";
	juju.innerHTML = "<a href=\"http://juju.ubuntu.com\">Juju</a>";
	shop.innerHTML = "<a href=\"http://shop.ubuntu.com\">Shop</a>";

	listOfSites.appendChild(ubuntuHome);
	listOfSites.appendChild(ubuntuCommunity);
	listOfSites.appendChild(askubuntu);
	listOfSites.appendChild(developer);
	listOfSites.appendChild(design);
	listOfSites.appendChild(discourse);
	listOfSites.appendChild(hardware);
	listOfSites.appendChild(insights);
	listOfSites.appendChild(juju);
	listOfSites.appendChild(shop);
	
	
	linksWrapper.appendChild(listOfSites);

	newUbuntuLinks.appendChild(linksWrapper);
	
	document.body.appendChild(newUbuntuLinks);
	
})();