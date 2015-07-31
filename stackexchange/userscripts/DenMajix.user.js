// ==UserScript==
// @name         'E' -> 'A'
// @version      1.0
// @description  'E' -> 'A'
// @author       Uni*
// @match        *://chat.meta.stackexchange.com/rooms/721/shadows-den
// @grant        none
// ==/UserScript==

(function() {
	var input = document.getElementById('input');
	input.addEventListener("input", function() {
		loc = input.selectionStart;
		input.value = input.value.replace('e', 'a').replace('E', 'A');
		input.selectionStart = loc;
	});
})();