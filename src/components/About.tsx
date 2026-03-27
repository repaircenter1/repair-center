import { useCallback } from 'react'

const equipment = [
  {
    name: 'Soldering Stations',
    image: '/image_1.jpg',
    description: 'Professional soldering stations for precision component-level work, including fine-pitch SMD and through-hole soldering with temperature control.',
  },
  {
    name: 'Hot Air Rework',
    image: '/image_1.jpg',
    description: 'Hot air rework systems for BGA chip removal and installation, SMD component replacement, and heat-shrink applications.',
  },
  {
    name: 'Laboratory Power Supplies',
    image: '/image_1.jpg',
    description: 'Variable voltage and current power supplies for board-level diagnostics, short circuit detection, and controlled power-up testing.',
  },
  {
    name: 'Thermal Imaging Camera',
    image: '/image_1.jpg',
    description: 'Infrared thermal camera for detecting hot spots, short circuits, and failing components on PCBs without physical contact.',
  },
  {
    name: 'Oscilloscope',
    image: '/image_1.jpg',
    description: 'Digital oscilloscope for signal analysis, clock verification, and diagnosing timing issues on complex digital circuits.',
  },
  {
    name: 'Multimeters',
    image: '/image_1.jpg',
    description: 'High-precision multimeters for voltage, resistance, capacitance, and diode measurements during board-level diagnostics.',
  },
  {
    name: 'Professional Microscope',
    image: '/image_1.jpg',
    description: 'Stereo microscope with high magnification for microsoldering, visual inspection of solder joints, and trace damage detection.',
  },
  {
    name: 'Flash & NAND Programmers',
    image: '/image_1.jpg',
    description: 'Programmers for reading, writing, and cloning BIOS chips, NAND flash memory, and EEPROM chips used in various devices.',
  },
  {
    name: 'Laptop Battery Programmers',
    image: '/image_1.jpg',
    description: 'Specialized tools for reprogramming laptop battery controllers, resetting charge cycles, and restoring battery functionality.',
  },
  {
    name: 'Specialized Tools',
    image: '/image_1.jpg',
    description: 'BGA stencils, flux, solder paste, preheaters, and other specialized tools for targeted component-level repairs.',
  },
]

function About() {
  const toggleEquipment = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const isActive = el.classList.toggle('active')
      const header = el.previousElementSibling
      if (header) header.classList.toggle('selected')
      if (id === 'equipment-content') {
        const toggle = document.getElementById('equipment-toggle-text')
        if (toggle) toggle.textContent = isActive ? 'Hide' : 'See Details'
      }
    }
  }, [])

  return (
    <section id="about">
      <h2 className="section-title">About Us</h2>
      <div className="about-content">
        <p>Welcome to <strong>Repair Center</strong> – your trusted partner for professional electronics repair in Lethbridge, Alberta.</p>

        <p>With over <strong>10+ years of experience</strong> in electronics repair, we specialize in GPU, ASIC mining equipment, and laptop repairs. Our journey began with a deep interest in electronics, which naturally evolved into a passion for repair work. Over time, we've expanded our expertise into cryptocurrency mining equipment repair and GPU restoration, constantly developing our skills in BGA soldering and diagnosing complex electronic circuits.</p>

        <p>What sets us apart is our commitment to handling the most challenging repairs that others turn away. From precision BGA rework to complex component-level diagnostics, we bring technical expertise and dedication to every project. We specialize in restoring inter-layer PCB damage and post-burn recovery that most service centers cannot handle.</p>

        <div className="equipment-list">
          <div className="equipment-main-header" onClick={() => toggleEquipment('equipment-content')}>
            <h4>Professional Equipment & Tools</h4>
            <span className="equipment-toggle" id="equipment-toggle-text">See Details</span>
          </div>
          <div className="equipment-content" id="equipment-content">
            <div className="equipment-grid">
              {[0, 1].map(col => (
                <div className="equipment-column" key={col}>
                  {equipment.filter((_, i) => i % 2 === col).map((item, j) => {
                    const id = `equip-${col}-${j}`
                    return (
                      <div className="equipment-item" key={id}>
                        <div
                          className="equipment-item-header"
                          onClick={() => toggleEquipment(id)}
                        >
                          <span>{item.name}</span>
                          <span>&#9660;</span>
                        </div>
                        <div className="equipment-item-body" id={id}>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>
          </div>
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
