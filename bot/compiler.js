function NodeCompilationError(message) {
    this.name = 'NodeCompilationError';
    this.message = message || '';
}
NodeCompilationError.prototype = Error.prototype;

function compileHTML(tag) {
    if (typeof tag === 'undefined') {
        throw new NodeCompilationError('Tag is undefined!');
    }
    if (Object.prototype.toString.call(tag) !== '[object Object]') {
        throw new NodeCompilationError('Tag must be an object!');
    }
    if (typeof tag.nodeTag === 'undefined')
        throw new NodeCompilationError('Node tag is undefined');
    var outputNode = document.createElement(tag.nodeTag);
    if (typeof tag.attributes !== 'undefined') {
        if (Object.prototype.toString.call(tag.attributes) !== '[object Object]') {
            throw new NodeCompilationError('Tag attribute must be an object!');
        }
        for (var name in tag.attributes)
            //noinspection JSUnfilteredForInLoop
            outputNode.setAttribute(name, tag.attributes[name]);
    }

    if (typeof tag.innerHTML !== 'undefined') {
        outputNode.innerHTML = tag.innerHTML;
    }

    if (typeof tag.textContent !== 'undefined') {
        if (typeof tag.innerHTML !== 'undefined') {
            throw new NodeCompilationError('Both textContent and innerHTML is set!');
        }
        outputNode.textContent = tag.textContent;
    }

    if (typeof tag.children !== 'undefined') {
        if (typeof tag.textContent !== 'undefined') {
            throw new NodeCompilationError('Both textContent and children list is set!');
        }
        var childrenType = Object.prototype.toString.call(tag.children);
        if (childrenType !== '[object Array]' && childrenType.match(/\[object HTML\w*Element]/) == null) {
            throw new NodeCompilationError('Tag children must be an array!');
        }
        if (childrenType === '[object Array]')
            for (var p = 0; p < tag.children.length; p++) {
                if (Object.prototype.toString.call(tag.children[p]) === '[object Object]')
                    outputNode.appendChild(compileHTML(tag.children[p]));
                else
                    outputNode.appendChild(tag.children[p]);
            }
        else
            outputNode.appendChild(tag.children);
    }

    if (typeof tag.style !== 'undefined') {
        if (Object.prototype.toString.call(tag.style) !== '[object Object]') {
            throw new NodeCompilationError('Tag style must be an object!');
        }
        var outputStyle = '';
        for (var styleName in tag.style)
            //noinspection JSUnfilteredForInLoop
            outputStyle += styleName + ': ' + tag.style[styleName] + '; '

        //noinspection JSValidateTypes
        outputNode.style = outputStyle;
    }

    return outputNode;
}

function compileStyle(style) {
    if (Object.prototype.toString.call(style) !== '[object Object]') {
        throw new NodeCompilationError('Style isn\'t an object');
    }
    var outputNode = document.createElement('style');
    var outputText = '';
    for (var selector in style) {
        outputText += selector + ' {\n';
        //noinspection JSUnfilteredForInLoop
        for (var styleName in style[selector]) {
            //noinspection JSUnfilteredForInLoop
            outputText += '  ' + styleName + ': ' + style[selector][styleName] + ';\n';
        }
        outputText += '}\n\n';
    }
    outputText = outputText.substr(0, outputText.length - 2);
    outputNode.textContent = outputText;
    return outputNode;
}

function compileScript(scriptLines) {
    if (Object.prototype.toString.call(scriptLines) !== '[object Array]')
        throw new NodeCompilationError('Script lines must be an array');
    var outputNode = document.createElement('script');
    var outputText = '';
    for (var line in scriptLines) {
        outputText += scriptLines[line] + '\n';
    }
    outputText = outputText.substr(0, outputText.length - 1);
    outputNode.textContent = outputText;
    return outputNode;
}