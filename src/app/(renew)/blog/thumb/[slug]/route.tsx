import { ImageResponse } from "next/og";
import { getPost, posts } from "@/lib/posts";
import { Thumbnail, THUMB_SIZE, thumbnailFonts } from "@/lib/thumbnail";

// /blog/thumb/<slug> — 빌드 때 글마다 PNG로 미리 생성(정적).
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return new Response("Not found", { status: 404 });
  return new ImageResponse(<Thumbnail post={post} />, {
    ...THUMB_SIZE,
    fonts: await thumbnailFonts(),
    headers: { "Cache-Control": "public, max-age=31536000, immutable" },
  });
}
