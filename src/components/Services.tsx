import { useCallback } from 'react'

function Services() {
  const toggleDropdown = useCallback((id: string) => {
    const dropdown = document.getElementById(id)
    if (dropdown) {
      dropdown.classList.toggle('active')
    }
  }, [])

  return (
    <section id="services">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        <div className="service-card">
          <h3>Mining Devices (ASIC's)</h3>
          <p>Expert repair of cryptocurrency mining equipment including hashboard repair, chip replacement, and power supply fixes. Specialized in handling complex ASIC failures.</p>

          <div className="pricing-section">
            <h4>Diagnostic <span className="free-badge">Free</span></h4>

            <h4>Hashboard Repair (Single Board)</h4>

            <div className="price-category">
              <div className="price-category-header" onClick={() => toggleDropdown('s19')}>
                <span>S19 Series</span>
                <span>&#9660;</span>
              </div>
              <div className="price-dropdown" id="s19">
                <div className="price-item">
                  <span>S19 KS5 Aluminium</span>
                  <span>$100</span>
                </div>
                <div className="price-item">
                  <span>S19K Pro</span>
                  <span>$100-150</span>
                </div>
                <div className="price-item">
                  <span>S19 Hydro</span>
                  <span>$140</span>
                </div>
              </div>
            </div>

            <div className="price-category">
              <div className="price-category-header" onClick={() => toggleDropdown('s21')}>
                <span>S21 Series</span>
                <span>&#9660;</span>
              </div>
              <div className="price-dropdown" id="s21">
                <div className="price-item">
                  <span>S21</span>
                  <span>$120</span>
                </div>
                <div className="price-item">
                  <span>S21 Hydro</span>
                  <span>$140</span>
                </div>
              </div>
            </div>

            <div className="price-category">
              <div className="price-category-header" onClick={() => toggleDropdown('l7l9')}>
                <span>L7/L9 Series</span>
                <span>&#9660;</span>
              </div>
              <div className="price-dropdown" id="l7l9">
                <div className="price-item">
                  <span>L7</span>
                  <span>$80</span>
                </div>
                <div className="price-item">
                  <span>L9</span>
                  <span>$120</span>
                </div>
              </div>
            </div>

            <div className="price-category">
              <div className="price-category-header" onClick={() => toggleDropdown('e9')}>
                <span>E9 Series</span>
                <span>&#9660;</span>
              </div>
              <div className="price-dropdown" id="e9">
                <div className="price-item">
                  <span>E9</span>
                  <span>$200</span>
                </div>
                <div className="price-item">
                  <span>E9 Pro</span>
                  <span>$200</span>
                </div>
              </div>
            </div>

            <div className="price-item">
              <span>Other Models</span>
              <span>from $80</span>
            </div>

            <h4>Chip Replacement (Used Donor + Labor)</h4>
            <div className="price-item">
              <span>S19 BM1398 / BM1362</span>
              <span>$15</span>
            </div>
            <div className="price-item">
              <span>S19K Pro BM1366</span>
              <span>$15</span>
            </div>
            <div className="price-item">
              <span>S21 BM1370</span>
              <span>$30</span>
            </div>
            <div className="price-item">
              <span>L9 BM1491</span>
              <span>$95</span>
            </div>
            <div className="price-item">
              <span>E9 Pro BM2280</span>
              <span>$300</span>
            </div>

            <h4>Power Supply Repair</h4>
            <div className="price-item">
              <span>PSU Repair</span>
              <span>$150</span>
            </div>

            <p className="price-note"><span className="price-asterisk">*</span> Please inquire for current pricing and availability</p>
          </div>
        </div>

        <div className="service-card">
          <h3>Graphics Cards (GPU)</h3>
          <p>Professional GPU repair including chip reballing, memory replacement, and power system fixes. We handle all modern graphics cards from RTX 2000 series to RTX 5000 series and AMD RX cards.</p>

          <div className="pricing-section">
            <h4>GPU Repair & Reballing (Labor Only)</h4>

            <div className="gpu-badges">
              <span className="gpu-badge nvidia">RTX 2080-3070</span>
              <span className="gpu-badge amd">RX 6800</span>
            </div>
            <div className="price-item">
              <span>Service</span>
              <span>$120</span>
            </div>

            <div className="gpu-badges">
              <span className="gpu-badge nvidia">RTX 2080Ti</span>
              <span className="gpu-badge nvidia">RTX 3090</span>
              <span className="gpu-badge nvidia">RTX 4070-5070</span>
              <span className="gpu-badge amd">RX 7800</span>
              <span className="gpu-badge amd">RX 9070</span>
            </div>
            <div className="price-item">
              <span>Service</span>
              <span>$150</span>
            </div>

            <div className="gpu-badges">
              <span className="gpu-badge nvidia">RTX 4090</span>
              <span className="gpu-badge nvidia">RTX 5080</span>
            </div>
            <div className="price-item">
              <span>Service</span>
              <span>$300</span>
            </div>

            <h4>Maintenance Services (Labor + Materials)</h4>
            <div className="price-item">
              <span>Thermal Paste Replacement</span>
              <span>$20</span>
            </div>
            <div className="price-item">
              <span>Phase Change Thermal Pad</span>
              <span>$40</span>
            </div>
            <div className="price-item">
              <span>Thermal Pads Replacement</span>
              <span>$50-200</span>
            </div>
          </div>
        </div>

        <div className="service-card">
          <h3>Laptops</h3>
          <p>Complete laptop repair services including CPU/GPU/PCH replacement, power system repair, and thermal management. Restoration of complex power systems, burn damage recovery, and post-repair from other service centers.</p>

          <div className="pricing-section">
            <h4>Component Replacement</h4>
            <div className="price-item">
              <span>CPU / GPU / PCH Replacement</span>
              <span>$100-500</span>
            </div>
            <p className="price-note"><span className="price-asterisk">*</span> Price depends on chip cost + chip purchase price</p>

            <div className="price-item" style={{ marginTop: '1rem' }}>
              <span>Power System Repair</span>
              <span>$150</span>
            </div>

            <h4>Thermal Services (Labor + Materials)</h4>
            <div className="price-item">
              <span>CPU/GPU Thermal Interface Replacement</span>
              <span>$40</span>
            </div>
            <div className="price-item">
              <span>Thermal Pads Replacement</span>
              <span>$50-150</span>
            </div>
          </div>
        </div>

        <div className="service-card">
          <h3>Other Electronics</h3>
          <p>Motherboard repair, socket replacement, power supply restoration, BGA soldering services, and microsoldering for complex electronic devices. Restoration of inter-layer PCB damage and burn recovery. We tackle the repairs others won't.</p>

          <div className="pricing-section">
            <h4>Board-Level Repair</h4>
            <div className="price-item">
              <span>PC Motherboard Repair</span>
              <span>$150</span>
            </div>
            <div className="price-item">
              <span>Socket Replacement & Burn Recovery</span>
              <span>$150</span>
            </div>
            <div className="price-item">
              <span>Socket Replacement (AM4/AM5/LGA1200/1700/1851)</span>
              <span>$200-250</span>
            </div>
            <p className="price-note" style={{ marginTop: '0.5rem' }}><span className="price-asterisk">*</span> Includes socket cost</p>
            <div className="price-item">
              <span>Power Supply Repair</span>
              <span>$100</span>
            </div>
            <div className="price-item">
              <span>Microsoldering Components</span>
              <span>$100</span>
            </div>
            <div className="price-item">
              <span>BGA Soldering (General)</span>
              <span>Priced by chip cost</span>
            </div>
            <p className="price-note">BGA pricing calculated based on component value and complexity</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
