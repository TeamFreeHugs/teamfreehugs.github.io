/*var keywords = [ "public", "static", "void", "def", "function", "method",
    "return", "int", "in", "boolean", "bool", "for", "if", "else", "end",
    "while", "true", "false", "private", "final", "class", "protected",
    "instanceof", "do", "then" ];

function pre() {
  preBlocks = document.getElementsByTagName('pre');
  for (p = 0; p < preBlocks.length; ++p) {
    pre = preBlocks[p];
    code = pre.textContent.split(/(\w+|\{|\/\/|\")/);
    pre.textContent = "";
    mode = "none";
    for (i = 0; i < code.length; ++i) {
      word = code[i];
      span = document.createElement('span');
      span.className = "code";
      if (mode != "comment" && mode != "quote"
          && word.replace(new RegExp(' ', 'g'), '') === "") {
        span.innerHTML = " ";
      } else if (word == " ") {
        span.innerHTML = " ";
      } else if (word.replace(new RegExp(' ', 'g'), '') == "\n") {
        mode == "none";
        span.innerHTML = "<br>";
      } else if (mode == "comment") {
        span.innerHTML = word;
        span.style.color = "#A9D4AB";
        if (code[i + 1].replace(new RegExp(' ', 'g'), '') == "\n")
          mode = "none";
      } else if (mode != "quote" && (word == "//" | word == "#")) {
        span.innerHTML = word;
        span.style.color = "#A9D4AB";
        mode = "comment";
      } else if (word == "(") {
        mode = "type";
        span.innerHTML = "(";
      } else if (mode == "type") {
        span.innerHTML = word;
        span.style.color = "#DECE73";
        mode = "none";
      } else if (word == "\"" && mode != "comment") {
        if (mode == "quote") {
          mode = "none";
        } else {
          mode = "quote"
        }
        span.innerHTML = "\"";
        span.style.color = "#7383DE";
      } else if (mode == "quote" && mode != "comment") {
        span.innerHTML = word;
        span.style.color = "#7383DE";
      } else if (keywords.indexOf(word) != -1) {
        span.innerHTML = word;
        span.style.color = "#EB2DA8";
      } else {
        span.innerHTML = word;
      }
      pre.appendChild(span);
    }
  }
};*/

function pre() {
  preBlocks = document.getElementsByTagName('pre');
  for (p = 0; p < preBlocks.length; ++p) {
    pre = preBlocks[p];
    pre.className = "prettyprint";
  }
  
  codeBlocks = document.getElementsByTagName('code');
  for (p = 0; p < codeBlocks.length; ++p) {
    c = codeBlocks[p];
    c.className = "prettyprint";
  }
  s = document.createElement('script');
  s.src = "https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js";
  document.head.appendChild(s);
}