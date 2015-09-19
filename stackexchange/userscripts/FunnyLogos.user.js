// ==UserScript==
// @name         Funny Logos
// @version      1.0
// @description  Funny logos...
// @author       Uni*
// @match        *://*.stackexchange.com/*
// @match        *://stackoverflow.com/*
// @match        *://mathoverflow.net/*
// @match        *://stackapps.com/*
// @match        *://superuser.com/*
// @match        *://serverfault.com/*
// @match        *://askubuntu.com/*
// @run-at       document-end
// @grant        none
// ==/UserScript==
function withJquery(f) {
  s = document.createElement('script');
  s.textContent = '(' + f.toString() + ')(jQuery)'
  document.head.appendChild(s)
}

$('#hlogo > a').css({display:"none"})
withJquery(function go($) {
  $.getScript('http://teamfreehugs.github.io/js/URI.js', function (data, textStatus, jqxhr) {
    url = new URI(window.location.toString())
    logo = $('#hlogo > a')
    star = $('.star-off')
    if (url.authority == 'stackoverflow.com') {
      logo.css({
        'background-image': 'url("http://teamfreehugs.github.io/img/stackoverflow.svg"), none',
        width: '250px',
        height: '80px'
      });
      if (url.path.startsWith("/questions")) {
        if (!(url.query == "tab=favorites" && url.path.startsWith("/users"))) {
          $('.anonymous-gravatar').css({
            'background-image': 'url("http://teamfreehugs.github.io/img/stackoverflow.svg"), none'
          });
        }
        star.css({
          'background-image' : 'url("http://teamfreehugs.github.io/img/stackoverflow.svg"), none'
        });

      }
    }
    $('#hlogo > a').css({display:"block"})
  })
});
