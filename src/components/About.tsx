function About() {
  return (
    <section id="about">
      <h2 className="section-title">About Us</h2>
      <div className="about-content">
        <p>Welcome to <strong>Repair Center</strong> – your trusted partner for professional electronics repair in Lethbridge, Alberta.</p>

        <p>With over <strong>10+ years of experience</strong> in electronics repair, we specialize in GPU, ASIC mining equipment, and laptop repairs. Our journey began with a deep interest in electronics, which naturally evolved into a passion for repair work. Over time, we've expanded our expertise into cryptocurrency mining equipment repair and GPU restoration, constantly developing our skills in BGA soldering and diagnosing complex electronic circuits.</p>

        <p>What sets us apart is our commitment to handling the most challenging repairs that others turn away. From precision BGA rework to complex component-level diagnostics, we bring technical expertise and dedication to every project. We specialize in restoring inter-layer PCB damage and post-burn recovery that most service centers cannot handle.</p>

        <div className="equipment-list">
          <h4>Professional Equipment & Tools</h4>
          <ul>
            <li>Soldering Stations</li>
            <li>Hot Air Rework</li>
            <li>Laboratory Power Supplies</li>
            <li>Thermal Imaging Camera</li>
            <li>Oscilloscope</li>
            <li>Multimeters</li>
            <li>Professional Microscope</li>
            <li>Flash & NAND Programmers</li>
            <li>Laptop Battery Programmers</li>
            <li>Specialized Tools for Targeted Repairs</li>
          </ul>
        </div>

        <div className="about-stats">
          <div className="stat-box">
            <span className="number">10+</span>
            <span className="label">Years Experience</span>
          </div>
          <div className="stat-box">
            <span className="number">100%</span>
            <span className="label">Professional Service</span>
          </div>
          <div className="stat-box">
            <span className="number">14</span>
            <span className="label">Day Warranty</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
