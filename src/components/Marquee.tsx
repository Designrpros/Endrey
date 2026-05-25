// src/components/Marquee.tsx
import React from 'react';

export default function Marquee() {
  return (
    <div className="w-full bg-terminal-bg border-t border-border-theme py-3.5 overflow-hidden whitespace-nowrap flex select-none mt-12">
      <div className="inline-block animate-marquee text-[9px] font-mono tracking-[0.25em] text-text-deep-muted uppercase pr-4">
        STUDIO 51 TRACK TIMELINE RECORD • COMPILING DISCOGRAPHY ARCHIVES • RUNNING REPOSITORY SUITE • BACKSTORY CHRONICLES VERIFIED • LOG ENDED •&nbsp;
      </div>
      <div className="inline-block animate-marquee text-[9px] font-mono tracking-[0.25em] text-text-deep-muted uppercase pr-4">
        STUDIO 51 TRACK TIMELINE RECORD • COMPILING DISCOGRAPHY ARCHIVES • RUNNING REPOSITORY SUITE • BACKSTORY CHRONICLES VERIFIED • LOG ENDED •&nbsp;
      </div>
    </div>
  );
}