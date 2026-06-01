"use client";

import { FormEvent, useState } from "react";

const inputCls =
  "w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-ink placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition";

export default function CtaSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-gray-50 border-t border-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4">
              Get Started
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-tight font-extrabold text-ink mb-5">
              AI는 우리 브랜드를
              <br />
              어떻게 인식하고 있을까?
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              URL이나 키워드만 입력하시면, 전문 컨설턴트가 분석한{" "}
              <strong className="text-ink">‘AI Mention 리포트’</strong>를
              무료로 보내드립니다.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm justify-center lg:justify-start">
              <span>🔒</span>
              <span>입력 정보는 분석 목적으로만 활용되며 외부에 공유되지 않습니다.</span>
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 w-full max-w-md">
            {submitted ? (
              <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-ink mb-2">
                  신청이 완료되었습니다
                </h3>
                <p className="text-gray-500">
                  전문 컨설턴트가 AI Mention 리포트를 보내드립니다.
                </p>
              </div>
            ) : (
              <form
                id="ctaForm"
                onSubmit={handleSubmit}
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
              >
                <h3 className="text-lg font-bold text-ink mb-6">
                  무료 AI 진단 신청
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1.5 font-medium">
                      회사명
                    </label>
                    <input type="text" placeholder="예: 더뷰미디어" required className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1.5 font-medium">
                      웹사이트 URL 또는 키워드
                    </label>
                    <input type="text" placeholder="예: thevuemedia.com" required className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1.5 font-medium">
                      연락처 (이메일 또는 전화번호)
                    </label>
                    <input type="text" placeholder="예: contact@company.com" required className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1.5 font-medium">
                      업종
                    </label>
                    <select className={`${inputCls} appearance-none`} defaultValue="">
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
                  className="w-full mt-6 px-8 py-3.5 rounded-lg bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors"
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
