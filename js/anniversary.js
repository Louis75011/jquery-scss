jQuery(function() {
    // Cette fonction est exécutée lorsque le document est prêt
    $('.hidden').each(function(index) {
        // Pour chaque élément avec la classe "hidden"
        $(this).delay(1000 * index).queue(function() {
            // Ajoute un délai progressif à chaque élément & Le délai est calculé en multipliant l'index par 1 seconde
            $(this).addClass('visible').dequeue();
            // Ajoute la classe "visible" à l'élément. Cela rendra l'élément visible avec les styles correspondants
        });
    });
});