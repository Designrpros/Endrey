# Endrey // Studio 51 Project Archive

A clean, minimal, brutalist web portal dedicated to documenting the music catalog and backstory of artist **Endrey** (Studio 51 Records). Dropping over-the-top industry buzzwords, the platform offers an authentic, down-to-earth window into his dedication to structural penmanship, character-driven rap verses, and continuous booth history since 2016.

The application is built using **Next.js (App Router)** and **Tailwind CSS**, executing a fully modular design that decouples pure data models from the client presentation layers.

---

## 🎤 About Endrey

Endrey has been writing and recording music at Studio 51 for nearly a decade. Performing primarily in English, his writing style rejects predictable formulas and mainstream shortcuts in favor of complex phonetic paths, direct storytelling, and distinct conceptual tracks where he steps into entirely different perspectives and characters. His catalog documents an honest commitment to vocal presence and raw writing craft, ranging from uncut booth sessions to multi-layered conceptual LPs.

---

## ⚡ Web Architecture & Features

- **Pristine Server Component Entry**: The main route file (`src/app/page.tsx`) functions as a strict Server Component, letting the server pre-render data snapshots and reduce initial client-side JavaScript payloads.
- **Decoupled Data Sheet**: All track metrics, matrix labels, runtime constraints, and album concepts are separated from the layout components and isolated in a dedicated data file (`src/lib/catalog.ts`).
- **SwiftUI-Style Title Navigation**: Implements a sticky, compact header tracking dynamically against a large, bold navigation title that scrolls naturally out of the view as users browse the timeline.
- **Dual Brutalist Theme Engine**: Features an instantaneous, high-contrast toggle switch enabling zero-flicker transitions between a deep pitch-black environment (Dark Mode) and a stark gallery-white workspace (Light Mode).
- **FreeFlow Workspace Integration**: Houses a dedicated lyric utility showcase module linking smoothly out to the companion freestyle practice workbench deployed externally at `https://freeflow-freestyle.vercel.app/`.

---

## 📂 Codebase Directory Layout

The workspace implements a clean separation of concerns inside the `src` directory:

```text
src/
├── app/
│   ├── globals.css          # Core Tailwind utility styles
│   ├── layout.tsx           # Global application root layout rules
│   └── page.tsx             # Server Component entry point (orchestrator)
├── components/
│   ├── PortalContainer.tsx  # Stateful wrapper managing local Light/Dark shifts
│   ├── Header.tsx           # Sticky navigation navbar with high-contrast toggle
│   ├── Backstory.tsx        # Honest biographical background timeline prose
│   ├── Discography.tsx      # Table loop renderer displaying track archives
│   ├── FreeFlowCard.tsx     # Lyricist utility block routing to the Vercel link
│   ├── Marquee.tsx          # Animating infinite horizontal textual ticker
│   └── Footer.tsx           # Monochromatic copyright and environment metrics
└── lib/
    └── catalog.ts           # Isolated static discography data and TypeScript types