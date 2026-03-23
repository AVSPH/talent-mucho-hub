import { BookOpen, ShieldCheck, FileText, Clock, Key, Zap, Home, Pencil, Send, AlertTriangle, List, CheckCircle } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DocGroup } from "./types";

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
