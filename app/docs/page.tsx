"use client";

import React, { useState } from "react";
import { DocsSidebar } from "@/components/docs/DocsSidebar";
import { DocsContent } from "@/components/docs/DocsContent";
import { DocsSearch } from "@/components/docs/DocsSearch";
import { docsData, TOP_LINKS } from "@/components/docs/data";
import { ModeToggle } from "@/components/theme-toggle";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useCurrentStaff } from "@/hooks/useAuthStaff";
import { useCurrentAdmin } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";

export default function DocsPage() {
  const [activeTopLink, setActiveTopLink] = useState("onboarding");
  const currentData = docsData[activeTopLink] || docsData.onboarding;

  const [activeCategory, setActiveCategory] = useState(
    currentData[0].items[0].id,
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { data: staffData, isLoading: isLoadingStaff } = useCurrentStaff();
  const { data: adminData, isLoading: isLoadingAdmin } = useCurrentAdmin();

  const currentTopLinkInfo = TOP_LINKS.find(
    (link) => link.id === activeTopLink,
  )!;

  const handleTopLinkSelect = (id: string) => {
    setActiveTopLink(id);
    const newData = docsData[id] || docsData.onboarding;
    setActiveCategory(newData[0].items[0].id);
  };

  const handleCategorySelect = (id: string) => {
    setActiveCategory(id);
    setIsMobileMenuOpen(false);
  };

  const handleSearchResultSelect = (moduleId: string, categoryId: string) => {
    setActiveTopLink(moduleId);
    setActiveCategory(categoryId);
  };

  const isLoading = isLoadingStaff || isLoadingAdmin;
  const isLoggedIn = !!(staffData || adminData);
  const dashboardUrl = adminData ? "/overview" : "/dashboard";

  return (
    <div className="flex flex-col h-screen bg-background text-foreground overflow-hidden">
      {/* ── TOP NAV BAR ── */}
      <header className="flex-none h-14 flex items-center z-30 bg-[#0B2D4E] dark:bg-[#060F18] shadow-[0_2px_20px_rgba(11,45,78,0.5)]">

        {/* Brand / Logo Section */}
        <div className="flex-shrink-0 w-[260px] px-5 flex items-center gap-2.5 border-r border-white/[0.08] h-full">
          {/* Mobile menu trigger */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white/80 hover:text-white hover:bg-white/10 h-8 w-8">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] p-0 pt-0 bg-sidebar dark:bg-[#0D1B2A] border-none">
              <SheetTitle className="sr-only">Directory</SheetTitle>
              <DocsSidebar
                activeCategory={activeCategory}
                setActiveCategory={handleCategorySelect}
                activeTopLink={activeTopLink}
                setActiveTopLink={handleTopLinkSelect}
                sections={currentData}
                className="border-none w-full"
              />
            </SheetContent>
          </Sheet>

          {/* Logo mark */}
          <div className="hidden md:flex w-8 h-8 rounded-[9px] bg-gradient-to-br from-[#3B9FD1] to-[#1B6FA8] items-center justify-center flex-shrink-0 shadow-[0_3px_12px_rgba(59,159,209,0.4)]">
            <img
              src="/assets/tm-logo.png"
              alt="TM"
              className="w-full h-full object-contain rounded-[9px]"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
                (e.target as HTMLImageElement).parentElement!.innerHTML = '<span class="text-white text-[11px] font-black font-serif">TM</span>';
              }}
            />
          </div>

          {/* Brand text */}
          <div className="hidden md:block">
            <div className="text-[13px] font-bold text-white tracking-[0.03em] leading-tight flex items-center gap-1.5">
              TalentMucho
              <span className="px-1.5 py-0.5 rounded bg-white/10 text-[9px] text-[#A8D8F0] tracking-wider font-mono">DOCS</span>
            </div>
          </div>
        </div>

        {/* Search Bar / Center Nav */}
        <div className="flex-1 flex items-center px-4 max-w-2xl">
           <DocsSearch onSelectResult={handleSearchResultSelect} />
        </div>

        {/* Right Side */}
        <div className="ml-auto flex items-center gap-2.5 px-4 h-full border-l border-white/[0.08]">
          <ModeToggle />
          {!isLoading && (
            isLoggedIn ? (
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="text-white/70 hover:text-white hover:bg-white/10 border border-white/[0.12] bg-white/[0.08] rounded-full px-3 py-1 text-[11px] font-mono h-auto"
              >
                <Link href={dashboardUrl}>Dashboard</Link>
              </Button>
            ) : (
              <Button
                size="sm"
                asChild
                className="bg-[#3B9FD1] hover:bg-[#2d8ec0] text-white rounded-full px-4 text-[11px] h-7"
              >
                <Link href="/login">Login</Link>
              </Button>
            )
          )}
        </div>
      </header>

      {/* ── BODY ── */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar - Desktop */}
        <aside className="hidden md:flex w-[260px] flex-shrink-0 flex-col border-r bg-sidebar dark:bg-[#0D1522] shadow-[2px_0_16px_rgba(11,45,78,0.06)] dark:shadow-none overflow-hidden">
          <DocsSidebar
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            activeTopLink={activeTopLink}
            setActiveTopLink={handleTopLinkSelect}
            sections={currentData}
            className="h-full"
          />
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-hidden relative bg-[#F0F6FB] dark:bg-background">
          <DocsContent 
             activeCategory={activeCategory} 
             setActiveCategory={setActiveCategory} 
             sections={currentData} 
             activeTopLinkInfo={currentTopLinkInfo}
          />
        </main>
      </div>
    </div>
  );
}
