"use client";

import React, { useState } from "react";
import { DocsSidebar } from "@/components/docs/DocsSidebar";
import { DocsContent } from "@/components/docs/DocsContent";
import { docsData } from "@/components/docs/data";
import { ModeToggle } from "@/components/theme-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Home, BookOpen, UserCircle } from "lucide-react";
import Link from "next/link";
import { useCurrentStaff } from "@/hooks/useAuthStaff";
import { useCurrentAdmin } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";

const TOP_LINKS = [
  {
    id: "home",
    label: "Home",
    icon: Home,
    title: "Doc Home",
    desc: "Welcome to TalentMucho Guide",
  },
  {
    id: "onboarding",
    label: "Onboarding",
    icon: BookOpen,
    title: "Onboarding Guide",
    desc: "VA Expectation & Responsibility",
  },
  {
    id: "assistance",
    label: "Executive Assistance",
    icon: UserCircle,
    title: "Executive Assistance",
    desc: "EA Patterns & Guidelines",
  },
];

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

  const isLoading = isLoadingStaff || isLoadingAdmin;
  const isLoggedIn = !!(staffData || adminData);
  const dashboardUrl = adminData ? "/overview" : "/dashboard";

  return (
    <div className="flex flex-col h-screen bg-background text-foreground overflow-hidden">
      {/* Topbar - Full Width */}
      <header className="flex-none h-14 border-b flex items-center justify-between px-4 lg:px-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-30">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] p-0 pt-10">
                <DocsSidebar
                  activeCategory={activeCategory}
                  setActiveCategory={handleCategorySelect}
                  sections={currentData}
                  title={currentTopLinkInfo.title}
                  description={currentTopLinkInfo.desc}
                  className="border-none w-full"
                />
              </SheetContent>
            </Sheet>
            <div className="flex items-center gap-2 mr-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">
                  T
                </span>
              </div>
              <span className="font-bold tracking-tight hidden sm:block">
                TalentMucho Docs
              </span>
            </div>
          </div>

          {/* Top Navigation Links - Notion Style */}
          <nav className="hidden md:flex items-center gap-1 border-l pl-4">
            {TOP_LINKS.map((link) => {
              const isActive = activeTopLink === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleTopLinkSelect(link.id)}
                  className={cn(
                    "px-3 py-1 text-sm font-medium transition-all relative h-14 flex items-center",
                    isActive
                      ? "text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-primary"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <ModeToggle />
          {!isLoading &&
            (isLoggedIn ? (
              <Button variant="outline" size="sm" asChild>
                <Link href={dashboardUrl}>Go to Dashboard</Link>
              </Button>
            ) : (
              <div className="flex items-center gap-2">
                <Button size="sm" asChild>
                  <Link href="/login">Login</Link>
                </Button>
              </div>
            ))}
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar - Desktop */}
        <aside className="hidden md:flex w-64 flex-col border-r bg-muted/5">
          <DocsSidebar
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            sections={currentData}
            title={currentTopLinkInfo.title}
            description={currentTopLinkInfo.desc}
            className="h-full"
          />
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-hidden relative">
          <DocsContent activeCategory={activeCategory} sections={currentData} />
        </main>
      </div>
    </div>
  );
}
