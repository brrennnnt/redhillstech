const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // ❌ prevents default HTML form submit

  const data = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    address: form.address.value,
    message: form.message.value
  };

  try {
    const res = await fetch("https://my-backend-8o6bibvcp-brents-projects-5aa6c14d.vercel.app/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    if (result.success) {
      alert("Form submitted successfully!");
      form.reset();
    } else {
      alert("Error sending form: " + result.message);
    }
  } catch (err) {
    console.error(err);
    alert("Error sending form. Please try again later.");
  }
});
