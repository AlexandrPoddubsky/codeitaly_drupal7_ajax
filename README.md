# CodeItaly Drupal 7, Ajax i1
### Tutorial utilizzo di chiamate Ajax con Drupal 7, iterazione 1 (i1)

# Installazione
in costruzione


# Credenziali
User: admin  
password: admin


# Riferimenti

Tutorial ispirato da:  
[Simple Drupal AJAX load with jQuery and delivery callback]

Api/funzioni utilizzate:
* [.info] - Writing module .info files (Drupal 7.x)
* [hook_menu] - function hook_menu()
* [EntityFieldQuery] - EntityFieldQuery()

# Iterazione 1

L'iterazione 1 ha come obiettivo quello di fornire un semplice end-point da cui recuperare informazioni tramite una chiamata ajax. Ajax non è il termine più adatto in quanto i dati vengono trasmessi in formato json, ma l'acronimo AJAJ è impronunciabile :laughing:.

In questa fase non mi sono focalizzato rispettare e applicare tutte le best practices suggerite da mr.X, in quanto le persone interessate ad un approccio semplicistico sono sicuramente alle prime armi.

Elenco delle attività:  
  
1.  **sites/all/modules/custom/ci_ajax/ci_ajax.info:** Creazione di un modulo custom. vedi [.info]  
2.	**sites/all/modules/custom/ci_ajax/ci_ajax.module:** Implementazione dell'hook_menu() per la creazione di un end-point.  
3.	**sites/all/modules/custom/ci_ajax/ci_ajax.module:** Page callback - recupero e manipolazione delle informazioni relative agli ultimi articoli creati.  
4.	**sites/all/modules/custom/ci_ajax/ci_ajax.module:** Delivery callback - output delle informazioni in formato json.  
5.	**[localhost]/admin/structure/block/add:** Creazione di un nuovo blocco contenente lo snippet riportato di seguito e reperibile a questo indirizzo [Gist]. Da pubblicare preferibilmente in una delle barre laterali.  


```javascript
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
```

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


  [Simple Drupal AJAX load with jQuery and delivery callback]: <https://www.drupal.org/node/2046693>

  [hook_menu]: <https://api.drupal.org/api/drupal/modules%21system%21system.api.php/function/hook_menu/7.x>

  [EntityFieldQuery]: <https://www.drupal.org/node/1343708>

  [.info]: <https://www.drupal.org/node/542202>

  [Gist]: <https://gist.github.com/nervaccio/7c6d85ed6cd12adfe28715f24bac7fcb>
