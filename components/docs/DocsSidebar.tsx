import React from "react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

interface DocsSidebarProps {
    activeCategory: string;
    setActiveCategory: (id: string) => void;
    sections: any[];
    title: string;
    description: string;
    className?: string;
}

export function DocsSidebar({ 
    activeCategory, 
    setActiveCategory, 
    sections: propSections, 
    title, 
    description, 
    className 
}: DocsSidebarProps) {
    const displaySections = propSections;
    return (
        <div className={cn("w-full md:w-64 flex-shrink-0 flex flex-col gap-2", className)}>
            <div className="px-6 py-4 border-b bg-muted/50">
                <h2 className="text-sm font-bold tracking-tight text-foreground/80 uppercase mb-1">{title}</h2>
                <p className="text-xs text-muted-foreground line-clamp-1">{description}</p>
            </div>
            <ScrollArea className="flex-1 px-3">
                <div className="flex flex-col gap-6 pb-4 pt-2">
                    {displaySections.map((section, idx) => (
                        <div key={idx} className="flex flex-col gap-2">
                            <h3 className="px-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                {section.title}
                            </h3>
                            <div className="flex flex-col gap-1">
                                {section.items.map((category: any) => {
                                    const Icon = category.icon;
                                    const isActive = activeCategory === category.id;
                                    return (
                                        <button
                                            key={category.id}
                                            onClick={() => setActiveCategory(category.id)}
                                            className={cn(
                                                "flex items-center gap-3 rounded-md px-3 py-1.5 text-sm font-medium transition-colors outline-none cursor-pointer group",
                                                isActive
                                                    ? "bg-secondary/10 text-secondary font-semibold"
                                                    : "text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                                            )}
                                        >
                                            <Icon className={cn("h-4 w-4 transition-transform group-hover:scale-110", isActive ? "text-secondary" : "text-muted-foreground/70")} />
                                            {category.label}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollArea>
        </div>
    );
}
