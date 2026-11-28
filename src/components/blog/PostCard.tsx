import Image from "next/image";
import Link from "next/link";
import { postUrl, type Post } from "@/lib/posts";
import { citationsFor } from "@/lib/citations";
import { CitationBadge, CitationLogCompact } from "@/components/blog/CitationLog";

export function thumbUrl(slug: string) {
  return `/blog/thumb/${slug}`;
}

// 썸네일 카드 — 썸네일·제목은 글로 가는 링크, 하단 인용 기록은 별도 외부 링크(링크 중첩 방지).
export default function PostCard({ post, showCitations = true }: { post: Post; showCitations?: boolean }) {
  const href = postUrl(post.slug);
  const cites = showCitations ? citationsFor(post.slug) : [];
  return (
    <article className="group flex h-full flex-col">
      <Link href={href} tabIndex={-1} aria-hidden="true" className="relative block overflow-hidden rounded-[14px] border border-gray-200 bg-gray-50">
        <Image
          src={thumbUrl(post.slug)}
          alt=""
          width={1200}
          height={630}
          sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
          className="aspect-[1200/630] h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        {cites.length > 0 && (
          <span className="absolute right-3 top-3">
            <CitationBadge count={cites.length} />
          </span>
        )}
      </Link>
      <div className="mt-4 flex items-center gap-2 text-[13px]">
        <span className="font-bold text-primary">{post.tag}</span>
        <span className="text-gray-300" aria-hidden="true">·</span>
        <time className="mono text-gray-400" dateTime={post.iso}>
          {post.date}
        </time>
        <span className="text-gray-300" aria-hidden="true">·</span>
        <span className="text-gray-400">{post.readTime}</span>
      </div>
      <h3 className="mt-2 text-[19px] leading-snug">
        <Link href={href} className="transition-colors hover:text-primary group-hover:text-primary">
          {post.title}
        </Link>
      </h3>
      <p className="mt-2 line-clamp-2 text-[15px] leading-relaxed text-gray-500">{post.excerpt}</p>
      <CitationLogCompact items={cites} />
    </article>
  );
}
