
import { faqs } from '@/data/faqs';

export default function FAQSection() {
  return (
    <article className="knowledge-card faq-card">
      <span className="eyebrow">Fan questions</span>
      <h2>Answers people usually want first.</h2>
      <div className="faq-list">
        {faqs.map((faq) => (
          <details key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </article>
  );
}
