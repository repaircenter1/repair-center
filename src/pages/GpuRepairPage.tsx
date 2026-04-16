import { useEffect, useCallback } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function GpuRepairPage() {
  useEffect(() => {
    document.title = 'GPU Repair in Lethbridge, Canada | NVIDIA RTX & AMD RX — Repair Center'
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', 'No display, artifacting, Error 43, VRAM failure — we fix it. Component-level GPU repair in Lethbridge. Free diagnostics. Mail-in from anywhere in Canada.')
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', 'https://repair-center.ca/gpu-repair')
    return () => {
      document.title = 'Repair Center - GPU, ASIC & Laptop Repair | Lethbridge, Canada'
      if (desc) desc.setAttribute('content', 'Professional GPU repair, ASIC mining repair & laptop repair in Lethbridge, AB. BGA soldering & microsoldering. Free diagnostics. Accepting shipments from across Canada.')
      if (canonical) canonical.setAttribute('href', 'https://repair-center.ca/')
    }
  }, [])

  const toggleDropdown = useCallback((id: string) => {
    const dropdown = document.getElementById(id)
    if (dropdown) {
      dropdown.classList.toggle('active')
      const header = dropdown.previousElementSibling
      if (header) header.classList.toggle('selected')
    }
  }, [])

  return (
    <>
      <Header />
      <main>
        <section className="service-page-hero">
          <div className="container">
            <h1>GPU Repair</h1>
            <p className="service-page-intro">
              Component-level GPU repair for NVIDIA RTX and AMD RX series cards. We diagnose and fix the actual fault —
              failed VRAM, damaged VRM or MOSFET components, degraded BGA solder joints — not just reflow and hope.
              Free diagnostics. Mail-in from anywhere in Canada.
            </p>
          </div>
        </section>

        <div className="container">
          <section className="service-page-section">
            <h2 className="section-title">Symptoms We Fix</h2>
            <div className="symptoms-grid">
              <div className="symptom-item">
                <h3>No Display / Black Screen</h3>
                <p>GPU powers on but produces no video output. Common causes: failed VRAM, open circuit on the display output path, or BGA solder joint failure on the GPU die itself.</p>
              </div>
              <div className="symptom-item">
                <h3>Artifacting</h3>
                <p>Visual glitches, corrupted pixels, color blocks, or flickering on screen. Usually caused by one or more failed GDDR6/GDDR6X memory chips or VRAM solder joint degradation.</p>
              </div>
              <div className="symptom-item">
                <h3>Driver Error 43 / Code 43</h3>
                <p>Windows Device Manager reports Code 43. Often a VRAM fault or GPU die issue causing the driver to crash during initialization. Component-level diagnosis required.</p>
              </div>
              <div className="symptom-item">
                <h3>GPU Not Detected</h3>
                <p>Card not recognized by the system at all — no POST, no Device Manager entry. Typically a power delivery failure (VRM/MOSFET) or PCIe connector damage.</p>
              </div>
              <div className="symptom-item">
                <h3>Crashes & Blue Screens</h3>
                <p>System crashes during gaming or under GPU load. Can be VRAM instability, thermal issues, or VRM components failing under sustained load.</p>
              </div>
              <div className="symptom-item">
                <h3>Mining Damage</h3>
                <p>GPUs used in cryptocurrency mining often develop VRAM failure from continuous high-temperature operation. We replace failed chips and reball degraded joints.</p>
              </div>
            </div>
          </section>

          <section className="service-page-section">
            <h2 className="section-title">What We Do</h2>
            <div className="process-steps">
              <div className="process-step">
                <span className="step-num">01</span>
                <div>
                  <h3>Component-Level Diagnostics</h3>
                  <p>We test each VRAM chip individually, measure VRM output rails, and probe solder joint continuity. We identify the exact failed component — not just the symptom.</p>
                </div>
              </div>
              <div className="process-step">
                <span className="step-num">02</span>
                <div>
                  <h3>IC Reballing & VRAM Replacement</h3>
                  <p>Failed VRAM chips are removed under hot air, replaced with new chips, and reflowed with fresh solder balls. Degraded GPU die joints are reballed and re-seated to the PCB.</p>
                </div>
              </div>
              <div className="process-step">
                <span className="step-num">03</span>
                <div>
                  <h3>VRM & MOSFET Repair</h3>
                  <p>Damaged power delivery components (MOSFETs, inductors, capacitors) are replaced at the component level under microscope. We restore correct voltage rails before powering the card.</p>
                </div>
              </div>
              <div className="process-step">
                <span className="step-num">04</span>
                <div>
                  <h3>Post-Repair Stress Testing</h3>
                  <p>Every repaired card goes through extended stress testing — synthetic benchmarks, VRAM stress tools, and thermal monitoring — before shipping back.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="service-page-section">
            <h2 className="section-title">Supported GPU Models</h2>
            <div className="supported-models">
              <div className="model-group">
                <h3>NVIDIA GeForce RTX</h3>
                <ul>
                  <li>RTX 2060, 2060 Super, 2070, 2070 Super, 2080, 2080 Super, 2080 Ti, TITAN RTX</li>
                  <li>RTX 3060, 3060 Ti, 3070, 3070 Ti, 3080, 3080 Ti, 3090, 3090 Ti</li>
                  <li>RTX 4060, 4060 Ti, 4070, 4070 Super, 4070 Ti, 4070 Ti Super, 4080, 4080 Super, 4090</li>
                  <li>RTX 5060, 5060 Ti, 5070, 5070 Ti, 5080, 5090</li>
                </ul>
              </div>
              <div className="model-group">
                <h3>AMD Radeon RX</h3>
                <ul>
                  <li>RX 5600 XT, 5700, 5700 XT</li>
                  <li>RX 6600, 6600 XT, 6650 XT, 6700, 6700 XT, 6750 XT, 6800, 6800 XT, 6900 XT, 6950 XT</li>
                  <li>RX 7600, 7600 XT, 7700 XT, 7800 XT, 7900, 7900 XT, 7900 XTX</li>
                  <li>RX 9060, 9060 XT, 9070, 9070 XT</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="service-page-section" id="gpu-pricing">
            <h2 className="section-title">Pricing</h2>
            <div className="service-card" style={{ maxWidth: '680px' }}>
              <div className="pricing-section">
                <h4>Diagnostic <span className="free-badge">Free</span></h4>

                <h4>GPU Repair &amp; Reballing<br />(Labor Only)</h4>

                <div className="price-category">
                  <div className="price-category-header nvidia-header" onClick={() => toggleDropdown('gpu-page-nvidia-all')}>
                    <span className="brand-label"><img src="/nvidiageforce.avif" alt="NVIDIA" className="brand-logo nvidia-logo" /><span className="brand-text">NVIDIA Videocards</span></span>
                    <span>&#9660;</span>
                  </div>
                  <div className="price-dropdown" id="gpu-page-nvidia-all">
                    <div className="price-category nested">
                      <div className="price-category-header nvidia-header" onClick={() => toggleDropdown('gpu-page-rtx2000')}>
                        <span>RTX 2000 Series</span>
                        <span>&#9660;</span>
                      </div>
                      <div className="price-dropdown" id="gpu-page-rtx2000">
                        <div className="price-item"><span>RTX 2060 / 2060 Super</span><span>$100</span></div>
                        <div className="price-item"><span>RTX 2070 / 2070 Super</span><span>$120</span></div>
                        <div className="price-item"><span>RTX 2080 / 2080 Super</span><span>$120</span></div>
                        <div className="price-item"><span>RTX 2080 Ti</span><span>$150</span></div>
                        <div className="price-item"><span>TITAN RTX</span><span>$150</span></div>
                        <div className="price-item chip-price"><span>GDDR6 1GB</span><span>$15</span></div>
                      </div>
                    </div>
                    <div className="price-category nested">
                      <div className="price-category-header nvidia-header" onClick={() => toggleDropdown('gpu-page-rtx3000')}>
                        <span>RTX 3000 Series</span>
                        <span>&#9660;</span>
                      </div>
                      <div className="price-dropdown" id="gpu-page-rtx3000">
                        <div className="price-item"><span>RTX 3060</span><span>$120</span></div>
                        <div className="price-item"><span>RTX 3060 Ti / 3070 / 3070 Ti</span><span>$120</span></div>
                        <div className="price-item"><span>RTX 3080 / 3080 Ti / 3090 / 3090 Ti</span><span>$150</span></div>
                        <div className="price-item chip-price"><span>GDDR6 1GB</span><span>$15</span></div>
                        <div className="price-item chip-price"><span>GDDR6X</span><span>$15</span></div>
                        <div className="price-item chip-price"><span>GDDR6X 2GB</span><span>$60-80</span></div>
                      </div>
                    </div>
                    <div className="price-category nested">
                      <div className="price-category-header nvidia-header" onClick={() => toggleDropdown('gpu-page-rtx4000')}>
                        <span>RTX 4000 Series</span>
                        <span>&#9660;</span>
                      </div>
                      <div className="price-dropdown" id="gpu-page-rtx4000">
                        <div className="price-item"><span>RTX 4060 / 4060 Ti</span><span>$120</span></div>
                        <div className="price-item"><span>RTX 4070 / 4070 Super / 4070 Ti</span><span>$150</span></div>
                        <div className="price-item"><span>RTX 4070 Ti Super / 4080 / 4080 Super</span><span>$200</span></div>
                        <div className="price-item"><span>RTX 4090</span><span>$300</span></div>
                        <div className="price-item chip-price"><span>GDDR6 2GB</span><span>$20-50</span></div>
                        <div className="price-item chip-price"><span>GDDR6X 2GB</span><span>$60-80</span></div>
                      </div>
                    </div>
                    <div className="price-category nested">
                      <div className="price-category-header nvidia-header" onClick={() => toggleDropdown('gpu-page-rtx5000')}>
                        <span>RTX 5000 Series</span>
                        <span>&#9660;</span>
                      </div>
                      <div className="price-dropdown" id="gpu-page-rtx5000">
                        <div className="price-item"><span>RTX 5060 / 5060 Ti</span><span>$120</span></div>
                        <div className="price-item"><span>RTX 5070</span><span>$150</span></div>
                        <div className="price-item"><span>RTX 5070 Ti / 5080</span><span>$200</span></div>
                        <div className="price-item"><span>RTX 5090</span><span>$500</span></div>
                        <div className="price-item chip-price"><span>GDDR7 2GB</span><span>$85</span></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="price-category">
                  <div className="price-category-header amd-header" onClick={() => toggleDropdown('gpu-page-amd-all')}>
                    <span className="brand-label"><img src="/amd.avif" alt="AMD" className="brand-logo amd-logo" /><span className="brand-text">AMD Videocards</span></span>
                    <span>&#9660;</span>
                  </div>
                  <div className="price-dropdown" id="gpu-page-amd-all">
                    <div className="price-category nested">
                      <div className="price-category-header amd-header" onClick={() => toggleDropdown('gpu-page-rx5000')}>
                        <span>RX 5000 Series</span>
                        <span>&#9660;</span>
                      </div>
                      <div className="price-dropdown" id="gpu-page-rx5000">
                        <div className="price-item"><span>RX 5600 XT / 5700 / 5700 XT</span><span>$120</span></div>
                        <div className="price-item chip-price"><span>GDDR6 1GB</span><span>$15</span></div>
                      </div>
                    </div>
                    <div className="price-category nested">
                      <div className="price-category-header amd-header" onClick={() => toggleDropdown('gpu-page-rx6000')}>
                        <span>RX 6000 Series</span>
                        <span>&#9660;</span>
                      </div>
                      <div className="price-dropdown" id="gpu-page-rx6000">
                        <div className="price-item"><span>RX 6600 / 6600 XT / 6650 XT</span><span>$120</span></div>
                        <div className="price-item"><span>RX 6700 / 6700 XT / 6750 / 6750 XT</span><span>$120</span></div>
                        <div className="price-item"><span>RX 6800 / 6800 XT / 6900 XT / 6950 XT</span><span>$150</span></div>
                        <div className="price-item chip-price"><span>GDDR6 2GB</span><span>$20-50</span></div>
                      </div>
                    </div>
                    <div className="price-category nested">
                      <div className="price-category-header amd-header" onClick={() => toggleDropdown('gpu-page-rx7000')}>
                        <span>RX 7000 Series</span>
                        <span>&#9660;</span>
                      </div>
                      <div className="price-dropdown" id="gpu-page-rx7000">
                        <div className="price-item"><span>RX 7600 / 7600 XT</span><span>$120</span></div>
                        <div className="price-item"><span>RX 7700 XT / 7800 XT</span><span>$150</span></div>
                        <div className="price-item"><span>RX 7900 / 7900 XT / 7900 XTX</span><span>$200</span></div>
                        <div className="price-item chip-price"><span>GDDR6 2GB</span><span>$20-50</span></div>
                      </div>
                    </div>
                    <div className="price-category nested">
                      <div className="price-category-header amd-header" onClick={() => toggleDropdown('gpu-page-rx9000')}>
                        <span>RX 9000 Series</span>
                        <span>&#9660;</span>
                      </div>
                      <div className="price-dropdown" id="gpu-page-rx9000">
                        <div className="price-item"><span>RX 9060 / 9060 XT</span><span>$150</span></div>
                        <div className="price-item"><span>RX 9070 / 9070 XT</span><span>$200</span></div>
                        <div className="price-item chip-price"><span>GDDR6 2GB</span><span>$20-50</span></div>
                      </div>
                    </div>
                  </div>
                </div>

                <h4>Maintenance<br />(Labor + Materials)</h4>
                <div className="price-item"><span>Thermal Paste Replacement</span><span>$20</span></div>
                <div className="price-item"><span>Phase Change Thermal Pad</span><span>$50</span></div>
                <div className="price-item"><span>Thermal Pads Replacement</span><span>$50-200</span></div>
              </div>
            </div>
          </section>

          <section className="service-page-section service-page-cta">
            <h2 className="section-title">Send Your GPU for Repair</h2>
            <p>Based in Lethbridge, AB. Accepting mail-in repairs from anywhere in Canada via Canada Post, Purolator, or UPS.</p>
            <div className="cta-contacts">
              <a href="tel:+15878217148" className="cta-link">587-821-7148</a>
              <a href="mailto:repaircenter2026@gmail.com" className="cta-link">repaircenter2026@gmail.com</a>
              <a href="https://t.me/rostislavmmm" className="cta-link" target="_blank" rel="noopener noreferrer">Telegram</a>
            </div>
            <p className="cta-note">Contact us first — we'll confirm receipt, provide a shipping label if needed, and give you a quote before any work begins.</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default GpuRepairPage
