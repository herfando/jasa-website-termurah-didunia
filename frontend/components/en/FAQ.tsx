export default function FAQ() {
  const faqs = [
    {
      question: "Is the price really only $79?",
      answer:
        "Yes. $79 is the real price for a simple website, not just a bait price.",
    },
    {
      question: "How long does it take?",
      answer:
        "We prioritize fast delivery. The completion time depends on your website requirements and the materials provided.",
    },
    {
      question: "Can I request revisions?",
      answer:
        "Yes. We provide revisions until you are satisfied with the website.",
    },
    {
      question: "Will the website look good on mobile?",
      answer:
        "Yes. The website is responsive and designed to work comfortably on phones, tablets, laptops, and desktops.",
    },
    {
      question: "Will the website be ready to go online?",
      answer:
        "Yes. For the simple website package, the website will be prepared and ready to go online.",
    },
    {
      question: "What if I need complex features?",
      answer:
        "We can discuss your requirements. Features such as login, database, payment gateway, booking, or custom systems will be priced based on their complexity.",
    },
  ];

  return (
    <section id="faq" className="bg-white py-20 dark:bg-black">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            FAQ
          </span>

          <h2 className="mt-3 text-3xl font-black text-slate-900 dark:text-white sm:text-4xl">
            Website Development
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Still have questions? You may find the answer here.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-slate-300 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900"
            >
              <summary className="cursor-pointer list-none font-bold text-slate-900 dark:text-white">
                <div className="flex items-center justify-between gap-4">
                  <span>{faq.question}</span>

                  <span className="text-xl text-orange-500 transition group-open:rotate-45">
                    +
                  </span>
                </div>
              </summary>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
