document.getElementById('contactForm').addEventListener('submit', async e => {
  e.preventDefault();
  const form = e.target;

  // Honeypot check
  if (form.website.value !== "") return;

  const data = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    address: form.address.value,
    message: form.message.value
  };

  try {
    const res = await fetch('https://my-backend-hyupn5fqi-brents-projects-5aa6c14d.vercel.app/api/sendEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    if (result.success) {
      alert('Thank you! Your request has been sent.');
      form.reset();
    } else {
      alert('Error sending form. Please try again later.');
    }
  } catch (err) {
    console.error(err);
    alert('Error sending form. Please try again later.');
  }
});
