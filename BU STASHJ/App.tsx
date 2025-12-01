// src/App.tsx
import React, { useState } from "react";
import { chapters } from "./chapters";

const App: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(1);
  const [showEnglish, setShowEnglish] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const active = chapters.find((c) => c.id === activeId) ?? chapters[0];

  const mainChapters = chapters.filter((c) => !c.kind);
  const appendixChapters = chapters.filter((c) => c.kind === "appendix");

  const rootClasses = darkMode
    ? "min-h-screen bg-gradient-to-b from-[#050316] via-[#090422] to-[#140b33] text-slate-100"
    : "min-h-screen bg-gradient-to-b from-[#f4f0ff] via-[#fbf7ff] to-[#fdf7ff] text-slate-900";

  const chapterLabel =
    active.kind === "appendix"
      ? active.label ?? "Appendix"
      : `Kapitel ${String(active.id).padStart(2, "0")}`;

  const sectionCardTitle = active.kind === "appendix" ? "Appendix Content" : "Core Ideas & Notes";

  return (
    <div className={rootClasses}>
      {/* Top bar */}
      <header
        className={
          "border-b backdrop-blur-xl " +
          (darkMode
            ? "border-indigo-900/70 bg-[#050316]/80"
            : "border-slate-200/80 bg-white/70")
        }
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:px-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-300">
              German Through Its Roots
            </p>
            <p className="text-xs text-slate-400">Interactive Reader · Night-first Draft</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="rounded-full border border-slate-500/70 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-100 shadow-sm transition hover:border-indigo-300/70 hover:shadow-[0_0_24px_rgba(129,140,248,0.8)]"
              onClick={() => setDarkMode((v) => !v)}
            >
              {darkMode ? "Light mode" : "Dark mode"}
            </button>
            <button
              className="hidden rounded-full border border-slate-500/70 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-100 shadow-sm transition hover:border-indigo-300/70 hover:shadow-[0_0_24px_rgba(129,140,248,0.8)] md:inline-flex"
              onClick={() => setShowEnglish((v) => !v)}
            >
              {showEnglish ? "Hide English" : "Show English"}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-6 md:flex-row md:px-6 md:py-10">
        {/* Sidebar */}
        <aside className="mb-4 w-full md:mb-0 md:w-60 md:shrink-0">
          <div
            className={
              "rounded-3xl border p-4 shadow-[0_20px_55px_rgba(15,23,42,0.45)] backdrop-blur-2xl " +
              (darkMode
                ? "border-indigo-900/80 bg-[#050316]/80"
                : "border-slate-200 bg-white/80")
            }
          >
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              Chapters
            </p>
            <nav className="space-y-1">
              {mainChapters.map((ch) => {
                const activeState = ch.id === activeId;
                return (
                  <button
                    key={ch.id}
                    className={`w-full rounded-2xl px-3 py-2 text-left text-sm transition ${
                      activeState
                        ? darkMode
                          ? "bg-indigo-600/85 text-slate-50 shadow-[0_0_30px_rgba(129,140,248,0.9)] ring-1 ring-indigo-300/70"
                          : "bg-slate-900 text-slate-50 shadow-sm"
                        : darkMode
                        ? "text-slate-200 hover:bg-slate-800/80"
                        : "text-slate-700 hover:bg-slate-100/80"
                    }`}
                    onClick={() => setActiveId(ch.id)}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="truncate">
                        {ch.id}. {ch.title}
                      </span>
                    </div>
                    <p
                      className={`mt-0.5 line-clamp-2 text-[11px] ${
                        activeState
                          ? "text-slate-200"
                          : darkMode
                          ? "text-slate-400"
                          : "text-slate-500"
                      }`}
                    >
                      {ch.subtitle}
                    </p>
                  </button>
                );
              })}
            </nav>

            {appendixChapters.length > 0 && (
              <>
                <p className="mt-5 mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Appendices
                </p>
                <nav className="space-y-1">
                  {appendixChapters.map((ch) => {
                    const activeState = ch.id === activeId;
                    return (
                      <button
                        key={ch.id}
                        className={`w-full rounded-2xl px-3 py-2 text-left text-sm transition ${
                          activeState
                            ? darkMode
                              ? "bg-indigo-600/85 text-slate-50 shadow-[0_0_30px_rgba(129,140,248,0.9)] ring-1 ring-indigo-300/70"
                              : "bg-slate-900 text-slate-50 shadow-sm"
                            : darkMode
                            ? "text-slate-200 hover:bg-slate-800/80"
                            : "text-slate-700 hover:bg-slate-100/80"
                        }`}
                        onClick={() => setActiveId(ch.id)}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="truncate">
                            {ch.label ?? "Appendix"}: {ch.title}
                          </span>
                        </div>
                        <p
                          className={`mt-0.5 line-clamp-2 text-[11px] ${
                            activeState
                              ? "text-slate-200"
                              : darkMode
                              ? "text-slate-400"
                              : "text-slate-500"
                          }`}
                        >
                          {ch.subtitle}
                        </p>
                      </button>
                    );
                  })}
                </nav>
              </>
            )}
          </div>
        </aside>

        {/* Main content */}
        <section className="flex-1 space-y-5 md:space-y-6">
          {/* Chapter card */}
          <div
            className={
              "rounded-3xl border p-5 shadow-[0_22px_55px_rgba(15,23,42,0.09)] backdrop-blur-xl md:p-7 " +
              (darkMode
                ? "border-slate-800 bg-slate-900/80"
                : "border-slate-200/80 bg-white/80")
            }
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              {chapterLabel}
            </p>
            <h1 className="mt-1 font-serif text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              {active.title}
            </h1>
            <p className="mt-1 text-sm font-medium text-slate-600">{active.subtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-[15px]">
              {active.summary}
            </p>
          </div>

          {/* Sections / main book content */}
          {active.sections && active.sections.length > 0 && (
            <div
              className={
                "rounded-3xl border p-5 shadow-[0_20px_50px_rgba(15,23,42,0.07)] backdrop-blur-xl md:p-7 " +
                (darkMode
                  ? "border-slate-800 bg-slate-900/80"
                  : "border-slate-200/80 bg-white/90")
              }
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                {sectionCardTitle}
              </p>
              <div className="mt-3 space-y-4">
                {active.sections.map((section, idx) => (
                  <article key={idx} className="space-y-1.5">
                    <h3 className="font-serif text-[15px] font-semibold text-slate-900">
                      {section.heading}
                    </h3>
                    {section.paragraphs.map((para, j) => (
                      <p
                        key={j}
                        className="text-sm leading-relaxed text-slate-700 md:text-[14px]"
                      >
                        {para}
                      </p>
                    ))}
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Reading module (only for normal chapters that have one) */}
          {active.module && (
            <div
              className={
                "rounded-3xl border p-5 shadow-[0_20px_50px_rgba(15,23,42,0.07)] backdrop-blur-xl md:p-7 " +
                (darkMode
                  ? "border-slate-800 bg-slate-900/80"
                  : "border-slate-200/80 bg-white/90")
              }
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Reading Module · {active.module.level}
                  </p>
                  <h2 className="mt-1 font-serif text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                    {active.module.title}
                  </h2>
                </div>
                <button
                  className="inline-flex rounded-full border border-slate-300/70 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition hover:border-slate-400 hover:shadow-md md:hidden"
                  onClick={() => setShowEnglish((v) => !v)}
                >
                  {showEnglish ? "Hide English" : "Show English"}
                </button>
              </div>

              <div className="mt-4 space-y-5">
                {/* German text */}
                <div
                  className={
                    "rounded-2xl border p-4 " +
                    (darkMode
                      ? "border-slate-700 bg-slate-900/80"
                      : "border-slate-200 bg-slate-50/70")
                  }
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    German Text
                  </p>
                  <div className="mt-2 space-y-1.5 text-[15px] leading-relaxed text-slate-900">
                    {active.module.germanLines.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>

                {/* English text toggle */}
                {showEnglish && (
                  <div
                    className={
                      "rounded-2xl border p-4 " +
                      (darkMode
                        ? "border-slate-700 bg-slate-900/80"
                        : "border-slate-200 bg-white/90")
                    }
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                      English Translation
                    </p>
                    <div className="mt-2 space-y-1.5 text-[13px] leading-relaxed text-slate-600 italic">
                      {active.module.englishLines.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </div>
                )}

                {/* Vocabulary */}
                <div
                  className={
                    "rounded-2xl border p-4 " +
                    (darkMode
                      ? "border-slate-700 bg-slate-900/80"
                      : "border-slate-200 bg-white/80")
                  }
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Vocabulary
                  </p>
                  <dl className="mt-2 space-y-1.5 text-sm">
                    {active.module.vocabulary.map((v, i) => (
                      <div key={i} className="flex items-baseline justify-between gap-3">
                        <dt className="font-medium text-slate-900">{v.german}</dt>
                        <dd className="flex-1 text-right text-slate-600 text-xs md:text-sm">
                          {v.english}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Tasks + scratch area */}
                <div
                  className={
                    "rounded-2xl border p-4 " +
                    (darkMode
                      ? "border-slate-700 bg-slate-900/80"
                      : "border-slate-200 bg-white/90")
                  }
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Exercises
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm text-slate-700">
                    {active.module.tasks.map((t, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-[1px] text-[11px] font-semibold text-slate-400">
                          {i + 1}.
                        </span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3">
                    <label className="text-xs font-medium text-slate-500">
                      Your rewrite / notes (for practice only):
                    </label>
                    <textarea
                      className={
                        "mt-1 h-28 w-full resize-none rounded-2xl border px-3 py-2 text-sm outline-none ring-0 focus:ring-2 " +
                        (darkMode
                          ? "border-slate-700 bg-slate-900/70 text-slate-100 focus:border-slate-500 focus:ring-slate-600"
                          : "border-slate-200 bg-slate-50/70 text-slate-800 focus:border-slate-400 focus:bg-white focus:ring-slate-200")
                      }
                      placeholder="Rewrite a sentence in your own words, or answer one of the tasks in German…"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default App;
