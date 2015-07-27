// ==UserScript==
// @name         The StackExchange Chat Tweaks
// @namespace    http://chat.stackexchange.com/users/149743
// @version      1.0
// @description  Does magic if you are in a chat room
// @author       Uni*
// @match        http://chat.stackexchange.com/rooms/*
// @match        http://chat.meta.stackexchange.com/rooms/*
// @match        http://chat.stackoverflow.com/rooms/*
// @grant        none
// ==/UserScript==


(function go() {
    var buttonsContainer = document.getElementById("chat-buttons"),
        
        disapprovalbutton = document.createElement("button"),
        emojiButton = document.createElement("button"),
        codeButton = document.createElement("button"),
        boldButton = document.createElement("button"),
        italicButton = document.createElement("button"),
        linkButton = document.createElement("button"),
        tagButton = document.createElement("button"),
        lineButton = document.createElement("button"),
        silenceButton = document.createElement("button");
    
    disapprovalbutton.setAttribute("class", "button");
    disapprovalbutton.id = "disapproval-button";
    disapprovalbutton.innerHTML = "ಠ_ಠ";

    emojiButton.setAttribute("class", "button");
    emojiButton.id = "emoji-button";
    emojiButton.innerHTML = "Select EMOJI";

    codeButton.setAttribute("class", "button");
    codeButton.id = "code-button";
    codeButton.innerHTML = "Insert Code";

    boldButton.setAttribute("class", "button");
    boldButton.id = "bold-button";
    boldButton.innerHTML = "Bold";

    italicButton.setAttribute("class", "button");
    italicButton.id = "italic-button";
    italicButton.innerHTML = "Italic";
    
    linkButton.setAttribute("class", "button");
    linkButton.id = "link-button";
    linkButton.innerHTML = "Link";
    
    tagButton.setAttribute("class", "button");
    tagButton.id = "tag-button";
    tagButton.innerHTML = "Insert tag";
    
    lineButton.setAttribute("class", "button");
    lineButton.id = "line-button";
    lineButton.innerHTML = "LineStrike";
    
    silenceButton.setAttribute("class", "button");
    silenceButton.id = "quiet-button";
    silenceButton.innerHTML = "Silence";

    //  buttonsContainer.appendChild(disapprovalbutton);
    //  buttonsContainer.appendChild(emojiButton);
    buttonsContainer.appendChild(codeButton);
    buttonsContainer.appendChild(boldButton);
    buttonsContainer.appendChild(italicButton);
    buttonsContainer.appendChild(linkButton);
    buttonsContainer.appendChild(tagButton);
    buttonsContainer.appendChild(lineButton);
    buttonsContainer.appendChild(silenceButton)

    codeButton.addEventListener("click", function(e){
        var editorCell = this.parentElement.previousElementSibling,
            textarea = editorCell.getElementsByTagName("textarea")[0],
            text = textarea.value,
            selStart = textarea.selectionStart,
            selEnd = textarea.selectionEnd;
        textarea.value = text.slice(0, selStart) + "`" + text.slice(selStart, selEnd) + "`" + text.slice(selEnd);
        textarea.focus();
        textarea.selectionStart = selStart + 1;
        textarea.selectionEnd = selEnd + 1;
    });

    boldButton.addEventListener("click", function(e){
        var editorCell = this.parentElement.previousElementSibling,
            textarea = editorCell.getElementsByTagName("textarea")[0],
            text = textarea.value,
            selStart = textarea.selectionStart,
            selEnd = textarea.selectionEnd;
        textarea.value = text.slice(0, selStart) + "**" + text.slice(selStart, selEnd) + "**" + text.slice(selEnd);
        textarea.focus();
        textarea.selectionStart = selStart + 2;
        textarea.selectionEnd = selEnd + 2;
    });

    italicButton.addEventListener("click", function(e){
        var editorCell = this.parentElement.previousElementSibling,
            textarea = editorCell.getElementsByTagName("textarea")[0],
            text = textarea.value,
            selStart = textarea.selectionStart,
            selEnd = textarea.selectionEnd;
        textarea.value = text.slice(0, selStart) + "_" + text.slice(selStart, selEnd) + "_" + text.slice(selEnd);
        textarea.focus();
        textarea.selectionStart = selStart + 1;
        textarea.selectionEnd = selEnd + 1;
    });
    
    linkButton.addEventListener("click", function(e){
        var editorCell = this.parentElement.previousElementSibling,
            textarea = editorCell.getElementsByTagName("textarea")[0],
            text = textarea.value,
            selStart = textarea.selectionStart,
            selEnd = textarea.selectionEnd;
        textarea.value = text.slice(0, selStart) + "[" + text.slice(selStart, selEnd) + "](http://)" + text.slice(selEnd);
        textarea.focus();
        textarea.selectionStart = selEnd + 3 + "http://".length;
        textarea.selectionEnd = selEnd + 3 + "http://".length;
    });
    
    tagButton.addEventListener("click", function(e){
        var editorCell = this.parentElement.previousElementSibling,
            textarea = editorCell.getElementsByTagName("textarea")[0],
            text = textarea.value,
            selStart = textarea.selectionStart,
            selEnd = textarea.selectionEnd;
        textarea.value = text.slice(0, selStart) + "[tag:" + text.slice(selStart, selEnd) + "]" + text.slice(selEnd);
        textarea.focus();
        textarea.selectionStart = selEnd + 5;
        textarea.selectionEnd = selEnd + 5;
    });
    
    lineButton.addEventListener("click", function(e){
        var editorCell = this.parentElement.previousElementSibling,
            textarea = editorCell.getElementsByTagName("textarea")[0];
        textarea.value = "---strikeout---";
        textarea.focus();
        textarea.selectionStart = "---strikeout---".length;
        textarea.selectionEnd = "---strikeout---".length;
    });
    
    silenceButton.addEventListener("click", function(e) {
        var chatBox = document.getElementById("chat");
        var text = document.createTextNode("REMOVED CHAT, HAVE SILENCE! RELOAD PAGE TO GET BACK CHAT!");
        chatBox.parentNode.insertBefore(text, chatBox);
        chatBox.parentNode.removeChild(chatBox);
    });
})();