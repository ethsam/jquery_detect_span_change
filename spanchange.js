/* detecté un changement dans un span */
jQuery("#Total").on('DOMSubtreeModified', function () {
  console.log('changement detecté : ' + jQuery('#Total').text()); //affiche un console log
});
