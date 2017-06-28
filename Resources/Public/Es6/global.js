$(() => {
    $('a[rel*="lightbox"]').magnificPopup({
        type: 'image',
        tLoading: 'Lade Bild...',
        tClose: 'Schließen (Esc)',
        image: {
            titleSrc: function(item) {
                let title = item.el.attr('title');
                let description = item.el.attr('alt');
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