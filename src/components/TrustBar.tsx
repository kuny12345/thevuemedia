const platforms = [
  "ChatGPT",
  "Google Gemini",
  "Microsoft Copilot",
  "Perplexity",
  "Claude",
  "Meta AI",
];

export default function TrustBar() {
  return (
    <section className="bg-gray-50 border-y border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm text-gray-400 mb-5 font-medium">
          더뷰미디어가 최적화하는 AI 플랫폼
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14">
          {platforms.map((name) => (
            <span
              key={name}
              className="text-gray-400 font-bold text-base lg:text-lg tracking-tight"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
