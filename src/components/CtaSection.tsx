"use client";

import { FormEvent, useState } from "react";

export default function CtaSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-dark relative overflow-hidden"
    >
      {/* BG decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-primary-light font-semibold text-sm mb-3 tracking-wide uppercase">
              Get Started
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
              AI가 우리 브랜드를
              <br />
              어떻게 인식하고 있을까?
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              간단한 URL이나 키워드만 입력하시면,
              <br className="hidden sm:block" />
              24시간 내에 전문 컨설턴트가 분석한{" "}
              <strong className="text-gray-200">
                &lsquo;AI Mention 리포트&rsquo;
              </strong>
              를 보내드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <a
                href="#ctaForm"
                className="px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
              >
                우리 브랜드 AI 인식도 무료 진단하기
              </a>
              <a
                href="#"
                className="px-8 py-4 rounded-full border border-gray-600 text-gray-300 font-semibold hover:border-gray-400 hover:text-white transition-colors"
              >
                업종별 AIO 성공 사례 리포트 받기
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm justify-center lg:justify-start">
              <span>&#x1F512;</span>
              <span>
                입력하신 정보는 분석 목적으로만 활용되며, 외부에 공유되지
                않습니다.
              </span>
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 w-full max-w-md">
            {submitted ? (
              <div className="bg-dark-secondary border border-gray-700 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">&#x2705;</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  신청이 완료되었습니다!
                </h3>
                <p className="text-gray-400">
                  24시간 내에 전문 컨설턴트가 AI Mention 리포트를 보내드립니다.
                </p>
              </div>
            ) : (
              <form
                id="ctaForm"
                onSubmit={handleSubmit}
                className="bg-dark-secondary border border-gray-700 rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-white mb-6">
                  무료 AI 진단 신청
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5 font-medium">
                      회사명
                    </label>
                    <input
                      type="text"
                      placeholder="예: 더뷰미디어"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5 font-medium">
                      웹사이트 URL 또는 키워드
                    </label>
                    <input
                      type="text"
                      placeholder="예: www.thevuemedia.co.kr"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5 font-medium">
                      연락처 (이메일 또는 전화번호)
                    </label>
                    <input
                      type="text"
                      placeholder="예: contact@company.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5 font-medium">
                      업종
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition appearance-none"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        업종을 선택해주세요
                      </option>
                      <option value="hospital">병원/의료</option>
                      <option value="law">법률</option>
                      <option value="franchise">프랜차이즈</option>
                      <option value="ecommerce">이커머스</option>
                      <option value="education">교육</option>
                      <option value="finance">금융/보험</option>
                      <option value="realestate">부동산</option>
                      <option value="other">기타</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full mt-6 px-8 py-4 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
                >
                  무료 진단 신청하기
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
