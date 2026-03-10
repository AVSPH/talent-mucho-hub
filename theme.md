Project Theme & Design Guidelines
Design Philosophy: "Content is King." The UI should be invisible, letting the content shine. Style: Minimalist, Precision-oriented, High-performance (Vercel / Geist inspired).

🎨 Core Design Principles
Minimalism: Remove everything that isn't necessary. If it doesn't serve a function, delete it.
** precision**: Pixel-perfect alignment and spacing.
High Contrast: Clear distinction between background, surface, and content.
Subtle Depth: Use borders and subtle shadows instead of heavy drop shadows or glows.
💎 Design Tokens
1. Typography
Font Family: Geist Sans, Inter, or system sans-serif.
Weights:
Regular (400) - Body text
Medium (500) - Interactive elements, subtitles
Semibold (600) - Headers, emphasis
Scale:
text-xs (12px): Metadata, secondary labels
text-sm (14px): UI elements, dense data
text-base (16px): Standard body text
text-lg (18px): Section headers
text-xl (20px)+: Page titles
2. Color System (Monochrome focus)
Backgrounds:
bg-background (White / #000): Main canvas
bg-card (White / #111): Elevated surfaces
bg-muted (#F5F5F5 / #333): Secondary backgrounds, hovers
Borders:
border-border (#EAEAEA / #333): Subtly define structure.
Rule: All distinct areas must have a 1px solid border.
Status Colors:
Success: Blue/Cyan (instead of Green) for a modern tech feel, or standard Green for clarity.
Error: Red (#E00).
Warning: Amber/Yellow.
3. Spacing & Layout
Grid: 4px baseline grid.
Container:
max-w-5xl or max-w-7xl for main content.
Centered by default (mx-auto).
Padding:
Mobile: p-4
Desktop: p-6 or p-8
4. Component Styles
Cards
Style: Flat background, 1px border, subtle shadow.
Radius: rounded-lg (0.5rem / 8px).
Hover: Slight lift (-translate-y-[1px]) and shadow increase, or border color change.
Buttons
Primary:
Background: bg-foreground (Black in light mode, White in dark mode).
Text: text-background.
Hover: opacity-90.
Secondary / Outline:
Background: Transparent.
Border: border-input.
Hover: bg-accent text-accent-foreground.
Ghost:
Background: Transparent.
Hover: bg-muted.
Inputs
Style: Minimal border, no background (or very subtle).
Focus: Ring offset 2px, black ring (light mode) or white ring (dark mode).
Radius: rounded-md (0.375rem / 6px).
🚀 Interaction & Animation
Duration: Fast. duration-150 or duration-200.
Easing: ease-in-out.
Feedback: Every interactive element must have a hover and focus state.
Transitions: Fade-ins for content, slide-ins for panels.
🚫 Anti-Patterns (Do NOT Do)
No Gradients: Avoid heavy gradients on backgrounds or buttons.
No Large Drop Shadows: Avoid "floating" aesthetics unless absolutely necessary for modals.
No Rounded-Full Buttons: Use standard rounded corners (no pill shapes) unless it's a specific tag.
No "Soft" Colors: Stick to high contrast monochrome + functional colors.
Example Usage
<div className="border border-border rounded-lg bg-card text-card-foreground shadow-sm p-6">
  <h2 className="font-semibold text-lg tracking-tight">Project Settings</h2>
  <p className="text-sm text-muted-foreground mt-1">Manage your project configuration.</p>
  <div className="mt-4">
    <Button variant="default">Save Changes</Button>
  </div>
</div>