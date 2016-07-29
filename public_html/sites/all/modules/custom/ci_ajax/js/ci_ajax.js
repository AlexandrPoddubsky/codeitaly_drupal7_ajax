Drupal.behaviors.ci_ajax = {
  attach: function (context, settings) {
  (function($){
    // Recupero tramite drupal behaviors del numero di entities da richiedere/mostrare
    var num = Drupal.settings.ci_ajax.num_entities;

    $.getJSON("/ci/api/lastestentities/" + num, function( data ) {
      var items = [];

      items.push("<ul>");

      $.each( data, function( key, val ) {
        items.push("<li><a href='"+val.nid+"'>"+ val.title +"</a></li>");
      });

      items.push("</ul>");

    $("#ultimi-articoli").html(items.join(''));
    });

  })(jQuery);

  }
};
