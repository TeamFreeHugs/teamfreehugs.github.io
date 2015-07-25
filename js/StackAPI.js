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
		var authURL = 'https://stackexchange.com/oauth/dialog?client_id' = this.clientID
				+ '&scope=';
		for ( var pos = 0; pos < this.scope.length; ++pos) {
			authURL += this.scope[pos] + '';
			if (pos != this.scope.length)
				authURL += ',';
		}
		authURL += '&redirect_uri=';
		if (this.redirect_url != undefined) {
			authURL += this.redirect_url;
		} else {
			authURL += window.location.toString();
		}
		if (credentials.state != undefined) {
			authURL += '&state=' + credentials.state;
		}
		alert(authURL);
	}
	return this;
}