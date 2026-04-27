import { useEffect, useCallback, useState } from 'react'
import Header from '../components/Header'

const portfolioData = [
  { id: 1,  tag: 'BGA Reballing',      caption: 'NVIDIA GA102 GPU chip — removed from EVGA RTX 3090 for BGA reballing' },
  { id: 2,  tag: 'BGA Reballing',      caption: 'ASUS RTX 2080 Dual — GPU chip reballed and ready for installation' },
  { id: 3,  tag: 'BGA Reballing',      caption: 'RX 6800 XT — without a stencil, solder balls must be positioned by hand before reflow. Tedious but precise work.' },
  { id: 4,  tag: 'VRAM Replacement',   caption: 'RX 580 — VRAM upgrade from 4GB to 8GB. Mining era classic.' },
  { id: 5,  tag: 'VRAM Replacement',   caption: 'This is how VRAM gets reballed — all 8 memory chips at once in a single pass.' },
  { id: 6,  tag: 'Diagnostics',        caption: 'Radeon VII / Pro 7 — 16GB HBM2 memory integrated directly into the GPU chip. A rare and unique card of its time.' },
  { id: 7,  tag: 'BGA Reballing',      caption: 'GTX 1080 Ti GPU chip — one method of GPU reballing. Slightly involved, but a solid approach to the job.' },
  { id: 8,  tag: 'VRM Repair',         caption: 'The classic case — card sometimes won\'t start, sometimes crashes under load due to burned power connector pins. The PSU cable is usually damaged too.' },
  { id: 9,  tag: 'BGA Reballing',      caption: 'GTX 1080 Ti — a clear example of what a GPU chip looks like after mining and heavy-use conditions.' },
  { id: 10, tag: 'Diagnostics',        caption: 'A clear look at how VRAM fails — the trace leading to the pad corrodes and breaks, cutting off the memory chip entirely.' },
  { id: 11, tag: 'BGA Reballing',      caption: 'RX 6800 XT — looks brand new after GPU chip reballing.' },
  { id: 12, tag: 'Thermal Service',    caption: 'EVGA RTX 3080 10GB — full thermal pad and thermal paste replacement.' },
  { id: 13, tag: 'VRAM Replacement',   caption: 'Even fire-damaged cards came in — 8GB VRAM stripped and transplanted onto 4GB boards to squeeze out maximum value.' },
  { id: 14, tag: 'VRAM Replacement',   caption: 'ASUS GTX 1060 — VRAM upgrade from 3GB to 6GB.' },
  { id: 15, tag: 'BGA Reballing',      caption: 'XFX RX 6800 XT — GPU chip and VRAM reballed, ready to go.' },
  { id: 16, tag: 'Thermal Service',    caption: 'PowerColor RX 6800 — looks stunning inside a windowed case at night.' },
  { id: 17, tag: 'Thermal Service',    caption: 'MSI RTX 3080 — in the harsh days of mining, everyone fought overheating however they could. This particular approach wasn\'t the most effective.' },
  { id: 18, tag: 'BGA Reballing',      caption: 'Palit RTX 3080 — GPU chip and VRAM reball. These cards are prone to spiral bend, which eventually requires a full reball. Use a GPU support bracket to prevent it.' },
  { id: 19, tag: 'BGA Reballing',      caption: 'ASUS RTX 2070 Super — GPU chip reballed and VRAM replaced.' },
  { id: 20, tag: 'Diagnostics',        caption: 'RX 5700 XT initialization captured on a thermal camera. Two distinct GDDR6 heat zones are visible — slightly different from older GDDR5 memory.' },
  { id: 21, tag: 'Thermal Service',    caption: 'Sapphire Pulse RX 5700 — thermal service with VRAM thermal pad replacement.' },
  { id: 22, tag: 'Diagnostics',        caption: 'Sapphire Inca EP-10 — a server mining board housing 10 x070 (RX 5700 XT) GPUs.' },
  { id: 23, tag: 'Diagnostics',        caption: 'Physical damage at its worst — not the solder, not the PCB, but the pads on the chip itself torn off. One of those cases where repair simply isn\'t worth it.' },
  { id: 24, tag: 'Diagnostics',        caption: 'Size comparison — NVIDIA RTX A2000 vs RTX 3090.' },
  { id: 25, tag: 'Testing',            caption: 'This is what 4 RTX A2000 workstation GPUs in a single motherboard looks like.' },
  { id: 26, tag: 'Diagnostics',        caption: 'Why cleaning or filing a burn isn\'t always enough — carbon can hide inside the PCB layers and isn\'t always visible. It\'s also conductive, so if not fully removed, it will burn through again.' },
  { id: 27, tag: 'BGA Reballing',      caption: 'Sapphire RX 580 Plus — GPU chip reball.' },
  { id: 28, tag: 'Diagnostics',        caption: 'XFX BC-160 — a mining-only Radeon GPU with VRAM integrated directly into the chip.' },
  { id: 29, tag: 'Thermal Service',    caption: 'A good example of what happens when thermal paste is applied poorly or wrong-size thermal pads are used. Incomplete coverage of the GPU die causes hotspots and overheating.' },
  { id: 30, tag: 'Thermal Service',    caption: 'Palit GameRock RTX 3080 — the same issue seen from the heatsink side. Incorrect thermal pads had lifted the cooler away from the GPU chip entirely.' },
  { id: 31, tag: 'BGA Reballing',      caption: 'A small batch from one of our wholesale clients.' },
  { id: 32, tag: 'BGA Reballing',      caption: 'GTX 980M — GPU chip replacement on a laptop graphics card.' },
  { id: 33, tag: 'Thermal Service',    caption: 'Palit GamePro RTX 3080 Ti — full thermal service with VRM and VRAM pad replacement, and phase-change material applied to the GPU chip instead of standard paste.' },
]
import Footer from '../components/Footer'

function GpuRepairPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
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

  const [visibleCount, setVisibleCount] = useState(9)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const prevPhoto = useCallback(() => setLightboxIndex(i => i !== null ? (i - 1 + portfolioData.length) % portfolioData.length : i), [])
  const nextPhoto = useCallback(() => setLightboxIndex(i => i !== null ? (i + 1) % portfolioData.length : i), [])

  useEffect(() => {
    if (lightboxIndex === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevPhoto()
      else if (e.key === 'ArrowRight') nextPhoto()
      else if (e.key === 'Escape') closeLightbox()
    }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [lightboxIndex, prevPhoto, nextPhoto, closeLightbox])

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
          <div className="service-page-hero-bg"></div>
          <div className="service-page-hero-overlay"></div>
          <div className="container service-page-hero-content">
            <div className="service-page-hero-text">
              <h1>GPU Repair</h1>
              <p className="service-page-intro">
                Component-level GPU repair for NVIDIA RTX and AMD RX series cards. We diagnose and fix the actual fault —
                failed VRAM, damaged VRM or MOSFET components, degraded BGA solder joints — not just reflow and hope.
                Free diagnostics. Mail-in from anywhere in Canada.
              </p>
            </div>
          </div>
        </section>

        <div className="container service-page-body">
          <section className="service-page-section" id="symptoms">
            <h2 className="section-title">Symptoms We Fix</h2>
            <div className="symptoms-grid">
              <div className="symptom-item">
                <h3>No Display / Black Screen</h3>
                <p>GPU powers on but produces no video output. Common causes: failed VRAM, open circuit on the display output path, or BGA solder joint failure on the GPU chip itself.</p>
              </div>
              <div className="symptom-item">
                <h3>Artifacting</h3>
                <p>Visual glitches, corrupted pixels, color blocks, or flickering on screen. Usually caused by one or more failed GDDR5/GDDR6/GDDR6X/GDDR7 memory chips or VRAM solder joint degradation. Can also result from a dirty or damaged display output port or video cable — worth ruling out before sending in for repair.</p>
              </div>
              <div className="symptom-item">
                <h3>Driver Error 43 / Code 43</h3>
                <p>Windows Device Manager reports Code 43. Often a VRAM fault or GPU chip issue causing the driver to crash during initialization. Can also be caused by failed VRM components or unstable power rails supplying the VRAM, GPU core, or logic circuits on the board. Component-level diagnosis required.</p>
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
              <div className="symptom-item">
                <h3>Throttling, Stuttering & Freezes</h3>
                <p>If your system freezes, games stutter, or performance drops in spikes, the GPU may need servicing — dried thermal paste, degraded thermal pads, or blocked heatsink fins are common causes. A thermal service often restores full performance.</p>
              </div>
              <div className="symptom-item">
                <h3>Bought a GPU That Doesn't Work</h3>
                <p>Purchased a card secondhand and it's not functioning? We inspect GPUs for prior repairs, hidden damage, remarked chips, or misrepresented condition — so you know exactly what you have before investing further.</p>
              </div>
            </div>
          </section>

          <section className="service-page-section" id="portfolio">
            <h2 className="section-title">Our Work</h2>
            <div className="pf-v1-grid">
              {portfolioData.slice(0, visibleCount).map((p, i) => (
                <div key={p.id} className="pf-v1-card" onClick={() => setLightboxIndex(i)}>
                  <div className="pf-v1-img-wrap">
                    <img src={`/portfoliogpu/webp/${p.id}.webp`} alt={p.caption} loading="lazy" />
                  </div>
                  <p className="pf-caption">{p.caption}</p>
                </div>
              ))}
            </div>
            {visibleCount < portfolioData.length && (
              <button className="pf-load-more" onClick={() => setVisibleCount(v => Math.min(v + 9, portfolioData.length))}>
                Load More ({portfolioData.length - visibleCount} photos remaining)
              </button>
            )}
          </section>

          {lightboxIndex !== null && (
            <div className="lb-overlay" onClick={closeLightbox}>
              <button className="lb-close" onClick={closeLightbox}>✕</button>
              <button className="lb-arrow lb-prev" onClick={e => { e.stopPropagation(); prevPhoto() }}>&#8249;</button>
              <div className="lb-content" onClick={e => e.stopPropagation()}>
                <img src={`/portfoliogpu/webp/${portfolioData[lightboxIndex].id}.webp`} alt={portfolioData[lightboxIndex].caption} />
                <p className="lb-caption">{portfolioData[lightboxIndex].caption}</p>
                <span className="lb-counter">{lightboxIndex + 1} / {portfolioData.length}</span>
              </div>
              <button className="lb-arrow lb-next" onClick={e => { e.stopPropagation(); nextPhoto() }}>&#8250;</button>
            </div>
          )}

          <section className="service-page-section" id="process">
            <h2 className="section-title">What We Do</h2>
            <div className="process-steps">
              <div className="process-step">
                <span className="step-num">01</span>
                <div>
                  <h3>Component-Level Diagnostics</h3>
                  <p>We use the right tools for the job — oscilloscope for signal and power rail analysis, thermal camera to detect hot spots and failing components, and specialized software including MATS and T-Server for VRAM and GPU diagnostics. Proper diagnosis leads to a real solution, not wasted money on guesswork.</p>
                </div>
              </div>
              <div className="process-step">
                <span className="step-num">02</span>
                <div>
                  <h3>IC Reballing & VRAM Replacement</h3>
                  <p>VRAM and GPU chipreplacement is performed using a Termopro IK650 infrared rework station and Quick soldering stations — delivering precise, controlled heat profiles with no overheating. We use high-quality flux and thorough post-solder cleaning. After repair, the board looks the way it came from the factory — not like it survived a campfire.</p>
                </div>
              </div>
              <div className="process-step">
                <span className="step-num">03</span>
                <div>
                  <h3>VRM & MOSFET Repair</h3>
                  <p>We restore GPU power delivery systems through proper diagnostics and VRM configuration — replacing failed MOSFETs, inductors, and capacitors at the component level. In cases of phase burnout, we can reconfigure the VRM to operate on a reduced number of phases, adapting the power system to what the board can reliably support.</p>
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
              <div className="model-brand-block">
                <div className="model-brand-header nvidia">NVIDIA</div>
                <div className="model-row"><span className="model-series">GeForce GTX 1000</span><span className="model-list">GTX 1060, 1070, 1070 Ti, 1080, 1080 Ti, TITAN Xp</span></div>
                <div className="model-row"><span className="model-series">GeForce RTX 2000</span><span className="model-list">RTX 2060, 2060 Super, 2070, 2070 Super, 2080, 2080 Super, 2080 Ti, TITAN RTX</span></div>
                <div className="model-row"><span className="model-series">GeForce RTX 3000</span><span className="model-list">RTX 3060, 3060 Ti, 3070, 3070 Ti, 3080, 3080 Ti, 3090, 3090 Ti</span></div>
                <div className="model-row"><span className="model-series">GeForce RTX 4000</span><span className="model-list">RTX 4060, 4060 Ti, 4070, 4070 Super, 4070 Ti, 4070 Ti Super, 4080, 4080 Super, 4090</span></div>
                <div className="model-row"><span className="model-series">GeForce RTX 5000</span><span className="model-list">RTX 5060, 5060 Ti, 5070, 5070 Ti, 5080, 5090</span></div>
                <div className="model-row"><span className="model-series">RTX A-Series</span><span className="model-list">A2000, A4000, A4500, A5000, A6000</span></div>
                <div className="model-row"><span className="model-series">CMP Mining</span><span className="model-list">30HX, 40HX, 50HX, 90HX, 170HX</span></div>
                <div className="model-row"><span className="model-series">Data Center</span><span className="model-list">P40, P100, V100, A100, H100, A30, A40, A16, A10</span></div>
              </div>
              <div className="model-brand-block">
                <div className="model-brand-header amd">AMD</div>
                <div className="model-row"><span className="model-series">Radeon RX 500</span><span className="model-list">RX 570, 580, 590</span></div>
                <div className="model-row"><span className="model-series">Radeon Vega</span><span className="model-list">RX Vega 56, Vega 64, Radeon VII</span></div>
                <div className="model-row"><span className="model-series">Radeon RX 5000</span><span className="model-list">RX 5600 XT, 5700, 5700 XT</span></div>
                <div className="model-row"><span className="model-series">Radeon RX 6000</span><span className="model-list">RX 6600, 6600 XT, 6650 XT, 6700, 6700 XT, 6750 XT, 6800, 6800 XT, 6900 XT, 6950 XT</span></div>
                <div className="model-row"><span className="model-series">Radeon RX 7000</span><span className="model-list">RX 7600, 7600 XT, 7700 XT, 7800 XT, 7900, 7900 XT, 7900 XTX</span></div>
                <div className="model-row"><span className="model-series">Radeon RX 9000</span><span className="model-list">RX 9060, 9060 XT, 9070, 9070 XT</span></div>
                <div className="model-row"><span className="model-series">Radeon Pro Mining</span><span className="model-list">BC-160</span></div>
                <div className="model-row"><span className="model-series">Instinct Server</span><span className="model-list">MI25, MI50, MI60, MI100, MI200, MI210, MI250, MI300</span></div>
              </div>
            </div>
          </section>

          <section className="service-page-section" id="gpu-pricing">
            <h2 className="section-title">Pricing</h2>
            <p className="pricing-note-top">Diagnostic <span className="free-badge">Free</span> &nbsp;·&nbsp; Labor only unless parts are specified</p>

            <div className="pricing-two-col">
              {/* NVIDIA */}
              <div className="service-card">
                <div className="pricing-section">
                  <h4 style={{display:'flex',alignItems:'center',justifyContent:'space-between',fontSize:'1.5rem'}}>GPU Repair &amp; Reballing <img src="/nvidiageforce.avif" alt="NVIDIA" style={{height:'20px',width:'auto'}} /></h4>
                  <div className="price-category nested">
                    <div className="price-category-header nvidia-header" onClick={() => toggleDropdown('gpu-page-rtx2000')}><span>RTX 2000 Series</span><span>&#9660;</span></div>
                    <div className="price-dropdown" id="gpu-page-rtx2000">
                      <div className="price-item"><span>RTX 2060 / 2060 Super</span><span>$100</span></div>
                      <div className="price-item"><span>RTX 2070 / 2070 Super</span><span>$120</span></div>
                      <div className="price-item"><span>RTX 2080 / 2080 Super</span><span>$120</span></div>
                      <div className="price-item"><span>RTX 2080 Ti / TITAN RTX</span><span>$150</span></div>
                      <div className="price-item chip-price"><span>GDDR6 1GB</span><span>$15</span></div>
                    </div>
                  </div>
                  <div className="price-category nested">
                    <div className="price-category-header nvidia-header" onClick={() => toggleDropdown('gpu-page-rtx3000')}><span>RTX 3000 Series</span><span>&#9660;</span></div>
                    <div className="price-dropdown" id="gpu-page-rtx3000">
                      <div className="price-item"><span>RTX 3060</span><span>$120</span></div>
                      <div className="price-item"><span>RTX 3060 Ti / 3070 / 3070 Ti</span><span>$120</span></div>
                      <div className="price-item"><span>RTX 3080 / 3080 Ti / 3090 / 3090 Ti</span><span>$150</span></div>
                      <div className="price-item chip-price"><span>GDDR6 1GB</span><span>$15</span></div>
                      <div className="price-item chip-price"><span>GDDR6X / GDDR6X 2GB</span><span>$15 / $60-80</span></div>
                    </div>
                  </div>
                  <div className="price-category nested">
                    <div className="price-category-header nvidia-header" onClick={() => toggleDropdown('gpu-page-rtx4000')}><span>RTX 4000 Series</span><span>&#9660;</span></div>
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
                    <div className="price-category-header nvidia-header" onClick={() => toggleDropdown('gpu-page-rtx5000')}><span>RTX 5000 Series</span><span>&#9660;</span></div>
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

              {/* AMD */}
              <div className="service-card">
                <div className="pricing-section">
                  <h4 style={{display:'flex',alignItems:'center',justifyContent:'space-between',fontSize:'1.5rem'}}>GPU Repair &amp; Reballing <img src="/amd.avif" alt="AMD" style={{height:'20px',width:'auto'}} /></h4>
                  <div className="price-category nested">
                    <div className="price-category-header amd-header" onClick={() => toggleDropdown('gpu-page-rx5000')}><span>RX 5000 Series</span><span>&#9660;</span></div>
                    <div className="price-dropdown" id="gpu-page-rx5000">
                      <div className="price-item"><span>RX 5600 XT / 5700 / 5700 XT</span><span>$120</span></div>
                      <div className="price-item chip-price"><span>GDDR6 1GB</span><span>$15</span></div>
                    </div>
                  </div>
                  <div className="price-category nested">
                    <div className="price-category-header amd-header" onClick={() => toggleDropdown('gpu-page-rx6000')}><span>RX 6000 Series</span><span>&#9660;</span></div>
                    <div className="price-dropdown" id="gpu-page-rx6000">
                      <div className="price-item"><span>RX 6600 / 6600 XT / 6650 XT</span><span>$120</span></div>
                      <div className="price-item"><span>RX 6700 / 6700 XT / 6750 / 6750 XT</span><span>$120</span></div>
                      <div className="price-item"><span>RX 6800 / 6800 XT / 6900 XT / 6950 XT</span><span>$150</span></div>
                      <div className="price-item chip-price"><span>GDDR6 2GB</span><span>$20-50</span></div>
                    </div>
                  </div>
                  <div className="price-category nested">
                    <div className="price-category-header amd-header" onClick={() => toggleDropdown('gpu-page-rx7000')}><span>RX 7000 Series</span><span>&#9660;</span></div>
                    <div className="price-dropdown" id="gpu-page-rx7000">
                      <div className="price-item"><span>RX 7600 / 7600 XT</span><span>$120</span></div>
                      <div className="price-item"><span>RX 7700 XT / 7800 XT</span><span>$150</span></div>
                      <div className="price-item"><span>RX 7900 / 7900 XT / 7900 XTX</span><span>$200</span></div>
                      <div className="price-item chip-price"><span>GDDR6 2GB</span><span>$20-50</span></div>
                    </div>
                  </div>
                  <div className="price-category nested">
                    <div className="price-category-header amd-header" onClick={() => toggleDropdown('gpu-page-rx9000')}><span>RX 9000 Series</span><span>&#9660;</span></div>
                    <div className="price-dropdown" id="gpu-page-rx9000">
                      <div className="price-item"><span>RX 9060 / 9060 XT</span><span>$150</span></div>
                      <div className="price-item"><span>RX 9070 / 9070 XT</span><span>$200</span></div>
                      <div className="price-item chip-price"><span>GDDR6 2GB</span><span>$20-50</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Maintenance — full width below */}
            <div className="service-card" style={{ marginTop: '1rem' }}>
              <div className="pricing-section">
                <h4>Maintenance (Labor + Materials)</h4>
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
              <a href="tel:+15878217148" className="cta-link">+1 587-821-7148</a>
              <a href="mailto:repaircenter2026@gmail.com" className="cta-link">repaircenter2026@gmail.com</a>
              <a href="https://t.me/rostislavmmm" className="cta-link" target="_blank" rel="noopener noreferrer">Telegram</a>
            </div>
            <p className="cta-note">Contact us first — we'll confirm receipt and give you a quote before any work begins.</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default GpuRepairPage
