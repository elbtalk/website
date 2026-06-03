const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', async function(e) {
  e.preventDefault();

  formMessage.className = 'form-message';
  formMessage.textContent = 'Sending your message...';

  const formData = new FormData(contactForm);
  formData.append('_subject', 'New EL-B Talk Website Inquiry');
  formData.append('_captcha', 'false');
  formData.append('_template', 'table');

  try {
    const response = await fetch('https://formsubmit.co/ajax/el.btalkinfo@gmail.com', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      formMessage.className = 'form-message success';
      formMessage.textContent = 'Thank you for contacting EL-B Talk! An agent will contact you right away.';
      contactForm.reset();
    } else {
      throw new Error('Form submission failed');
    }
  } catch (error) {
    formMessage.className = 'form-message error';
    formMessage.textContent = 'Sorry, there was a problem sending your message. Please contact us by WhatsApp or email.';
  }
});
