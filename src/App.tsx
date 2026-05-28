// src/App.tsx

import React, { useState, useEffect, useRef } from "react";
import { chapters } from "./chapters";
import { ExampleBlock } from "./components/ExampleBlock";

const App: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(1);
  const [showEnglish, setShowEnglish] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(true);

  // Per-chapter notes, saved in localStorage
  const [notes, setNotes] = useState<Record<number, string>>(() => {
    if (typeof window === "undefined") return {};
    try {
      const raw = window.localStorage.getItem("grr-notes");
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

  // Sidebar visibility states
  const [leftSidebarOpen, setLeftSidebarOpen] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    try {
      const saved = window.localStorage.getItem("grr-left-sidebar");
      return saved ? JSON.parse(saved) : true;
    } catch {
      return true;
    }
  });

  const [rightSidebarOpen, setRightSidebarOpen] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    try {
      const saved = window.localStorage.getItem("grr-right-sidebar");
      return saved ? JSON.parse(saved) : true;
    } catch {
      return true;
    }
  });

  // Right column width, saved in localStorage
  const [rightColumnWidth, setRightColumnWidth] = useState<number>(() => {
    if (typeof window === "undefined") return 384; // default: w-96 = 384px
    try {
      const saved = window.localStorage.getItem("grr-right-column-width");
      return saved ? parseInt(saved, 10) : 384;
    } catch {
      return 384;
    }
  });

  // Resize state
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);
  const [headerHeight, setHeaderHeight] = useState<number>(60);
  const headerRef = useRef<HTMLElement>(null);

  // Check screen size
  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Measure header height for mobile overlay positioning
  useEffect(() => {
    if (typeof window === "undefined") return;

    const measure = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.getBoundingClientRect().height);
      }
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem("grr-notes", JSON.stringify(notes));
    } catch {
      // ignore storage errors
    }
  }, [notes]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem("grr-right-column-width", rightColumnWidth.toString());
    } catch {
      // ignore storage errors
    }
  }, [rightColumnWidth]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem("grr-left-sidebar", JSON.stringify(leftSidebarOpen));
    } catch {
      // ignore
    }
  }, [leftSidebarOpen]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem("grr-right-sidebar", JSON.stringify(rightSidebarOpen));
    } catch {
      // ignore
    }
  }, [rightSidebarOpen]);

  // Handle resize
  useEffect(() => {
    if (!isResizing) return;

    const handleMouseMove = (e: MouseEvent) => {
      const windowWidth = window.innerWidth;
      const mouseX = e.clientX;

      // Calculate width from right edge of the window
      const newWidth = Math.max(280, Math.min(windowWidth - 50, windowWidth - mouseX));
      setRightColumnWidth(newWidth);
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
  }, [isResizing]);

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

  const sectionCardTitle =
    active.kind === "appendix" ? "Appendix Content" : "Core Ideas & Notes";

  const headingText = darkMode ? "text-slate-50" : "text-slate-900";
  const subheadingText = darkMode ? "text-slate-300" : "text-slate-600";
  const bodyText = darkMode ? "text-slate-200" : "text-slate-700";
  const labelText = darkMode ? "text-slate-400" : "text-slate-500";

  const sidebarNavContent = (
    <>
      <p className={`mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] ${labelText}`}>
        Chapters
      </p>
      <nav className="space-y-1">
        {mainChapters.map((ch) => {
          const activeState = ch.id === activeId;
          return (
            <button
              key={ch.id}
              className={`w-full rounded-2xl px-3 py-2 text-left text-sm transition ${activeState
                ? darkMode
                  ? "bg-indigo-600/85 text-slate-50 shadow-[0_0_30px_rgba(129,140,248,0.9)] ring-1 ring-indigo-300/70"
                  : "bg-slate-900 text-slate-50 shadow-sm"
                : darkMode
                  ? "text-slate-200 hover:bg-slate-800/80"
                  : "text-slate-700 hover:bg-slate-100/80"
                }`}
              onClick={() => { setActiveId(ch.id); if (!isLargeScreen) setLeftSidebarOpen(false); }}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="truncate">{ch.id}. {ch.title}</span>
              </div>
              <p className={`mt-0.5 line-clamp-2 text-[11px] ${activeState ? "text-slate-200" : darkMode ? "text-slate-400" : "text-slate-500"}`}>
                {ch.subtitle}
              </p>
            </button>
          );
        })}
      </nav>
      {appendixChapters.length > 0 && (
        <>
          <p className={`mt-5 mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] ${labelText}`}>
            Appendices
          </p>
          <nav className="space-y-1">
            {appendixChapters.map((ch) => {
              const activeState = ch.id === activeId;
              return (
                <button
                  key={ch.id}
                  className={`w-full rounded-2xl px-3 py-2 text-left text-sm transition ${activeState
                    ? darkMode
                      ? "bg-indigo-600/85 text-slate-50 shadow-[0_0_30px_rgba(129,140,248,0.9)] ring-1 ring-indigo-300/70"
                      : "bg-slate-900 text-slate-50 shadow-sm"
                    : darkMode
                      ? "text-slate-200 hover:bg-slate-800/80"
                      : "text-slate-700 hover:bg-slate-100/80"
                    }`}
                  onClick={() => { setActiveId(ch.id); if (!isLargeScreen) setLeftSidebarOpen(false); }}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="truncate">{ch.label ?? "Appendix"}: {ch.title}</span>
                  </div>
                  <p className={`mt-0.5 line-clamp-2 text-[11px] ${activeState ? "text-slate-200" : darkMode ? "text-slate-400" : "text-slate-500"}`}>
                    {ch.subtitle}
                  </p>
                </button>
              );
            })}
          </nav>
        </>
      )}
    </>
  );

  return (
    <div className={rootClasses}>
      {/* Top bar */}
      <header
        ref={headerRef}
        className={
          "border-b backdrop-blur-xl " +
          (darkMode
            ? "border-indigo-900/70 bg-[#050316]/80"
            : "border-slate-200/80 bg-white/70")
        }
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-3">
            <button
              className="inline-flex items-center justify-center p-2 rounded-lg transition-colors hover:bg-slate-200/50 dark:hover:bg-slate-800/50 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
              onClick={() => setLeftSidebarOpen((v) => !v)}
              title={leftSidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <line x1="9" x2="9" y1="3" y2="21" />
              </svg>
            </button>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-300">
                German Through Its Roots
              </p>
              <p className="text-xs text-slate-400">
                Interactive Reader · Night-first Draft
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">

            <button
              className="rounded-full border border-slate-500/70 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-100 shadow-sm transition hover:border-indigo-300/70 hover:shadow-[0_0_24px_rgba(129,140,248,0.8)]"
              onClick={() => setDarkMode((v) => !v)}
            >
              {darkMode ? "Light mode" : "Dark mode"}
            </button>

            {active.module && (
              <button
                className="inline-flex items-center justify-center p-2 rounded-lg transition-colors hover:bg-slate-200/50 dark:hover:bg-slate-800/50 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                onClick={() => setRightSidebarOpen((v) => !v)}
                title={rightSidebarOpen ? "Collapse practice module" : "Show practice module"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile sidebar — fixed overlay, reveals left-to-right */}
      <div
        className={
          "lg:hidden fixed left-0 bottom-0 z-40 overflow-y-auto overflow-x-hidden transition-all duration-500 ease-in-out " +
          (darkMode ? "border-r border-slate-800 bg-[#050316]" : "border-r border-slate-200 bg-white") +
          (leftSidebarOpen ? " w-full opacity-100" : " w-0 opacity-0")
        }
        style={{ top: headerHeight }}
      >
        <div className="p-4">
          {sidebarNavContent}
        </div>
      </div>

      {/* Mobile practice module — fixed overlay, slides in from right */}
      {!isLargeScreen && active.module && (
        <div
          className={
            "fixed left-0 right-0 bottom-0 z-40 overflow-y-auto transition-all duration-500 ease-in-out " +
            (darkMode ? "bg-[#050316]" : "bg-white") +
            (rightSidebarOpen ? " opacity-100 translate-x-0" : " opacity-0 translate-x-full")
          }
          style={{ top: headerHeight }}
        >
          <div className="p-5 pb-8">
            <p className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${labelText}`}>
              Practice Module · {active.module.level}
            </p>
            <h2 className={`mt-1 font-serif text-xl font-semibold tracking-tight ${headingText}`}>
              {active.module.title}
            </h2>
            <div className="mt-3">
              <button
                className="inline-flex rounded-full border border-slate-300/70 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition hover:border-slate-400 hover:shadow-md"
                onClick={() => setShowEnglish((v) => !v)}
              >
                {showEnglish ? "Hide English" : "Show English"}
              </button>
            </div>
            <div className="mt-5 space-y-5">
              <div className={"rounded-2xl border p-4 " + (darkMode ? "border-slate-700 bg-slate-900/80" : "border-slate-200 bg-slate-50/70")}>
                <p className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${labelText}`}>Context Examples</p>
                <div className="mt-2 space-y-3 text-[15px] leading-relaxed">
                  {active.module.germanLines.map((line, i) => (
                    <div key={i}>
                      <p className={darkMode ? "text-slate-100" : "text-slate-900"}>{line}</p>
                      {showEnglish && active.module!.englishLines[i] && (
                        <p className={`mt-0.5 text-[13px] italic ${darkMode ? "text-slate-400" : "text-slate-500"}`}>{active.module!.englishLines[i]}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className={"rounded-2xl border p-4 " + (darkMode ? "border-slate-700 bg-slate-900/80" : "border-slate-200 bg-white/80")}>
                <p className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${labelText}`}>Vocabulary</p>
                <dl className="mt-2 space-y-1.5 text-sm">
                  {active.module.vocabulary.map((v, i) => (
                    <div key={i} className="flex items-baseline justify-between gap-3">
                      <dt className={`font-medium ${darkMode ? "text-slate-100" : "text-slate-900"}`}>{v.german}</dt>
                      <dd className={`flex-1 text-right text-xs ${darkMode ? "text-slate-300" : "text-slate-600"}`}>{v.english}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className={"rounded-2xl border p-4 " + (darkMode ? "border-slate-700 bg-slate-900/80" : "border-slate-200 bg-white/90")}>
                <p className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${labelText}`}>Exercises</p>
                <ul className={`mt-2 space-y-1.5 text-sm ${bodyText}`}>
                  {active.module.tasks.map((englishTask, i) => {
                    const germanTask = active.module!.tasksGerman?.[i];
                    const displayTask = showEnglish ? englishTask : (germanTask ?? englishTask);
                    return (
                      <li key={i} className="flex gap-2">
                        <span className={`mt-[1px] text-[11px] font-semibold ${darkMode ? "text-slate-300" : "text-slate-400"}`}>{i + 1}.</span>
                        <span>{displayTask}</span>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-3">
                  <label className={`text-xs font-medium ${labelText}`}>Your rewrite / notes (saved per chapter):</label>
                  <textarea
                    value={notes[active.id] ?? ""}
                    onChange={(e) => setNotes((prev) => ({ ...prev, [active.id]: e.target.value }))}
                    className={"mt-1 h-28 w-full resize-none rounded-2xl border px-3 py-2 text-sm outline-none ring-0 focus:ring-2 " + (darkMode ? "border-slate-700 bg-slate-900/70 text-slate-100 focus:border-slate-500 focus:ring-slate-600" : "border-slate-200 bg-slate-50/70 text-slate-800 focus:border-slate-400 focus:bg-white focus:ring-slate-200")}
                    placeholder="Rewrite a sentence in your own words, or answer one of the tasks in German…"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <main className="mx-auto flex max-w-[2000px] flex-col gap-6 px-4 py-6 lg:flex-row lg:px-6 lg:py-10">
        {/* Desktop sidebar — in-flow flex child (mobile handled by fixed overlay above) */}
        <aside
          className={
            "hidden lg:block shrink-0 transition-all duration-500 ease-in-out " +
            (leftSidebarOpen ? "w-60 opacity-100" : "w-0 overflow-hidden opacity-0")
          }
        >
          <div
            className={
              "rounded-3xl border p-4 shadow-[0_20px_55px_rgba(15,23,42,0.45)] backdrop-blur-2xl " +
              (darkMode
                ? "border-indigo-900/80 bg-[#050316]/80"
                : "border-slate-200 bg-white/80")
            }
          >
            {sidebarNavContent}
          </div>
        </aside>

        {/* Main content */}
        <section className="flex-1 space-y-5 lg:space-y-6" style={{ minWidth: 0 }}>
          {/* Chapter card */}
          <div
            className={
              "rounded-3xl border p-5 shadow-[0_22px_55px_rgba(15,23,42,0.09)] backdrop-blur-xl md:p-7 " +
              (darkMode
                ? "border-slate-800 bg-slate-900/80"
                : "border-slate-200/80 bg-white/80")
            }
          >
            <p
              className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${labelText}`}
            >
              {chapterLabel}
            </p>
            <h1
              className={`mt-1 font-serif text-2xl font-semibold tracking-tight ${headingText} md:text-3xl`}
            >
              {active.title}
            </h1>
            <p className={`mt-1 text-sm font-medium ${subheadingText}`}>
              {active.subtitle}
            </p>
            <p
              className={`mt-4 text-sm leading-relaxed ${bodyText} md:text-[15px]`}
            >
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
              <p
                className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${labelText}`}
              >
                {sectionCardTitle}
              </p>
              <div className="mt-3 space-y-4">
                {active.sections.map((section, idx) => (
                  <article key={idx} className="space-y-2">
                    <h3
                      className={`font-serif text-[24px] font-semibold ${headingText}`}
                    >
                      {section.heading}
                    </h3>

                    {section.paragraphs.map((para, j) => (
                      <p
                        key={j}
                        className={`text-sm leading-relaxed ${bodyText} md:text-[14px]`}
                      >
                        {para}
                      </p>
                    ))}

                    {section.exampleBlocks?.map((block, k) => (
                      <ExampleBlock key={k} block={block} darkMode={darkMode} />
                    ))}
                  </article>
                ))}
              </div>

            </div>
          )}
        </section>

      </main>

      {/* Desktop: Practice Module — fixed right drawer */}
      {isLargeScreen && active.module && (
        <div
          className={`fixed inset-y-0 right-0 z-50 flex h-full shadow-2xl transition-transform duration-500 ease-in-out ${rightSidebarOpen ? "translate-x-0" : "translate-x-full"}`}
          style={{ width: rightColumnWidth }}
        >
          {/* Resize handle (desktop only) */}
          <div
            className="hidden lg:block absolute left-0 top-0 bottom-0 w-1.5 cursor-col-resize hover:bg-indigo-500/50 transition-colors z-10"
            onMouseDown={(e: React.MouseEvent) => {
              e.preventDefault();
              setIsResizing(true);
            }}
          />

          <aside
            className={
              "h-full w-full overflow-y-auto border-l backdrop-blur-2xl " +
              (darkMode
                ? "border-slate-800 bg-[#050316]/95"
                : "border-slate-200/80 bg-white/95")
            }
          >
            <div className="p-5 md:p-7 pb-20">
              <div className="sticky top-0 z-10 -mx-5 -mt-5 md:-mx-7 md:-mt-7 p-5 md:p-7 backdrop-blur-xl border-b border-inherit bg-inherit rounded-t-[inherit]">
                <button
                  className="absolute top-3 right-3 p-2 rounded-lg transition-colors hover:bg-slate-200/50 dark:hover:bg-slate-800/50 text-slate-500 sm:top-5 sm:right-5"
                  onClick={() => setRightSidebarOpen(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>

                <div className="pr-12">
                  <p
                    className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${labelText}`}
                  >
                    Practice Module · {active.module.level}
                  </p>
                  <h2
                    className={`mt-1 font-serif text-xl font-semibold tracking-tight ${headingText} md:text-2xl`}
                  >
                    {active.module.title}
                  </h2>
                </div>

                <div className="mt-3">
                  <button
                    className="inline-flex rounded-full border border-slate-300/70 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition hover:border-slate-400 hover:shadow-md"
                    onClick={() => setShowEnglish((v) => !v)}
                  >
                    {showEnglish ? "Hide English" : "Show English"}
                  </button>
                </div>
              </div>

              <div className="mt-6 space-y-5">
                {/* German text */}
                <div
                  className={
                    "rounded-2xl border p-4 " +
                    (darkMode
                      ? "border-slate-700 bg-slate-900/80"
                      : "border-slate-200 bg-slate-50/70")
                  }
                >
                  <p
                    className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${labelText}`}
                  >
                    Context Examples
                  </p>
                  <div className={`mt-2 space-y-3 text-[15px] leading-relaxed`}>
                    {active.module.germanLines.map((line, i) => (
                      <div key={i}>
                        <p className={darkMode ? "text-slate-100" : "text-slate-900"}>{line}</p>
                        {showEnglish && active.module!.englishLines[i] && (
                          <p className={`mt-0.5 text-[13px] italic ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
                            {active.module!.englishLines[i]}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Vocabulary */}
                <div
                  className={
                    "rounded-2xl border p-4 " +
                    (darkMode
                      ? "border-slate-700 bg-slate-900/80"
                      : "border-slate-200 bg-white/80")
                  }
                >
                  <p
                    className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${labelText}`}
                  >
                    Vocabulary
                  </p>
                  <dl className="mt-2 space-y-1.5 text-sm">
                    {active.module.vocabulary.map((v, i) => (
                      <div
                        key={i}
                        className="flex items-baseline justify-between gap-3"
                      >
                        <dt className={`font-medium ${darkMode ? "text-slate-100" : "text-slate-900"}`}>
                          {v.german}
                        </dt>
                        <dd
                          className={`flex-1 text-right text-xs md:text-sm ${darkMode ? "text-slate-300" : "text-slate-600"
                            }`}
                        >
                          {v.english}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Exercises */}
                <div
                  className={
                    "rounded-2xl border p-4 " +
                    (darkMode
                      ? "border-slate-700 bg-slate-900/80"
                      : "border-slate-200 bg-white/90")
                  }
                >
                  <p
                    className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${labelText}`}
                  >
                    Exercises
                  </p>
                  <ul className={`mt-2 space-y-1.5 text-sm ${bodyText}`}>
                    {active.module.tasks.map((englishTask, i) => {
                      const germanTask = active.module!.tasksGerman?.[i];
                      const displayTask = showEnglish ? englishTask : (germanTask ?? englishTask);
                      return (
                        <li key={i} className="flex gap-2">
                          <span
                            className={`mt-[1px] text-[11px] font-semibold ${darkMode ? "text-slate-300" : "text-slate-400"}`}
                          >
                            {i + 1}.
                          </span>
                          <span>{displayTask}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="mt-3">
                    <label
                      className={`text-xs font-medium ${labelText}`}
                    >
                      Your rewrite / notes (saved per chapter):
                    </label>
                    <textarea
                      value={notes[active.id] ?? ""}
                      onChange={(e) =>
                        setNotes((prev) => ({
                          ...prev,
                          [active.id]: e.target.value,
                        }))
                      }
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
          </aside>
        </div>
      )}
    </div>
  );
};

export default App;
