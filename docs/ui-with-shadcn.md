# UI (shadcn)

This project uses the **shadcn/ui** design system for all UI components.

## ✅ What agents should know

- **Do NOT create custom UI components from scratch.** Always use the existing shadcn components under `components/ui/`.
- When a new UI primitive is required, add it as a shadcn-style component that matches the existing pattern (e.g., `cva` variants, `cn()` usage).
- Prefer composition: build views from shadcn primitives (buttons, inputs, dialogs, cards, etc.) instead of writing raw HTML + Tailwind.

## 🔧 Key patterns and files

- `components/ui/` contains the shared UI primitives (Button, Input, Card, etc.).
- `lib/utils.ts` provides `cn()` for merging class names.
- Keep styling in Tailwind; avoid adding custom CSS rules outside the existing utility patterns.

## 🧩 When adding new UI

1. Check if a suitable shadcn component already exists in `components/ui/`.
2. If not, add a new component in `components/ui/` following the existing style: use `cva`, `VariantProps`, and `cn()`.
3. Use the component from `components/ui/` in pages and higher-level components instead of re-implementing the same behavior.

## ⚠️ Avoid these patterns

- Creating ad-hoc `div` wrappers with custom styles when a shadcn component exists.
- Adding new global CSS just to style a single component.
- Mixing unrelated styling systems (e.g., CSS Modules + Tailwind) when shadcn + Tailwind is available.
