// Server-rendered JSON-LD. Uses a plain <script> (NOT next/script) so the
// structured data is present in the initial SSR HTML — essential for AI
// crawlers and tools that do not execute JavaScript. next/script's default
// afterInteractive strategy injects client-side and would be invisible to them.
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
