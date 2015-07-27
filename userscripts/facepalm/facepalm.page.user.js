// ==UserScript==
// @name         Facepalm
// @namespace    http://s3.amazonaws.com/inarticles/39925b1a7fc2f02ad28040e9b9d9a3fc.gif
// @version      0.1
// @description  Gives a facepalm page for stacexchange sites.
// @author       Uni*
// @match        http://*.stackexchange.com/facepalm
// @match        http://stackoverflow.com/facepalm
// @match        http://superuser.com/facepalm
// @match        http://askubuntu.com/facepalm
// @grant        none
// ==/UserScript==

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function go() {
    
    createCookie('FACEPALMCHECK', 'y', 10000000);

    document.title = "FACEPALM!!!!!!!";
    
    var header = document.getElementsByClassName('subheader')[0];
    header.innerHTML = "<h1>FACEPALM!!!!!!</h1>";
    
    var image = document.getElementsByClassName('rightcol')[0];
    image.innerHTML = "<img src=\"http://s3.amazonaws.com/inarticles/39925b1a7fc2f02ad28040e9b9d9a3fc.gif\" alt=\"facepalm\">";
    
    var text = document.getElementsByClassName('leftcol')[0];
    text.innerHTML = "<p>HAVE A FACEPALM!!!</p>";
}


go();