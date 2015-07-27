// ==UserScript==
// @name         Unicorns while waiting...
// @namespace    http://meta.stackexchange.com/questions/259579/please-change-the-pending-edit-cannot-edit-error-screen?noredirect=1#comment846127_259579
// @version      1.0
// @description  Unicorns!
// @author       Uni*
// @match        http://*.stackexchange.com/posts/*/edit
// @match        http://stackoverflow.com/posts/*/edit
// @match        http://superuser.com/posts/*/edit
// @match        http://askubuntu.com/posts/*/edit
// @grant        none
// ==/UserScript==

function load() {
    document.body.style.backgroundImage = "url('http://i.stack.imgur.com/iLHqV.jpg')";

    var body = document.getElementsByTagName('body')[0];
    
    if (body.innerHTML.indexOf('There is a pending suggested edit in the queue, try again in a few minutes.') > -1) {
        body.innerHTML = "Hello, fellow Unicorn! Please wait for the suggested edit to be approved first... Meanwhile why not enjoy the flying unicorns in the background?";
    }
}

load();