"use client";

import React, { useState } from 'react';
import { Track } from '../lib/catalog';
import Header from './Header';
import Backstory from './Backstory';
import Discography from './Discography';
import FreeFlowCard from './FreeFlowCard';
import Marquee from './Marquee';
import Footer from './Footer';

interface PortalContainerProps {
  catalog: Track[];
}

export default function PortalContainer({ catalog }: PortalContainerProps) {
  const [isDark, setIsDark] = useState(true);

  // Monochromatic style tokens mapping arrays
  const themeBg = isDark ? "bg-black text-white" : "bg-white text-black";
  const themeSubBg = isDark ? "bg-[#0a0a0c]" : "bg-[#f4f4f6]";
  const themeTerminalBg = isDark ? "bg-neutral-950" : "bg-neutral-100";
  const themeBorder = isDark ? "border-neutral-800" : "border-neutral-200";
  const themeBorderDeep = isDark ? "border-neutral-700" : "border-neutral-300";
  const themeTextMuted = isDark ? "text-neutral-400" : "text-neutral-600";
  const themeTextDeepMuted = isDark ? "text-neutral-600" : "text-neutral-400";
  const themeHoverBg = isDark ? "hover:bg-neutral-900/60" : "hover:bg-neutral-100/80";

  return (
    <div className={`min-h-screen ${themeBg} font-sans antialiased transition-colors duration-200 selection:bg-neutral-500 selection:text-white`}>
      
      <Header isDark={isDark} setIsDark={setIsDark} themeBorder={themeBorder} />

      <main className="max-w-3xl mx-auto px-6 py-12 space-y-20">
        
        <div className={`space-y-1 pt-6 border-b ${themeBorder} pb-10`}>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none m-0">
            ENDREY
          </h1>
          <p className={`text-xs font-mono tracking-widest ${themeTextMuted} uppercase`}>
            Studio 51 Records // Tracklist & Background
          </p>
        </div>

        <Backstory themeTextMuted={themeTextMuted} />

        <Discography 
          catalog={catalog} 
          themeBorder={themeBorder} 
          themeHoverBg={themeHoverBg} 
          themeTextMuted={themeTextMuted} 
          themeTextDeepMuted={themeTextDeepMuted} 
          isDark={isDark} 
        />

        <FreeFlowCard 
          themeBorderDeep={themeBorderDeep}
          themeSubBg={themeSubBg}
          themeTerminalBg={themeTerminalBg}
          themeTextMuted={themeTextMuted}
          themeTextDeepMuted={themeTextDeepMuted}
          themeBorder={themeBorder}
          isDark={isDark}
        />

      </main>

      <Marquee themeTerminalBg={themeTerminalBg} themeBorder={themeBorder} themeTextDeepMuted={themeTextDeepMuted} />
      
      <Footer themeBorder={themeBorder} themeTextDeepMuted={themeTextDeepMuted} isDark={isDark} />

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
      `}</style>
    </div>
  );
}