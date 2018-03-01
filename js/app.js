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

    //// visit counter 

    function DisplayVisits() {

        // one year cookie
        today.setTime(today.getTime() + 365 * 24 * 60 * 60 * 1000);
        $.cookie('visits', numVisits, today);

        var visitCounter = $('.visit__counter');
        var favoriteName = $('.favorite__name');
        var today = new Date();
        var numVisits = $.cookie('visits');

        if (numVisits) {
            numVisits = parseInt(numVisits) + 1;
        } else {
            numVisits = 1;
        }

        if (numVisits == 10) {
            favoriteName.append('AC/DC - Thunderstruck');
            console.log(numVisits);
        } else {
            favoriteName.append('Szeregowiec Ryan');
            console.log(numVisits);
        }
    }

    DisplayVisits();
});