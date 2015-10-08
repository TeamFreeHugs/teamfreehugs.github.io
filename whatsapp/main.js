$(document).ready(function () {

    window.whatsapp = init();

    var playgroundInput = $('#playground').find('.input');


    var messageList = $('.message-list');

    function addMessage() {
        var main = $('<div>').attr('class', 'messageWrap message-out').css({
            display: 'block'
        });
        var innerMessage = $('<div>').attr('class', 'message');
        var bubbleText = $('<div>').attr('c lass', 'bubble bubble-text');
        var messageText = $('<div>').attr('class', 'message-text');
        var selectableText = $('<span>').attr('class', 'selectable-text').text(playgroundInput.text());
        main.append(innerMessage.append(bubbleText.append(messageText.append(selectableText))));
        main.click(function () {
                $('body').append($('<div>').css({
                    opacity: 0.6,
                    'background-color': '#ffffff',
                    width: '100vw',
                    height: '100vh',
                    "z-index": 0
                }).attr('id', 'overlay').click(function () {
                    $('#overlay').remove();
                    $('#overlay-box').remove();
                }));
                $('body').append($('<div>').attr('id', 'overlay-box').css({
                    height: '50%',
                    width: '50%',
                    top: '25%',
                    left: '25%',
                    'background-color': '#D0F0C0',
                    "z-index": 1,
                    position: 'absolute',
                    'text-align': 'center'
                }).html('Are you sure you want to delete this message?').append($('<div>').css({
                    position: 'absolute',
                    bottom: '0'
                }).append($('<button>').css({
                    'border-radius': '5px',
                    'background-color': '#00755E',
                    border: 'none',
                    left: 'calc(100vw * 0.125 * 1)',
                    position: 'absolute',
                    top: 'calc(100% - 20px)'
                }).text('Ok').click(function () {
                    $('#overlay').remove();
                    $('#overlay-box').remove();
                    main.remove();
                })).append($('<button>').css({
                    'border-radius': '5px',
                    'background-color': '#FD0E35',
                    border: 'none',
                    left: 'calc(100vw * 0.125 * 3)',
                    position: 'absolute',
                    top: 'calc(100% - 20px)'
                }).text('No').click(function () {
                    $('#overlay').remove();
                    $('#overlay-box').remove();
                }))));
            }
        );
        messageList.append(main);
        playgroundInput.text('');
        sendDiv.html('<button style="background-image: url(\'mic.svg\');" title="Mic?"></button>');
        messageList.scrollTop(messageList.prop('scrollHeight'));
    }

    var sendDiv = $('#sendDiv');
    playgroundInput.on('input keydown paste keyup', function () {
        if ($('#playground').find('.input').text().trim() === '') {
            sendDiv.html('<button style="background-image: url(\'mic.svg\');" title="Mic?"></button>');
        } else {
            sendDiv.html('<button style="background-image: url(\'send.svg\')" title="Send" class="icon btn-icon icon-send send-container"></button>');
            sendDiv.find('button').click(function () {
                if (playgroundInput.text().trim() === '')
                    return;
                addMessage();
            });
        }
    });

    playgroundInput.on('keydown', function (e) {
        if (e.keyCode == 13) {
            if (!e.shiftKey) {
                if (playgroundInput.text().trim() === '')
                    return;
                e.preventDefault();
                addMessage();
            }
        }
    });

    var console = $('#console');

    whatsapp.attachHandler({
        newMessage: function (text) {
            console.append('<p style="color: #00FF7F;">New message! Text: ' +
                text + '</p>');
            console.scrollTop(console.prop('scrollHeight'));
        }, deletedMessage: function (oldText) {
            console.append('<p style="color: #E60026;">Message deleted! Old text: '
                + oldText + '</p>');
            console.scrollTop(console.prop('scrollHeight'));
        }
    });

    whatsapp.startWatching();

    $('.input2').on('keydown', function (e) {
        if (e.keyCode == 13) {
            if (e.shiftKey) {
                e.preventDefault();
                return;
            }
            var inputBox = $('.input2');
            var parts = inputBox.text().split(' ');
            parts = parts.map(function (e) {
                return e.trim()
            });
            parts = parts.filter(function (e) {
                return e !== ''
            });
            if (parts.length < 1) {
                return;
            }
            var command = parts[0].toLowerCase();
            parts.shift();
            var args = parts.join(' ');
            if (command === 'send') {
                try {
                    var main = $('<div>').attr('class', 'messageWrap message-in');
                    var innerMessage = $('<div>').attr('class', 'message');
                    var bubbleText = $('<div>').attr('class', 'bubble bubble-text');
                    var messageText = $('<div>').attr('class', 'message-text');
                    var selectableText = $('<span>').attr('class', 'selectable-text').text(inputBox.text().substring(5));
                    main.append(innerMessage.append(bubbleText.append(messageText.append(selectableText[0])[0])[0])[0]);
                    messageList.append(main);
                } catch (e) {
                    console.append('<p style="color: #E60026;">Error while sending message!' +
                        '</p>');
                }
            }
            inputBox.text('');
        }
    });
})
;
