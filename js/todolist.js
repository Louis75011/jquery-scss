jQuery(function() {
    // Selecteurs
    let list, newItemForm;
    list = $('ul');
    newItemForm = $('#newItemForm');
    // Attache un gestionnaire d'événement sur la soumission du formulaire
    newItemForm.on('submit', function(e) {
        e.preventDefault();
        let text = $('input:text').val();
        // Ajoute un nouvel élément de liste (<li>) avec le texte saisi à la fin de la liste
        list.append('<li>' + text + '</li>');
        // Réinitialise la valeur du champ de texte du formulaire à une chaîne vide
        $('input:text').val('');
    });

    list.on('click', 'li', function() {
        // Assigner l'élément <li> cliqué à la variable $this
        let $this = $(this);
        // Supprime l'élément <li> cliqué de la liste
        $this.remove();
    });
});