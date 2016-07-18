Drupal.behaviors.ci_ajax = {
  attach: function (context, settings) {
  (function($){
    $.getJSON("/ci/api/lastestentities", function( data ) {
      var items = [];

      items.push("<ul>");

      $.each( data, function( key, val ) {
        items.push("<li><a href='"+val.nid+"'>"+ val.title +"</a></li>");
      });

      items.push("</ul>");

    $("#ultimi-articoli").html(items.join(''));
    });

    // Note per iterazione 4.

    // var effect = Drupal.settings.ci_ajax.Ciccio;
    //
    // console.log(effect);
  })(jQuery);

  }
};
