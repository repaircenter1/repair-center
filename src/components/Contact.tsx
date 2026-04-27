function Contact() {
  return (
    <section id="contact">
      <h2 className="section-title">Contact Us</h2>
      <div className="contact-grid">
        <div className="contact-card">
          <div className="icon">📱</div>
          <h4>Mobile</h4>
          <a href="sms:+15878217148">+1 587-821-7148</a>
          <p>Text preferred</p>
        </div>

        <div className="contact-card">
          <img src="/Telegram.png" alt="Telegram" className="contact-icon" />
          <h4>Telegram</h4>
          <a href="https://t.me/rostislavmmm" target="_blank" rel="noopener noreferrer">@rostislavmmm</a>
        </div>

        <div className="contact-card">
          <div className="icon">📧</div>
          <h4>Email</h4>
          <a href="mailto:repaircenter2026@gmail.com">Email Us</a>
        </div>

        <div className="contact-card">
          <img src="/WhatsApp.png" alt="WhatsApp" className="contact-icon" />
          <h4>WhatsApp</h4>
          <a href="https://wa.me/380995204448" target="_blank" rel="noopener noreferrer">Message</a>
        </div>

        <div className="contact-card">
          <img src="/instagram.png" alt="Instagram" className="contact-icon" />
          <h4>Instagram</h4>
          <a href="https://instagram.com/repaircenter99" target="_blank" rel="noopener noreferrer">@repaircenter99</a>
        </div>

        <div className="contact-card">
          <img src="/location.png" alt="Location" className="contact-icon icon-flag" />
          <h4>Location</h4>
          <p style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Lethbridge, AB</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
