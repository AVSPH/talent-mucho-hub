import React from "react";
import { DocGroup } from "./data";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface DocsContentProps {
    activeCategory: string;
    sections: DocGroup[];
}

export function DocsContent({ activeCategory, sections }: DocsContentProps) {
    const category = sections.flatMap(s => s.items).find((c) => c.id === activeCategory);

    if (!category) return null;

    return (
        <ScrollArea className="flex-1 h-full w-full">
            <div className="flex justify-center w-full min-h-full">
                <div className="flex w-full max-w-7xl px-4 py-8 md:px-8 gap-12">
                    {/* Main Content */}
                    <article className="flex-1 max-w-3xl min-w-0 space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-24">
                        <header className="space-y-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                                <span>Docs</span>
                                <span>/</span>
                                <span className="text-foreground capitalize">{category.label}</span>
                            </div>
                            <h1 className="text-4xl font-extrabold tracking-tight text-foreground">{category.label}</h1>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Detailed guidelines and operational procedures for {category.label.toLowerCase()}.
                            </p>
                        </header>
                        
                        <Separator className="bg-muted/60" />

                        <div className="space-y-16">
                            {category.sections.map((section, index) => {
                                const sectionId = section.title.toLowerCase().replace(/\s+/g, '-');
                                return (
                                    <section 
                                        key={index} 
                                        id={sectionId}
                                        className="scroll-mt-24 space-y-6"
                                    >
                                        <h2 className="text-2xl font-bold tracking-tight text-foreground border-l-4 border-primary pl-4 py-1">
                                            {section.title}
                                        </h2>
                                        <div className="text-[15px] leading-7 text-foreground/80">
                                            {section.content}
                                        </div>
                                    </section>
                                );
                            })}
                        </div>
                    </article>

                    {/* Table of Contents - "On this page" */}
                    <aside className="hidden lg:block w-64 flex-none sticky top-8 h-fit self-start">
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold tracking-tight text-foreground/90 uppercase">On this page</h3>
                            <nav className="flex flex-col gap-2">
                                {category.sections.map((section, index) => {
                                    const sectionId = section.title.toLowerCase().replace(/\s+/g, '-');
                                    return (
                                        <a
                                            key={index}
                                            href={`#${sectionId}`}
                                            className="text-sm text-muted-foreground hover:text-primary transition-colors line-clamp-2 leading-snug py-1 border-l-2 border-transparent hover:border-primary/30 pl-3"
                                        >
                                            {section.title}
                                        </a>
                                    );
                                })}
                            </nav>
                        </div>
                        
                        <div className="mt-12 p-4 rounded-xl bg-primary/5 border border-primary/10 space-y-3">
                            <h4 className="text-xs font-bold text-primary uppercase tracking-widest">Pro Tip</h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Use the sidebar on the left to switch between different documentation modules.
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
        </ScrollArea>
    );
}
