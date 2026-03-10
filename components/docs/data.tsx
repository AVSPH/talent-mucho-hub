import { BookOpen, CreditCard, ShieldCheck, Clock, Key, Star, Calendar, LucideIcon } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ReactNode } from "react";

export interface DocSection {
  title: string;
  content: ReactNode;
}

export interface DocCategory {
  id: string;
  label: string;
  icon: LucideIcon;
  sections: DocSection[];
}

export interface DocGroup {
  title: string;
  items: DocCategory[];
}

export const sections: DocGroup[] = [
  {
    title: "ONBOARDING",
    items: [
      {
        id: "onboarding-setup",
        label: "Onboarding Setup",
        icon: BookOpen,
        sections: [
          {
            title: "1. Create Company Email",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p>
                  Create your company email, format is <code className="bg-muted px-1.5 py-0.5 rounded text-foreground">yourname.avs@gmail.com</code> (example: <code className="bg-muted px-1.5 py-0.5 rounded text-foreground">juandelacruz.avs@gmail.com</code>).
                </p>
                <div className="p-4 bg-destructive/10 text-destructive border border-destructive/20 rounded-lg">
                  <p className="font-medium">This new email will be utilized for client and AVSPH communications. You are not allowed to use personal email.</p>
                </div>
              </div>
            )
          },
          {
            title: "2. Fill out Database",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <p>Please fill out the AVSPH VA Database, the information gathered is solely for agency purposes.</p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSch8623fnUZMxeU3l1TU47Amxg70qnNbz_SmBYhc3jKssks-g/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  Fill out Form
                </a>
              </div>
            )
          },
          {
            title: "3. Inform HR",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <p>Inform HR of your new email by sending an email to <a href="mailto:admin@advancedvirtualstaff.com" className="text-primary hover:underline">admin@advancedvirtualstaff.com</a></p>
                <div className="bg-muted/50 p-4 rounded-lg border font-mono text-sm space-y-4 text-foreground relative">
                  <div>
                    <span className="font-semibold text-muted-foreground">Subject:</span> New VA Email
                  </div>
                  <div>
                    <span className="font-semibold text-muted-foreground">Body:</span>
                    <br /><br />
                    Good day,
                    <br /><br />
                    This is (yourname) and I am now using this email for company use. I was hired as (position). My client is (name of client) and I am working (# of hours).
                    <br /><br />
                    Thank you!
                  </div>
                </div>
              </div>
            )
          },
          {
            title: "4. Client Kick-off & Hand-off",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <p>After completing the above steps, HR will coordinate your client introduction and onboarding call.</p>
                <div className="space-y-3">
                  <div className="p-4 border rounded-lg bg-muted/20">
                    <p className="font-semibold text-foreground mb-1">Introduction</p>
                    <p className="text-sm">HR will introduce you to your client via email using your new AVS company email.</p>
                  </div>
                  <div className="p-4 border rounded-lg bg-muted/20">
                    <p className="font-semibold text-foreground mb-1">Kick-off Call</p>
                    <p className="text-sm">A scheduled kick-off call will be arranged between you and your client to align on expectations, tools, and workflows.</p>
                  </div>
                  <div className="p-4 border rounded-lg bg-muted/20">
                    <p className="font-semibold text-foreground mb-1">First Week Expectations</p>
                    <p className="text-sm">Be ready to ask questions, take notes, and communicate any blockers to HR during your first 5 days.</p>
                  </div>
                </div>
              </div>
            )
          }
        ]
      }
    ]
  },
  {
    title: "GETTING STARTED",
    items: [
      {
        id: "vision",
        label: "Vision & Mission",
        icon: Star,
        sections: [
          {
            title: "Our Vision",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p className="text-base italic text-foreground leading-relaxed">
                  "We imagine a world where running a business feels easier, so owners can focus on what they love and grow with confidence."
                </p>
              </div>
            )
          },
          {
            title: "Our Mission",
            content: (
              <div className="space-y-2 text-muted-foreground">
                <p className="text-base italic text-foreground leading-relaxed">
                  "Our mission is to make business owners' lives easier by providing support that simplifies operations and supports growth."
                </p>
              </div>
            )
          },
          {
            title: "Our Core Belief",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg font-bold text-foreground">Enabling Business Growth</p>
                <p>
                  As a VA under AVSPH, you are directly contributing to this belief every day. Every task you complete, every call you handle, every client you support — you are helping a business owner focus on what matters most to them.
                </p>
              </div>
            )
          }
        ]
      },
      {
        id: "getting-started",
        label: "Operations Guide",
        icon: BookOpen,
        sections: [
          {
            title: "Tools & Work Setup",
            content: (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg bg-muted/20">
                    <p className="font-semibold text-foreground mb-2">🖥️ Hardware</p>
                    <ul className="text-sm space-y-1 text-muted-foreground list-disc pl-4">
                      <li>Desktop or laptop with reliable specifications</li>
                      <li>USB noise-cancelling headset with microphone</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg bg-muted/20">
                    <p className="font-semibold text-foreground mb-2">📶 Internet</p>
                    <ul className="text-sm space-y-1 text-muted-foreground list-disc pl-4">
                      <li>Minimum 20 Mbps stable connection</li>
                      <li>Always have a backup internet connection ready</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg bg-muted/20">
                    <p className="font-semibold text-foreground mb-2">🏢 Workspace</p>
                    <ul className="text-sm space-y-1 text-muted-foreground list-disc pl-4">
                      <li>Quiet, professional work environment</li>
                      <li>Free from background noise and distractions</li>
                    </ul>
                  </div>
                </div>
                <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-yellow-700 dark:text-yellow-400">
                  <p className="font-medium">Work Setup = Work Quality</p>
                  <p className="text-sm mt-1">Your setup directly affects the quality of service you deliver to clients. Keep all equipment in good working condition at all times.</p>
                </div>
              </div>
            ),
          },
          {
            title: "Work Hours & Schedule",
            content: (
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg text-center bg-muted/20">
                    <p className="text-xl font-bold text-foreground">11PM – 9AM</p>
                    <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">Typical Shift (PH Time)</p>
                  </div>
                  <div className="p-4 border rounded-lg text-center bg-muted/20">
                    <p className="text-xl font-bold text-foreground">8 hrs</p>
                    <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">Full-Time Daily Hours</p>
                  </div>
                  <div className="p-4 border rounded-lg text-center bg-muted/20">
                    <p className="text-xl font-bold text-foreground">5 days</p>
                    <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">Per Week</p>
                  </div>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Shift hours may vary per client — confirm your exact schedule during onboarding.</li>
                    <li>Any changes to your schedule must be <strong className="text-foreground">mutually agreed upon</strong> and approved by AVS management.</li>
                    <li>If you are assigned to a new client, a separate updated contract will be issued reflecting your new hours and rate.</li>
                  </ul>
                </div>
              </div>
            ),
          },
          {
            title: "Daily Operations & Reporting",
            content: (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg bg-muted/20">
                    <p className="font-semibold text-foreground mb-2">📲 Login / Logout</p>
                    <ul className="text-sm space-y-1 text-muted-foreground list-disc pl-4">
                      <li>Log IN at the start of your shift in the AVS WhatsApp group</li>
                      <li>Log OUT at the end of your shift in the same group</li>
                      <li>Use <strong className="text-foreground">Team Logger</strong> for time tracking unless your client has opted out</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg bg-muted/20">
                    <p className="font-semibold text-foreground mb-2">📧 EOD Submission</p>
                    <ul className="text-sm space-y-1 text-muted-foreground list-disc pl-4">
                      <li>Send to: <strong className="text-foreground">avsph.eod@gmail.com</strong></li>
                      <li>Use your <strong className="text-foreground">AVS email address</strong></li>
                      <li>Subject: <strong className="text-foreground">[Date]</strong> — in your client's time zone</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">📝 EOD Report Template</p>
                  <div className="bg-foreground text-background rounded-lg p-5 font-mono text-sm leading-relaxed">
                    <p className="text-muted-foreground/60 text-xs mb-2">// Subject Line</p>
                    <p><span className="opacity-60">Subject:</span> [Date] — [Client Timezone]</p>
                    <br />
                    <p><span className="opacity-60">Logout Date:</span> [Enter date]</p>
                    <p><span className="opacity-60">Username:</span> [Your Full Name]</p>
                    <p><span className="opacity-60">Break:</span> [Enter duration]</p>
                    <p><span className="opacity-60">Appointment Set:</span> [Yes/No + details]</p>
                    <p><span className="opacity-60">Total Rendered Hours:</span> [e.g. 8 hours]</p>
                    <br />
                    <p><span className="opacity-60">Tasks Completed:</span></p>
                    <p className="pl-4 opacity-80">- [Task 1]</p>
                    <p className="pl-4 opacity-80">- [Task 2]</p>
                    <p className="pl-4 opacity-80">- [Task 3]</p>
                    <br />
                    <p><span className="opacity-60">Pending Tasks:</span></p>
                    <p className="pl-4 opacity-80">- [Pending item]</p>
                    <p className="mt-4 pt-4 border-t border-muted/20 italic opacity-50 text-xs">"Progress, not perfection. Every task counts."</p>
                  </div>
                </div>
              </div>
            ),
          },
          {
            title: "Communication Guidelines",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 border rounded-lg bg-muted/20">
                    <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">🗂️ Admin</p>
                    <p className="text-sm font-semibold text-foreground">admin@advancedvirtualstaff.com</p>
                    <p className="text-xs mt-1">Client issues and concerns</p>
                  </div>
                  <div className="p-4 border rounded-lg bg-muted/20">
                    <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">💰 Accounting</p>
                    <p className="text-sm font-semibold text-foreground">admin@advancedvirtualstaff.com</p>
                    <p className="text-xs mt-1">Anything financial related</p>
                  </div>
                  <div className="p-4 border rounded-lg bg-muted/20">
                    <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">👥 HR</p>
                    <p className="text-sm font-semibold text-foreground">avsph.eod@gmail.com</p>
                    <p className="text-xs mt-1">Contract, attendance, leave requests, and HR-related concerns</p>
                  </div>
                  <div className="p-4 border rounded-lg bg-muted/20">
                    <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">🚨 General / Urgent</p>
                    <p className="text-sm font-semibold text-foreground">WhatsApp Group Chat</p>
                    <p className="text-xs mt-1">Any urgent matters — notify directly in the group</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">Communication Rules</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Respond to all messages within <strong className="text-foreground">1–2 hours</strong> during your scheduled work hours.</li>
                    <li>If you are late or going offline, notify HR via <strong className="text-foreground">direct WhatsApp message</strong> immediately.</li>
                    <li>Always keep all messages clear, concise, and professional.</li>
                  </ul>
                </div>
              </div>
            ),
          },
          {
            title: "Emergency Contact Flow",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <p className="font-semibold text-foreground">💬 How to Notify HR</p>
                    <ol className="list-decimal pl-5 space-y-2 text-sm">
                      <li><strong className="text-foreground">Message HR or your POC directly on WhatsApp</strong> — not in the group.</li>
                      <li>For emergencies, start with the word <strong className="text-foreground">"Emergency"</strong> then share your name, situation, time, and location if relevant.</li>
                    </ol>
                    <div className="bg-foreground text-background rounded-lg p-4 font-mono text-xs leading-relaxed">
                      <p className="opacity-50 mb-2">SAMPLE MESSAGE</p>
                      <p>Hi [HR Name], this is [Your Full Name]. I want to inform you that I will be [late/absent] today due to [brief reason]. I will keep you updated. Thank you.</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="font-semibold text-foreground">📞 Escalation Order</p>
                    <ol className="list-decimal pl-5 space-y-3 text-sm">
                      <li><strong className="text-foreground">Immediate Supervisor</strong> — Call or message directly.</li>
                      <li><strong className="text-foreground">HR via WhatsApp</strong> — Use your onboarding contact number.</li>
                      <li><strong className="text-foreground">No response in 10 minutes?</strong> — Contact the AVSPH Operations Manager.</li>
                      <li><strong className="text-foreground">After the emergency</strong> — Send a formal email report within <strong className="text-foreground">48 hours</strong>.</li>
                    </ol>
                  </div>
                </div>
              </div>
            ),
          },
        ],
      },
      {
        id: "attendance",
        label: "Attendance & Meetings",
        icon: Calendar,
        sections: [
          {
            title: "Attendance & Leave Policy",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { val: "5 days", lbl: "Paid Leaves / Year" },
                    { val: "2 days", lbl: "Max Consecutive" },
                    { val: "1 month", lbl: "Advance Notice" },
                    { val: "1 year", lbl: "Active Service Required" },
                  ].map((s) => (
                    <div key={s.lbl} className="p-3 border rounded-lg text-center bg-muted/20">
                      <p className="text-lg font-bold text-foreground">{s.val}</p>
                      <p className="text-xs mt-1 uppercase tracking-wide">{s.lbl}</p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-foreground mb-2">✅ Eligibility</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Full-time contractor: 8 hrs/day, 5 days/week</li>
                      <li>Completed 1 full year of continuous active service</li>
                      <li>Must file request at least 1 month in advance (except emergencies)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">📝 How to File a Leave</p>
                    <ol className="list-decimal pl-5 space-y-1 text-sm">
                      <li>Send via <strong className="text-foreground">direct WhatsApp to HR</strong> — not the group chat.</li>
                      <li>Use format: <strong className="text-foreground">[Your Name] – Leave Request</strong> with dates and reason.</li>
                      <li>Attach proof if sick or emergency — supporting documents help approval.</li>
                    </ol>
                  </div>
                </div>
                <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-yellow-700 dark:text-yellow-400 text-sm">
                  <p className="font-semibold">⚠️ Year of Stay Reset</p>
                  <p className="mt-1">If you are placed "On Pause" (no project, inactivity, or extended leave), that time does NOT count toward your Year of Stay. Example: 6 months active → 1 month pause → your 12-month count restarts from zero when you return.</p>
                </div>
              </div>
            ),
          },
          {
            title: "Meetings & Check-Ins",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg bg-muted/20">
                    <p className="font-semibold text-foreground mb-1">📅 Team Meetings</p>
                    <p className="text-xs text-primary font-medium mb-2 uppercase tracking-wide">Quarterly</p>
                    <p className="text-sm">1–2 team meetings held per quarter. Attendance is expected. These are opportunities to align with the team, share updates, and build connection.</p>
                  </div>
                  <div className="p-4 border rounded-lg bg-muted/20">
                    <p className="font-semibold text-foreground mb-1">🤝 Kumustahan</p>
                    <p className="text-xs text-primary font-medium mb-2 uppercase tracking-wide">Weekly with HR</p>
                    <p className="text-sm">A quick 5–10 minute weekly check-in with HR. This is a pulse check — how are you doing, any concerns, any blockers?</p>
                  </div>
                  <div className="p-4 border rounded-lg bg-primary/5 border-primary/20">
                    <p className="font-semibold text-foreground mb-1">💳 Pay Requirement</p>
                    <p className="text-xs text-primary font-medium mb-2 uppercase tracking-wide">Mandatory for Payout</p>
                    <p className="text-sm"><strong className="text-foreground">2 Kumustahan sessions</strong> must be attended and completed before each bi-monthly compensation is released.</p>
                  </div>
                </div>
              </div>
            ),
          },
        ],
      },
    ],
  },
  {
    title: "HR & POLICIES",
    items: [
      {
        id: "policies",
        label: "Policies and Regulation",
        icon: ShieldCheck,
        sections: [
          {
            title: "Confidentiality & Non-Disclosure",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-foreground mb-2">🔒 What is Confidential?</p>
                    <p className="text-sm mb-2">Any non-public business, marketing, or technical information belonging to AVSPH, its affiliates, or its clients — regardless of format.</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Client data and contact details</li>
                      <li>Business strategies and processes</li>
                      <li>Internal documents and company records</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">✅ What is NOT Confidential?</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Information that becomes public through <em>no fault of yours</em></li>
                      <li>Information lawfully obtained from another independent source</li>
                      <li>Information that must be disclosed by legal order</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">📋 Your NDA Obligations</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Keep all information private during your contract and for <strong className="text-foreground">1 year after it ends</strong>.</li>
                    <li>Use confidential information only for work under this Agreement.</li>
                    <li>Immediately notify AVSPH of any unauthorized access to confidential information.</li>
                    <li>Assist with any necessary legal action if required.</li>
                    <li>Return or destroy all company materials after your contract is terminated.</li>
                  </ul>
                </div>
                <div className="p-4 bg-destructive/10 text-destructive border border-destructive/20 rounded-lg text-sm">
                  <p className="font-semibold">⚖️ Legal Penalty</p>
                  <p className="mt-1">Breach of confidentiality can result in liquidated damages of up to <strong>₱500,000</strong>. Do not disclose or use confidential information without written consent from AVSPH.</p>
                </div>
              </div>
            ),
          },
          {
            title: "Non-Compete & Non-Solicitation",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-foreground mb-1">🚫 Non-Compete</p>
                    <p className="text-xs text-primary font-medium mb-2 uppercase tracking-wide">During contract + 2 years after</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>You may NOT participate in ownership, management, or operation of any business similar to or competing with AVSPH.</li>
                      <li>Includes employment, consultancy, or agency work with similar businesses.</li>
                      <li>Applies to businesses of any current or former AVSPH client.</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">🤝 Non-Solicitation</p>
                    <p className="text-xs text-primary font-medium mb-2 uppercase tracking-wide">2 years after contract ends</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>You may NOT solicit or recruit any AVSPH employee, contractor, or agent.</li>
                      <li>Cannot be done directly or indirectly, for your own benefit or another firm.</li>
                    </ul>
                  </div>
                </div>
                <div className="p-4 bg-destructive/10 text-destructive border border-destructive/20 rounded-lg text-sm">
                  <p className="font-semibold">⚖️ Financial Penalties</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>If an AVSPH staff is hired through you → Reimburse all training expenses or pay <strong>₱500,000</strong> in liquidated damages.</li>
                    <li>If an AVSPH client transfers to you through your solicitation → Reimburse all expenses and lost profits for <strong>2 years</strong>.</li>
                  </ul>
                </div>
              </div>
            ),
          },
          {
            title: "Termination Guidelines",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-foreground mb-2">🤝 Voluntary Termination</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Must provide at least <strong className="text-foreground">14 days written notice</strong> to AVSPH.</li>
                      <li>Payment will be proportional to services rendered up to the termination date.</li>
                      <li>Failure to complete 14 days of work after resignation = <strong className="text-destructive">final payout forfeited</strong>.</li>
                    </ul>
                    <div className="mt-3 p-3 bg-destructive/10 text-destructive border border-destructive/20 rounded-lg text-sm">
                      <strong>AWOL = No Final Pay.</strong> Going absent without official leave (AWOL) means you forfeit your final payment entirely.
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">⚡ Involuntary Termination (Immediate)</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Inducing AVSPH employees or clients to leave the company</li>
                      <li>Acts of disloyalty or fraud against AVSPH</li>
                      <li>False statements in your application documents</li>
                      <li>Violating company rules, guidelines, or professional conduct</li>
                      <li>Disclosing confidential information without consent</li>
                      <li>Failing to return company property</li>
                    </ul>
                  </div>
                </div>
              </div>
            ),
          },
          {
            title: "Restrictions & Compliance",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <p className="text-sm">Zero tolerance — violations may lead to immediate termination and liquidated damages.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { label: "Do NOT work for AVSPH clients outside the company", sub: "All client work must go through AVSPH only." },
                    { label: "Do NOT engage with AVSPH competitors", sub: "No competitive work during your contract period." },
                    { label: "Do NOT solicit or accept side jobs", sub: "No freelance work from clients or co-VAs." },
                    { label: "Do NOT receive direct client payments", sub: "All payments must flow through AVSPH." },
                  ].map((item) => (
                    <div key={item.label} className="p-4 bg-destructive/10 text-destructive border border-destructive/20 rounded-lg text-sm">
                      <p className="font-semibold">❌ {item.label}</p>
                      <p className="text-xs mt-1 opacity-80">{item.sub}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">✅ Additional Rules</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>You may not accept work from other companies during your contract without <strong className="text-foreground">written approval</strong> from AVSPH.</li>
                    <li>Return all company property within <strong className="text-foreground">5 business days</strong> of contract termination or final payouts may be withheld.</li>
                    <li>Follow all AVSPH rules, policies, and professional conduct standards at all times.</li>
                  </ul>
                </div>
              </div>
            ),
          },
        ],
      },
      {
        id: "payment",
        label: "Payment and Benefits",
        icon: CreditCard,
        sections: [
          {
            title: "Compensation & Payment Schedule",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 border rounded-lg text-center bg-muted/20">
                    <p className="text-lg font-bold text-foreground">1st & 16th</p>
                    <p className="text-xs mt-1 uppercase tracking-wide">Payment Dates (EST)</p>
                  </div>
                  <div className="p-3 border rounded-lg text-center bg-muted/20">
                    <p className="text-lg font-bold text-foreground">Batch 4</p>
                    <p className="text-xs mt-1 uppercase tracking-wide">Your Payment Batch</p>
                  </div>
                  <div className="p-3 border rounded-lg text-center bg-muted/20">
                    <p className="text-lg font-bold text-foreground">+3 days</p>
                    <p className="text-xs mt-1 uppercase tracking-wide">Max Grace Period</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">📅 Payment Schedule</p>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li><strong className="text-foreground">Work from 1st–15th</strong> → Paid on the 1st of the following period.</li>
                    <li><strong className="text-foreground">Work from 16th–30th/31st</strong> → Paid on the 16th of the following month.</li>
                    <li>Payments are processed on <strong className="text-foreground">business days only</strong> — no transactions on weekends or holidays.</li>
                    <li>Unforeseen delays: allow up to <strong className="text-foreground">3 additional business days</strong>. Extended delays will be communicated in advance.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">🧾 Invoice Requirement</p>
                  <div className="space-y-2 text-sm">
                    <div className="rounded-md border overflow-hidden">
                      <Table>
                        <TableHeader className="bg-muted/50">
                          <TableRow>
                            <TableHead className="font-semibold">Field</TableHead>
                            <TableHead className="font-semibold">Details</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow><TableCell className="font-medium">Where to send</TableCell><TableCell>billing@advancedvirtualstaff.com</TableCell></TableRow>
                          <TableRow><TableCell className="font-medium">Subject Line</TableCell><TableCell>Invoice – [Your Name] – [Cut-off Date]</TableCell></TableRow>
                          <TableRow><TableCell className="font-medium">Cut-off Dates</TableCell><TableCell>15th and 30th of the month</TableCell></TableRow>
                        </TableBody>
                      </Table>
                    </div>
                    <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-yellow-700 dark:text-yellow-400 text-sm">
                      <strong>Invoice Required Before Payout.</strong> No invoice = no payment processing. AVSPH is NOT liable to pay if a client goes missing without notice in situations where you are at fault.
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">💱 Conversion Rate Policy</p>
                  <div className="rounded-md border overflow-hidden">
                    <Table>
                      <TableHeader className="bg-muted/50">
                        <TableRow>
                          <TableHead className="font-semibold">Market FX Rate (USD → PHP)</TableHead>
                          <TableHead className="font-semibold">AVSPH Applied Rate</TableHead>
                          <TableHead className="font-semibold">Notes</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow><TableCell>Lower than ₱56</TableCell><TableCell className="font-medium">₱53</TableCell><TableCell className="text-muted-foreground">Base rate</TableCell></TableRow>
                        <TableRow><TableCell>Exactly ₱56</TableCell><TableCell className="font-medium">₱54</TableCell><TableCell className="text-muted-foreground">Mid rate</TableCell></TableRow>
                        <TableRow><TableCell>Exactly ₱57</TableCell><TableCell className="font-medium">₱55</TableCell><TableCell className="text-muted-foreground">Upper rate</TableCell></TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Transaction fees and conversion rates vary across platforms (Wise, PayPal). These internal rates aim to provide a fair, balanced payout while maintaining company financial stability.</p>
                </div>
              </div>
            ),
          },
          {
            title: "Cash Advance Policy",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-foreground mb-2">✅ Eligibility</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>At least <strong className="text-foreground">6 months of tenure</strong> with your assigned client</li>
                      <li>Maximum request: <strong className="text-foreground">50% of upcoming scheduled payment</strong></li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">📋 Policy Rules</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Strictly for <strong className="text-foreground">emergency cases only</strong></li>
                      <li>Proof of emergency must be submitted</li>
                      <li>Maximum: no more than 50% of upcoming payment</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">📝 How to Apply</p>
                  <ol className="list-decimal pl-5 space-y-2 text-sm">
                    <li>Submit request via email to your designated AVS email address. Clearly state the emergency and amount requested.</li>
                    <li>Attach supporting proof documents — requests without documents will NOT be processed.</li>
                    <li>Await management review — approval is not guaranteed and is subject to review.</li>
                  </ol>
                </div>
                <div className="p-4 bg-destructive/10 text-destructive border border-destructive/20 rounded-lg text-sm">
                  <strong>🚫 Misuse Warning:</strong> Misuse of the cash advance policy may result in disciplinary action, including termination.
                </div>
              </div>
            ),
          },
          {
            title: "Bonus & Benefits",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <p className="text-sm">All benefits become effective after completing <strong className="text-foreground">1 Year of Active Service</strong> with AVSPH.</p>
                <div className="rounded-md border overflow-hidden">
                  <Table>
                    <TableHeader className="bg-muted/50">
                      <TableRow>
                        <TableHead className="font-semibold">Benefit</TableHead>
                        <TableHead className="font-semibold">Amount</TableHead>
                        <TableHead className="font-semibold">Conditions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow><TableCell className="font-medium">🏅 1st Year Loyalty Bonus</TableCell><TableCell className="font-bold text-primary">₱10,000</TableCell><TableCell>Granted after one (1) year of active service</TableCell></TableRow>
                      <TableRow><TableCell className="font-medium">📊 Quarterly Bonus</TableCell><TableCell className="font-bold text-primary">₱2,000 / quarter</TableCell><TableCell>Payable after 1 year, quarterly thereafter</TableCell></TableRow>
                      <TableRow><TableCell className="font-medium">📶 Monthly Wi-Fi Allowance</TableCell><TableCell className="font-bold text-primary">₱1,000 / month</TableCell><TableCell>Payable monthly after 1 year</TableCell></TableRow>
                      <TableRow><TableCell className="font-medium">🏥 Medical Reimbursement</TableCell><TableCell className="font-bold text-primary">₱5,000</TableCell><TableCell>Payable upon submission of valid documents</TableCell></TableRow>
                      <TableRow><TableCell className="font-medium">🎄 December Bonus</TableCell><TableCell>Discretionary</TableCell><TableCell>Based on company performance; paid annually in December</TableCell></TableRow>
                      <TableRow><TableCell className="font-medium">🏖️ Paid Sick/Personal Leaves</TableCell><TableCell>5 days / year</TableCell><TableCell>Max 2 consecutive days; 1 month notice required</TableCell></TableRow>
                    </TableBody>
                  </Table>
                </div>
                <div className="p-3 bg-muted/30 border rounded-lg text-sm">
                  <strong className="text-foreground">📌 Year of Stay Calculation:</strong> Based on accumulated active working hours, days, and months. Periods where you were "On Pause" (inactive, no project, extended leave) are excluded and cause your year count to reset upon return.
                </div>
              </div>
            ),
          },
        ]
      }
    ]
  },
  {
    title: "PLATFORM GUIDE",
    items: [
      {
        id: "dashboard-login",
        label: "Dashboard Login",
        icon: Key,
        sections: [
          {
            title: "Accessing the Platform",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <p>After your contract is confirmed, HR will send you an email containing your credentials for the Staff Dashboard. Keep an eye on your new company email for these details.</p>
                <div className="bg-muted/30 p-4 rounded-lg border">
                  <h4 className="font-semibold text-foreground mb-2">How to Login:</h4>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Navigate to the AVS Dashboard Login Page.</li>
                    <li>Ensure the <strong className="text-foreground">Staff</strong> tab is selected at the top of the login form.</li>
                    <li>Enter the Email Address and temporary Password from the HR email.</li>
                    <li>Click <strong className="text-foreground">Sign In</strong>.</li>
                    <li><em>Note: Upon your first login, or as directed by HR, you may need to update your password for security purposes.</em></li>
                  </ol>
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "daily-eods",
        label: "Daily EODs",
        icon: Clock,
        sections: [
          {
            title: "Submitting Your EOD (End of Day)",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <p>Once you are logged in and start working, you are required to submit an End of Day (EOD) report daily through the Staff Dashboard to track your tasks and hours.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="p-4 border rounded-lg bg-primary/5">
                    <h4 className="font-semibold text-primary mb-1">EOD Page Overview</h4>
                    <p className="text-sm">On your EOD page, you can see your Estimated Pay, count of Approved/Pending EODs, and your Next Payout date at the top.</p>
                  </div>
                  <div className="p-4 border rounded-lg bg-muted/30">
                    <h4 className="font-semibold mb-1">Managing EODs</h4>
                    <p className="text-sm">You can view your past submissions in the table, check their status, and filter them by date or status.</p>
                  </div>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg border">
                  <h4 className="font-semibold text-foreground mb-3">EOD Submission Guide:</h4>
                  <ol className="list-decimal pl-5 space-y-3 mb-4">
                    <li>Go to the <strong className="text-foreground">Daily EODs</strong> section from your dashboard sidebar.</li>
                    <li>Click on the <strong className="text-foreground">Submit EOD</strong> button.</li>
                    <li>Fill out all the required fields in the submission form accurately.</li>
                  </ol>

                  <div className="mt-4 p-4 border border-primary/20 bg-background rounded-md space-y-2">
                    <p className="font-semibold text-primary underline mb-2">Form Fields Overview:</p>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      <li><strong className="text-foreground">Date:</strong> The specific date the work was performed (defaults to today).</li>
                      <li><strong className="text-foreground">Total Hours Worked:</strong> Your total shift hours (e.g., 8).</li>
                      <li><strong className="text-foreground">Regular / Overtime / Night Diff Hours:</strong> Breakdown of your hours. <em>(If regular hours are left blank, the system treats your total hours as regular hours).</em></li>
                      <li><strong className="text-foreground">Tasks Completed:</strong> A detailed description of what you accomplished today. (Required)</li>
                      <li><strong className="text-foreground">Challenges:</strong> Any blockers or issues you encountered.</li>
                      <li><strong className="text-foreground">Next Day Plan:</strong> What you plan to work on during your next shift.</li>
                      <li><strong className="text-foreground">Additional Notes:</strong> Any other information you need to relay.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )
          }
        ]
      }
    ]
  },

];
