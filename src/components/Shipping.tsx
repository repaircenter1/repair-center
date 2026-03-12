function Shipping() {
  return (
    <section id="shipping">
      <h2 className="section-title">How to Ship for Repair</h2>

      <div className="shipping-steps">
        <div className="step-card">
          <div className="step-number">1</div>
          <h4>Contact Us First</h4>
          <p>Reach out via text, Telegram, or email to discuss your repair needs, timeline, and get a preliminary cost estimate before shipping.</p>
        </div>

        <div className="step-card">
          <div className="step-number">2</div>
          <h4>Package Securely</h4>
          <p>Pack your device with extra protection so it can safely return in the same packaging. Use anti-static bags for electronics and adequate padding. You are responsible for secure packaging.</p>
        </div>

        <div className="step-card">
          <div className="step-number">3</div>
          <h4>Choose a Carrier</h4>
          <p>Select a carrier and after shipping, send us the tracking number, package details, brief problem description, and your contact information for return delivery.</p>
        </div>

        <div className="step-card">
          <div className="step-number">4</div>
          <h4>We'll Handle the Rest</h4>
          <p>After free diagnostics, we'll contact you to confirm repair costs and timeline. Once complete, the device passes testing, and after payment, we ship it back to you.</p>
        </div>
      </div>

      <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontFamily: "'IBM Plex Mono', monospace", fontWeight: 700 }}>Accepted Shipping Carriers</h4>
      <div className="shipping-carriers">
        <div className="carrier-badge">Canada Post</div>
        <div className="carrier-badge">Purolator</div>
        <div className="carrier-badge">UPS</div>
        <div className="carrier-badge">FedEx</div>
      </div>

      <p style={{ color: 'var(--text-secondary)', marginTop: '2rem', lineHeight: 1.8 }}>
        <strong>Important:</strong> Customer is responsible for all shipping costs (to and from our facility) and proper packaging. We recommend insurance for valuable items. Contact us before shipping to confirm availability and discuss your specific needs.
      </p>
    </section>
  )
}

export default Shipping
