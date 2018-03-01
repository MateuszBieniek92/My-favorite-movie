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

        var numVisits = $.cookie('visits');
        var visitCounter = $('.visit__counter');
        var favoriteName = $('.favorite__name');

        if (numVisits) {
            numVisits = parseInt(numVisits) + 1;
        } else {
            numVisits = 1;
        } 

        if (numVisits == 1) {
            visitCounter.append('Jestes tu po raz pierwszy! :)');
        } else {
            visitCounter.append('Jestes tu '+ numVisits + 'raz!');
        }

        var today = new Date();

        // today.setTime(today.getTime() + 365 * 24 * 60  * 60  * 1000); // one year cookie
        today.setTime(today.getTime() + 50); //test
        $.cookie('visits', numVisits, today);
    }

    DisplayVisits();
});