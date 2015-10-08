function ChatError(message) {
    this.name = "ChatError";
    this.message = message || "";
}

ChatError.prototype = Error.prototype;


function init() {
    if (typeof jQuery === 'undefined') {
        var script = document.createElement("script");
        script.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js";
        document.head.appendChild(script);
    }

    return {
        messageHandlers: [],
        attachElements: {},
        messageContentBox: null,
        isWatching: false,
        messageWatcher: null,
        reload: function () {
            this.attachElements.messageContentBox = $('div.input');
            this.attachElements.messagesDiv = $('.message-list');
            if (this.attachElements.messageContentBox.length === 0) {
                throw new ChatError("Can't find input box!")
            }
            if (this.attachElements.messagesDiv.length === 0) {
                throw new ChatError("Can't find messages box");
            }
        }, sendMessage: function (text, force) {
            this.reload();
            if (text === undefined || text === null)
                throw new ChatError("Empty message to send!");
            // If it isn't a string
            text = text + "";
            if (text.trim() === "")
                throw new ChatError("Empty message to send!");
            if (this.attachElements.messageContentBox.text().trim() !== "" && !force) {
                throw new ChatError("Input box isn't empty!");
            }
            this.attachElements.messageContentBox.text(text);
            window.InputEvent = window.Event || window.InputEvent;
            var event = new InputEvent('input', {bubbles: true});
            this.attachElements.messageContentBox[0].dispatchEvent(event);
            var sendButton = $('button.icon.btn-icon.icon-send.send-container');
            sendButton.click();
        }, sendImage: function () {
            this.reload();
        }, attachHandler: function (handler) {
            this.reload();
            this.messageHandlers.push(handler);
        }, startWatching: function () {
            if (this.isWatching)
                throw new ChatError("Already watching");
            this.reload();
            var watcher = this.attachElements.messagesDiv;
            var handlers = this.messageHandlers;
            this.messageWatcher = new MutationObserver(function (mutations) {
                    var mutation = mutations[mutations.length - 1];
                    if (mutation.addedNodes.length != 0) {
                        var latestMessageElement = $(watcher[0].children[watcher[0].children.length - 1].querySelector(".message .bubble.bubble-text .message-text span.selectable-text"));
                        for (var p1 = 0; p1 < handlers.length; p1++) {
                            var handlerNew = handlers[p1]["newMessage"];
                            if (handlerNew !== undefined && handlerNew !== null)
                                handlerNew(latestMessageElement.text());
                        }
                    }
                    else if (mutation.removedNodes.length != 0) {
                        for (var p2 = 0; p2 < handlers.length; p2++) {
                            var handlerDel = handlers[p2]["deletedMessage"];
                            if (handlerDel !== undefined && handlerDel !== null)
                                handlerDel(mutation.removedNodes[0].textContent);
                        }
                    }
                }
            );
            this.messageWatcher.observe(this.attachElements.messagesDiv[0], {childList: true});
            this.isWatching = true;
        }
    };
}