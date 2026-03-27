/**
 * Sonu Cafe - Lightweight interactions for the new Bento UI
 */

document.addEventListener('DOMContentLoaded', () => {
    initBoldForm();
});

// Simple validation for the brutalist form
function initBoldForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const botCheck = document.getElementById('bot-check');
    const feedback = document.getElementById('form-feedback');
    const nameInput = document.getElementById('name');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        feedback.textContent = '';
        feedback.className = 'font-bold mt-2 text-red';

        // Bot trap
        if (botCheck.value.trim() !== '') {
            success();
            return;
        }

        let hasError = false;

        if (nameInput.value.trim().length < 2) {
            feedback.textContent = 'NAME IS REQUIRED.';
            hasError = true;
        } else if (messageInput.value.trim().length < 5) {
            feedback.textContent = 'MESSAGE IS TOO SHORT.';
            hasError = true;
        }

        if (!hasError) {
            const btn = form.querySelector('button');
            const orig = btn.textContent;
            btn.textContent = 'SENDING...';
            btn.disabled = true;

            setTimeout(() => {
                success();
                form.reset();
                btn.textContent = orig;
                btn.disabled = false;
            }, 800);
        }
    });

    function success() {
        feedback.textContent = 'MESSAGE RECEIVED. WE WILL SEE YOU SOON.';
        feedback.className = 'font-bold mt-2 text-black'; // Turns black on yellow bg to indicate success cleanly
    }
}
