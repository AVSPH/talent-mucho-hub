import { Users, Calendar, Mic, Plane, Mail, MessageSquare, ShoppingBag, CheckCircle, Zap, PlaneTakeoff, Shield, ShieldCheck, Home, Video, FileText, Settings, Wrench, Layout } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DocGroup } from "./types";

const YouTubeEmbed = ({ id, title }: { id: string; title: string }) => (
  <div className="space-y-2 mb-6">
    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{title}</p>
    <div className="aspect-video w-full overflow-hidden rounded-xl border border-border shadow-sm bg-muted/20">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  </div>
);

export const assistanceSections: DocGroup[] = [
  {
    title: "EXECUTIVE ASSISTANCE",
    items: [
      {
        id: "ea-intro",
        label: "The EA Mindset",
        icon: Users,
        sections: [
          {
            title: "Executive Assistant Operating System",
            content: (
              <div className="space-y-6">
                <div className="p-6 bg-primary text-primary-foreground rounded-2xl shadow-lg relative overflow-hidden">
                   <div className="relative z-10">
                      <h3 className="text-2xl font-bold mb-2">The Golden Rule: One Central Source of Truth</h3>
                      <p className="opacity-90 leading-relaxed">Everything lives in the <strong>To-Do List</strong>. If it’s not on the list, it doesn’t exist. Your job is to capture, organize, and execute.</p>
                   </div>
                   <Users className="absolute -bottom-8 -right-8 h-40 w-40 opacity-10" />
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-bold border-l-4 border-primary pl-4">The Daily Rhythm</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-xl hover:bg-muted/30 transition-colors">
                       <p className="text-xs font-bold text-primary uppercase mb-1">Morning Routine (Before CEO starts)</p>
                       <ul className="text-sm space-y-1 list-disc pl-4 text-muted-foreground">
                          <li>Review Calendar for the day</li>
                          <li>Process all new emails/Slack/SMS</li>
                          <li>Brief CEO on "Top 3 Priorities"</li>
                       </ul>
                    </div>
                    <div className="p-4 border rounded-xl hover:bg-muted/30 transition-colors">
                       <p className="text-xs font-bold text-primary uppercase mb-1">Evening Routine (After CEO finishes)</p>
                       <ul className="text-sm space-y-1 list-disc pl-4 text-muted-foreground">
                          <li>Confirm next day's schedule</li>
                          <li>Close out completed tasks</li>
                          <li>Prepare Briefing for tomorrow</li>
                       </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/30 p-6 rounded-xl border-2 border-dashed">
                  <h4 className="font-bold flex items-center gap-2 mb-4">
                    <Zap className="h-5 w-5 text-primary" /> The Sync Meeting (Daily @ 4:45 PM)
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">The most important 15 minutes of the day. Structure:</p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li className="text-sm"><strong>Closing the Loop</strong> (completed tasks)</li>
                    <li className="text-sm"><strong>Assistant Review</strong> (emails/opportunities)</li>
                    <li className="text-sm"><strong>Projects</strong> (top priority first – 3 solution options)</li>
                    <li className="text-sm"><strong>Questions for CEO</strong></li>
                  </ol>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg border">
                  <h4 className="font-bold mb-2">How to Run the Meeting:</h4>
                  <p className="text-sm text-muted-foreground italic mb-3">Screen share. Be concise. Summarize clearly. Take notes live. Ask questions.</p>
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "ea-calendar",
        label: "Calendar Rules",
        icon: Calendar,
        sections: [
          {
            title: "Calendar Management",
            content: (
              <div className="space-y-8">
                <div className="flex flex-col gap-8">
                  <YouTubeEmbed id="TLobeH5QLDw" title="Calendar Management for Executive Assistants – Full Guide" />
                  <YouTubeEmbed id="x9K80nyTltU" title="How to Time Block Your Executive's Calendar" />
                  <YouTubeEmbed id="gsJMmk2I77U" title="Managing Time Zones as an Executive Assistant" />
                </div>

                <div>
                  <h4 className="text-xl font-bold text-primary border-b pb-2 mb-4">CEO’s Ideal Week</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-bold mb-2">Monday – Friday</h5>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li><strong>Mornings:</strong> Creative work + workouts</li>
                        <li><strong>Lunch:</strong> 12:00 – 12:30</li>
                        <li><strong>Afternoons:</strong> Meetings</li>
                        <li><strong>Evenings:</strong> Family time</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg bg-red-50/50 dark:bg-red-900/10 border-red-100 dark:border-red-900/30">
                      <h5 className="font-bold text-red-600 dark:text-red-400 mb-2">Weekends</h5>
                      <p className="text-sm italic">No business scheduled. Family time is non-negotiable.</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-bold text-foreground">Scheduling Rules & Priority</h4>
                    <div className="space-y-2">
                       <p className="text-xs font-bold uppercase text-muted-foreground">Default Lengths:</p>
                       <ul className="text-sm space-y-1">
                          <li>15 min → Quick contact</li>
                          <li>20 min → <strong>Standard/Default</strong></li>
                          <li>55 min → Podcast/interview</li>
                          <li>60 min → Masterclass</li>
                       </ul>
                    </div>
                    <div className="space-y-2">
                       <p className="text-xs font-bold uppercase text-muted-foreground">Priority Order:</p>
                       <ol className="list-decimal pl-5 text-sm space-y-1">
                          <li>Health (non-negotiable)</li>
                          <li>Client commitments</li>
                          <li>CEO requested meetings</li>
                          <li>Team requests</li>
                          <li>Outside requests</li>
                       </ol>
                    </div>
                  </div>

                  <div className="p-5 bg-primary/5 rounded-xl border border-primary/20 space-y-3">
                    <h4 className="font-bold text-primary">Invite Requirements:</h4>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Clear subject/title</li>
                      <li>Start/end time + correct timezone</li>
                      <li>Precise Location & Phone number</li>
                      <li><strong>Agenda (mandatory)</strong></li>
                      <li>Guests added & correct color category</li>
                    </ul>
                    <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 rounded border border-red-100 dark:border-red-900/30">
                      <p className="text-xs font-bold text-red-700 dark:text-red-400 flex items-center gap-1">
                        <Zap className="h-3 w-3" /> SAME-DAY CHANGES
                      </p>
                      <p className="text-xs mt-1 italic">Must SMS CEO immediately.</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "ea-podcasts",
        label: "Podcasts & Speaking",
        icon: Mic,
        sections: [
          {
            title: "Podcasts & Speaking Engagements",
            content: (
              <div className="space-y-6">
                <div className="p-4 bg-muted/30 rounded-lg border">
                  <h4 className="font-bold mb-3">Vetting Checklist:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Reach", "Reviews", "Social Following", "Past Guests", "Prior Connection", "In-person available"].map((item, i) => (
                      <span key={i} className="px-3 py-1 bg-background border rounded-full text-xs font-medium">{item}</span>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-bold">Required Calendar Info:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Phone number</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Apple Podcast link</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Instagram + LinkedIn</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Connection context</li>
                  </ul>
                </div>

                <div className="mt-6 p-4 border rounded-lg bg-primary/5">
                  <h4 className="font-bold text-primary mb-2 italic">After Podcast:</h4>
                  <p className="text-sm">Send thank-you email, request raw video, and CC videographer.</p>
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "ea-travel",
        label: "Travel Management",
        icon: Plane,
        sections: [
          {
            title: "Travel Planning & Management",
            content: (
              <div className="space-y-8">
                <div className="flex flex-col gap-8">
                  <YouTubeEmbed id="lD4iI4HaWrs" title="How to Book Executive Travel Like a Pro" />
                  <YouTubeEmbed id="1dx8U8K9x6g" title="Creating a Perfect Travel Itinerary as an EA" />
                  <YouTubeEmbed id="sauHLLdKvso" title="EA Tips: Managing Last-Minute Travel Changes" />
                </div>

                <div className="flex items-center justify-center gap-12 p-6 bg-muted/20 rounded-xl border-dashed border-2">
                   <div className="text-center">
                      <p className="text-xs font-bold text-muted-foreground uppercase">Domestic</p>
                      <p className="text-2xl font-bold">3-4 Weeks</p>
                   </div>
                   <div className="h-10 w-px bg-border"></div>
                   <div className="text-center">
                      <p className="text-xs font-bold text-muted-foreground uppercase">International</p>
                      <p className="text-2xl font-bold">6+ Weeks</p>
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-bold border-b pb-2">Booking Essentials (Immediate)</h4>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-start gap-2"><PlaneTakeoff className="h-4 w-4 mt-0.5 text-primary" /> Block travel dates + day before/after</li>
                      <li className="flex items-start gap-2"><Shield className="h-4 w-4 mt-0.5 text-primary" /> Create Google Drive "TRIP" file</li>
                      <li className="flex items-start gap-2"><Calendar className="h-4 w-4 mt-0.5 text-primary" /> Add extended all-day events</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-bold border-b pb-2">Trip File must include:</h4>
                    <ul className="text-sm grid grid-cols-2 gap-2">
                      <li>Flights / Hotel</li>
                      <li>Itinerary</li>
                      <li>Contacts</li>
                      <li>Documents</li>
                      <li>Gym options</li>
                      <li>Reservations</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-red-600/5 border border-red-600/20 rounded-lg">
                   <h4 className="font-bold text-red-600 mb-2 flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4" /> Emergency: Delayed or Canceled Flights
                   </h4>
                   <p className="text-sm leading-relaxed">
                     Call airline immediately. Request refund to card (not credit). Cancel hotel/transport. Notify spouse. Update calendar fully.
                   </p>
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "ea-inbox",
        label: "Inbox Management",
        icon: Mail,
        sections: [
          {
            title: "Processing CEO Inbox",
            content: (
              <div className="space-y-6">
                <p className="text-lg italic font-medium">Goal: Inbox at zero twice daily. The CEO sees only what requires his attention.</p>
                
                <div className="flex flex-col gap-8">
                  <YouTubeEmbed id="yy76ziWBDwo" title="How to Manage an Executive's Email Inbox as a VA or EA" />
                  <YouTubeEmbed id="WxLY5A1Vdnk" title="Inbox Zero: A Step-by-Step Guide for Executive Assistants" />
                  <YouTubeEmbed id="eVr0aMNdyQ4" title="Gmail Tips for Executive Assistants in 2026" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg bg-card">
                    <h4 className="font-bold text-primary mb-3">Email Labels</h4>
                    <div className="flex flex-col gap-1 text-sm">
                       {["To Respond", "Responded", "To Review", "Waiting On", "Financials", "Investment", "Receipts", "Newsletters", "Archive"].map((l, i) => (
                         <div key={i} className="px-2 py-1 bg-muted/50 rounded">{l}</div>
                       ))}
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg bg-card">
                    <h4 className="font-bold text-primary mb-3">What Goes to "Review"</h4>
                    <ul className="text-sm space-y-1 list-disc pl-4">
                      <li>Speaking invites</li>
                      <li>Investment opportunities</li>
                      <li>Travel requests</li>
                      <li>Unclear personal emails</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg bg-card">
                    <h4 className="font-bold text-primary mb-3">Handle yourself</h4>
                    <ul className="text-sm space-y-1 list-disc pl-4 text-green-600 dark:text-green-400">
                      <li>Scheduling</li>
                      <li>Declining opportunities</li>
                      <li>Confirmations</li>
                      <li>Basic replies</li>
                      <li>Unsubscribing</li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-primary/5 border-2 border-dashed border-primary/20 rounded-xl space-y-3">
                   <h4 className="font-bold text-primary">Response Template</h4>
                   <p className="text-sm italic p-4 bg-background border rounded-lg">
                     "This is [Your Name], [CEO]’s assistant. I got to your email before he did and thought you’d appreciate a speedy reply..."
                   </p>
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "ea-communication",
        label: "Executive Comm.",
        icon: MessageSquare,
        sections: [
          {
            title: "Executive Communication & Voice",
            content: (
              <div className="space-y-6">
                <div className="flex flex-col gap-8">
                  <YouTubeEmbed id="kQBKfy3fAzQ" title="How to Write Emails on Behalf of Your Executive" />
                  <YouTubeEmbed id="CIHkuLgeBcA" title="Communication Skills Every Executive Assistant Needs" />
                  <YouTubeEmbed id="amJZXjxnhTI" title="How to Match Your Exec's Writing Style and Voice" />
                </div>
                <div className="p-4 bg-muted/30 rounded-lg border">
                  <h4 className="font-bold mb-2">Key Communication Principles:</h4>
                  <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                    <li>Maintain the Executive's "Voice" and tone.</li>
                    <li>Be concise and direct in all correspondence.</li>
                    <li>Always proofread for clarity and professionalism.</li>
                  </ul>
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "ea-meetings",
        label: "Meetings & Minutes",
        icon: FileText,
        sections: [
          {
            title: "Professional Meeting Management",
            content: (
              <div className="space-y-6">
                <div className="flex flex-col gap-8">
                  <YouTubeEmbed id="SSnEquE7kFo" title="How to Take Professional Meeting Minutes as an EA" />
                  <YouTubeEmbed id="GAJV5hyrCD4" title="Creating the Perfect Meeting Agenda – EA Edition" />
                  <YouTubeEmbed id="aCrd793oIJw" title="Small: How EAs Can Manage Action Items After a Meeting" />
                </div>
                <div className="p-4 bg-primary/5 border rounded-lg">
                  <h4 className="font-bold text-primary mb-2">The Meeting Workflow:</h4>
                  <p className="text-sm text-muted-foreground">Agenda Prep &rarr; Live Minutes &rarr; Action Item Distribution &rarr; Follow-up Tracking.</p>
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "ea-tools",
        label: "EA Tools & Tech",
        icon: Settings,
        sections: [
          {
            title: "Essential Tools & AI for EAs",
            content: (
              <div className="space-y-6">
                <div className="flex flex-col gap-8">
                  <YouTubeEmbed id="tMPeFJz7zls" title="Top 10 Tools Every Executive Assistant Should Know" />
                  <YouTubeEmbed id="6H8lqlPqCcQ" title="How to Use AI as an Executive Assistant in 2026" />
                  <YouTubeEmbed id="9qGYsvD0A6I" title="Notion for Executive Assistants – Complete Walkthrough" />
                </div>
                <div className="p-4 border rounded-xl bg-card shadow-sm">
                   <h4 className="font-bold mb-3 flex items-center gap-2">
                     <Zap className="h-4 w-4 text-primary" /> The Modern EA Tech Stack
                   </h4>
                   <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                     {["Notion", "Slack", "Gmail", "ChatGPT", "Claude", "Superhuman"].map((tool, i) => (
                       <div key={i} className="px-3 py-2 bg-muted/50 rounded flex items-center justify-center text-xs font-semibold">
                         {tool}
                       </div>
                     ))}
                   </div>
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "ea-sms-house",
        label: "SMS & House Coord.",
        icon: MessageSquare,
        sections: [
          {
            title: "SMS Processing & House Manager",
            content: (
              <div className="space-y-8">
                 <div className="space-y-4">
                    <h4 className="text-lg font-bold border-l-4 border-primary pl-4">SMS Processing (10 AM & 4 PM)</h4>
                    <ol className="list-decimal pl-5 space-y-2 text-sm">
                      <li>Read all messages.</li>
                      <li>Add tasks to the to-do list.</li>
                      <li>Respond with action taken & close the loop.</li>
                    </ol>
                 </div>

                 <div className="p-6 border rounded-xl bg-muted/10 space-y-4">
                    <h4 className="font-bold flex items-center gap-2">
                       <Home className="h-5 w-5 text-primary" /> Coordinating with House Manager
                    </h4>
                    <div className="space-y-2 text-sm">
                      <p>Work with the House Manager to handle:</p>
                      <ul className="list-disc pl-5">
                        <li>Deliveries & Returns</li>
                        <li>Picking up children</li>
                        <li>House events</li>
                      </ul>
                      <p className="mt-4 font-bold text-primary">Pro Tip:</p>
                      <p className="italic">Add her as “Optional” to home events. Confirm availability outside normal hours 2 weeks ahead.</p>
                    </div>
                 </div>
              </div>
            )
          }
        ]
      },
      {
        id: "ea-purchasing-mindset",
        label: "Purchasing & Mindset",
        icon: ShoppingBag,
        sections: [
          {
            title: "Purchasing, Gifting & EA Mindset",
            content: (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-bold text-primary">Large Purchases / Wire</h4>
                    <p className="text-sm text-muted-foreground">If over a certain amount:</p>
                    <ul className="list-decimal pl-5 text-sm space-y-1">
                      <li>Confirm with CEO</li>
                      <li>Gather banking details</li>
                      <li>Plan 2-3 days ahead</li>
                      <li>Confirm completion</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-bold text-primary">Gift Checklist</h4>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Research recipient</li>
                      <li>Get CEO approval</li>
                      <li>Purchase & Track shipment</li>
                      <li>Update CEO</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl relative overflow-hidden">
                   <div className="relative z-10 space-y-4">
                      <h4 className="text-2xl font-bold flex items-center gap-2">
                         <ShieldCheck className="h-6 w-6" /> FINAL EA MINDSET
                      </h4>
                      <p className="text-lg opacity-90 leading-relaxed font-medium">You are a filter, a protector of time, a strategist, a systems thinker, and a problem preventer.</p>
                      <div className="h-px bg-primary-foreground/20 w-full my-4"></div>
                      <p className="text-xl font-bold italic">"If the CEO never experiences friction, you’re doing your job correctly."</p>
                   </div>
                   <Shield className="absolute -bottom-10 -right-10 h-64 w-64 opacity-10" />
                </div>
              </div>
            )
          }
        ]
      }
    ]
  }
];
