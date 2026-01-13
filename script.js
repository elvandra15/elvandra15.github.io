// Form Contact Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Create email content
            const emailSubject = encodeURIComponent(`Portfolio Contact: ${subject}`);
            const emailBody = encodeURIComponent(
                `Nama: ${name}\n` +
                `Email: ${email}\n` +
                `Subjek: ${subject}\n\n` +
                `Pesan:\n${message}\n\n` +
                `---\nDikirim dari portfolio website`
            );
            
            // Open email client
            const mailtoLink = `mailto:elvandra@gmail.com?subject=${emailSubject}&body=${emailBody}`;
            window.location.href = mailtoLink;
            
            // Show success message
            showFormMessage('Aplikasi email Anda akan terbuka. Silakan kirim email tersebut.', 'success');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    function showFormMessage(message, type) {
        if (formMessage) {
            formMessage.textContent = message;
            formMessage.className = `form-message ${type}`;
            formMessage.style.display = 'block';
            
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});