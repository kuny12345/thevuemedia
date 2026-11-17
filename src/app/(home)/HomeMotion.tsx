"use client";

import { useEffect } from "react";

// 홈 스크롤 인터랙션을 브라우저에서만 시작한다 (화면 HTML은 서버에서 그려져 있음).
export default function HomeMotion() {
  useEffect(() => {
    import("./motion").then((m) => m.initHome());
  }, []);
  return null;
}
