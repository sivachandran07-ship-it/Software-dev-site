const form = document.querySelector('form');
const status = document.querySelector('#status');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  status.textContent = 'Demo complete. Your enquiry was not sent.';
  form.reset();
});
