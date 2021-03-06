function getCode(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex
			.exec(location.search);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g,
			" "));
}

function getHash(name) {
	var matches = location.hash.match(new RegExp(name + '=([^&]*)'));
	return matches ? matches[1] : "";
}

function readTextFile(file, error) {
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", file, false);
	rawFile.onreadystatechange = function() {
		if (rawFile.readyState === 4) {
			if (rawFile.status === 200 || rawFile.status == 0) {
				return rawFile.responseText;
			}
		}
	}
	rawFile.onerror = error;
	try {
		rawFile.send(null);
	} catch (e) {
		error();
	}
	return rawFile.responseText;
}

function pathExists(url) {
	var http = new XMLHttpRequest();
	http.open('HEAD', url, false);
	http.send();
	return http.status != 404;
}

function StackAPI(credentials) {
	this.clientID = credentials.clientID;
	if (credentials.key != undefined) {
		this.key = credentials.key;
	}
	if (credentials.authNeeded != undefined && credentials.authNeeded == true) {
		if (credentials.scope != undefined) {
			this.scope = credentials.scope;
		}
		if (credentials.redirect_uri != undefined) {
			this.redirect_uri = credentials.redirect_uri;
		}
	}
	this.authenticate = function() {

		this.authURL = 'https://stackexchange.com/oauth/dialog?client_id=';
		this.authURL += this.clientID;
		if (this.scope != undefined) {
			this.authURL += '&scope=';
			for (pos = 0; pos < this.scope.length; ++pos) {
				this.authURL += this.scope[pos] + '';
				if (pos != this.scope.length)
					this.authURL += ',';
			}
		}
		if (credentials.state != undefined) {
			this.authURL += '&state=' + this.credentials.state;
		}
		if (this.key != undefined) {
			this.authURL += '&key=' + this.key;
		}
		this.authURL += '&redirect_uri=';
		if (this.redirect_uri != undefined) {
			this.authURL += this.redirect_uri;
		} else {
			this.authURL += window.location.toString();
		}
		if (getHash('access_token') == "") {
			window.location = this.authURL;
			return "";
		} else {
			var vals = new Object();
			vals.access_token = getHash('access_token');
			if (getHash('expires') != "")
				vals.expires = getHash('expires');
			return vals;
		}
	}
	this.getScope = function() {
		return this.scope == undefined ? null : this.scope;
	}

	this.getKey = function() {
		return this.key;
	}

	this.getToken = function() {
		return this.getHash('access_token');
	}

	this.access_tokens = new Object();

	this.access_tokens.invalidateAccessToken = function() {
		var apiLink = 'https://api.stackexchange.com/2.2/access-tokens/'
				+ access_token + '/invalidate';
	}
}