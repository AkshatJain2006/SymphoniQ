import { useState, useEffect } from 'react';

function BookShowForm() {
  const [showQR, setShowQR] = useState(false);
  const [whatsappActive, setWhatsappActive] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    address: '',
    notes: ''
  });

  useEffect(() => {
    let timer, countdownTimer;
    if (showQR && !whatsappActive) {
      countdownTimer = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(countdownTimer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      timer = setTimeout(() => {
        setWhatsappActive(true);
      }, 60000);
    }
    return () => {
      clearTimeout(timer);
      clearInterval(countdownTimer);
    };
  }, [showQR, whatsappActive]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowQR(true);
    setWhatsappActive(false);
    setCountdown(60);
  };

  // WhatsApp details
  const whatsappNumber = "919144302009"; // Replace with your WhatsApp number
  const regFeeMsg = encodeURIComponent(
    `Hello, I just paid the registration fee for Book Your Show.\n` +
    `Here are my details:\n` +
    `Name: ${form.name}\n` +
    `Email: ${form.email}\n` +
    `Phone: ${form.phone}\n` +
    `Date: ${form.date}\n` +
    `Time: ${form.time}\n` +
    `Address: ${form.address}\n` +
    (form.notes ? `Notes: ${form.notes}\n` : '')
  );

  return (
    <section className="event-card">
      <div className="event-title">Book Your Show</div>
      <div className="event-details">
        <div className="detail-row">
          <span className="detail-label">Date:</span>
          <span className="detail-value">{form.date}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Time:</span>
          <span className="detail-value">{form.time}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Address:</span>
          <span className="detail-value">{form.address}</span>
        </div>
      </div>
      <div className="event-fee">
        Booking Fee: ₹800
      </div>
      {!showQR ? (
        <form className="bookshow-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="text"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />
          <label htmlFor="time">Time</label>
          <input
            id="time"
            type="text"
            name="time"
            value={form.time}
            onChange={handleChange}
            required
          />
          <label htmlFor="address">Event Address</label>
          <input
            id="address"
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
          />
          <label htmlFor="notes">Extra Notes (optional)</label>
          <textarea
            id="notes"
            name="notes"
            value={form.notes}
            onChange={handleChange}
          />
          <button type="submit">Proceed to Payment</button>
        </form>
      ) : (
        <div className="qr-card">
          <h3 className="qr-title">Pay & Confirm Your Details</h3>
          <div className="qr-details-list">
            <div><span className="qr-detail-label">Name:</span> <span>{form.name}</span></div>
            <div><span className="qr-detail-label">Email:</span> <span>{form.email}</span></div>
            <div><span className="qr-detail-label">Phone:</span> <span>{form.phone}</span></div>
            <div><span className="qr-detail-label">Date:</span> <span>{form.date}</span></div>
            <div><span className="qr-detail-label">Time:</span> <span>{form.time}</span></div>
            <div><span className="qr-detail-label">Address:</span> <span>{form.address}</span></div>
            {form.notes && <div><span className="qr-detail-label">Notes:</span> <span>{form.notes}</span></div>}
          </div>
          <div className="qr-image-area">
            <img src="/images/qr.jpg" alt="QR Code for payment" className="qr-img-card" />
            <div className="qr-fee-text">Booking Fee: ₹800</div>
          </div>
          <p className="qr-info">Please Note:
This payment is a booking fee only. Final show charges will vary based on demand, location, and event requirements.

In case of cancellation, only 50% of the booking fee will be refunded.

Thank you for choosing SymphoniQ (by QUAD) to make your event unforgettable!</p>
<p className="qr-info">Please do share the screenshot of successful payment!!</p>
          <p className="qr-info">After payment, click below to confirm via WhatsApp.</p>
          {!whatsappActive ? (
            <div className="qr-wait-msg">
              WhatsApp confirmation will be available in {countdown} second{countdown !== 1 ? "s" : ""}...
            </div>
          ) : (
            <a
              href={`https://wa.me/${whatsappNumber}?text=${regFeeMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              Confirm Payment & Contact via WhatsApp
            </a>
          )}
        </div>
      )}
    </section>
  );
}

export default BookShowForm;