import { Home, BookOpen, Users, Zap } from "lucide-react";
import { DocGroup } from "./types";
import { onboardingSections } from "./onboarding";
import { homeSections } from "./home";
import { assistanceSections } from "./assistance";
import { promptEngineeringSections } from "./prompt-engineering";

export * from "./types";
export { onboardingSections } from "./onboarding";
export { homeSections } from "./home";
export { assistanceSections } from "./assistance";
export { promptEngineeringSections } from "./prompt-engineering";

export const docsData: Record<string, DocGroup[]> = {
  home: homeSections,
  onboarding: onboardingSections,
  assistance: assistanceSections,
  promptEngine: promptEngineeringSections,
};

export const TOP_LINKS = [
  {
    id: "onboarding",
    label: "VA Onboarding Portal",
    icon: Home,
    title: "Onboarding Guide",
    desc: "VA Expectation & Responsibility",
  },
  {
    id: "home",
    label: "SOP Playbook",
    icon: BookOpen,
    title: "SOP Playbook",
    desc: "Standard Operating Procedures",
  },
  {
    id: "assistance",
    label: "Executive Assistance",
    icon: Users,
    title: "Executive Assistance",
    desc: "EA Patterns & Guidelines",
  },
  {
    id: "promptEngine",
    label: "Prompt Engineering",
    icon: Zap,
    title: "Prompt Engineering",
    desc: "Google Cloud Prompt Guide",
  },
];
