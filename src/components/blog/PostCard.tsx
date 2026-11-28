import Image from "next/image";
import Link from "next/link";
import { postUrl, type Post } from "@/lib/posts";
import type { Citation } from "@/lib/citations";
import { EngineBadges } from "@/components/blog/CitationLog";

export function thumbUrl(slug: string) {
  return `/blog/thumb/${slug}`;
}

/** 썸네일 — AI 답변에 인용된 글이면 우상단에 엔진별 뱃지를 얹는다 */
export function Thumb({
  post,
  citations,
  sizes,
  priority,
  className = "",
}: {
  post: Post;
  citations: Citation[];
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={postUrl(post.slug)}
      tabIndex={-1}
      aria-hidden="true"
      className={`relative block overflow-hidden rounded-[14px] border border-gray-200 bg-gray-50 ${className}`}
    >
      <Image
        src={thumbUrl(post.slug)}
        alt=""
        width={1200}
        height={630}
        priority={priority}
        sizes={sizes}
        className="aspect-[1200/630] h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />
      {citations.length > 0 && (
        <span className="pointer-events-none absolute right-3 top-3 max-w-[70%]">
          <EngineBadges items={citations} />
        </span>
      )}
    </Link>
  );
}

// 썸네일 카드 — 인용 기록 상세는 카드가 아니라 목록의 "AI 답변 인용 기록" 섹션에 따로 둔다.
export default function PostCard({ post, citations = [] }: { post: Post; citations?: Citation[] }) {
  const href = postUrl(post.slug);
  return (
    <article className="group flex h-full flex-col">
      <Thumb post={post} citations={citations} sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw" />
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
    </article>
  );
}
