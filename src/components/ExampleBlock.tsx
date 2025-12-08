import React, { useState } from "react";

interface Row {
    left: string;
    right: string;
}

interface ExampleBlockData {
    title?: string;
    rows: Row[];
    moreRows?: Row[];
    moreTitle?: string;
}

interface ExampleBlockProps {
    block: ExampleBlockData;
    darkMode: boolean;
}

export const ExampleBlock: React.FC<ExampleBlockProps> = ({
    block,
    darkMode,
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const renderRows = (rows: Row[]) => (
        <dl
            className={`divide-y ${darkMode ? "divide-slate-800/40" : "divide-slate-200/70"
                }`}
        >
            {rows.map((row, rIdx) => (
                <div
                    key={rIdx}
                    className="flex items-baseline justify-between gap-3 py-1.5"
                >
                    <dt
                        className={`font-mono text-[12px] md:text-[12px] ${darkMode ? "text-slate-300" : "text-slate-600"
                            }`}
                    >
                        {row.left}
                    </dt>
                    <dd
                        className={`flex-1 text-right text-[12px] md:text-[12px] ${darkMode ? "text-slate-200" : "text-slate-700"
                            }`}
                    >
                        {row.right}
                    </dd>
                </div>
            ))}
        </dl>
    );

    return (
        <div
            className={
                "mt-2 rounded-2xl border p-3 text-xs md:text-sm " +
                (darkMode
                    ? "border-slate-700 bg-slate-900/80"
                    : "border-slate-200 bg-slate-50")
            }
        >
            {block.title && (
                <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {block.title}
                </p>
            )}

            {renderRows(block.rows)}

            {block.moreRows && block.moreRows.length > 0 && (
                <div
                    className={`mt-2 border-t pt-2 ${darkMode ? "border-slate-800/40" : "border-slate-200/50"
                        }`}
                >
                    {!isExpanded ? (
                        <button
                            onClick={() => setIsExpanded(true)}
                            className="group flex w-full items-center justify-between text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 hover:text-indigo-400 transition-colors"
                            title="Show more examples"
                        >
                            <span className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                {block.moreTitle || "More Examples"}
                            </span>
                            <span className="text-[10px] opacity-50 group-hover:opacity-100">
                                Click to expand
                            </span>
                        </button>
                    ) : (
                        <div className="animate-in fade-in slide-in-from-top-1 duration-300">
                            <div className="mb-2 flex items-center justify-between">
                                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                                    {block.moreTitle || "More Examples"}
                                </p>
                                <button
                                    onClick={() => setIsExpanded(false)}
                                    className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 hover:text-slate-300"
                                >
                                    Collapse
                                </button>
                            </div>
                            {renderRows(block.moreRows)}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
