// ==UserScript==
// @name         Eyes Killer
// @namespace    http://chat.meta.stackexchange.com/
// @version      0.1
// @description  Your eyes hurt now
// @author       You
// @match        *://chat.meta.stackexchange.com/rooms/*
// @grant        none
// ==/UserScript==

var caps = false;

function isALetter(charVal) {
	if (charVal.toUpperCase() != charVal.toLowerCase())
		return true;
	else
		return false;
}

function go() {
	document.getElementById('input').addEventListener("input", function() {
		var parts = document.getElementById('input').value.split("");
		var out = "";
		for (i = 0; i < parts.length; ++i) {
			if (parts[i].trim() === "") {
				out += parts[i];
				continue;
			}
			if (isALetter(parts[i])) {
				if (caps) {
					out += parts[i].toLowerCase();
				} else {
					out += parts[i].toUpperCase();
				}
				caps = !caps;
			} else {
				out += parts[i];
			}
		}
		$("#input").val(out);
		caps = false;
	});

}

go();