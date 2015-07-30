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
	var apps = document.createElement('li');
	var help = document.createElement('li');
	var forum = document.createElement('li');
	var launchpad = document.createElement('li');
	var MAAS = document.createElement('li');
	var canonical = document.createElement('li');

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
	apps.innerHTML = "<a href=\"http://apps.ubuntu.com\">Apps</a>";
	apps.className = "siteLink";
	help.innerHTML = "<a href=\"https://help.ubuntu.com\">Help</a>";
	help.className = "siteLink";
	forum.innerHTML = "<a href=\"http://ubuntuforums.org\">Forum</a>";
	forum.className = "siteLink";
	launchpad.innerHTML = "<a href=\"http://launchpad.net\">Launchpad</a>";
	launchpad.className = "siteLink";
	MAAS.innerHTML = "<a href=\"http://maas.ubuntu.com\">MAAS</a>";
	MAAS.className = "siteLink";
	canonical.innerHTML = "<a href=\"http://canonical\">Canonical</a>";
	canonical.className = "siteLink";

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
	listOfSites.appendChild(apps);
	listOfSites.appendChild(help);
	listOfSites.appendChild(forum);
	listOfSites.appendChild(launchpad);
	listOfSites.appendChild(MAAS);
	listOfSites.appendChild(canonical);

	linksWrapper.appendChild(listOfSites);

	newUbuntuLinks.appendChild(linksWrapper);

	document.body.appendChild(newUbuntuLinks);

	var toolbar = document.getElementsByClassName('topbar')[0];
	toolbar.className += " stickyToolbar";

	var line = document.createElement('div');
	line.innerHTML = "<br><br>";
	toolbar.parentElement.insertBefore(line, toolbar);
})();