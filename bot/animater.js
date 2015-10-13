function animate(node, settings, time) {
    if (Object.prototype.toString.call(node).match(/\[object HTML\w*Element]/) == null) throw new NodeCompilationError('Node must be a HTML Element!');
    if (Object.prototype.toString.call(settings) !== '[object Object]') throw new NodeCompilationError('Settings must be an object!');
    if (typeof time !== 'number') throw new NodeCompilationError('Time must be a number!');
    var hasOwnProperty = Object.prototype.hasOwnProperty;

    function isEmpty(obj) {

        if (obj == null) return true;

        if (obj.length > 0) return false;
        if (obj.length === 0) return true;

        for (var key in obj) {
            if (hasOwnProperty.call(obj, key)) return false;
        }

        return true;
    }

    if (isEmpty(settings)) throw new NodeCompilationError('Settings must not be empty!');

    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

    var computedStylesCurrent = window.getComputedStyle(node);
    var styles = {};
    var animationID = 'animation-' + guid(),
        styleID = 'animation-' + guid();
    var vendors = ['', '-webkit-'];
    styles['.' + styleID] = {
        'animation-name': animationID,
        'animation-duration': time / 1000 + 's',
        '-webkit-animation-name': animationID,
        '-webkit-animation-duration': time / 1000 + 's'
    };
    var noVendor = animationID + ' {\n  0% {\n';
    for (var s in settings) {
        noVendor += '    ' + s + ': ' + computedStylesCurrent[s] + ';\n';
    }
    noVendor += '  }\n\n  100% {\n';
    for (s in settings) {
        noVendor += '    ' + s + ': ' + settings[s] + ';\n';
    }
    noVendor = noVendor.substring(0, noVendor.length);
    noVendor += '  }\n}';
    var withVendor = '';
    for (var vendor in vendors) {
        withVendor += '@' + vendors[vendor] + 'keyframes ' + noVendor + '\n';
    }
    var animationNode = compileStyle(styles);
    animationNode.textContent += '\n\n' + withVendor;
    document.head.appendChild(animationNode);
    node.className += ' ' + styleID;
    window.setTimeout(function () {
        for (var s in settings) {
            node.style[s] = settings[s];
        }
        //Short delay to prevent flicker?
        window.setTimeout(function () {
            //noinspection JSCheckFunctionSignatures
            node.className = node.className.replace(eval('/' + styleID.replace(/\-/g, '\\-') + '/'), '').replace(/  +/, ' ');
        }, 1300);
        document.head.removeChild(animationNode);
    }, time);
}