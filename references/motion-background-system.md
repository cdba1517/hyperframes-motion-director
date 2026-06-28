# Motion And Background System

Use this when planning generated images, text-over-image layouts, GSAP choreography, or visual review.

## Why Videos Look Weak

Most weak motion videos fail for the same reasons:

- Text floats on a flat or generic background.
- The background reads as wallpaper instead of a stage for the idea.
- Motion adds activity but does not guide attention.
- Too many elements compete for hero status.
- Paused hold frames lack a clear message.
- Important text is placed in a safe lower area even when it should dominate the first attention zone.
- Motion is only a slide entrance, so the video feels like a PPT export.

The fix: background creates the world, typography carries the message, motion directs the eye.

Before generating a background or animating type over it, choose the layout contract from `references/text-over-background-layout.md`. The contract defines where the subject sits, where text can sit, which image ratio to generate, where mobile safe boundaries live, and where motion is allowed to travel.

## Default Image Rule

For new videos, assume at least one background image stage is needed. Exceptions must be written in the brief:

- Strong supplied product, UI, logo, or footage assets already carry the scene.
- The direction is intentionally pure kinetic typography.
- The task is a narrow edit of an existing composition.

In Phase 1, plan images only. After confirmation, use Codex Image Gen by default for needed bitmap assets and move accepted project-bound files into `assets/images/`.

## Image Count

| Video Type | Image Set |
| --- | --- |
| 6-10s kinetic motion video | 1 background stage, optional texture |
| 10-15s cinematic short | 1 background stage, 1 symbol/detail, optional anchor |
| 15-30s launch film | 2-4 scene backgrounds, 1 hero symbol, optional anchor |
| Product video | Official product/UI assets first; generate only atmosphere or metaphor plates |

If two images do the same job, keep the stronger one.

## Image Roles

Each image gets exactly one primary role:

- Stage: atmosphere, depth, and light.
- Symbol: the central metaphor.
- Texture: grain, haze, material, or light falloff.
- Anchor: product, person, logo, UI, or real object.
- Transition plate: mask, wipe, focus pull, or morph source.

Reject images that only fill space.

## Text Over Image

- Reserve a quiet text zone before generating or cropping.
- Declare the layout contract, including text rectangle, subject rectangle, image ratio, title tier, mobile safe zones, and motion bounds.
- Declare the first eye target. Hook text and amplified keywords usually own center or upper-center attention when the visual subject does not need that area.
- Keep the focal subject away from title and CTA zones.
- Use local treatment behind text: vignette, shadow plate, gradient mask, blur, or desaturation.
- Put small proof text only on calm image areas.
- If the text needs a card to survive, regenerate, recrop, or simplify the image.
- If the subject is outside its crop-safe zone or text would fall into the bottom platform overlay zone, regenerate or recrop before implementation.

## Motion Rules

Default arc:

```text
World appears -> Title lands -> Metaphor reveals -> Proof locks -> CTA holds
```

Motion budget:

- One primary motion idea per scene.
- One optional support motion for atmosphere or transition.
- Background motion stays slow: push, parallax, focus pull, or light sweep.
- Background motion must preserve the quiet text zone through the full readable hold.
- Text settles before it must be read.
- Text motion must stay inside its declared motion bounds and avoid bottom/right/top mobile UI zones.
- Important reveals need stillness after impact.
- Multi-scene transitions should overlap or share an anchor; avoid empty black gaps.

Prefer mask reveal, clip reveal, rim-light sweep, focus pull, parallax, cross-dissolve, scale settle, or morph-to-logo.

Avoid repeated `y + opacity`, linear primary reveals, infinite loops, decorative particles, random icons, and moving text during reading time.

## CSS3 / SVG / GSAP Motion Craft

Use HTML/CSS/SVG/GSAP as a film language and rendering method.

- CSS3: use `clip-path`, `mask-image`, `filter`, `mix-blend-mode`, perspective transforms, CSS variables, and local darkening when they express reveal, focus, pressure, or transition.
- SVG: use paths, masks, strokes, scan lines, underlines, frames, connectors, and logo lockups when vector structure can guide attention.
- GSAP: build a paused master timeline with labels and explicit positions. Use nested scene timelines only when they remain attached to the master timeline.
- Kinetic typography: define entry, lock, emphasis, exit, and bridge for every important text block.
- Text transitions should transform attention instead of only swapping lines.

If a beat can be described as "text fades up over image," it is under-directed. Rewrite the motion in terms of mask, light, path, camera, crop, split, compression, assembly, or handoff.

## Codex Image Gen Requirements

Every generated-image plan should state:

- Role and aspect ratio.
- Scene/beat where the asset will be used.
- Layout contract and image ratio.
- Focal subject position.
- Quiet text zone.
- Text rectangle and subject rectangle.
- Safe bottom/right/top platform boundaries for overlaid text.
- Required negative space and crop-safe area.
- Lighting direction and contrast.
- Palette and forbidden colors.
- No baked-in text unless required.
- No fake logos, labels, explanatory icons, diagrams, watermark, or decorative clutter.
- Local output path after acceptance.

After generation, inspect the image before writing animation code:

- Accept only images with a clear role, stable focal subject, usable text-safe space, and a standard ratio.
- Recrop or regenerate when the quiet zone contains busy detail, bright seams, faces, product edges, fake UI, or accidental text.
- Keep final text, proof notes, CTA, masks, parallax, focus pulls, and timing in HyperFrames unless the brief requires baked-in content.
- Remove repeated assets that serve the same role.

## Review Gate

Reject the work if:

- There is no background plan or explicit exception.
- The background could be swapped without changing meaning.
- Text readability depends on luck.
- Motion can be removed without changing the story.
- More than one layer tries to be the hero.
- The hero frame is not pause-worthy.
