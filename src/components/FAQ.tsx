import { useCallback } from 'react'

const faqs = [
  {
    id: 'faq-1',
    question: 'What if my device fails after the warranty period?',
    answer: "We're always open to a conversation. Depending on the nature of the failure, we may offer a discount or repair at no charge within a reasonable post-warranty window. Reach out and we'll assess the situation together.",
  },
  {
    id: 'faq-2',
    question: "What if I'm not satisfied with the repair?",
    answer: "Contact us with your concerns and we'll work toward a resolution — including a partial or full refund, or returning the device to its pre-repair condition. Customer satisfaction is important to us.",
  },
  {
    id: 'faq-3',
    question: 'How can I verify the quality of your work?',
    answer: "You can review our portfolio for examples of completed repairs. You're also welcome to request before-and-after photos of your specific device prior to work beginning.",
  },
  {
    id: 'faq-4',
    question: 'Should I ship with or without signature required?',
    answer: 'Without signature is preferred to avoid delivery complications. If you want added security, signature service is available through Canada Post — just let us know in advance so we can coordinate.',
  },
  {
    id: 'faq-5',
    question: 'Are there any hidden fees?',
    answer: 'No. You pay only what was quoted upfront: repair labour, parts if applicable, and return shipping. Nothing is added without your prior approval.',
  },
  {
    id: 'faq-6',
    question: 'Do you offer computer or laptop upgrades?',
    answer: 'Yes. We offer hardware upgrade services and can advise on the best options for your specific device — RAM, storage, thermal improvements, and more.',
  },
  {
    id: 'faq-7',
    question: 'How does device intake work?',
    answer: 'We operate as a closed-door facility. Devices are accepted by mail, in-person drop-off at our Lethbridge address, or by arrangement for local meetup within the city.',
  },
  {
    id: 'faq-8',
    question: 'What is the best way to contact you?',
    answer: 'SMS, email, or messaging apps (Telegram, WhatsApp) are preferred. We currently receive a high volume of spam calls and may not always answer. If you call and we miss it, please leave a voicemail — we will follow up promptly.',
  },
  {
    id: 'faq-9',
    question: 'Do you work with other businesses or repair shops?',
    answer: "Yes. We're open to service-to-service partnerships on mutually agreed terms. If you're a shop or retailer looking for a reliable repair partner, get in touch to discuss.",
  },
  {
    id: 'faq-10',
    question: 'Is diagnostics free?',
    answer: 'Diagnostics is free in the majority of cases. In some situations — where soldering is required to assess the next state of the device — a diagnostic fee may apply. You will always be informed of any potential charge before work begins.',
  },
  {
    id: 'faq-11',
    question: 'Do you accept mail-in repairs from outside Lethbridge?',
    answer: "Yes. We accept mail-in repairs from anywhere in Canada. Ship via Canada Post, Purolator, or UPS — we'll inspect, quote, and ship back once repaired. See the Shipping section for full instructions.",
  },
  {
    id: 'faq-12',
    question: 'My GPU has no display, artifacting, or Error 43 — can you fix it?',
    answer: 'Yes. These are among the most common faults we repair. No display, artifacting, driver error 43, and short-circuit faults are typically caused by failed VRAM, damaged VRM/MOSFET components, or degraded solder joints. We perform component-level diagnostics and IC reballing or VRAM replacement as needed.',
  },
  {
    id: 'faq-13',
    question: 'How long does the entire repair process take?',
    answer: 'Based on our typical workflow: roughly 40% of the time goes to diagnostics, 20% to the actual repair, and 40% to post-repair testing. In practice, that translates to approximately 3 days for diagnostics, 1–2 days for repair, and 2–3 days for testing — around 6–8 business days total from the time your device arrives.',
  },
  {
    id: 'faq-14',
    question: 'What is IC reballing and when is it needed?',
    answer: "IC reballing is the process of removing a chip from the PCB, replacing all solder balls on its underside, and re-soldering it back to the board. It's required when solder joints crack or degrade from heat cycles — causing no display, artifacting, or no-POST symptoms.",
  },
]

const half = Math.ceil(faqs.length / 2)
const leftFaqs = faqs.slice(0, half)
const rightFaqs = faqs.slice(half)

function FAQ() {
  const toggle = useCallback((id: string) => {
    const body = document.getElementById(id + '-body')
    if (body) {
      body.classList.toggle('active')
      const header = body.previousElementSibling
      if (header) header.classList.toggle('selected')
    }
  }, [])

  const renderItem = (faq: typeof faqs[0]) => (
    <div key={faq.id} className="faq-item">
      <div className="faq-question" onClick={() => toggle(faq.id)}>
        <span>{faq.question}</span>
        <span className="faq-chevron">&#9660;</span>
      </div>
      <div className="faq-answer" id={faq.id + '-body'}>
        <p>{faq.answer}</p>
      </div>
    </div>
  )

  return (
    <section id="faq">
      <h2 className="section-title">FAQ</h2>
      <div className="faq-columns">
        <div className="faq-col">{leftFaqs.map(renderItem)}</div>
        <div className="faq-col">{rightFaqs.map(renderItem)}</div>
      </div>
    </section>
  )
}

export default FAQ
