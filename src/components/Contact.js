import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  // Replace with your WhatsApp number
  const whatsappNumber = '919144302009';

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Contact Request:\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="page-section">
      <h2>Contact Us</h2>
      <div className="form-box">
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" required onChange={handleChange} />
          <input name="email" type="email" placeholder="Email" required onChange={handleChange} />
          <textarea name="message" placeholder="Your Message" required onChange={handleChange} />
          <button type="submit">Send via WhatsApp</button>
        </form>
      </div>
      <p style={{ color: "#aaa", textAlign: "center" }}>
        You can also reach us at <a href="mailto:symphoniqquad@gmail.com">symphoniqquad@gmail.com</a>
      </p>
    </section>
  );
}

export default Contact;