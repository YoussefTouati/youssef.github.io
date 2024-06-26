// Ajout d'un écouteur d'événements pour le chargement du DOM
document.addEventListener('DOMContentLoaded', function () {
    // Animation initiale pour les éléments de la page
    const elements = document.querySelectorAll('.about, .travel-item, .social-icon, .contact-section');
    elements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
    });

    setTimeout(() => {
        elements.forEach(el => {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        });
    }, 300);

    // Gestion de la soumission du formulaire de contact
    var contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Empêche la soumission par défaut du formulaire
        var email = document.getElementById('email');
        var message = document.getElementById('message');

        // Validation simple (vous pouvez étendre cela avec une logique plus complexe)
        if (email.value.trim() === '' || message.value.trim() === '') {
            alert('Veuillez remplir tous les champs.');
            return;
        }

        // Animation de confirmation de soumission
        contactForm.style.opacity = 0.5;
        setTimeout(() => {
            contactForm.style.opacity = 1;
        }, 500);

        // Ici, vous enverriez généralement les données à un serveur
        console.log('Email:', email.value);
        console.log('Message:', message.value);

        // Effacer les champs du formulaire
        email.value = '';
        message.value = '';

        // Fournir un retour à l'utilisateur
        alert('Merci pour votre message ! Nous vous contacterons bientôt.');
    });
});
