export default function FAQ() {
  const faqs = [
    {
      question: "Benarkah harganya cuma Rp500.000?",
      answer:
        "Ya. Rp500.000 adalah harga nyata untuk website sederhana, bukan sekadar harga pancingan.",
    },
    {
      question: "Berapa lama pengerjaannya?",
      answer:
        "Kami mengutamakan pengerjaan cepat. Waktu pengerjaan akan disesuaikan dengan kebutuhan dan materi website.",
    },
    {
      question: "Apakah bisa revisi?",
      answer:
        "Bisa. Kami memberikan revisi sampai kamu puas dengan hasil website.",
    },
    {
      question: "Apakah websitenya bagus di HP?",
      answer:
        "Ya. Website dibuat responsive sehingga tetap nyaman digunakan di HP, tablet, laptop, dan desktop.",
    },
    {
      question: "Apakah website langsung online?",
      answer:
        "Ya. Untuk paket website sederhana, website akan disiapkan hingga siap online.",
    },
    {
      question: "Bagaimana kalau saya butuh fitur yang kompleks?",
      answer:
        "Bisa dibicarakan. Fitur seperti login, database, payment gateway, booking, atau sistem custom akan dihitung berdasarkan tingkat kompleksitasnya.",
    },
  ];

  return (
    <section id="faq" className="bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            FAQ
          </span>

          <h2 className="mt-3 text-3xl font-black text-slate-900 dark:text-white sm:text-4xl">
            Jasa Pembuatan Website
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Masih punya pertanyaan? Mungkin jawabannya ada di sini.
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
