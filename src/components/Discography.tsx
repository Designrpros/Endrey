// src/components/Discography.tsx
import React from 'react';

interface Track {
  id: string;
  title: string;
  type: string;
  release: string;
  condition: string;
  length: string;
  matrix: string;
  concept: string;
}

interface DiscographyProps {
  catalog: Track[];
}

export default function Discography({ catalog }: DiscographyProps) {
  return (
    <section className="space-y-6">
      <div className="flex justify-between items-center font-mono text-[10px] text-text-deep-muted uppercase tracking-widest px-1">
        <span>[RECORDED CONTENT INDICES]</span>
        <span className="hidden sm:inline">SPEC DATA</span>
      </div>

      {/* Replaced dynamic strings with your global border and division utilities */}
      <div className="divide-y divide-border-theme border-y border-border-theme">
        {catalog.map((track) => (
          <div 
            key={track.id} 
            className="group py-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4 hover:bg-hover-bg px-2 transition-colors duration-150"
          >
            <div className="flex items-start space-x-6 max-w-lg">
              <span className="font-mono text-[9px] text-text-deep-muted pt-1">{track.id}</span>
              <div className="space-y-1.5">
                <div className="flex items-baseline space-x-3">
                  <h3 className="text-xl font-bold uppercase tracking-tight text-foreground">
                    {track.title}
                  </h3>
                  <span className="font-mono text-[10px] text-text-muted">({track.release})</span>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  {track.concept}
                </p>
                <div className="flex items-center space-x-3 text-[10px] font-mono text-text-deep-muted uppercase pt-0.5">
                  <span>{track.type}</span>
                  <span>•</span>
                  <span>{track.matrix}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-8 font-mono text-xs pt-1">
              <div className="text-left sm:text-right">
                <span className="block text-[8px] text-text-deep-muted uppercase tracking-wider">LENGTH</span>
                <span className="text-foreground">{track.length}</span>
              </div>
              <div className="text-right">
                <span className="block text-[8px] text-text-deep-muted uppercase tracking-wider">RECORD</span>
                {/* Simplified condition badge styling using semantic classes */}
                <span className="text-[10px] font-semibold uppercase text-text-muted bg-sub-bg border border-border-theme px-2 py-0.5 rounded-sm">
                  {track.condition}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}