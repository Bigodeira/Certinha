import { useState } from 'react'
import qualityBadges from '../../tarjafda.png'

type FAQItem =
  | { q: string; a: string[]; table?: never }
  | { q: string; a?: never; table: { headers: string[]; rows: string[][] } }

const FAQS: FAQItem[] = [
  {
    q: 'How does ProNail Complex work?',
    a: [
      'ProNail Complex is an extremely potent combination of oils and skin-repairing vitamins that you apply every day, after you shower, to kill off fungus. What makes this product special is the fact that it comes in the form of a mist spray that releases the ingredients in extremely small particles that are capable of delving deep, nurturing your skin and nails at their very core.',
    ],
  },
  {
    q: 'Are there any side effects?',
    a: [
      'ProNail Complex has been designed for all ages and medical conditions. All of the ingredients have been proven to be safe in clinical trials and are constantly tested for purity and to ensure against toxins and contaminants.',
      'With more than 87,000 customers, we havent seen any notable side effects. So were confident in saying that ProNail Complex is one of the purest fungus eliminating formulas youll find on the market.',
      'As always, if you currently have a medical condition or youre taking other prescription medication, we advise you to show a bottle of ProNail Complex to your doctor before you use it, just to put your mind at ease.',
    ],
  },
  {
    q: 'What is your money back guarantee?',
    a: [
      'It is a risk-free option that we are offering you because we believe in this formula so much.',
      'It means you can try ProNail Complex for a full 60 days.',
      'And if you are not completely convinced by the amazing results, then just get your money back.',
    ],
  },
  {
    q: 'How many bottles should I order?',
    a: [
      'Most of our clients order six bottles at a time and many double their order because they want to enjoy the benefits of this amazing formula for as long as possible or even share it with their friends and family.',
      'It is a smart choice considering those who buy the 6 bottle pack get a massive discount, free shipping and 3 free online guides. Thats a lot of value and savings, especially since, once they start seeing results, our clients usually want to reorder.',
    ],
  },
  {
    q: 'How do I use ProNail Complex?',
    a: [
      'You simply step out of the shower and effortlessly spray this treatment all over your feet. This complex formula is absorbed into the skin and nails extremely quickly, so you wont have to walk around with greasy toenails all day long.',
      'Then, put on some cotton socks to make sure you create an unfriendly environment for the fungus while nourishing your skin and helping it to start healing and rebuilding.',
    ],
  },
  {
    q: 'Is this a one-off purchase?',
    a: [
      'Yes, your order is a one-off purchase with no hidden autoship, clauses or charges. The price you see on the checkout page is the only price you will have to pay.',
    ],
  },
  {
    q: 'What are the ingredients inside ProNail Complex?',
    a: [
      'Inside every single drop of ProNail Complex there is a proprietary formula of strong ingredients, custom-made to make you proud of your healthy nails.',
    ],
  },
  {
    q: '*Shipping policy',
    table: {
      headers: ['Delivery Address', 'Shipping Fee', 'Shipping Time'],
      rows: [
        ['United States', 'FREE', '5-7 working days'],
        ['Canada', '$15.95', '10-15 working days'],
        ['UK and Ireland', '$15.95', '10-15 working days'],
        ['Australia and New Zealand', '$15.95', '10-15 working days'],
      ],
    },
  },
]

const EASE = 'cubic-bezier(0.28, 0.11, 0.32, 1)'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      <div className="pronail-faq-badges-strip" aria-label="ProNail quality certifications">
        <img
          src={qualityBadges}
          alt="GMP Certified, FDA Registered, 100% Natural Ingredients, Made in USA and GMO Free"
          className="pronail-faq-badges-image"
        />
      </div>

      <section
        id="faq"
        className="pronail-faq"
      >
        <div className="pronail-faq-inner">
        <h2 className="pronail-faq-title">
          Frequently Asked
          <br className="pronail-faq-mobile-break" /> Questions
        </h2>

        <div className="pronail-faq-list">
          {FAQS.map(({ q, a, table }, i) => {
            const isOpen = openIndex === i
            const panelId = `faq-panel-${i}`
            const buttonId = `faq-button-${i}`

            return (
              <div key={q} className="pronail-faq-item">
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="pronail-faq-button"
                >
                  <span className="pronail-faq-question">
                    {q}
                  </span>

                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    width="23"
                    height="23"
                    className="pronail-faq-chevron"
                  >
                    <path
                      d="m6.5 9 5.5 5.5L17.5 9"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="pronail-faq-panel"
                  style={{
                    display: 'grid',
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    transition: `grid-template-rows 0.45s ${EASE}`,
                  }}
                >
                  <div className="pronail-faq-panel-clip">
                    {table ? (
                      <div className="pronail-faq-table-wrap">
                        <table className="pronail-faq-shipping-table">
                          <thead>
                            <tr>
                              {table.headers.map((header) => (
                                <th
                                  key={header}
                                  scope="col"
                                  className="pronail-faq-table-heading"
                                >
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {table.rows.map((row) => (
                              <tr key={row[0]} className="pronail-faq-table-row">
                                {row.map((cell, cellIndex) => (
                                  <td
                                    key={cellIndex}
                                    className="pronail-faq-table-cell"
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className="pronail-faq-answer">
                        {a.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="pronail-faq-answer-paragraph"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        </div>
      </section>
    </>
  )
}
