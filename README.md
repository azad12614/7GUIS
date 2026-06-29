# 7GUIs

This repository contains implementations of the [7GUIs](https://eugenkiss.github.io/7guis/) benchmark in React, TypeScript, and Vite.

The app starts on a launcher page that links to the individual task pages in `src/html/`. The codebase also includes multiple implementation styles for the same benchmark set:

- `src/react/` for the React-based versions
- `src/pure-react/` for the minimal React versions
- `src/jotai/` for the state-management versions
- `src/main/` for the task-specific entry points
- `src/shared/` for shared types, validation, store helpers, and navigation

## Tasks

The benchmark tasks in this workspace are:

1. Counter
2. Converter
3. Flight
4. Timer
5. CRUD
6. Circle
7. Cells

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Useful scripts:

```bash
npm run build
npm run lint
npm run preview
```

## Tech Stack

- React 19
- TypeScript
- Vite
- Jotai
- HeroUI
- Zod

## Notes

- The root page is defined in `src/App.tsx`.
- Shared UI and helpers live in `src/shared/`.
- The project uses a modern Vite + ESLint setup from the template, with React Compiler support enabled in the toolchain.
