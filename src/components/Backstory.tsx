// src/components/Backstory.tsx
import React from 'react';

export default function Backstory() {
  return (
    <section className="space-y-4 max-w-2xl">
      <span className="font-mono text-[10px] uppercase text-text-deep-muted tracking-widest">// BACKGROUND_NOTE</span>
      <h2 className="text-2xl md:text-3xl font-light leading-relaxed uppercase tracking-tight">
        Writing tracks and formatting verse concepts out of Studio 51 since 2016. Grounded lyrics, honest recordings, and a focus on direct, character-driven rap music.
      </h2>
      
      {/* Replaced conditional string interpolation with global text token utility */}
      <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-mono text-text-muted leading-relaxed">
        <p>
          Endrey has been writing music at Studio 51 for nearly a decade. Writing and performing primarily in English, his work prioritizes raw storytelling, unexpected rhyme paths, and concept tracks where he takes on entirely different characters. There are no shortcuts or simple formulas in his verses; the focus remains strictly on structural writing and vocal presence.
        </p>
        <p>
          Through years of booth runtime and studio collaboration, his catalog has grown into a diverse collection of projects—spanning clean studio EPs, uncut session recordings, and long-form concept albums. Rather than chasing mainstream trends, his music documents an authentic dedication to the pen game.
        </p>
      </div>
    </section>
  );
}