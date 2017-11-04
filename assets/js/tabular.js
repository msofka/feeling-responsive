
    function locationHashChanged() {
      var urla = document.location.toString();
      if (urla.match('#')) {
          $('.nav-tabs a[href="#' + urla.split('#')[1] + '"]').tab('show');
          window.scrollTo(0, 0);
      }
    }

    $('#navigation a').on('click touch', function (e) {
        setTimeout(locationHashChanged , 300);
    })

    $( document ).ready(function() {
      locationHashChanged();
    });
