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

const contactForm = document.querySelector('form');
contactForm.addEventListener('submit', e => {
  e.preventDefault();

  const name = contactForm.querySelector('input[type="text"]').value.trim();
  const email = contactForm.querySelector('input[type="email"]').value.trim();
  const course = contactForm.querySelector('select').value;
  const message = contactForm.querySelector('textarea').value.trim();

  const subject = encodeURIComponent('EL-B Talk Website Inquiry');
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nInterest: ${course}\nMessage: ${message}`
  );

  window.location.href = `mailto:el.btalkinfo@gmail.com?subject=${subject}&body=${body}`;
});
