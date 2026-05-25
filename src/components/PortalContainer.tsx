"use client";

import React, { useState, useEffect } from 'react';
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 1. Detect user's system preferences immediately on client mount
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(systemPrefersDark);
    setMounted(true);

    // 2. Dynamic Listener: If user changes macOS system preference while app is open, adapt instantly
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      setIsDark(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleSystemThemeChange);
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, []);

  // Sync dark mode state switch to the HTML document root element class token list
  useEffect(() => {
    if (!mounted) return;
    
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark, mounted]);

  // Guard clause to prevent layout shifting/flashing before theme resolution finishes mounting
  if (!mounted) {
    return <div className="min-h-screen bg-black" />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-neutral-500 selection:text-white">
      
      {/* Manual toggle handler stays active and overrides system defaults when clicked */}
      <Header isDark={isDark} setIsDark={setIsDark} />

      <main className="max-w-3xl mx-auto px-6 py-12 space-y-20">
        
        <div className="space-y-1 pt-6 border-b border-border-theme pb-10">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none m-0">
            ENDREY
          </h1>
          <p className="text-xs font-mono tracking-widest text-text-muted uppercase">
            Studio 51 Records // Tracklist & Background
          </p>
        </div>

        <Backstory />

        <Discography catalog={catalog} />

        <FreeFlowCard />

      </main>

      <Marquee />
      
      <Footer />
    </div>
  );
}