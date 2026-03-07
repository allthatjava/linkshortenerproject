# Agent Instructions — linkshortenerproject

> This document contains the authoritative coding and contributor guidelines for AI assistants (LLMs) working on this repository.

---

## 🧠 Purpose

This is a small Next.js + TypeScript + Tailwind project that implements a simple link shortener. The AI agent is expected to:

- **Match the existing code style and architecture.**
- **Avoid unnecessary changes** (keep diffs minimal and focused).
- **Prioritize correctness, type safety, and build stability.**

All agent tasks should be implemented with the goal of keeping the project buildable and lint-clean.

---

## 🗂️ Project Structure (Key Folders)

- `app/` — Next.js App Router pages and layouts (server components by default).
- `components/` — Reusable UI components (mostly client-safe components).
- `db/` — Drizzle ORM schema and database setup.
- `lib/` — Shared utilities (e.g., `cn()` for Tailwind class merging).

---

## ✅ Coding Standards & Conventions

### TypeScript

- Use **strict typing**. Avoid `any` unless there is a clear, documented reason.
- Favor `interface`/`type` definitions over inline `any` usage.

### Next.js / React

- Prefer **server components** (default in `app/`). Only add `"use client"` when you need state, effects, browser-only APIs, or event handlers.
- Keep components small and focused.
- Reuse existing UI patterns and utilities (e.g., `cn()` in `lib/utils.ts`).

### UI & Styling

- Styling is done with **Tailwind CSS**.
- Use the existing `cn()` helper when composing conditional class names.
- Keep class name lists readable by placing them on separate lines when long.

### Formatting & Linting

- This repo uses **ESLint** (via `npm run lint`).
- Before finalizing changes, ensure `npm run lint` passes.
- If you add new dependencies, they should be justified and minimal.

---

## 🧪 Build & Validation

When implementing changes, validate by running:

- `npm run lint` — ensure no lint failures.
- `npm run build` — ensure Next.js builds successfully.

> If you need to do quick checks without rebuilding, running `npx tsc --noEmit` is also acceptable.

---

## 🧩 Common Agent Tasks

### Adding New Pages / Routes

- Place new routes under `app/`.
- Use TypeScript and export a default React component.

### Adding Database Models

- Update `db/schema.ts` with Drizzle schema definitions.
- Follow the existing schema patterns (if any are present).

### Creating/Reworking Components

- Use the existing `components/` folder.
- Keep UI components presentational; keep business logic in server code or utilities.

---

## 🔎 When in Doubt

1. **Preserve existing patterns.** Follow how similar code is written elsewhere in the repo.
2. **Ask for clarification.** If requirements are unclear, ask rather than guessing.
3. **Avoid sweeping refactors.** Only refactor when there is a clear and necessary benefit.

---

## 📌 Notes for Agents

- Use plain, idiomatic TypeScript/React.
- Avoid introducing new configuration unless required.
- Keep diffs minimal and focused on the requested change.
- If you add new files, ensure they fit the existing structure and naming patterns.

---

*This file is intended to be the single source of truth for automated agents working in this repository.*
