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

function ImgurAPI(credentials) {

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
		authURL = 'https://api.imgur.com/oauth2/authorize/?response_type=token&client_id=';
		authURL += this.clientID;
		
	}
}