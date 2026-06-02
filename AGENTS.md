# Repository Guidelines

## Project Structure & Module Organization

This repository is an agent skill for directing HyperFrames advertising work.

- `SKILL.md` contains the primary agent instructions and quality gates.
- `templates/` holds production artifact templates such as `CREATIVE_BRIEF.template.md`, `STORYBOARD.template.md`, and `MOTION_MAP.template.json`.
- `references/` contains supporting guidance for workflow, typography, motion, audio sync, review loops, and render stability.
- `scripts/` contains Node.js helpers for scaffolding projects and validating skill structure or production artifacts.
- `evals/` stores trigger prompts and evaluation cases.
- `assets/` stores README images only; rendered video outputs belong in generated project folders, not here.

## Build, Test, and Development Commands

Use Node.js 18 or newer.

```bash
node scripts/check-structure.mjs
```

Verifies the skill has all required files and key `SKILL.md` terms.

```bash
node scripts/create_project.mjs ./my-product-ad
```

Creates a HyperFrames ad production scaffold with templates, asset folders, review folders, and placeholders.

```bash
node scripts/check_assets.mjs <project-dir>
node scripts/score_artifacts.mjs <project-dir>
```

Checks a generated project for asset readiness and artifact completeness.

For implemented HyperFrames compositions, also run the strongest available local CLI checks, for example `npx hyperframes validate` and `npx hyperframes snapshot <composition> --at <times>`.

## Coding Style & Naming Conventions

Scripts use modern JavaScript modules (`import` syntax) and `.mjs` filenames. Keep helper scripts dependency-light and deterministic. Use two-space indentation in Markdown lists and JSON templates where practical. Template outputs should use uppercase artifact names such as `CREATIVE_BRIEF.md` and `REVIEW_REPORT.md`; template files should keep the `.template.md` or `.template.json` suffix.

## Testing Guidelines

There is no formal test framework yet. Treat `node scripts/check-structure.mjs` as the release gate for this skill. When changing project-scaffold behavior, run `create_project.mjs` into a temporary directory and then run asset and artifact checks against that directory.

## Commit & Pull Request Guidelines

The current history uses Conventional Commit style, for example `docs: initialize directing hyperframes ads skill`. Keep commits terse and scoped: `docs:`, `fix:`, `feat:`, or `chore:`. Pull requests should describe what changed, why it changed, which validation commands ran, and include screenshots only when README visuals or rendered review assets changed.

## Agent-Specific Instructions

Do not start animation code before reading `SKILL.md` and the relevant files in `references/`. For video work, preserve the artifact chain: brief, design, script, storyboard, beat map, motion map, validation, snapshots, render, and review report.
