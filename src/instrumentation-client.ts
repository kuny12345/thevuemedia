import posthog from "posthog-js";

// PostHog — schemaworks 퍼널과 같은 프로젝트 (크로스 도메인 여정을 한곳에서 분석).
// 프로젝트 토큰은 클라이언트 공개키(수집 전용)라 하드코딩이 표준.
posthog.init("phc_A8kZUuvBsWJoiUQkUGWtCAmUe4ijJaAD8PU2rSKfDGnv", {
  api_host: "https://us.i.posthog.com",
  defaults: "2025-05-24",
  capture_exceptions: true,
});
