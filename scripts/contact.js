const form = document.getElementById("contactForm");
const submitBtn = form.querySelector("button[type='submit']");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // 🔹 Save original button text
  const originalText = submitBtn.innerText;

  // 🔹 Show loading state
  submitBtn.innerText = "Sending...";
  submitBtn.disabled = true;

  const data = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    address: form.address.value,
    message: form.message.value,
  };

  try {
    const res = await fetch("https://my-backend-l38085bji-brents-projects-5aa6c14d.vercel.app/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
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
  } finally {
    // 🔹 Restore button
    submitBtn.innerText = originalText;
    submitBtn.disabled = false;
  }
});
