// src/components/FreeFlowCard.tsx
import React from 'react';

export default function FreeFlowCard() {
  return (
    <section className="border border-border-deep overflow-hidden rounded-sm">
      <div className="bg-terminal-bg border-b border-border-deep px-4 py-3 flex items-center justify-between text-[10px] font-mono text-text-muted">
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-text-muted animate-pulse" />
          <span className="uppercase tracking-wider font-bold">FreeFlow App Integration</span>
        </div>
        <span>LYRIC UTILITY SUITE v1.0</span>
      </div>
      
      <div className="p-6 md:p-8 space-y-6">
        <div className="space-y-2">
          <h4 className="text-base font-bold uppercase tracking-tight">
            A Practice Tool for Lyricists
          </h4>
          <p className="text-xs leading-relaxed font-mono text-text-muted">
            To make it easier to write and practice verses, we use the FreeFlow freestyle platform—a clean layout tracking system built to test bar structure. It serves as a straightforward, functional notepad and timing workspace designed to help you organize rhyme paths, practice your delivery, and sharpen your cadence using select studio assets.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-[10px] text-text-muted uppercase border-y border-border-theme py-4">
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
          <div className="font-mono text-[9px] text-text-deep-muted uppercase tracking-wider">
            External Workspace Deployment // freeflow-freestyle.vercel.app
          </div>
          
          <a 
            href="https://freeflow-freestyle.vercel.app/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-foreground bg-foreground text-background font-black text-center text-[10px] px-6 py-3 uppercase tracking-widest transition-opacity duration-150 rounded-xs select-none hover:opacity-90"
          >
            Open FreeFlow Studio
          </a>
        </div>
      </div>
    </section>
  );
}