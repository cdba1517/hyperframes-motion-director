#!/usr/bin/env node

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(process.cwd(), process.argv[2] || ".");

const checks = [
  {
    name: "Approval brief exists before production",
    file: "BRIEF_DESIGN_PROPOSAL.md",
    pattern: /## Essence[\s\S]*## Format[\s\S]*## Image Generation Decision[\s\S]*## Typography And Layout[\s\S]*## Motion Plan[\s\S]*## Confirmation Needed/,
    points: 30,
  },
  {
    name: "Design system locks house style",
    file: "DESIGN.md",
    pattern: /## Metaphor System[\s\S]*#050505[\s\S]*warm gold[\s\S]*## Typography[\s\S]*## Layout[\s\S]*## Image Generation Plan/,
    points: 25,
  },
  {
    name: "Storyboard includes hero frames, metaphor roles, and visual asset breakdown",
    file: "STORYBOARD.md",
    pattern: /hero frame[\s\S]*Metaphor role[\s\S]*Visual Asset Breakdown[\s\S]*Snapshot Plan/i,
    points: 20,
  },
  {
    name: "Review report records validation, style gate, and next edit",
    file: "REVIEW_REPORT.md",
    pattern: /## Validation[\s\S]*## Style Gate[\s\S]*## Recommended Next Edit[\s\S]*## Remaining Risks/,
    points: 15,
  },
  {
    name: "Composition or explicit blocker exists",
    file: "REVIEW_REPORT.md",
    pattern: /composition|render|blocked|not produced|not run/i,
    points: 10,
  },
];

const placeholderPatterns = [
  /What should the viewer/i,
  /Who is watching/i,
  /Target platform/i,
  /What is being promoted/i,
  /Core viewpoint:\s*$/m,
  /Largest conflict:\s*$/m,
  /Emotional center:\s*$/m,
  /Visual metaphor:\s*$/m,
  /Selected structure:\s*center symbol \/ huge title \/ person anchor \/ huge number/m,
  /Generate images:\s*yes \/ no/m,
  /Overflow handling:\s*$/m,
  /Confirm this direction before image generation/i,
  /3-4 sentences describing/i,
  /If no voiceover/i,
  /List timestamps/i,
  /The smallest next edit/i,
  /\|\s+\|\s+\|\s+\|/,
  /-\s*$/,
];

function hasTemplatePlaceholder(text) {
  return placeholderPatterns.some((pattern) => pattern.test(text));
}

let total = 0;
let earned = 0;
const results = [];

for (const check of checks) {
  total += check.points;
  const path = join(root, check.file);
  const text = existsSync(path) ? readFileSync(path, "utf8") : "";
  const passed = check.pattern.test(text) && !hasTemplatePlaceholder(text);
  if (passed) earned += check.points;
  results.push({
    name: check.name,
    file: check.file,
    points: check.points,
    passed,
    evidence: !existsSync(path)
      ? "File missing."
      : hasTemplatePlaceholder(text)
        ? "File still contains template placeholder text."
        : check.pattern.test(text)
          ? "Required sections found."
          : "Required sections missing.",
  });
}

const report = {
  score: earned,
  total,
  percent: total === 0 ? 0 : Number(((earned / total) * 100).toFixed(1)),
  results,
};

writeFileSync(join(root, "QUALITY_REPORT.json"), JSON.stringify(report, null, 2));

console.log(`Artifact score: ${earned}/${total} (${report.percent}%)`);
for (const result of results) {
  console.log(`${result.passed ? "PASS" : "FAIL"} ${result.points}pt - ${result.name} (${result.evidence})`);
}

if (earned < total) process.exitCode = 1;
