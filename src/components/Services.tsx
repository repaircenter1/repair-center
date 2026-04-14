import { useCallback } from 'react'

function Services() {
  const toggleDropdown = useCallback((id: string) => {
    const dropdown = document.getElementById(id)
    if (dropdown) {
      dropdown.classList.toggle('active')
      const header = dropdown.previousElementSibling
      if (header) {
        header.classList.toggle('selected')
      }
    }
  }, [])

  return (
    <section id="services">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        <div className="service-card">
          <h3>GPU Repair</h3>
          <p>Professional GPU repair including chip reballing, VRAM replacement, and power system fixes. We repair all modern graphics cards — NVIDIA RTX 2000 to RTX 5000 series and AMD RX 5000–9000 series. Ship from anywhere in Canada.</p>

          <div className="pricing-section">
            <h4>Diagnostic <span className="free-badge">Free</span></h4>

            <h4>GPU Repair &amp; Reballing<br />(Labor Only)</h4>

            <div className="price-category">
              <div className="price-category-header nvidia-header" onClick={() => toggleDropdown('nvidia-all')}>
                <span className="brand-label"><img src="/nvidiageforce.avif" alt="NVIDIA" className="brand-logo nvidia-logo" /><span className="brand-text">NVIDIA Videocards</span></span>
                <span>&#9660;</span>
              </div>
              <div className="price-dropdown" id="nvidia-all">
                <div className="price-category nested">
                  <div className="price-category-header nvidia-header" onClick={() => toggleDropdown('rtx2000')}>
                    <span>RTX 2000 Series</span>
                    <span>&#9660;</span>
                  </div>
                  <div className="price-dropdown" id="rtx2000">
                    <div className="price-item">
                      <span>RTX 2060 / 2060 Super</span>
                      <span>$100</span>
                    </div>
                    <div className="price-item">
                      <span>RTX 2070 / 2070 Super</span>
                      <span>$120</span>
                    </div>
                    <div className="price-item">
                      <span>RTX 2080 / 2080 Super</span>
                      <span>$120</span>
                    </div>
                    <div className="price-item">
                      <span>RTX 2080 Ti</span>
                      <span>$150</span>
                    </div>
                    <div className="price-item">
                      <span>TITAN RTX</span>
                      <span>$150</span>
                    </div>
                    <div className="price-item chip-price">
                      <span>GDDR6 1GB</span>
                      <span>$15</span>
                    </div>
                  </div>
                </div>

                <div className="price-category nested">
                  <div className="price-category-header nvidia-header" onClick={() => toggleDropdown('rtx3000')}>
                    <span>RTX 3000 Series</span>
                    <span>&#9660;</span>
                  </div>
                  <div className="price-dropdown" id="rtx3000">
                    <div className="price-item">
                      <span>RTX 3060</span>
                      <span>$120</span>
                    </div>
                    <div className="price-item">
                      <span>RTX 3060 Ti / 3070 / 3070 Ti</span>
                      <span>$120</span>
                    </div>
                    <div className="price-item">
                      <span>RTX 3080 / 3080 Ti / 3090 / 3090 Ti</span>
                      <span>$150</span>
                    </div>
                    <div className="price-item chip-price">
                      <span>GDDR6 1GB</span>
                      <span>$15</span>
                    </div>
                    <div className="price-item chip-price">
                      <span>GDDR6X</span>
                      <span>$15</span>
                    </div>
                    <div className="price-item chip-price">
                      <span>GDDR6X 2GB</span>
                      <span>$60-80</span>
                    </div>
                  </div>
                </div>

                <div className="price-category nested">
                  <div className="price-category-header nvidia-header" onClick={() => toggleDropdown('rtx4000')}>
                    <span>RTX 4000 Series</span>
                    <span>&#9660;</span>
                  </div>
                  <div className="price-dropdown" id="rtx4000">
                    <div className="price-item">
                      <span>RTX 4060 / 4060 Ti</span>
                      <span>$120</span>
                    </div>
                    <div className="price-item">
                      <span>RTX 4070 / 4070 Super / 4070 Ti</span>
                      <span>$150</span>
                    </div>
                    <div className="price-item">
                      <span>RTX 4070 Ti Super / 4080 / 4080 Super</span>
                      <span>$200</span>
                    </div>
                    <div className="price-item">
                      <span>RTX 4090</span>
                      <span>$300</span>
                    </div>
                    <div className="price-item chip-price">
                      <span>GDDR6 2GB</span>
                      <span>$20-50</span>
                    </div>
                    <div className="price-item chip-price">
                      <span>GDDR6X 2GB</span>
                      <span>$60-80</span>
                    </div>
                  </div>
                </div>

                <div className="price-category nested">
                  <div className="price-category-header nvidia-header" onClick={() => toggleDropdown('rtx5000')}>
                    <span>RTX 5000 Series</span>
                    <span>&#9660;</span>
                  </div>
                  <div className="price-dropdown" id="rtx5000">
                    <div className="price-item">
                      <span>RTX 5060 / 5060 Ti</span>
                      <span>$120</span>
                    </div>
                    <div className="price-item">
                      <span>RTX 5070</span>
                      <span>$150</span>
                    </div>
                    <div className="price-item">
                      <span>RTX 5070 Ti / 5080</span>
                      <span>$200</span>
                    </div>
                    <div className="price-item">
                      <span>RTX 5090</span>
                      <span>$500</span>
                    </div>
                    <div className="price-item chip-price">
                      <span>GDDR7 2GB</span>
                      <span>$85</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="price-category">
              <div className="price-category-header amd-header" onClick={() => toggleDropdown('amd-all')}>
                <span className="brand-label"><img src="/amd.avif" alt="AMD" className="brand-logo amd-logo" /><span className="brand-text">AMD Videocards</span></span>
                <span>&#9660;</span>
              </div>
              <div className="price-dropdown" id="amd-all">
                <div className="price-category nested">
                  <div className="price-category-header amd-header" onClick={() => toggleDropdown('rx5000')}>
                    <span>RX 5000 Series</span>
                    <span>&#9660;</span>
                  </div>
                  <div className="price-dropdown" id="rx5000">
                    <div className="price-item">
                      <span>RX 5600 XT / 5700 / 5700 XT</span>
                      <span>$120</span>
                    </div>
                    <div className="price-item chip-price">
                      <span>GDDR6 1GB</span>
                      <span>$15</span>
                    </div>
                  </div>
                </div>

                <div className="price-category nested">
                  <div className="price-category-header amd-header" onClick={() => toggleDropdown('rx6000')}>
                    <span>RX 6000 Series</span>
                    <span>&#9660;</span>
                  </div>
                  <div className="price-dropdown" id="rx6000">
                    <div className="price-item">
                      <span>RX 6600 / 6600 XT / 6650 XT</span>
                      <span>$120</span>
                    </div>
                    <div className="price-item">
                      <span>RX 6700 / 6700 XT / 6750 / 6750 XT</span>
                      <span>$120</span>
                    </div>
                    <div className="price-item">
                      <span>RX 6800 / 6800 XT / 6900 XT / 6950 XT</span>
                      <span>$150</span>
                    </div>
                    <div className="price-item chip-price">
                      <span>GDDR6 2GB</span>
                      <span>$20-50</span>
                    </div>
                  </div>
                </div>

                <div className="price-category nested">
                  <div className="price-category-header amd-header" onClick={() => toggleDropdown('rx7000')}>
                    <span>RX 7000 Series</span>
                    <span>&#9660;</span>
                  </div>
                  <div className="price-dropdown" id="rx7000">
                    <div className="price-item">
                      <span>RX 7600 / 7600 XT</span>
                      <span>$120</span>
                    </div>
                    <div className="price-item">
                      <span>RX 7700 XT / 7800 XT</span>
                      <span>$150</span>
                    </div>
                    <div className="price-item">
                      <span>RX 7900 / 7900 XT / 7900 XTX</span>
                      <span>$200</span>
                    </div>
                    <div className="price-item chip-price">
                      <span>GDDR6 2GB</span>
                      <span>$20-50</span>
                    </div>
                  </div>
                </div>

                <div className="price-category nested">
                  <div className="price-category-header amd-header" onClick={() => toggleDropdown('rx9000')}>
                    <span>RX 9000 Series</span>
                    <span>&#9660;</span>
                  </div>
                  <div className="price-dropdown" id="rx9000">
                    <div className="price-item">
                      <span>RX 9060 / 9060 XT</span>
                      <span>$150</span>
                    </div>
                    <div className="price-item">
                      <span>RX 9070 / 9070 XT</span>
                      <span>$200</span>
                    </div>
                    <div className="price-item chip-price">
                      <span>GDDR6 2GB</span>
                      <span>$20-50</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h4>Maintenance Services<br />(Labor + Materials)</h4>
            <div className="price-item">
              <span>Thermal Paste Replacement</span>
              <span>$20</span>
            </div>
            <div className="price-item">
              <span>Phase Change Thermal Pad</span>
              <span>$50</span>
            </div>
            <div className="price-item">
              <span>Thermal Pads Replacement</span>
              <span>$50-200</span>
            </div>
          </div>
        </div>

        <div className="service-card">
          <h3>Laptop Repair</h3>
          <p>Complete laptop repair services including CPU/GPU/PCH replacement, power system repair, and thermal management. Burn damage recovery and post-repair from other service centers. We repair laptops shipped from anywhere in Canada.</p>

          <div className="pricing-section">
            <h4>Diagnostic <span className="free-badge">Free</span></h4>

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

            <h4>Thermal Services<br />(Labor + Materials)</h4>
            <div className="price-item">
              <span>CPU/GPU Thermal Interface Replacement</span>
              <span>$40</span>
            </div>
            <div className="price-item">
              <span>Thermal Pads Replacement</span>
              <span>$50-150</span>
            </div>
            <p className="price-note"><span className="price-asterisk">*</span> Price includes labor + materials</p>
          </div>
        </div>

        <div className="service-card">
          <h3>ASIC Mining Repair</h3>
          <p>Expert repair of cryptocurrency mining equipment including hashboard repair, chip replacement, and power supply fixes. Specialized in handling complex ASIC failures across Canada.</p>

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
                  <span>S19/T19/S19PRO/KS5 Aluminium</span>
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
                <div className="price-item chip-price">
                  <span>Chip BM1398BB (S19/T19/S19Pro/S19 hydro) / BM1362 (S19j/S19jPro)</span>
                  <span>$15</span>
                </div>
                <div className="price-item chip-price">
                  <span>Chip BM1366 (S19K Pro/S19XP/S19XP hydro)</span>
                  <span>$20</span>
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
                  <span>S21/T21/S21+</span>
                  <span>$120</span>
                </div>
                <div className="price-item">
                  <span>S21 Hydro</span>
                  <span>$140</span>
                </div>
                <div className="price-item chip-price">
                  <span>Chip BM1368 (S21/T21)</span>
                  <span>$30</span>
                </div>
                <div className="price-item chip-price">
                  <span>Chip BM1370 (S21+/S21XP)</span>
                  <span>$30</span>
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
                  <span>$100</span>
                </div>
                <div className="price-item">
                  <span>L9</span>
                  <span>$120</span>
                </div>
                <div className="price-item chip-price">
                  <span>Chip BM1489 (L7)</span>
                  <span>$20</span>
                </div>
                <div className="price-item chip-price">
                  <span>Chip BM1491 (L9)</span>
                  <span>$95</span>
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
                <div className="price-item chip-price">
                  <span>Chip BM2280 (E9 PRO)</span>
                  <span>$300</span>
                </div>
              </div>
            </div>

            <div className="price-category">
              <div className="price-category-header" onClick={() => toggleDropdown('z15')}>
                <span>Z15 Series</span>
                <span>&#9660;</span>
              </div>
              <div className="price-dropdown" id="z15">
                <div className="price-item">
                  <span>Z15</span>
                  <span>$150</span>
                </div>
                <div className="price-item">
                  <span>Z15 Pro</span>
                  <span>$200</span>
                </div>
                <div className="price-item chip-price">
                  <span>Chip BM1746AA (Z15)</span>
                  <span>$900</span>
                </div>
              </div>
            </div>

            <div className="price-item">
              <span>Other Models</span>
              <span>from $80</span>
            </div>

            <h4>Power Supply Repair</h4>
            <div className="price-item">
              <span>PSU Repair</span>
              <span>$150</span>
            </div>

            <p className="price-note"><span className="price-asterisk">*</span> Using your own donor boards for chip harvesting is preferred and more cost-effective, especially for bulk repairs</p>
            <p className="price-note"><span className="price-asterisk">*</span> Please inquire for current pricing and availability</p>
          </div>
        </div>

        <div className="service-card">
          <h3>BGA Soldering & Microsoldering</h3>
          <p>Motherboard repair, socket replacement, power supply restoration, BGA soldering, and microsoldering for complex electronic devices. Inter-layer PCB damage and burn recovery. We tackle the repairs others won't — accepting shipments across Canada.</p>

          <div className="pricing-section">
            <h4>Diagnostic <span className="free-badge">Free</span></h4>

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
