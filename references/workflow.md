# Production Workflow

This workflow turns a vague ad request into a reviewable HyperFrames production. Follow it in order for new videos. For edits, change only the affected stage.

The default creative direction is a black-background cinematic metaphor film. Do not draw the surface topic. Extract the essence of the article, theme, product, or argument, then build a restrained symbol that carries the point.

New video work is two-phase: first produce a brief/design proposal and wait for user confirmation; only then produce images, HyperFrames source, snapshots, renders, and review artifacts.

## 1. Intake

Capture the minimum viable production brief:

- Source article, theme, or product idea.
- Goal: what should the viewer do after watching?
- Audience: who is this for?
- Platform: YouTube, Shorts, LinkedIn, landing page hero, paid ad, internal demo.
- Aspect ratio and resolution: default to 16:9 1920x1080 unless the platform implies otherwise.
- Duration: default to 10-15 seconds for promo/kinetic typography.
- Product or offer: what is being promoted?
- Proof: what can be truthfully claimed?
- Style: default to black cinematic metaphor unless the user explicitly overrides it.
- Assets: logo, screenshots, product footage, audio, fonts, brand colors.
- Hard constraints: required text, forbidden claims, legal copy, language, accessibility.

When details are missing, write assumptions instead of stalling. Ask only if the missing detail changes the whole production.

## 1.5. Essence Extraction

Before design, extract:

- Core viewpoint.
- Largest conflict.
- Emotional center.
- The keyword that deserves visual amplification.
- A visual metaphor that can carry the promo.

Translate abstract meaning into one restrained visual symbol:

- AI replacement -> erased human silhouette.
- Anxiety -> a thin line about to snap.
- Time -> countdown suspended in darkness.
- Growth -> micro-light inside a crack.
- Information overload -> data fragments pulled into a black void.
- Long-termism -> a single distant lamp.
- Platform migration -> black obelisk or data tower.
- Automation -> documents entering a silent machine.

Reject literal surface drawings unless the user explicitly asks for them.

## 2. Brief Design Proposal

Before any implementation, produce `BRIEF_DESIGN_PROPOSAL.md` or the equivalent response structure:

- Essence and metaphor.
- Structure choice.
- Platform, aspect ratio, pixel size, duration, FPS, safe margins.
- Image generation decision.
- Typography, layout, overflow handling, and mobile crop handling.
- Motion plan and risk gates.

Stop here and ask for confirmation. Do not generate images or write composition code until the user confirms.

## 3. Design System

The design system prevents style drift.

Define:

- Background and foreground color. Default to `#050505`, white/gray, and restrained warm gold.
- Accent color and whether any warm rim glow is allowed. Avoid colorful gradients by default.
- Display and body typography.
- Safe margins.
- Layout grid or placement logic.
- Component patterns such as title card, product frame, proof stat, and CTA.
- Motion personality.
- Do and don't rules.
- The central metaphor symbol and how it is lit.
- Any generated image assets needed before HyperFrames composition.

If the user's product already has a brand system, respect it only where it does not destroy the requested cinematic metaphor. If not, use the strict house style and document the choice.

## 4. Storyboard And Copy

For ads, script is compression. Put copy directly in the storyboard so text, timing, layout, and motion stay together.

Default short ad structures:

```text
10s: Hook -> Tension -> Metaphor Reveal -> CTA
15s: Hook -> Tension -> Metaphor Reveal -> Proof -> CTA
30s: Pattern interrupt -> Conflict -> Metaphor Reveal -> Proof -> Outcome -> CTA
```

For no-voiceover videos, script means screen text and timing. Every beat should have one job.

Choose structure by material:

- Center symbol for trends, insight, AI, platform, or philosophy.
- Huge title for conflict, suspense, emotion, or sharp viewpoint.
- Person anchor for tutorial, interview, personal brand, or methodology.
- Huge number for growth, milestone, or data shock.

## 5. Storyboard Detail

The storyboard is where direction happens. Do not skip it.

Every beat should specify:

- Start and end time.
- Main message.
- Hero frame timestamp.
- Metaphor role.
- Layout and hierarchy.
- Motion.
- Transition out.
- Audio/rhythm note.
- Quality risk.

The hero frame is the timestamp where the scene best communicates its idea. If that frame is weak as a still image, the scene is not ready for animation.

## 6. Visual Asset Planning

If the metaphor needs generated bitmap source material, plan images before implementation:

- Center symbol.
- Background texture or atmosphere.
- Optional person/object anchor.
- Any vertical key visual for 9:16 work.
- Any horizontal key visual for 16:9 work.

Generated images should be sparse. Avoid baked-in text unless exact text is required. Compose final titles, captions, and timing in HyperFrames.

## 7. Optional Beat Map

Use `BEAT_MAP.json` when timing matters.

Include:

- FPS.
- Duration.
- Beat/hit timestamps.
- What should happen on each hit.
- Optional narration word timings.

Do not pretend automatic audio analysis has happened unless it actually has. Manual hit maps are acceptable for MVP work.

## 8. Static Build

Build static scene layouts before animation.

Check:

- Copy is legible.
- Visual hierarchy is obvious.
- Safe margins hold.
- Text has max width, max lines, explicit overflow behavior, and stable breakpoints.
- Long words, mixed Chinese/English copy, CTA labels, and subtitles do not escape their containers.
- The composition does not depend on motion to make sense.
- Product or brand appears with enough weight.
- The metaphor can be understood without explanatory icon labels.
- The frame obeys the house style: black, sparse, cinematic, white/gray/warm gold.
- No ordinary illustration, ecommerce banner, icon pile, generic neon tech, multicolor palette, or busy collage appears.

## 9. Motion Build

Add animation only after static layouts are strong.

Motion should:

- Order attention.
- Reveal the metaphor.
- Clarify cause and effect.
- Reinforce audio hits.
- Transition between ideas.
- Avoid decorative noise.

## 10. Validate

Run HyperFrames checks or the closest available substitute:

```bash
npx hyperframes doctor
npx hyperframes lint
npx hyperframes validate
npx hyperframes inspect
npx hyperframes snapshot <composition> --at <times>
```

For dense videos, snapshot hero frames and transition frames. A video can render while still failing visually; snapshots catch this earlier.

## 11. Render And Review

Render a draft before final:

```bash
npx hyperframes render --quality draft --output renders/draft.mp4
npx hyperframes render --quality standard --output renders/review.mp4
```

Use Docker/high quality for final delivery if available and appropriate.

Finish with `REVIEW_REPORT.md`:

- What was produced.
- Which checks passed.
- Which checks could not run.
- Watch notes by time range.
- Remaining risks.
- The next best edit.

## Editing Protocol

When revising, do not rewrite the whole composition unless the user asks for a new direction.

Map feedback to the smallest change:

- "Make it punchier" usually means timing, transition, or copy density.
- "More premium" usually means less clutter, stronger type, longer holds, fewer effects.
- "More clear" usually means script or hierarchy.
- "The product gets lost" means layout, contrast, or product scale.
- "Music doesn't hit" means beat map and timeline positions.

After revising, rerun validation relevant to the changed layer.
