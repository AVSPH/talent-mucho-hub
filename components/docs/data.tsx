import { BookOpen, CreditCard, ShieldCheck, FileText, CheckCircle, Clock, Key, LucideIcon, List, Users, Calendar, Mic, Plane, Mail, MessageSquare, ShoppingBag, Target, Shield, Heart, Zap, Coffee, Phone, PlaneTakeoff, Globe, Home, Pencil, Send, AlertTriangle, CreditCard as CardIcon } from "lucide-react";
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

export const onboardingSections: DocGroup[] = [
  {
    title: "ONBOARDING",
    items: [
      {
        id: "onboarding-vision",
        label: "Vision & Mission",
        icon: Globe,
        sections: [
          {
            title: "Our Vision",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg italic font-serif leading-relaxed text-foreground/80">
                  "We imagine a world where running a business feels easier, so owners can focus on what they love and grow with confidence."
                </p>
                <p>What drives us every single day at TalentMucho is the commitment to simplify operations for business owners.</p>
              </div>
            )
          },
          {
            title: "Our Mission",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg italic font-serif leading-relaxed text-foreground/80">
                  "Our mission is to make business owners' lives easier by providing support that simplifies operations and supports growth."
                </p>
              </div>
            )
          }
        ]
      },
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
                  Create your company email, format is <code className="bg-muted px-1.5 py-0.5 rounded text-foreground">yourname.tm@gmail.com</code> (example: <code className="bg-muted px-1.5 py-0.5 rounded text-foreground">juandelacruz.tm@gmail.com</code>).
                </p>
                <div className="p-4 bg-destructive/10 text-destructive border border-destructive/20 rounded-lg">
                  <p className="font-medium">This new email will be utilized for client and TalentMucho communications. You are not allowed to use personal email.</p>
                </div>
              </div>
            )
          },
          {
            title: "2. Fill out Database",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <p>Please fill out the TalentMucho VA Database, the information gathered is solely for agency purposes.</p>
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
                <p>Inform HR of your new email by sending an email to <a href="mailto:admin@talentmucho.com" className="text-primary hover:underline">admin@talentmucho.com</a></p>

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
              <div className="space-y-4 text-muted-foreground mt-4 p-4 border border-dashed rounded-lg bg-muted/20">
                <ul className="list-disc pl-5 space-y-2 text-foreground/80">
                  <li><strong>Introduction:</strong> How to initiate the first communication with your client.</li>
                  <li><strong>Scheduling:</strong> Arranging the initial kick-off call.</li>
                  <li><strong>First Week Expectations:</strong> What to prepare for in your first 5 days.</li>
                </ul>
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
        id: "getting-started",
        label: "Getting Started",
        icon: BookOpen,
        sections: [
          {
            title: "Tools & Work Setup",
            content: (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg bg-primary/5">
                    <p className="font-semibold text-primary mb-2 flex items-center gap-2">
                       <Home className="w-4 h-4" /> Hardware
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Desktop or laptop with reliable specifications</li>
                      <li>USB noise-cancelling headset with microphone</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg bg-primary/5">
                    <p className="font-semibold text-primary mb-2 flex items-center gap-2">
                       <Zap className="w-4 h-4" /> Internet
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Minimum 20 Mbps stable connection</li>
                      <li>Always have a backup internet ready</li>
                    </ul>
                  </div>
                </div>
                <div className="p-4 border rounded-lg bg-primary/5">
                  <p className="font-semibold text-primary mb-2 flex items-center gap-2">
                     <Coffee className="w-4 h-4" /> Workspace
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Quiet, professional work environment</li>
                    <li>Free from background noise and distractions</li>
                  </ul>
                </div>

                <div className="mt-4 p-4 border border-dashed rounded-lg bg-muted/20 text-muted-foreground">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4" /> Team Logger Setup
                  </h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Download application as instructed by HR</li>
                    <li>Log in using TalentMucho credentials</li>
                    <li>Configure idle time and screenshot settings</li>
                  </ul>
                </div>
              </div>
            ),
          },
          {
            title: "Work Hours & Schedule",
            content: (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 text-center border rounded-lg bg-muted/30">
                    <div className="text-2xl font-bold text-primary italic">11PM-9AM</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Typical Shift (PH)</div>
                  </div>
                  <div className="p-4 text-center border rounded-lg bg-muted/30">
                    <div className="text-2xl font-bold text-primary italic">8 hrs</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Full-Time Daily</div>
                  </div>
                  <div className="p-4 text-center border rounded-lg bg-muted/30">
                    <div className="text-2xl font-bold text-primary italic">5 days</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Per Week</div>
                  </div>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Shift hours vary per client — confirm exact schedule.</li>
                    <li>Changes require mutual agreement and management approval.</li>
                    <li>New client = new updated contract.</li>
                  </ul>
                </div>
              </div>
            ),
          },
          {
            title: "Daily Operations & Reporting",
            content: (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                       <Phone className="w-4 h-4 text-primary" /> Login / Logout
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Log IN in the WhatsApp group</li>
                      <li>Log OUT at end of shift</li>
                      <li>Use Team Logger for time tracking</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                       <Mail className="w-4 h-4 text-primary" /> EOD Submission
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Send to: <code className="text-foreground">eod@talentmucho.com</code></li>
                      <li>Subject: [Date] in client timezone</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-muted/50 p-6 rounded-xl border border-border">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">EOD Report Template</h4>
                  <div className="space-y-4 font-mono text-xs text-foreground leading-relaxed">
                    <div className="text-primary/60 font-sans italic border-b pb-2 mb-2">// Subject Line</div>
                    <div className="flex gap-2"><span className="text-muted-foreground w-16 shrink-0 underline decoration-muted/40">Subject:</span> [Date] — [Client TZ]</div>
                    <br />
                    <div className="flex gap-2"><span className="text-muted-foreground w-16 shrink-0 underline decoration-muted/40">Logout:</span> [Date]</div>
                    <div className="flex gap-2"><span className="text-muted-foreground w-16 shrink-0 underline decoration-muted/40">Name:</span> [Your Name]</div>
                    <div className="flex gap-2"><span className="text-muted-foreground w-16 shrink-0 underline decoration-muted/40">Break:</span> [Duration]</div>
                    <div className="flex gap-2"><span className="text-muted-foreground w-16 shrink-0 underline decoration-muted/40">Appt:</span> [Yes/No]</div>
                    <div className="flex gap-2"><span className="text-muted-foreground w-16 shrink-0 underline decoration-muted/40">Hours:</span> [Rendered]</div>
                    <br />
                    <div>
                      <div className="text-muted-foreground underline mb-1">Tasks Completed:</div>
                      <div className="text-primary italic pl-4">- [Task 1]</div>
                    </div>
                  </div>
                </div>
              </div>
            )
          },
          {
            title: "Emergency Contact Flow",
            content: (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 font-semibold">
                      <MessageSquare className="w-4 h-4 text-primary" /> WhatsApp
                    </div>
                    <div className="space-y-4 border-l-2 border-primary/20 pl-4 py-1">
                      <div>
                        <div className="text-sm font-medium">Step 1 — DM HR</div>
                        <p className="text-xs text-muted-foreground">Direct message HR (not in group).</p>
                      </div>
                      <div>
                        <div className="text-sm font-medium">Step 2 — "Emergency" tag</div>
                        <p className="text-xs text-muted-foreground">Start with "Emergency" for urgent items.</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 font-semibold">
                      <Target className="w-4 h-4 text-primary" /> Escalation
                    </div>
                    <div className="space-y-2 border-l-2 border-primary/20 pl-4 py-1 text-sm text-muted-foreground">
                      <p>1. Immediate Supervisor</p>
                      <p>2. HR via WhatsApp</p>
                      <p>3. Operations Manager</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          },
          {
            title: "Meetings & Check-ins",
            content: (
              <div className="space-y-2">
                <p className="font-semibold text-primary">ATTEND:</p>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  <li>1-2 Team Meetings per quarter</li>
                  <li>5-10 minute weekly Kumustahan with HR</li>
                  <li>2 Kumustahan sessions must be attended before bi-monthly compensation is released</li>
                </ul>
              </div>
            ),
          },
          {
            title: "Communication & Support",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Respond within 1-2 hrs during your work schedule.</li>
                  <li>Notify HR if late or offline. Through WhatsApp.</li>
                  <li>Keep messages clear & professional.</li>
                </ul>

                <div className="p-4 border border-dashed rounded-lg bg-muted/20">
                  <h4 className="font-semibold text-foreground mb-2">Escalation & Support Contacts</h4>
                  <p className="italic mb-2">Note: Placeholder for specific contact information.</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li><strong className="text-foreground">Payroll Issues:</strong> [Payroll Email/Contact]</li>
                    <li><strong className="text-foreground">Client Disputes/Issues:</strong> [Account Manager Contact]</li>
                    <li><strong className="text-foreground">Technical Support:</strong> [IT Contact]</li>
                  </ul>
                </div>
              </div>
            ),
          },
        ],
      },
      {
        id: "policies",
        label: "Policies and Regulation",
        icon: ShieldCheck,
        sections: [
          {
            title: "Confidentiality & NDA",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <p className="text-sm">Protecting client and company information is a core legal obligation. This includes client data, business strategies, and internal documents.</p>
                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive flex items-start gap-3">
                  <Shield className="w-5 h-5 mt-0.5 shrink-0" />
                  <div className="text-sm">
                    <strong>Legal Penalty:</strong> Breach of confidentiality can result in liquidated damages of up to <strong>₱500,000</strong>.
                  </div>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Return all files/documents upon contract termination.</li>
                  <li>Do not use info for personal gain or for a third party.</li>
                  <li>Exception: Info that becomes public through no fault of yours.</li>
                </ul>
              </div>
            ),
          },
          {
            title: "Non-Compete & Non-Solicitation",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                       <Target className="w-4 h-4" /> Non-Compete
                    </h4>
                    <p className="text-xs italic mb-2">During contract + 2 years after</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs">
                      <li>No similar businesses to TalentMucho</li>
                      <li>Applies to current/former client businesses</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                       <Users className="w-4 h-4" /> Non-Solicitation
                    </h4>
                    <p className="text-xs italic mb-2">2 years after contract ends</p>
                    <ul className="list-disc pl-4 space-y-1 text-xs">
                      <li>Do not recruit any TalentMucho staff/agents</li>
                    </ul>
                  </div>
                </div>
                <div className="p-4 bg-muted/40 text-xs rounded-lg border border-dashed">
                  <strong>Financial Penalties:</strong> TalentMucho staff hired through you → ₱500,000 damages. Client solicited away → reimburse 2 years of lost profits.
                </div>
              </div>
            ),
          },
          {
            title: "Restrictions (The Four Absolutes)",
            content: (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Do NOT work for clients outside TalentMucho",
                    "Do NOT engage with competitors",
                    "Do NOT solicit or accept side jobs",
                    "Do NOT receive direct client payments"
                  ].map((text, i) => (
                    <div key={i} className="p-3 border rounded-lg bg-destructive/[0.03] text-destructive flex items-center gap-2 text-xs font-medium">
                      <CheckCircle className="w-4 h-4 shrink-0 opacity-50" />
                      {text}
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                  <p className="text-xs text-muted-foreground italic">"When you follow these guidelines, you protect yourself, your clients, and the entire team."</p>
                </div>
              </div>
            ),
          },
          {
            title: "Termination Guidelines",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 border rounded-lg bg-background shadow-sm">
                    <div className="text-sm font-semibold text-foreground">Voluntary Notice</div>
                    <div className="text-sm font-bold text-primary italic">14 Days Required</div>
                  </div>
                  <p className="text-xs pl-1">Failure to complete notice = final payout forfeited. AWOL is grounds for immediate termination without pay.</p>
                </div>
                <div className="p-4 border border-dashed rounded-lg bg-muted/20">
                  <h4 className="font-semibold text-foreground mb-2 text-xs uppercase tracking-tighter italic">Involuntary (Immediate)</h4>
                  <ul className="list-disc pl-5 space-y-1 text-xs">
                    <li>Inducing employees or clients to leave</li>
                    <li>Acts of disloyalty or fraud</li>
                    <li>Disclosing confidential information</li>
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
            title: "Compensation & Bonuses",
            content: (
              <div className="space-y-4 text-muted-foreground p-4 bg-muted/30 rounded-lg border">
                <h3 className="text-lg font-medium text-foreground mb-2">General Terms</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong className="text-foreground">Rate:</strong> Depends on client agreement.</li>
                  <li><strong className="text-foreground">Schedule:</strong> Bi-monthly payouts. Any delays will be communicated 3 days prior.</li>
                  <li><strong className="text-foreground">Requirement:</strong> Invoice submission via email is required before each payout.</li>
                </ul>

                <div className="mt-4 p-4 border border-dashed rounded-lg bg-background">
                  <h4 className="font-semibold text-foreground mb-2">Invoice Submission Instructions</h4>
                  <p className="italic mb-2 text-sm">Note: Placeholder for invoicing procedure.</p>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li><strong className="text-foreground">Where to send:</strong> billing@talentmucho.com</li>
                    <li><strong className="text-foreground">Subject Line Format:</strong> Invoice - [Your Name] - [Cut-off Date]</li>
                    <li><strong className="text-foreground">Cut-off Dates:</strong> 15th and 30th of the month.</li>
                    <li><strong className="text-foreground">Template:</strong> Link to approved invoice template.</li>
                  </ul>
                </div>
              </div>
            ),
          },
          {
            title: "Incentives After 1 Year",
            content: (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { label: "Loyalty Bonus", value: "P10,000", desc: "Annual reward" },
                  { label: "Quarterly Bonus", value: "P2,000", desc: "Every 3 months" },
                  { label: "WiFi Allowance", value: "P1,000", desc: "Monthly subsidy" },
                  { label: "Medical Reimbursement", value: "P5,000", desc: "Health support" },
                  { label: "Year-End Bonus", value: "Bonus", desc: "Every December" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col p-4 bg-background border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-sm font-medium text-muted-foreground">{item.label}</span>
                    <span className="text-2xl font-bold text-primary mt-1">{item.value}</span>
                    <span className="text-xs text-muted-foreground mt-2">{item.desc}</span>
                  </div>
                ))}
              </div>
            ),
          },
          {
            title: "Leave Entitlement",
            content: (
              <div className="space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { val: "5", unit: "days", lbl: "Paid Leaves/Year" },
                    { val: "2", unit: "days", lbl: "Max Consecutive" },
                    { val: "1", unit: "mo", lbl: "Notice Required" },
                    { val: "1", unit: "yr", lbl: "Service Required" },
                  ].map((s, i) => (
                    <div key={i} className="p-3 text-center border rounded-lg bg-muted/30">
                      <div className="text-2xl font-bold text-primary">{s.val}<span className="text-sm font-normal ml-1 text-muted-foreground">{s.unit}</span></div>
                      <div className="text-[10px] uppercase tracking-wide text-muted-foreground mt-1">{s.lbl}</div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Eligibility</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground list-disc pl-4">
                      <li>Full-time contractor: 8 hrs/day, 5 days/week</li>
                      <li>Completed 1 full year of continuous active service</li>
                      <li>File request at least 1 month in advance (except emergencies)</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">How to File</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground list-disc pl-4">
                      <li>Direct WhatsApp to HR (not the group chat)</li>
                      <li>Format: <strong className="text-foreground">[Your Name] – Leave Request</strong> with dates and reason</li>
                      <li>Attach proof if sick or emergency (supporting docs help approval)</li>
                    </ul>
                  </div>
                </div>
                <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-lg text-amber-700 dark:text-amber-400 text-sm flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div><strong>Year of Stay Reset:</strong> Periods where you were "On Pause" do NOT count toward your Year of Stay and cause your count to reset upon return.</div>
                </div>
              </div>
            ),
          },
          {
            title: "Conversion Rate Policy",
            content: (
              <div className="space-y-4">
                <div className="rounded-md border overflow-hidden">
                  <Table>
                    <TableHeader className="bg-muted/50">
                      <TableRow>
                        <TableHead className="font-semibold">If Foreign Exchange Rate is</TableHead>
                        <TableHead className="font-semibold text-right">Conversion Rate Used</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Lower than ₱56</TableCell>
                        <TableCell className="text-right font-bold text-primary">₱53</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>₱56</TableCell>
                        <TableCell className="text-right font-bold text-primary">₱54</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>₱57</TableCell>
                        <TableCell className="text-right font-bold text-primary">₱55</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <div className="p-3 bg-muted/40 rounded-lg text-xs flex items-center gap-2">
                  <Clock className="w-4 h-4 opacity-50" />
                  Rates are reviewed periodically based on market stability.
                </div>
              </div>
            ),
          },
          {
            title: "Cash Advance Policy",
            content: (
              <div className="space-y-6 text-muted-foreground">
                <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-xl text-amber-700 dark:text-amber-400">
                  <div className="flex gap-2">
                    <Zap className="w-5 h-5 shrink-0" />
                    <div className="text-sm"><strong>Emergency only:</strong> Requests without proof will NOT be processed.</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">Eligibility</h4>
                    <ul className="list-disc pl-5 text-xs space-y-1">
                      <li>Min. 6 months tenure</li>
                      <li>Max. 50% of upcoming payment</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">Regulations</h4>
                    <ul className="list-disc pl-5 text-xs space-y-1">
                      <li>Genuine emergencies only</li>
                      <li>Supporting documents required</li>
                    </ul>
                  </div>
                </div>
                
                <p className="text-[10px] uppercase font-bold text-destructive">Misuse may result in termination.</p>
              </div>
            )
          }
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
                    <li>Navigate to the TalentMucho Dashboard Login Page.</li>
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

export const homeSections: DocGroup[] = [
  {
    title: "GETTING STARTED",
    items: [
      {
        id: "home-welcome",
        label: "Welcome",
        icon: Home,
        sections: [
          {
            title: "Welcome to TalentMucho Documentation",
            content: (
              <div className="space-y-8 py-4">
                <div className="space-y-4 text-center">
                  <h2 className="text-4xl font-extrabold tracking-tight text-primary">TalentMucho Command Center</h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Your complete guide to roles, responsibilities, and operating procedures within the TalentMucho ecosystem.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 border rounded-2xl bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/30 transition-colors group">
                    <BookOpen className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-bold mb-2">Onboarding</h3>
                    <p className="text-sm text-muted-foreground mb-4">Master the foundational expectations and core responsibilities of a Virtual Assistant.</p>
                    <div className="text-xs font-bold text-primary flex items-center gap-1">GO TO ONBOARDING <Zap className="h-3 w-3" /></div>
                  </div>
                  
                  <div className="p-6 border rounded-2xl bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/30 transition-colors group">
                    <ShieldCheck className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-bold mb-2">Executive Assistance</h3>
                    <p className="text-sm text-muted-foreground mb-4">Deep dive into the EA Playbook for managing high-level executives efficiently.</p>
                    <div className="text-xs font-bold text-primary flex items-center gap-1">GO TO EA PLAYBOOK <Zap className="h-3 w-3" /></div>
                  </div>

                  <div className="p-6 border rounded-2xl bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/30 transition-colors group">
                    <Key className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-bold mb-2">Systems & Tools</h3>
                    <p className="text-sm text-muted-foreground mb-4">Learn about the platforms and tools used to keep the operations running smoothly.</p>
                    <div className="text-xs font-bold text-primary flex items-center gap-1">COMING SOON <Clock className="h-3 w-3" /></div>
                  </div>
                </div>

                <div className="bg-muted/30 p-8 rounded-2xl border border-dashed text-center">
                   <p className="text-muted-foreground italic">"Simplicity is the ultimate sophistication. Use these docs to master your craft."</p>
                </div>
              </div>
            )
          }
        ]
      }
    ]
  },
  {
    title: "SOP PLAYBOOK",
    items: [
      {
        id: "sop-intro",
        label: "What is an SOP?",
        icon: FileText,
        sections: [
          {
            title: "Definition & Purpose",
            content: (
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg italic font-serif leading-relaxed text-foreground/80">
                  &quot;An SOP is a documented, step-by-step guide that explains exactly how to perform a specific task or process — consistently, correctly, and without needing to ask questions.&quot;
                </p>
                <p className="text-sm">Think of it as a manual for your role. If you were suddenly unavailable, a new VA should be able to pick up your SOP and do your job without missing a beat.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-xl bg-card">
                    <h4 className="font-bold text-foreground mb-2">🎯 Purpose</h4>
                    <ul className="text-xs space-y-1 list-disc pl-4">
                      <li>Tasks done the same way every time</li>
                      <li>Reduce errors and miscommunication</li>
                      <li>Faster new VA training</li>
                      <li>Protect client business processes</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-xl bg-card">
                    <h4 className="font-bold text-foreground mb-2">🏆 Benefits to You</h4>
                    <ul className="text-xs space-y-1 list-disc pl-4">
                      <li>Shows professionalism & ownership</li>
                      <li>Protects you (&quot;I followed the SOP&quot;)</li>
                      <li>Builds credibility with the client</li>
                      <li>Demonstrates initiative & growth</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-xl bg-card">
                    <h4 className="font-bold text-foreground mb-2">⚡ When to Write One</h4>
                    <ul className="text-xs space-y-1 list-disc pl-4">
                      <li>When you start a recurring task</li>
                      <li>When client requests documentation</li>
                      <li>When a process has multiple steps</li>
                      <li>When onboarding a new team member</li>
                    </ul>
                  </div>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary text-sm">
                  <strong className="text-foreground">Your SOP = Your Work Standard.</strong> A well-written SOP protects you, helps your replacement understand your work, and shows your client you are organized and professional.
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "sop-writing",
        label: "How to Write an SOP",
        icon: Pencil,
        sections: [
          {
            title: "The 5-Phase Writing Process",
            content: (
              <div className="space-y-6">
                <div className="flex flex-wrap gap-0 mb-4 overflow-x-auto pb-2">
                  {[
                    { n: "1", label: "Identify the Process", desc: "Pick one task to document" },
                    { n: "2", label: "Do It First", desc: "Perform the task & take notes" },
                    { n: "3", label: "Write the Steps", desc: "Use the Master Template" },
                    { n: "4", label: "Test It", desc: "Follow your own SOP cold" },
                    { n: "5", label: "Submit", desc: "Fill form & send for review" },
                  ].map((step, i, arr) => (
                    <div key={i} className="flex items-center">
                      <div className="text-center min-w-[100px] px-2">
                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center mx-auto mb-2">{step.n}</div>
                        <div className="text-xs font-semibold text-foreground">{step.label}</div>
                        <div className="text-[10px] text-muted-foreground mt-0.5">{step.desc}</div>
                      </div>
                      {i < arr.length - 1 && <div className="text-primary font-bold text-lg mx-1">→</div>}
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {[
                    { n: 1, title: "Identify the Process to Document", sub: "Scope your SOP before writing", body: [
                      "Choose one specific process — not a broad job description. (Good: 'How to upload leads to Mojo Dialer' — Bad: 'How I do my job')",
                      "Make sure you fully understand the process before documenting it.",
                      "Clarify the start and end point of the process.",
                      "Identify all tools needed before writing."
                    ], tip: "One SOP = One Process. If it gets too long, split it into two separate SOPs." },
                    { n: 2, title: "Perform the Task & Capture Notes", sub: "Document as you work, not after", body: [
                      "Do the task while writing down every action you take, no matter how small.",
                      "Take screenshots at every major step — these go in Section 9 (Attachments).",
                      "Note any common errors or issues you encounter — they go in Section 7.",
                      "Record the time it takes. This helps define your KPI in Section 5."
                    ] },
                    { n: 3, title: "Write the SOP Using the Master Template", sub: "Open Google Docs, copy the Master Template", body: [
                      "Fill in the header: SOP Title, Client Name, VA Name, Role, Date Created.",
                      "Write the Purpose (Section 1) in 2–3 sentences. Answer: what and why.",
                      "List all Tools Required (Section 2) — be specific (e.g., 'Mojo Dialer v3', not just 'dialer').",
                      "Write numbered steps in Section 3. Each step = one action. Detailed enough that a new VA can follow without guidance.",
                      "Include Scripts or Templates (Section 4) if any messages or emails are part of the process.",
                      "Define your KPIs (Section 5) — e.g., '100 leads uploaded per shift'.",
                      "Set Quality Standards (Section 6) — what does 'done correctly' look like?",
                      "Fill out Common Issues & Solutions (Section 7) as a table.",
                      "Add Improvement Notes (Section 8) — ideas to make the process better.",
                      "Attach Screenshots and files (Section 9)."
                    ] },
                    { n: 4, title: "Test Your SOP", sub: "Follow your own instructions as if you've never done the task", body: [
                      "Close your SOP, then reopen it fresh. Follow only what's written.",
                      "If you find yourself guessing or needing to fill in gaps — go back and rewrite.",
                      "Ideally, have a teammate test it too (peer review).",
                      "Verify all screenshots match the current state of the tools."
                    ], warn: "The Test is Required. Your Submission Form has a checkbox — 'I have tested this process.' Do not check it unless you actually have." },
                    { n: 5, title: "Submit via the SOP Submission Form", sub: "Complete the form and send the Google Docs link", body: [
                      "Fill out all 5 Sections of the SOP Submission Form completely.",
                      "Paste your Google Docs link — make sure sharing is set to 'Anyone with the link can view.'",
                      "Complete the confirmation checklist (all 5 boxes).",
                      "Submit to HR or your designated AVS email address."
                    ], success: "Once submitted, your SOP will be reviewed by management. You may be asked to revise — this is normal and expected." }
                  ].map((step, i) => (
                    <div key={i} className="border rounded-xl overflow-hidden">
                      <div className="flex items-center gap-4 p-4 bg-muted/20">
                        <div className="w-9 h-9 rounded-lg bg-primary text-primary-foreground font-bold flex items-center justify-center flex-shrink-0">{step.n}</div>
                        <div>
                          <div className="font-semibold text-foreground">{step.title}</div>
                          <div className="text-xs text-muted-foreground">{step.sub}</div>
                        </div>
                      </div>
                      <div className="p-4 space-y-2">
                        <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
                          {step.body.map((b, bi) => <li key={bi}>{b}</li>)}
                        </ul>
                        {'tip' in step && step.tip && (
                          <div className="mt-3 p-3 bg-primary/5 border border-primary/20 rounded-lg text-xs text-primary">💡 {step.tip}</div>
                        )}
                        {'warn' in step && step.warn && (
                          <div className="mt-3 p-3 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-lg text-xs text-amber-700 dark:text-amber-400">⚠️ {step.warn}</div>
                        )}
                        {'success' in step && step.success && (
                          <div className="mt-3 p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-lg text-xs text-green-700 dark:text-green-400">✅ {step.success}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "sop-template",
        label: "Template Walkthrough",
        icon: BookOpen,
        sections: [
          {
            title: "Document Header Fields",
            content: (
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">Fill these fields at the very top of your SOP Google Doc.</p>
                <div className="divide-y border rounded-lg overflow-hidden">
                  {[
                    { label: "SOP Title", desc: "The name of the specific process. Be specific. (e.g., 'Lead Extraction & Upload to Mojo Dialer')" },
                    { label: "Client Name", desc: "The full name of your assigned client." },
                    { label: "VA Name", desc: "Your full name as it appears in your contract." },
                    { label: "Role", desc: "Your job title (e.g., Data Entry Specialist, Appointment Setter)." },
                    { label: "Date Created", desc: "The date you first wrote this SOP." },
                    { label: "Last Updated", desc: "Update this every time you revise the SOP." },
                  ].map((f, i) => (
                    <div key={i} className="flex gap-4 px-4 py-3 bg-background hover:bg-muted/20 transition-colors">
                      <div className="w-32 shrink-0 text-sm font-semibold text-foreground">{f.label}</div>
                      <div className="text-sm text-muted-foreground">{f.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            )
          },
          {
            title: "The 9 Template Sections at a Glance",
            content: (
              <div className="rounded-md border overflow-hidden">
                <Table>
                  <TableHeader className="bg-foreground text-background">
                    <TableRow>
                      <TableHead className="text-background font-bold w-8">#</TableHead>
                      <TableHead className="text-background font-bold">Section Name</TableHead>
                      <TableHead className="text-background font-bold">What Goes Here</TableHead>
                      <TableHead className="text-background font-bold text-right">Required?</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { n: 1, name: "Purpose", what: "What the process is and why it matters", req: "Required", reqColor: "text-green-600 dark:text-green-400" },
                      { n: 2, name: "Tools Required", what: "All software, platforms, and accounts used", req: "Required", reqColor: "text-green-600 dark:text-green-400" },
                      { n: 3, name: "Step-by-Step Process", what: "Numbered actions from start to finish", req: "Required", reqColor: "text-green-600 dark:text-green-400" },
                      { n: 4, name: "Scripts / Templates Used", what: "Full message scripts, email templates", req: "If applicable", reqColor: "text-amber-600 dark:text-amber-400" },
                      { n: 5, name: "KPIs Connected", what: "Measurable performance indicators", req: "Required", reqColor: "text-green-600 dark:text-green-400" },
                      { n: 6, name: "Quality Standards", what: "What 'done right' looks like", req: "Required", reqColor: "text-green-600 dark:text-green-400" },
                      { n: 7, name: "Common Issues & Solutions", what: "Issue-solution table", req: "Required", reqColor: "text-green-600 dark:text-green-400" },
                      { n: 8, name: "Improvement Notes", what: "Ideas to make the process better", req: "Recommended", reqColor: "text-amber-600 dark:text-amber-400" },
                      { n: 9, name: "Attachments", what: "Screenshots, screen recordings, files", req: "Required", reqColor: "text-green-600 dark:text-green-400" },
                    ].map((row) => (
                      <TableRow key={row.n}>
                        <TableCell><span className="px-2 py-0.5 bg-primary/10 text-primary rounded text-xs font-bold">{row.n}</span></TableCell>
                        <TableCell className="font-semibold">{row.name}</TableCell>
                        <TableCell className="text-muted-foreground text-sm">{row.what}</TableCell>
                        <TableCell className={`text-right text-xs font-bold ${row.reqColor}`}>{row.req}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )
          }
        ]
      },
      {
        id: "sop-sections",
        label: "All 9 Sections Explained",
        icon: List,
        sections: [
          {
            title: "Deep Dive — Each Section Explained",
            content: (
              <div className="space-y-3">
                {[
                  { emoji: "📌", n: 1, title: "Purpose", color: "border-l-primary bg-primary/5", body: "Write 2–4 sentences explaining (1) what process this SOP covers and (2) why it is important to the client's business. Avoid vague language. Be specific: 'This ensures leads are entered without duplicates, allowing the client to make calls efficiently.'" },
                  { emoji: "🔧", n: 2, title: "Tools Required", color: "border-l-primary bg-primary/5", body: "List every tool, platform, account, or software used. Be specific — don't write 'spreadsheet', write 'Microsoft Excel / Google Sheets'. Consider: CRM, Email Platform, Dialer, Cloud Storage, and client-specific tools." },
                  { emoji: "⚡", n: 3, title: "Step-by-Step Process (Most Important)", color: "border-l-amber-400 bg-amber-50 dark:bg-amber-950/20", body: "Use numbered steps. Each step = ONE action. Start each step with a verb. Be detailed enough that a brand-new VA who has never done this job can follow it without asking anything. Good: '1. Open Mojo Dialer and log in. 2. Click Lists in the top nav. 3. Select Import New List.' Bad: '1. Log in and upload the leads.'" },
                  { emoji: "📝", n: 4, title: "Scripts / Templates Used", color: "border-l-primary bg-primary/5", body: "If your process involves sending emails, messages, or call scripts — paste the full script or template here. This makes the SOP self-contained. If no scripts are used, write 'N/A'." },
                  { emoji: "📊", n: 5, title: "KPIs Connected", color: "border-l-green-500 bg-green-50 dark:bg-green-950/20", body: "Define measurable outcomes. Examples: Calls per day: 100 minimum. Lead upload accuracy: 100% (no duplicates). Response time: within 2 hours. Booking rate: 5 appointments per 100 calls." },
                  { emoji: "🏅", n: 6, title: "Quality Standards", color: "border-l-primary bg-primary/5", body: "Define what 'done correctly' means. Examples: No grammar or spelling errors in client-facing messages. CRM updated within 5 minutes of each call. All leads formatted in correct column order before upload." },
                  { emoji: "⚠️", n: 7, title: "Common Issues & Solutions", color: "border-l-destructive bg-destructive/5", body: "Fill out a table with at least 2–3 rows. Format — Issue: 'Mojo Dialer shows upload failed.' Solution: 'Check that the CSV file has no empty rows in column A. Re-save as .csv UTF-8 format and retry.' This section separates a good SOP from a great one." },
                  { emoji: "💡", n: 8, title: "Improvement Notes", color: "border-l-primary bg-primary/5", body: "Document ideas for making the process faster, more accurate, or more automated. Examples: 'Could automate duplicate checking using Excel COUNTIF function.' 'Mojo has an API — consider bulk import integration in the future.' This shows initiative to the client." },
                  { emoji: "📎", n: 9, title: "Attachments", color: "border-l-primary bg-primary/5", body: "Include screenshots of every key step, screen recordings if helpful, and any supporting files. Insert screenshots directly into the Google Doc below the relevant step. Naming convention: [SOPTitle]_Step[#]_Screenshot.png" },
                ].map((s) => (
                  <div key={s.n} className={`border-l-4 ${s.color} rounded-r-lg p-4`}>
                    <div className="font-semibold text-foreground mb-1">{s.emoji} Section {s.n} — {s.title}</div>
                    <div className="text-sm text-muted-foreground leading-relaxed">{s.body}</div>
                  </div>
                ))}
              </div>
            )
          }
        ]
      },
      {
        id: "sop-submission",
        label: "Submission Form Guide",
        icon: Send,
        sections: [
          {
            title: "Section 1 — VA Information",
            content: (
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">Identifying details — fill accurately.</p>
                <div className="divide-y border rounded-lg overflow-hidden">
                  {[
                    { n: 1, label: "VA Name", desc: "Your full name as in your contract." },
                    { n: 2, label: "Client Name", desc: "The name of your assigned client." },
                    { n: 3, label: "Role", desc: "Your job title under this client." },
                    { n: 4, label: "SOP Title", desc: "Match this exactly to the title at the top of your Google Doc SOP." },
                    { n: 5, label: "Date Completed", desc: "The date you finished writing and testing the SOP (MM/DD/YYYY)." },
                  ].map((f) => (
                    <div key={f.n} className="flex gap-3 p-3 bg-background hover:bg-muted/20 transition-colors">
                      <div className="w-6 h-6 rounded bg-primary/10 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{f.n}</div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">{f.label}</div>
                        <div className="text-xs text-muted-foreground">{f.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          },
          {
            title: "Section 2 — Process Summary",
            content: (
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">Give reviewers context before they open the doc.</p>
                <div className="divide-y border rounded-lg overflow-hidden">
                  {[
                    { n: 6, label: "What process does this SOP cover?", desc: "Write 2–3 sentences describing the process from start to finish. Be specific." },
                    { n: 7, label: "Why is this process important?", desc: "Explain the business value — what breaks if this isn't done correctly?" },
                    { n: 8, label: "What tools are used?", desc: "List each tool on its own bullet point. Same as Section 2 of your SOP Template." },
                  ].map((f) => (
                    <div key={f.n} className="flex gap-3 p-3 bg-background hover:bg-muted/20 transition-colors">
                      <div className="w-6 h-6 rounded bg-primary/10 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{f.n}</div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">{f.label}</div>
                        <div className="text-xs text-muted-foreground">{f.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          },
          {
            title: "Section 3 — Confirmation Checklist",
            content: (
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground font-medium">Do NOT submit until all 5 are true.</p>
                <div className="space-y-2">
                  {[
                    { label: "I have tested this process", desc: "You followed your own SOP from step 1 to the end and confirmed it works." },
                    { label: "Screenshots are included", desc: "Each major step has a screenshot embedded or attached." },
                    { label: "Scripts are attached", desc: "If the process involves any messages, emails, or call scripts, they are included in Section 4." },
                    { label: "KPI is clearly defined", desc: "Section 5 of your SOP has specific, measurable performance indicators." },
                    { label: "This SOP is ready for review", desc: "You are confident the SOP is complete, accurate, and professional." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 p-3 bg-muted/20 border rounded-lg">
                      <div className="w-4 h-4 rounded border-2 border-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-semibold text-foreground">{item.label}</div>
                        <div className="text-xs text-muted-foreground">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          },
          {
            title: "Section 4 — SOP Link Sharing",
            content: (
              <div className="space-y-4">
                <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
                  <li>Open your SOP Google Doc.</li>
                  <li>Click <strong className="text-foreground">Share</strong> (top right) → Change access to <strong className="text-foreground">&quot;Anyone with the link&quot;</strong> → Set to <strong className="text-foreground">Viewer</strong>.</li>
                  <li>Copy the link and paste it in Field 9 of the Submission Form.</li>
                </ul>
                <div className="p-3 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-lg text-amber-700 dark:text-amber-400 text-sm flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span><strong>Broken links will be rejected.</strong> Always test your link in an incognito browser before submitting.</span>
                </div>
              </div>
            )
          },
          {
            title: "Section 5 — Additional Notes",
            content: (
              <div className="p-4 border rounded-lg bg-muted/20 text-sm text-muted-foreground">
                Use this field to share anything the reviewer should know — limitations of the current process, areas where you need guidance, or suggestions for improvement. This is your voice. Use it.
              </div>
            )
          }
        ]
      },
      {
        id: "sop-sample",
        label: "Sample Submission",
        icon: FileText,
        sections: [
          {
            title: "Real Completed Submission Example",
            content: (
              <div className="space-y-6">
                <div className="p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-lg text-green-700 dark:text-green-400 text-sm flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span><strong>This is a real completed submission example.</strong> Use it as your benchmark for what a good SOP submission looks like.</span>
                </div>
                <div className="bg-foreground text-background rounded-xl p-6 font-mono text-xs leading-loose space-y-1">
                  <div className="text-primary/60 font-sans italic border-b border-background/10 pb-2 mb-3 text-[10px] uppercase tracking-widest">Section 1 — VA Information</div>
                  <div><span className="text-muted-foreground">VA Name:</span> <span className="text-blue-300">Honey Faith</span></div>
                  <div><span className="text-muted-foreground">Client Name:</span> <span className="text-blue-300">Sadek</span></div>
                  <div><span className="text-muted-foreground">Role:</span> <span className="text-blue-300">Data Entry Specialist</span></div>
                  <div><span className="text-muted-foreground">SOP Title:</span> <span className="text-blue-300">Lead Extraction & Upload to Mojo Dialer</span></div>
                  <div><span className="text-muted-foreground">Date Completed:</span> <span className="text-blue-300">02/25/2026</span></div>

                  <div className="text-primary/60 font-sans italic border-b border-background/10 pb-2 mb-3 mt-5 text-[10px] uppercase tracking-widest">Section 2 — Process Summary</div>
                  <div className="text-muted-foreground">What does this cover?</div>
                  <div className="pl-4 text-blue-300">Extracting leads from the client&apos;s Excel sheet, uploading them into Mojo Dialer, and updating the client&apos;s feedback sheet for follow-up.</div>
                  <div className="text-muted-foreground mt-2">Why is it important?</div>
                  <div className="pl-4 text-blue-300">Ensures all leads are entered accurately and organized so the client can call them efficiently. Prevents errors, duplicates, and miscommunication.</div>
                  <div className="text-muted-foreground mt-2">Tools used:</div>
                  <div className="pl-4 text-blue-300">Microsoft Excel / Google Sheets · Mojo Dialer · Google Drive · Gmail</div>

                  <div className="text-primary/60 font-sans italic border-b border-background/10 pb-2 mb-3 mt-5 text-[10px] uppercase tracking-widest">Section 3 — Checklist</div>
                  <div className="text-blue-300">✓ I have tested this process</div>
                  <div className="text-blue-300">✓ Screenshots are included</div>
                  <div className="text-blue-300">✓ Scripts are attached (email template)</div>
                  <div className="text-blue-300">✓ KPI is clearly defined</div>
                  <div className="text-blue-300">✓ This SOP is ready for review</div>

                  <div className="text-primary/60 font-sans italic border-b border-background/10 pb-2 mb-3 mt-5 text-[10px] uppercase tracking-widest">Section 5 — Additional Notes</div>
                  <div className="text-blue-300 italic">The process is fully tested and ready. Possible improvement: automate duplicate checking or consider Mojo API integration for faster uploads.</div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">🔍 What Makes This a Good Submission</h4>
                  <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
                    <li><strong className="text-foreground">Specific SOP Title</strong> — &quot;Lead Extraction & Upload to Mojo Dialer&quot; tells you exactly what the process is.</li>
                    <li><strong className="text-foreground">Clear process summary</strong> — Explains what happens and in what order without being vague.</li>
                    <li><strong className="text-foreground">Strong importance statement</strong> — Connects accuracy to a business outcome (efficient calls, no duplicates).</li>
                    <li><strong className="text-foreground">All tools listed</strong> — Even optional tools like Gmail are noted.</li>
                    <li><strong className="text-foreground">All 5 checkboxes confirmed</strong> — No shortcuts taken.</li>
                    <li><strong className="text-foreground">Value-adding improvement note</strong> — Proposes automation as a future enhancement. This shows initiative.</li>
                  </ul>
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "sop-checklist",
        label: "Pre-Submit Checklist",
        icon: CheckCircle,
        sections: [
          {
            title: "SOP Document Checklist",
            content: (
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground mb-3">Inside your Google Doc — every box must be true.</p>
                {[
                  "Header is complete — SOP Title, Client, VA Name, Role, Date Created, Last Updated all filled in.",
                  "Section 1 (Purpose) is written in at least 2 clear sentences covering WHAT and WHY.",
                  "Section 2 (Tools) lists every tool with full names — no vague entries like 'spreadsheet'.",
                  "Section 3 (Steps) uses numbered, verb-first steps. Detailed enough for a new VA to follow alone.",
                  "Section 4 (Scripts) contains full scripts, or 'N/A' if none apply.",
                  "Section 5 (KPIs) has at least 2 measurable performance indicators with numbers.",
                  "Section 6 (Quality Standards) defines what 'done correctly' looks like — not vague.",
                  "Section 7 (Issues & Solutions) table has at least 2 rows filled in.",
                  "Section 8 (Improvement Notes) has at least one idea documented.",
                  "Section 9 (Attachments) has screenshots or a note explaining where they are.",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 p-3 bg-muted/20 border rounded-lg text-sm">
                    <div className="w-4 h-4 rounded border-2 border-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            )
          },
          {
            title: "Submission Form Checklist",
            content: (
              <div className="space-y-4">
                <div className="space-y-2">
                  {[
                    "All 5 VA Information fields are filled in accurately.",
                    "Process Summary (Fields 6–8) is complete with specific, detailed answers.",
                    "All 5 confirmation checkboxes are genuinely true — not just ticked to pass.",
                    "Google Docs link is pasted and tested in incognito mode — it works without login.",
                    "Additional Notes field has been used to share any relevant context or suggestions.",
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 p-3 bg-muted/20 border rounded-lg text-sm">
                      <div className="w-4 h-4 rounded border-2 border-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-lg text-green-700 dark:text-green-400 text-sm flex items-start gap-2">
                  <Zap className="w-4 h-4 shrink-0 mt-0.5" />
                  <span><strong>Ready to submit?</strong> If every box above is true, your SOP is ready. Submit to your designated HR or AVS email address with the subject: <strong>[Your Name] — SOP Submission — [SOP Title]</strong></span>
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "sop-tips",
        label: "Tips & Common Mistakes",
        icon: Zap,
        sections: [
          {
            title: "Best Practices",
            content: (
              <div className="space-y-2">
                {[
                  { tip: "Write as you work, not after.", desc: "Capture steps live to avoid forgetting details." },
                  { tip: "One process, one SOP.", desc: "Don't combine multiple processes into one document." },
                  { tip: "Use simple language.", desc: "Write for someone who has never done this job before." },
                  { tip: "Start every step with a verb.", desc: "'Click', 'Open', 'Select', 'Type', 'Verify'." },
                  { tip: "Number every step.", desc: "Makes it easy to reference ('See Step 4')." },
                  { tip: "Take screenshots as you go.", desc: "Don't rely on memory or recreating them later." },
                  { tip: "Update your SOP when the process changes.", desc: "An outdated SOP is worse than none." },
                ].map((item, i) => (
                  <div key={i} className="p-3 border rounded-lg bg-primary/5 text-sm">
                    <span className="font-semibold text-foreground">{item.tip}</span>{" "}
                    <span className="text-muted-foreground">{item.desc}</span>
                  </div>
                ))}
              </div>
            )
          },
          {
            title: "Common Mistakes to Avoid",
            content: (
              <div className="space-y-3">
                <div className="space-y-2">
                  {[
                    { mistake: "Too vague.", desc: "'Log in and do the task' is not a step. Be specific." },
                    { mistake: "No screenshots.", desc: "Every SOP that involves a software tool needs visual proof." },
                    { mistake: "Missing KPIs.", desc: "Vague quality expectations like 'do it well' are not acceptable." },
                    { mistake: "Not tested.", desc: "Submitting an SOP you haven't followed yourself." },
                    { mistake: "Wrong sharing settings.", desc: "Google Doc is restricted — reviewers can't open it." },
                    { mistake: "Incomplete submission form.", desc: "Skipping fields or leaving answers blank." },
                    { mistake: "Combining multiple processes.", desc: "Keep each SOP focused on exactly one process." },
                  ].map((item, i) => (
                    <div key={i} className="p-3 border border-destructive/20 rounded-lg bg-destructive/5 text-sm flex gap-2">
                      <span className="text-destructive">✗</span>
                      <span><strong className="text-destructive">{item.mistake}</strong>{" "}<span className="text-muted-foreground">{item.desc}</span></span>
                    </div>
                  ))}
                </div>
                <div className="p-6 border rounded-xl bg-muted/20 text-center">
                  <p className="text-lg font-serif italic text-foreground/80 leading-relaxed">&quot;If I handed this SOP to a brand-new VA who has never heard of this process, could they complete the task without asking me a single question?&quot;</p>
                  <p className="text-sm text-muted-foreground mt-3">If the answer is yes — your SOP is ready. If the answer is no — go back and fill in the gaps.</p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-lg text-green-700 dark:text-green-400 text-sm flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span><strong>Your SOP is your professional signature.</strong> It shows you take ownership of your role, you care about quality, and you are invested in the client's success. Do it right — every time.</span>
                </div>
              </div>
            )
          }
        ]
      }
    ]
  }
];

export const assistanceSections: DocGroup[] = [
  {
    title: "OPERATING GUIDE",
    items: [
      {
        id: "ea-objective",
        label: "Core Objective",
        icon: Target,
        sections: [
          {
            title: "EXECUTIVE ASSISTANT PLAYBOOK",
            content: (
              <div className="space-y-6">
                <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl text-center">
                  <h2 className="text-3xl font-bold text-primary mb-2">EXECUTIVE ASSISTANT PLAYBOOK</h2>
                  <p className="text-lg text-muted-foreground font-medium">Role Overview & Operating Guide</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    1. THE EA’S CORE OBJECTIVE
                  </h3>
                  <p className="text-lg leading-relaxed">Your job is to protect the CEO’s time, energy, and focus so they can prioritize revenue, leadership, and high-impact decisions.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="p-4 border rounded-lg bg-card shadow-sm">
                      <h4 className="font-bold text-primary mb-2">Protect the CEO’s Time</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Filter requests.</li>
                        <li>Prioritize what truly matters.</li>
                        <li>Say no (kindly) when needed.</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg bg-card shadow-sm">
                      <h4 className="font-bold text-primary mb-2">Calendar Efficiency</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Clear, detailed, and organized.</li>
                        <li>No missing information.</li>
                        <li>No surprises.</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg bg-card shadow-sm">
                      <h4 className="font-bold text-primary mb-2">Clear Communication</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Every email gets a response.</li>
                        <li>Clear “Yes” or respectful “Not at this time.”</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg bg-card shadow-sm">
                      <h4 className="font-bold text-primary mb-2">Be Proactive</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Anticipate needs.</li>
                        <li>Think ahead (hour → day → week → quarter).</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-dashed">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <CreditCard className="h-4 w-4 text-primary" />
                      Prioritize Revenue
                    </h4>
                    <p className="text-sm">Health first. Client commitments next. Revenue-producing activities always take priority.</p>
                  </div>

                  <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Capture Preferences
                    </h4>
                    <p className="text-sm italic">Ask once. Save it. Reference it. Never repeat unnecessary questions.</p>
                  </div>
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "ea-responsibilities",
        label: "Responsibilities",
        icon: List,
        sections: [
          {
            title: "Key Responsibilities",
            content: (
              <div className="space-y-6">
                <p className="text-lg">You are the buffer between chaos and clarity. You are responsible for:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    "Email & Communication Filtering",
                    "Calendar & Meeting Management",
                    "Travel Planning",
                    "Event & Speaking Coordination",
                    "Inbox Processing",
                    "Personal Appointments",
                    "Networking Coordination",
                    "Project Tracking",
                    "Financial Monitoring",
                    "Confidentiality",
                    "Team Liaison Communication",
                    "Problem Prevention"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 p-3 border rounded-md bg-background text-sm font-medium">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "ea-cadence",
        label: "Task Cadence",
        icon: Clock,
        sections: [
          {
            title: "3. TASK CADENCE (Daily / Weekly / Monthly)",
            content: (
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-primary border-b pb-2">DAILY RESPONSIBILITIES</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                        <Coffee className="h-4 w-4" /> Morning (Start of Day)
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
                        <li><strong>Review today’s calendar</strong> (every event). Ensure: Title, Location, Agenda, Contact info, Confirmed attendees.</li>
                        <li><strong>Process CEO inbox</strong>. Goal: Inbox at 0 by 10 AM (and again by 5 PM).</li>
                        <li>Process your inbox & review SMS (10 AM).</li>
                        <li>Add all requests to your to-do list.</li>
                        <li>Update Admin Meeting agenda & prepare for meetings.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                        <Zap className="h-4 w-4" /> During the Day
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li>Schedule requested meetings & confirm engagements.</li>
                        <li>Book travel & handle document signatures.</li>
                        <li>Complete Slack/Voxer/SMS requests.</li>
                        <li>Briefly review the calendar 6 weeks ahead.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                        <Clock className="h-4 w-4" /> End of Day (Sign Off)
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li>Inbox back to zero & address all open threads.</li>
                        <li>Write notes on unfinished items.</li>
                        <li>Prepare tomorrow’s to-do list & review SMS (4 PM).</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 border rounded-xl bg-muted/10">
                    <h3 className="font-bold text-primary mb-3">WEEKLY RESPONSIBILITIES</h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      <li>Audit CEO calendar 6 weeks ahead.</li>
                      <li>Review client programs & upcoming travel.</li>
                      <li>Weekly meetings with CEO's spouse (calendar review).</li>
                      <li><strong>On Fridays:</strong> Audit next week’s meetings thoroughly.</li>
                    </ul>
                  </div>
                  <div className="p-5 border rounded-xl bg-muted/10">
                    <h3 className="font-bold text-primary mb-3">MONTHLY / QUARTERLY</h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      <li><strong>Monthly:</strong> Review travel 2 months ahead & suspense reports.</li>
                      <li><strong>Quarterly:</strong> Schedule Family Boardroom Meeting & spouse retreats.</li>
                      <li><strong>Annual:</strong> Dentist appointments & recurring personal obligations.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "ea-meetings",
        label: "Admin Meetings",
        icon: Users,
        sections: [
          {
            title: "Admin Meeting Structure",
            content: (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1 p-4 bg-primary/5 border border-primary/10 rounded-lg">
                    <h4 className="font-bold text-primary mb-1">Frequency</h4>
                    <p className="text-sm">4-6 weeks: Daily</p>
                    <p className="text-sm">After 6 weeks: 3x/week</p>
                    <p className="text-sm">After 3 months: Weekly</p>
                  </div>
                  <div className="flex-1 p-4 bg-primary/5 border border-primary/10 rounded-lg">
                    <h4 className="font-bold text-primary mb-1">Title Format</h4>
                    <code className="text-xs bg-background p-1 block border rounded mt-1">
                      Admin Meeting – [Your Name] & CEO – [Date]
                    </code>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-foreground">Agenda Structure (In Order):</h4>
                  <ol className="list-decimal pl-5 space-y-3">
                    <li className="text-sm"><strong>Meeting Action Items</strong> (from prior meetings)</li>
                    <li className="text-sm"><strong>Calendar Review</strong> (screen shared)</li>
                    <li className="text-sm"><strong>Follow-ups</strong> from Previous Meetings</li>
                    <li className="text-sm"><strong>CEO Agenda</strong> (his priorities)</li>
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

export const promptEngineeringSections: DocGroup[] = [
  {
    title: "PROMPT ENGINEERING",
    items: [
      {
        id: "pe-intro",
        label: "What is Prompt Engineering?",
        icon: Globe,
        sections: [
          {
            title: "Overview",
            content: (
              <div className="space-y-4 text-muted-foreground">
                <p>Prompt engineering is the practice of designing and optimizing prompts to efficiently interact with large language models (LLMs). It involves much more than simply asking a question—it's about providing the right context, instructions, and structure.</p>
                <div className="p-4 bg-muted/30 border border-primary/20 rounded-lg">
                  <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                    <Zap className="h-4 w-4 text-primary" /> Why it matters
                  </h4>
                  <ul className="text-sm space-y-2 list-disc pl-4">
                    <li>Maximizes the quality and relevance of AI-generated responses.</li>
                    <li>Reduces hallucinations and factual errors.</li>
                    <li>Saves time by minimizing back-and-forth prompt iterations.</li>
                  </ul>
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "pe-best-practices",
        label: "Best Practices",
        icon: Target,
        sections: [
          {
            title: "Core Framework",
            content: (
              <div className="space-y-6 text-muted-foreground">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-xl">
                    <h4 className="font-bold text-foreground mb-2">1. Be Specific & Clear</h4>
                    <p className="text-sm">Avoid vague instructions. Clearly define the task, format, and tone expected in the output.</p>
                  </div>
                  <div className="p-4 border rounded-xl">
                    <h4 className="font-bold text-foreground mb-2">2. Provide Context</h4>
                    <p className="text-sm">Give the model the necessary background info. The more context, the more accurate the response.</p>
                  </div>
                  <div className="p-4 border rounded-xl">
                    <h4 className="font-bold text-foreground mb-2">3. Define the Persona</h4>
                    <p className="text-sm">Ask the model to act as an expert (e.g., "Act as a senior copywriter...").</p>
                  </div>
                  <div className="p-4 border rounded-xl">
                    <h4 className="font-bold text-foreground mb-2">4. Use Examples</h4>
                    <p className="text-sm">Show, don't just tell. Providing clear formatting examples sets a strong pattern for the model to follow.</p>
                  </div>
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "pe-techniques",
        label: "Prompting Techniques",
        icon: Zap,
        sections: [
          {
            title: "Common Strategies",
            content: (
              <div className="space-y-6 text-muted-foreground">
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-foreground border-l-4 border-primary pl-4">Zero-Shot Prompting</h4>
                  <p className="text-sm">Asking a model to perform a task without providing any examples. Best for simple, straightforward tasks.</p>
                  <p className="p-4 bg-muted/40 font-mono text-xs rounded-lg border text-foreground">Extract the dates from this text: "The meeting is on June 12th and the launch is July 1st."</p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-foreground border-l-4 border-primary pl-4">Few-Shot Prompting</h4>
                  <p className="text-sm">Providing a few examples within the prompt to guide the model's output formatting and logic.</p>
                  <div className="p-4 bg-muted/40 font-mono text-xs rounded-lg border space-y-2 text-foreground">
                    <p>Great product ={">"} Positive</p>
                    <p>Terrible support ={">"} Negative</p>
                    <p>Okay experience ={">"} Neutral</p>
                    <p>I loved the app ={">"} [Model evaluates this]</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-foreground border-l-4 border-primary pl-4">Chain of Thought</h4>
                  <p className="text-sm">Prompting the model to explain its reasoning step-by-step before outputting the final answer. E.g., adding "Let's think step by step".</p>
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "pe-strategies",
        label: "Prompt Strategies",
        icon: List,
        sections: [
          {
            title: "1. Set Clear Goals and Objectives",
            content: (
              <div className="space-y-4">
                <div className="rounded-md border overflow-hidden">
                  <Table>
                    <TableHeader className="bg-muted/50">
                      <TableRow>
                        <TableHead className="font-semibold text-foreground">Tactic</TableHead>
                        <TableHead className="font-semibold text-foreground">Prompt Example</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium text-foreground">Use action verbs to specify the desired action</TableCell>
                        <TableCell className="text-muted-foreground italic text-sm">"Write a bulleted list that summarizes the key findings of the attached research paper"</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium text-foreground">Define the desired length and format of the output</TableCell>
                        <TableCell className="text-muted-foreground italic text-sm">"Compose a 500-word essay discussing the impact of climate change on coastal communities."</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium text-foreground">Specify the target audience</TableCell>
                        <TableCell className="text-muted-foreground italic text-sm">"Write a product description for a new line of organic skincare products, targeting young adults concerned with sustainability."</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            )
          },
          {
            title: "2. Provide Context and Background",
            content: (
              <div className="space-y-4">
                <div className="rounded-md border overflow-hidden">
                  <Table>
                    <TableHeader className="bg-muted/50">
                      <TableRow>
                        <TableHead className="font-semibold text-foreground">Tactic</TableHead>
                        <TableHead className="font-semibold text-foreground">Prompt Example</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium text-foreground">Include relevant facts and data</TableCell>
                        <TableCell className="text-muted-foreground italic text-sm">"Given that global temperatures have risen by 1 degree Celsius since the pre-industrial era, discuss the potential consequences for sea level rise."</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium text-foreground">Reference specific sources or documents</TableCell>
                        <TableCell className="text-muted-foreground italic text-sm">"Based on the attached financial report, analyze the company's profitability over the past five years."</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium text-foreground">Define key terms and concepts</TableCell>
                        <TableCell className="text-muted-foreground italic text-sm">"Explain the concept of quantum computing in simple terms, suitable for a non-technical audience."</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            )
          },
          {
            title: "3. Use Few-Shot Prompting",
            content: (
              <div className="space-y-4">
                <div className="rounded-md border overflow-hidden">
                  <Table>
                    <TableHeader className="bg-muted/50">
                      <TableRow>
                        <TableHead className="font-semibold text-foreground">Tactic</TableHead>
                        <TableHead className="font-semibold text-foreground">Prompt Example</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium text-foreground">Provide a few examples of desired input-output pairs</TableCell>
                        <TableCell className="text-muted-foreground italic text-sm">Input: "Cat" Output: "A small furry mammal with whiskers." Input: "Dog" Output: "A domesticated canine known for its loyalty." Prompt: "Elephant"</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium text-foreground">Demonstrate the desired style or tone</TableCell>
                        <TableCell className="text-muted-foreground italic text-sm">Example 1 (humorous): "The politician's speech was so dull, it could cure insomnia." Example 2 (formal): "The dignitary delivered an address..." Prompt: "Write a sentence describing the comedian's stand-up routine."</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium text-foreground">Show the desired level of detail</TableCell>
                        <TableCell className="text-muted-foreground italic text-sm">Example 1 (brief): "The movie was about a young boy..." Example 2 (detailed): "The science fiction film follows the story of Elliot..." Prompt: "Summarize the plot of the novel you just finished reading."</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            )
          },
          {
            title: "4. Be Specific",
            content: (
              <div className="space-y-4">
                <div className="rounded-md border overflow-hidden">
                  <Table>
                    <TableHeader className="bg-muted/50">
                      <TableRow>
                        <TableHead className="font-semibold text-foreground">Tactic</TableHead>
                        <TableHead className="font-semibold text-foreground">Prompt Example</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium text-foreground">Use precise language and avoid ambiguity</TableCell>
                        <TableCell className="text-muted-foreground italic text-sm">Instead of: "Write something about climate change," use: "Write a persuasive essay arguing for the implementation of stricter carbon emission regulations."</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium text-foreground">Quantify your requests whenever possible</TableCell>
                        <TableCell className="text-muted-foreground italic text-sm">Instead of: "Write a long poem," use: "Write a sonnet with 14 lines that explores themes of love and loss."</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium text-foreground">Break down complex tasks into smaller steps</TableCell>
                        <TableCell className="text-muted-foreground italic text-sm">Instead of: "Create a marketing plan," use: "1. Identify target audience. 2. Develop key messages. 3. Choose channels."</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            )
          },
          {
            title: "5. Iterate and Experiment",
            content: (
              <div className="space-y-4">
                <div className="rounded-md border overflow-hidden">
                  <Table>
                    <TableHeader className="bg-muted/50">
                      <TableRow>
                        <TableHead className="font-semibold text-foreground">Tactic</TableHead>
                        <TableHead className="font-semibold text-foreground">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium text-foreground">Try different phrasings and keywords</TableCell>
                        <TableCell className="text-muted-foreground text-sm">Rephrase your prompt using synonyms or alternative sentence structures.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium text-foreground">Adjust the level of detail and specificity</TableCell>
                        <TableCell className="text-muted-foreground text-sm">Add or remove information to fine-tune the output.</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium text-foreground">Test different prompt lengths</TableCell>
                        <TableCell className="text-muted-foreground text-sm">Experiment with both shorter and longer prompts to find the optimal balance.</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            )
          },
          {
            title: "6. Leverage Chain of Thought",
            content: (
              <div className="space-y-4">
                <div className="rounded-md border overflow-hidden">
                  <Table>
                    <TableHeader className="bg-muted/50">
                      <TableRow>
                        <TableHead className="font-semibold text-foreground">Tactic</TableHead>
                        <TableHead className="font-semibold text-foreground">Prompt Example</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium text-foreground">Encourage step-by-step reasoning</TableCell>
                        <TableCell className="text-muted-foreground italic text-sm">"Solve this problem step-by-step: John has 5 apples, he eats 2... Step 1: John starts with 5 apples. Step 2: eats 2..."</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium text-foreground">Ask the model to explain its reasoning</TableCell>
                        <TableCell className="text-muted-foreground italic text-sm">"Explain your thought process in determining the sentiment of this movie review: 'The acting was superb...'"</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium text-foreground">Guide through a logical sequence</TableCell>
                        <TableCell className="text-muted-foreground italic text-sm">"To classify this email as spam... consider: 1. Is sender known? 2. Subject keywords? 3. Offer too good to be true?"</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg text-sm text-primary">
                  <p><strong>Google Cloud Tip:</strong> For further guidance, explore the <a href="https://cloud.google.com/blog/products/ai-machine-learning/five-best-practices-for-prompt-engineering" target="_blank" rel="noopener noreferrer" className="underline font-bold">Five Best Practices for Prompt Engineering</a> on Google Cloud.</p>
                </div>
              </div>
            )
          }
        ]
      },
      {
        id: "pe-use-cases",
        label: "Use Cases & Examples",
        icon: FileText,
        sections: [
          {
            title: "Language & Text Generation",
            content: (
              <div className="space-y-6 text-muted-foreground">
                <p>Prompt engineering helps produce customized and relevant output. Here are specific examples:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-xl bg-muted/10 space-y-2">
                    <h4 className="font-bold text-foreground">Creative Writing</h4>
                    <p className="text-xs">Specify genre, tone, style, and plot points to guide the narrative.</p>
                    <div className="p-3 bg-background border rounded-lg font-mono text-xs text-primary/80">"Write a short story about a young woman who discovers a magical portal in her attic."</div>
                  </div>
                  <div className="p-4 border rounded-xl bg-muted/10 space-y-2">
                    <h4 className="font-bold text-foreground">Summarization</h4>
                    <p className="text-xs">Provide text and instruct the AI to generate concise summaries.</p>
                    <div className="p-3 bg-background border rounded-lg font-mono text-xs text-primary/80">"Summarize the main points of the following news article on climate change."</div>
                  </div>
                  <div className="p-4 border rounded-xl bg-muted/10 space-y-2">
                    <h4 className="font-bold text-foreground">Translation</h4>
                    <p className="text-xs">Specify source and target languages to preserve meaning.</p>
                    <div className="p-3 bg-background border rounded-lg font-mono text-xs text-primary/80">"Translate the following text from English to Spanish: 'The quick brown fox...'"</div>
                  </div>
                  <div className="p-4 border rounded-xl bg-muted/10 space-y-2">
                    <h4 className="font-bold text-foreground">Dialogue</h4>
                    <p className="text-xs">Simulate conversations for chatbots or roleplay.</p>
                    <div className="p-3 bg-background border rounded-lg font-mono text-xs text-primary/80">"You are a friendly chatbot helping users troubleshoot... Respond to: 'My computer won't turn on.'"</div>
                  </div>
                </div>
              </div>
            )
          },
          {
            title: "Question Answering",
            content: (
               <div className="space-y-4 text-muted-foreground">
                  <div className="space-y-3">
                    <div className="p-4 border-l-4 border-primary bg-muted/10 rounded-r-xl">
                      <h4 className="font-bold text-foreground">Open-Ended & Specific Questions</h4>
                      <p className="text-sm mt-1 mb-2">Target comprehensive answers or precise information retrieval.</p>
                      <ul className="space-y-2 font-mono text-xs">
                        <li className="p-2 bg-background border rounded text-primary/80">"Explain the concept of quantum computing and its impact..."</li>
                        <li className="p-2 bg-background border rounded text-primary/80">"According to the provided text, what are the main causes..."</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 border-l-4 border-primary bg-muted/10 rounded-r-xl">
                      <h4 className="font-bold text-foreground">Hypothetical & Opinion-Based</h4>
                      <p className="text-sm mt-1 mb-2">Explore situations requiring reasoning and justification.</p>
                      <ul className="space-y-2 font-mono text-xs">
                        <li className="p-2 bg-background border rounded text-primary/80">"What would happen if humans could travel at the speed of light?"</li>
                        <li className="p-2 bg-background border rounded text-primary/80">"Do you believe AI will surpass human intelligence? Why?"</li>
                      </ul>
                    </div>
                  </div>
               </div>
            )
          },
          {
            title: "Code Generation",
            content: (
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-muted-foreground">
                  <div className="p-4 border rounded-xl flex flex-col gap-2 relative overflow-hidden group">
                     <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                     <h4 className="font-bold text-foreground">Code Completion</h4>
                     <p className="text-xs">"Write a Python function to calculate the factorial of a given number."</p>
                  </div>
                  <div className="p-4 border rounded-xl flex flex-col gap-2 relative overflow-hidden group">
                     <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
                     <h4 className="font-bold text-foreground">Code Translation</h4>
                     <p className="text-xs">"Translate the following Python code to JavaScript: def greet(name)..."</p>
                  </div>
                  <div className="p-4 border rounded-xl flex flex-col gap-2 relative overflow-hidden group">
                     <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
                     <h4 className="font-bold text-foreground">Code Optimization</h4>
                     <p className="text-xs">"Optimize the following Python code to reduce its execution time."</p>
                  </div>
                  <div className="p-4 border rounded-xl flex flex-col gap-2 relative overflow-hidden group">
                     <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
                     <h4 className="font-bold text-foreground">Code Debugging</h4>
                     <p className="text-xs">"Debug the following Java code and explain why it is throwing a NullPointerException."</p>
                  </div>
               </div>
            )
          },
          {
             title: "Image Generation",
             content: (
                <div className="space-y-4 text-muted-foreground">
                   <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                       <dt className="font-bold text-foreground flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary/80"></div>Photorealistic</dt>
                       <dd className="text-xs">Images describing lighting, scenery, and subjects: <br/><code className="text-primary mt-1 block bg-primary/5 p-2 rounded">"A photorealistic image of a sunset over the ocean with palm trees silhouetted..."</code></dd>
                     </div>
                     <div className="space-y-2">
                       <dt className="font-bold text-foreground flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary/80"></div>Artistic & Abstract</dt>
                       <dd className="text-xs">Specify techniques or emotional concepts: <br/><code className="text-primary mt-1 block bg-primary/5 p-2 rounded">"An impressionist painting of a bustling city street..."</code></dd>
                     </div>
                     <div className="space-y-2 md:col-span-2">
                       <dt className="font-bold text-foreground flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-primary/80"></div>Image Editing</dt>
                       <dd className="text-xs">Provide an image and specify modification instructions: <br/><code className="text-primary mt-1 block bg-primary/5 p-2 rounded">"Change the background of this photo to a starry night sky and add a full moon."</code></dd>
                     </div>
                   </dl>
                </div>
             )
          }
        ]
      }
    ]
  }
];


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
