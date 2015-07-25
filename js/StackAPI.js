function getCode(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex
			.exec(location.search);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g,
			" "));
}

function getHash() {
	return window.location.hash === null ? "" : window.location.hash;
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
		var onAuthError = credentials.authError;
		var onAuthSuccess = credentials.onAuthSuccess;
		if (credentials.redirect_url != undefined) {
			this.redirect_url = credentials.redirect_url;
		}
	}
	this.authenticate = function() {
		this.authURL = 'https://stackexchange.com/oauth/dialog?client_id=';
		this.authURL += this.clientID;
		if (this.scopre != undefined) {
			this.authURL + '&scope=';
			for ( var pos = 0; pos < this.scope.length; ++pos) {
				this.authURL += this.scope[pos] + '';
				if (pos != this.scope.length)
					this.authURL += ',';
			}
		}
		this.authURL += '&redirect_uri=';
		if (this.redirect_url != undefined) {
			this.authURL += this.redirect_url;
		} else {
			this.authURL += window.location.toString();
		}
		if (credentials.state != undefined) {
			this.authURL += '&state=' + this.credentials.state;
		}
		if (getCode('access_token') == "") {
			window.location = this.authURL;
			return "Not yet set";
		} else {
			return getCode('access_token');
		}
	}
}