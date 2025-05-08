// Service content data
const serviceContent = {
    web: {
        title: 'Webové stránky & Aplikácie',
        content: `
            <ul class="list-unstyled">
                <li class="mb-3"><i class="bi bi-check-circle-fill text-accent me-2"></i>Vývoj moderných webových stránok na mieru</li>
                <li class="mb-3"><i class="bi bi-check-circle-fill text-accent me-2"></i>Tvorba e-shopov a webových aplikácií</li>
                <li class="mb-3"><i class="bi bi-check-circle-fill text-accent me-2"></i>Responzívny dizajn pre všetky zariadenia</li>
                <li class="mb-3"><i class="bi bi-check-circle-fill text-accent me-2"></i>Optimalizácia pre vyhľadávače (SEO)</li>
                <li class="mb-3"><i class="bi bi-check-circle-fill text-accent me-2"></i>Integrácia s CMS systémami</li>
            </ul>
        `
    },
    backend: {
        title: 'Backend & API',
        content: `
            <ul class="list-unstyled">
                <li class="mb-3"><i class="bi bi-check-circle-fill text-accent me-2"></i>Vývoj REST API a backendových riešení</li>
                <li class="mb-3"><i class="bi bi-check-circle-fill text-accent me-2"></i>Návrh a implementácia databáz</li>
                <li class="mb-3"><i class="bi bi-check-circle-fill text-accent me-2"></i>Serverové aplikácie a mikroslužby</li>
                <li class="mb-3"><i class="bi bi-check-circle-fill text-accent me-2"></i>Automatizácia a skriptovanie</li>
                <li class="mb-3"><i class="bi bi-check-circle-fill text-accent me-2"></i>Integrácia s externými službami</li>
            </ul>
        `
    },
    automation: {
        title: 'Automatizácia & Optimalizácia',
        content: `
            <ul class="list-unstyled">
                <li class="mb-3"><i class="bi bi-check-circle-fill text-accent me-2"></i>Automatizácia opakujúcich sa procesov</li>
                <li class="mb-3"><i class="bi bi-check-circle-fill text-accent me-2"></i>Optimalizácia výkonu webových aplikácií</li>
                <li class="mb-3"><i class="bi bi-check-circle-fill text-accent me-2"></i>Vylepšenie efektivity pracovných postupov</li>
                <li class="mb-3"><i class="bi bi-check-circle-fill text-accent me-2"></i>Implementácia CI/CD pipeline</li>
                <li class="mb-3"><i class="bi bi-check-circle-fill text-accent me-2"></i>Monitoring a logovanie</li>
            </ul>
        `
    }
};

// Handle service modal
document.addEventListener('DOMContentLoaded', function() {
    const serviceModal = document.getElementById('serviceModal');
    if (serviceModal) {
        serviceModal.addEventListener('show.bs.modal', function(event) {
            const button = event.relatedTarget;
            const service = button.getAttribute('data-service');
            const modalTitle = serviceModal.querySelector('.modal-title');
            const modalContent = serviceModal.querySelector('#serviceContent');
            
            modalTitle.textContent = serviceContent[service].title;
            modalContent.innerHTML = serviceContent[service].content;
        });
    }

    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };

            // Here you would typically send the form data to your server
            // For now, we'll just show a success message
            alert('Ďakujeme za Vašu správu! Budeme Vás čoskoro kontaktovať.');
            contactForm.reset();
            
            // Close the modal
            const modal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
            modal.hide();
        });
    }
}); 