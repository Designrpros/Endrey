import React from 'react';

interface MarqueeProps {
  themeTerminalBg: string;
  themeBorder: string;
  themeTextDeepMuted: string;
}

export default function Marquee({ themeTerminalBg, themeBorder, themeTextDeepMuted }: MarqueeProps) {
  return (
    <div className={`w-full ${themeTerminalBg} border-t ${themeBorder} py-3.5 overflow-hidden whitespace-nowrap flex select-none mt-12`}>
      <div className={`inline-block animate-marquee text-[9px] font-mono tracking-[0.25em] ${themeTextDeepMuted} uppercase pr-4`}>
        STUDIO 51 TRACK TIMELINE RECORD • COMPILING DISCOGRAPHY ARCHIVES • RUNNING REPOSITORY SUITE • BACKSTORY CHRONICLES VERIFIED • LOG ENDED •&nbsp;
      </div>
      <div className={`inline-block animate-marquee text-[9px] font-mono tracking-[0.25em] ${themeTextDeepMuted} uppercase pr-4`}>
        STUDIO 51 TRACK TIMELINE RECORD • COMPILING DISCOGRAPHY ARCHIVES • RUNNING REPOSITORY SUITE • BACKSTORY CHRONICLES VERIFIED • LOG ENDED •&nbsp;
      </div>
    </div>
  );
}