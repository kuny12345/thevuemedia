export interface FaqItem {
  q: string;
  a: string;
}

/**
 * Visual FAQ block. The FAQPage JSON-LD is emitted separately by the caller
 * (BlogArticle or a landing page) from the same `items` array, so the on-page
 * text and the structured data always match.
 */
export default function FaqSection({
  items,
  title = "자주 묻는 질문 (FAQ)",
}: {
  items: FaqItem[];
  title?: string;
}) {
  if (!items.length) return null;
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-extrabold text-gray-900 mb-4">{title}</h2>
      <div className="space-y-4">
        {items.map((it) => (
          <div
            key={it.q}
            className="bg-gray-50 border border-gray-200 rounded-xl p-5"
          >
            <h3 className="font-bold text-gray-900 mb-2">Q. {it.q}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{it.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
