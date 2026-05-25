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
  themeBorder: string;
  themeHoverBg: string;
  themeTextMuted: string;
  themeTextDeepMuted: string;
  isDark: boolean;
}

export default function Discography({ catalog, themeBorder, themeHoverBg, themeTextMuted, themeTextDeepMuted, isDark }: DiscographyProps) {
  return (
    <section className="space-y-6">
      <div className="flex justify-between items-center font-mono text-[10px] text-neutral-500 uppercase tracking-widest px-1">
        <span>[RECORDED CONTENT INDICES]</span>
        <span className="hidden sm:inline">SPEC DATA</span>
      </div>

      <div className={`divide-y ${themeBorder} border-y ${themeBorder}`}>
        {catalog.map((track) => (
          <div 
            key={track.id} 
            className={`group py-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4 ${themeHoverBg} px-2 transition-colors duration-150`}
          >
            <div className="flex items-start space-x-6 max-w-lg">
              <span className={`font-mono text-[9px] ${themeTextDeepMuted} pt-1`}>{track.id}</span>
              <div className="space-y-1.5">
                <div className="flex items-baseline space-x-3">
                  <h3 className="text-xl font-bold uppercase tracking-tight text-current">
                    {track.title}
                  </h3>
                  <span className={`font-mono text-[10px] ${themeTextMuted}`}>({track.release})</span>
                </div>
                <p className={`text-xs ${themeTextMuted} leading-relaxed`}>
                  {track.concept}
                </p>
                <div className={`flex items-center space-x-3 text-[10px] font-mono ${themeTextDeepMuted} uppercase pt-0.5`}>
                  <span>{track.type}</span>
                  <span>•</span>
                  <span>{track.matrix}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-8 font-mono text-xs pt-1">
              <div className="text-left sm:text-right">
                <span className={`block text-[8px] ${themeTextDeepMuted} uppercase tracking-wider`}>LENGTH</span>
                <span className={isDark ? "text-neutral-300" : "text-neutral-700"}>{track.length}</span>
              </div>
              <div className="text-right">
                <span className={`block text-[8px] ${themeTextDeepMuted} uppercase tracking-wider`}>RECORD</span>
                <span className={`text-[10px] font-semibold uppercase ${isDark ? "text-neutral-400 bg-neutral-900 border-neutral-800" : "text-neutral-600 bg-neutral-100 border-neutral-300"} border px-2 py-0.5 rounded-sm`}>
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