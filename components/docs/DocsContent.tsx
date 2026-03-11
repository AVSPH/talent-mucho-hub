import React from "react";
import { DocGroup } from "./data";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DocsContentProps {
    activeCategory: string;
    setActiveCategory: (id: string) => void;
    activeTopLinkInfo: any;
    sections: DocGroup[];
}

export function DocsContent({ activeCategory, setActiveCategory, activeTopLinkInfo, sections }: DocsContentProps) {
    const allCategories = sections.flatMap(s => s.items);
    const currentIndex = allCategories.findIndex(c => c.id === activeCategory);
    
    const category = currentIndex !== -1 ? allCategories[currentIndex] : null;

    if (!category) return null;

    // Determine parent section for breadcrumbs
    const parentSection = sections.find(s => s.items.some(c => c.id === activeCategory));

    const prevCategory = currentIndex > 0 ? allCategories[currentIndex - 1] : null;
    const nextCategory = currentIndex < allCategories.length - 1 ? allCategories[currentIndex + 1] : null;

    return (
        <ScrollArea className="h-full w-full">
            <div className="flex justify-center w-full min-h-full">
                <div className="flex w-full max-w-7xl px-8 md:px-10 py-9 lg:py-10 gap-14">

                    {/* ── Main Content Column ────────────────── */}
                    <article className="flex-1 max-w-3xl min-w-0 space-y-10 animate-in fade-in slide-in-from-bottom-3 duration-400 pb-24">

                        {/* Page breadcrumb + title */}
                        <header className="space-y-1">
                            <div className="flex items-center gap-2 text-xs text-[#5A7A94] dark:text-muted-foreground font-mono uppercase tracking-widest mb-3">
                                <span>{activeTopLinkInfo?.title || "Docs"}</span>
                                <span className="opacity-40">/</span>
                                <span>{parentSection?.title || "Section"}</span>
                                <span className="opacity-40">/</span>
                                <span className="text-[#3B9FD1] dark:text-primary">{category.label}</span>
                            </div>
                            <div className="text-[24px] font-extrabold text-[#0B2D4E] dark:text-foreground tracking-tight leading-tight">
                                {category.label}
                            </div>
                            <div className="text-[13px] text-[#5A7A94] dark:text-muted-foreground leading-relaxed mt-1">
                                Detailed guidelines and operational procedures for {category.label.toLowerCase()}.
                            </div>
                            {/* Divider */}
                            <div className="pt-3 border-b border-[rgba(59,159,209,0.18)] dark:border-border" />
                        </header>

                        {/* Sections */}
                        <div className="space-y-12">
                            {category.sections.map((section, index) => {
                                const sectionId = section.title.toLowerCase().replace(/\s+/g, '-');
                                return (
                                    <section
                                        key={index}
                                        id={sectionId}
                                        className="scroll-mt-24 space-y-5"
                                    >
                                        {/* Section heading */}
                                        <h2 className="text-[18px] font-bold text-[#0B2D4E] dark:text-foreground flex items-center gap-[9px] leading-snug">
                                            {section.title}
                                        </h2>
                                        <div className="text-[13.5px] leading-[1.75] text-[#0D1B2A] dark:text-foreground/85">
                                            {section.content}
                                        </div>
                                    </section>
                                );
                            })}
                        </div>

                        {/* Pagination Buttons */}
                        <div className="pt-10 mt-10 border-t border-[rgba(59,159,209,0.18)] dark:border-border flex items-center justify-between">
                            {prevCategory ? (
                                <button
                                    onClick={() => setActiveCategory(prevCategory.id)}
                                    className="flex flex-col items-start gap-1 p-4 rounded-xl border hover:border-[#3B9FD1] hover:bg-[#E8F4FD] dark:hover:bg-primary/10 transition-colors text-left group w-[200px]"
                                >
                                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A7A94] dark:text-muted-foreground flex items-center gap-1">
                                        <ChevronLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
                                        Previous
                                    </span>
                                    <span className="text-[13px] font-semibold text-[#0B2D4E] dark:text-foreground group-hover:text-[#3B9FD1]">
                                        {prevCategory.label}
                                    </span>
                                </button>
                            ) : <div></div>}

                            {nextCategory ? (
                                <button
                                    onClick={() => setActiveCategory(nextCategory.id)}
                                    className="flex flex-col items-end gap-1 p-4 rounded-xl border hover:border-[#3B9FD1] hover:bg-[#E8F4FD] dark:hover:bg-primary/10 transition-colors text-right group w-[200px]"
                                >
                                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#5A7A94] dark:text-muted-foreground flex items-center gap-1">
                                        Next
                                        <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                                    </span>
                                    <span className="text-[13px] font-semibold text-[#0B2D4E] dark:text-foreground group-hover:text-[#3B9FD1]">
                                        {nextCategory.label}
                                    </span>
                                </button>
                            ) : <div></div>}
                        </div>

                    </article>

                    {/* ── Right Sidebar — "On this page" ─────── */}
                    <aside className="hidden lg:block w-56 flex-none sticky top-8 h-fit self-start">
                        <div className="space-y-3">
                            <h3 className="text-[10px] font-bold tracking-[0.12em] text-[#5A7A94] dark:text-muted-foreground uppercase font-mono">
                                On this page
                            </h3>
                            <nav className="flex flex-col">
                                {category.sections.map((section, index) => {
                                    const sectionId = section.title.toLowerCase().replace(/\s+/g, '-');
                                    return (
                                        <a
                                            key={index}
                                            href={`#${sectionId}`}
                                            className="text-[12px] text-[#5A7A94] dark:text-muted-foreground hover:text-[#1B6FA8] dark:hover:text-primary transition-colors py-[7px] border-l-[3px] border-transparent hover:border-[rgba(59,159,209,0.4)] pl-[13px] leading-snug"
                                        >
                                            {section.title}
                                        </a>
                                    );
                                })}
                            </nav>
                        </div>

                        <div className="mt-8 p-4 rounded-[12px] bg-[#E8F4FD] dark:bg-primary/5 border border-[rgba(59,159,209,0.18)] dark:border-primary/10 space-y-2">
                            <h4 className="text-[10px] font-bold text-[#1B6FA8] dark:text-primary uppercase tracking-[0.08em] font-mono">
                                Pro Tip
                            </h4>
                            <p className="text-[11px] text-[#5A7A94] dark:text-muted-foreground leading-relaxed">
                                Use the sidebar to navigate between documentation modules.
                            </p>
                        </div>
                    </aside>

                </div>
            </div>
        </ScrollArea>
    );
}
