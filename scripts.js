// Ajout d'un �couteur d'�v�nements pour le chargement du DOM
document.addEventListener('DOMContentLoaded', function () {
    // Gestion de la soumission du formulaire de contact
    var contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Emp�che la soumission par d�faut du formulaire
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        // Validation simple (vous pouvez �tendre cela avec une logique plus complexe)
        if (email.trim() === '' || message.trim() === '') {
            alert('Veuillez remplir tous les champs.');
            return;
        }

        // Ici, vous enverriez g�n�ralement les donn�es � un serveur
        console.log('Email:', email);
        console.log('Message:', message);

        // Effacer les champs du formulaire
        email.value = '';
        message.value = '';

        // Fournir un retour � l'utilisateur
        alert('Merci pour votre message ! Nous vous contacterons bient�t.');
    });
});
