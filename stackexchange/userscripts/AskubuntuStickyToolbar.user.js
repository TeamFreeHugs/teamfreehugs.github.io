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
	var stick = document.createElement('link');
	stick.rel = 'stylesheet';
	stick.href = 'http://teamfreehugs.github.io/styles/stackexchange/askubuntu.css';
	head.appendChild(stick);

	var stickStyle = document.createElement('link');
	stickStyle.rel = 'stylesheet';
	stickStyle.href = 'http://teamfreehugs.github.io/styles/stackexchange/sticky.css';
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

	console.log(listOfSites.className);

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
	ubuntuHome.className = "siteLink";
	ubuntuCommunity.innerHTML = "<a href=\"http://community.ubuntu.com/\">Community</a>";
	ubuntuCommunity.className = "siteLink";
	askubuntu.innerHTML = "<a href=\"http://askubuntu.com\">Ask!</a>";
	askubuntu.className = "activeSite siteLink";
	developer.innerHTML = "<a href=\"http://developer.ubuntu.com\">Developer</a>";
	developer.className = "siteLink";
	design.innerHTML = "<a href=\"http://design.ubuntu.com\">Design</a>";
	design.className = "siteLink";
	discourse.innerHTML = "<a href=\"http://discourse.ubuntu.com\">Discourse</a>";
	discourse.className = "siteLink";
	hardware.innerHTML = "<a href=\"http://www.ubuntu.com/certification\">Hardware</a>";
	hardware.className = "siteLink";
	insights.innerHTML = "<a href=\"http://insights.ubuntu.com/\">Insights</a>";
	insights.className = "siteLink";
	juju.innerHTML = "<a href=\"http://juju.ubuntu.com\">Juju</a>";
	juju.className = "siteLink";
	shop.innerHTML = "<a href=\"http://shop.ubuntu.com\">Shop</a>";
	shop.className = "siteLink";

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

	var toolbar = document.getElementsByClassName('topbar')[0];
	toolbar.className += " stickyToolbar";

	var toolbarWrap = document.getElementsByClassName('topbar-wrapper')[0];
	toolbarWrap.className += " stickyToolbarWrapper";

})();