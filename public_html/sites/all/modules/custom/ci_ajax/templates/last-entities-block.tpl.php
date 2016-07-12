<div id="ultimi-articoli"></div>

<script>
jQuery.getJSON("/ci/api/lastestentities", function( data ) {
  var items = [];
  items.push("<ul>");
  jQuery.each( data, function( key, val ) {

    items.push("<li><a href='"+val.nid+"'>"+ val.title +"</a></li>");

  });
    items.push("</ul>");

jQuery("#ultimi-articoli").html(items.join(''));
});
</script>
