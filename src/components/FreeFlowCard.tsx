import React from 'react';

interface FreeFlowCardProps {
  themeBorderDeep: string;
  themeSubBg: string;
  themeTerminalBg: string;
  themeTextMuted: string;
  themeTextDeepMuted: string;
  themeBorder: string;
  isDark: boolean;
}

export default function FreeFlowCard({ 
  themeBorderDeep, themeSubBg, themeTerminalBg, themeTextMuted, themeTextDeepMuted, themeBorder, isDark 
}: FreeFlowCardProps) {
  return (
    <section className={`border ${themeBorderDeep} ${themeSubBg} overflow-hidden rounded-sm`}>
      <div className={`${themeTerminalBg} border-b ${themeBorderDeep} px-4 py-3 flex items-center justify-between text-[10px] font-mono ${themeTextMuted}`}>
        <div className="flex items-center space-x-2">
          <span className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-neutral-400" : "bg-neutral-600"} animate-pulse`} />
          <span className="uppercase tracking-wider font-bold">FreeFlow App Integration</span>
        </div>
        <span>LYRIC UTILITY SUITE v1.0</span>
      </div>
      
      <div className="p-6 md:p-8 space-y-6">
        <div className="space-y-2">
          <h4 className="text-base font-bold uppercase tracking-tight">
            A Practice Tool for Lyricists
          </h4>
          <p className={`text-xs leading-relaxed font-mono ${themeTextMuted}`}>
            To make it easier to write and practice verses, we use the FreeFlow freestyle platform—a clean layout tracking system built to test bar structure. It serves as a straightforward, functional notepad and timing workspace designed to help you organize rhyme paths, practice your delivery, and sharpen your cadence using select studio assets.
          </p>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-[10px] ${themeTextMuted} uppercase border-y ${themeBorder} py-4`}>
          <div>
            <span className="block text-current font-bold mb-1">// SPEED CONTROLS</span>
            Slow down or speed up the instrumental backing loops to lock in your timing parameters.
          </div>
          <div>
            <span className="block text-current font-bold mb-1">// RHYME LOOKUP</span>
            An integrated, localized database to immediately reference matching end-rhyme syllables.
          </div>
          <div>
            <span className="block text-current font-bold mb-1">// PERFORM & LOG</span>
            Record your performance takes locally or directly to iCloud storage to review your vocals later.
          </div>
        </div>
        
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className={`font-mono text-[9px] ${themeTextDeepMuted} uppercase tracking-wider`}>
            External Workspace Deployment // freeflow-freestyle.vercel.app
          </div>
          
          <a 
            href="https://freeflow-freestyle.vercel.app/" 
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block border ${isDark ? "bg-white text-black border-white hover:bg-neutral-200" : "bg-black text-white border-black hover:bg-neutral-800"} font-black text-center text-[10px] px-6 py-3 uppercase tracking-widest transition-colors duration-150 rounded-xs select-none`}
          >
            Open FreeFlow Studio
          </a>
        </div>
      </div>
    </section>
  );
}