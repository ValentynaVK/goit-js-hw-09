let form, emailInput, messageInput;

window.addEventListener('DOMContentLoaded', () => {
  form = document.querySelector('form');
  emailInput = document.querySelector('input[name="email"]');
  messageInput = document.querySelector('textarea[name="message"]');

  const storedData = localStorage.getItem('feedback-form-state');
  if (storedData) {
    const { email, message } = JSON.parse(storedData);
    emailInput.value = email;
    messageInput.value = message;
  }

  form.addEventListener('input', event => {
    const { target } = event;
    if (target.matches('input[name="email"], textarea[name="message"]')) {
      const formData = {
        email: emailInput.value.trim(),
        message: messageInput.value.trim(),
      };
      localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    }
  });

  form.addEventListener('submit', event => {
    event.preventDefault();

    if (emailInput.value.trim() === '' || messageInput.value.trim() === '') {
      alert('Будь ласка, заповніть всі поля форми.');
      return;
    }

    console.log('Form submitted:', {
      email: emailInput.value,
      message: messageInput.value,
    });

    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageInput.value = '';
  });
});
