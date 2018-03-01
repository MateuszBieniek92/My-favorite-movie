$(document).ready(function () {

    //// responsive video
    var video = $('video');
    var videoWidth = 1920;
    var videoHeight = 1080;

    $(window).resize(function () {

        var containerWidth = video.parent().width();
        var containerHeight = video.parent().height();

        var scaleWidth = containerWidth / videoWidth;
        var scaleHeight = containerHeight / videoHeight;
        var scale = scaleWidth > scaleHeight ? scaleWidth : scaleHeight;

        // scale
        video.width(scale * videoWidth);
        video.height(scale * videoHeight);

    });

    
});