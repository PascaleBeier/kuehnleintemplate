window.$ = window.jQuery = require('jquery');

require('magnific-popup/dist/jquery.magnific-popup');
require('bootstrap-sass/assets/javascripts/bootstrap');

$(function() {
    $('a[rel*="lightbox"]').magnificPopup({
        type: 'image',
        tLoading: 'Lade Bild...',
        tClose: 'Schließen (Esc)',
        image: {
            titleSrc: function(item) {
                var title = item.el.attr('title');
                var description = item.el.attr('alt');
                return ((title)?title:'') + ((description)?'<small>'+ description +'</small>':'');
            }
        },
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1],
            tCounter: '%curr% von %total%',
            tPrev: 'Zurück (Linke Pfeiltaste)',
            tNext: 'Vorwärts (Rechte Pfeiltaste)'
        }
    });
});