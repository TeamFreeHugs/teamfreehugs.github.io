/**
 * Convert an image 
 * to a base64 url
 * @param  {String}   url         
 * @param  {Function} callback    
 * @param  {String}   [outputFormat=image/png]           
 */
function convertImgToBase64URL(url, callback, outputFormat){
    var img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = function(){
        var canvas = document.createElement('CANVAS'),
        ctx = canvas.getContext('2d'), dataURL;
        canvas.height = this.height;
        canvas.width = this.width;
        ctx.drawImage(this, 0, 0);
        dataURL = canvas.toDataURL(outputFormat);
        callback(dataURL);
        canvas = null; 
    };
    img.src = url;
}