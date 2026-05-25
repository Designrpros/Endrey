"use client";

import React from 'react';

interface HeaderProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  themeBorder: string;
}

export default function Header({ isDark, setIsDark, themeBorder }: HeaderProps) {
  // Common styling tokens for your streaming utility icons
  const iconStyle = `w-4 h-4 transition-colors duration-150 ${
    isDark ? "text-neutral-400 hover:text-white" : "text-neutral-600 hover:text-black"
  }`;

  return (
    <header className={`sticky top-0 z-50 ${isDark ? "bg-black/95" : "bg-white/95"} backdrop-blur-md border-b ${themeBorder} px-6 py-3.5 flex items-center justify-between transition-colors duration-200`}>
      
      {/* 🏷️ LEFT SIDE: LOGO & APP TITLE */}
      <div className={`flex items-center space-x-3.5 font-mono text-[10px] tracking-widest ${isDark ? "text-neutral-400" : "text-neutral-600"}`}>
        <div className={`w-5 h-5 flex items-center justify-center rounded-xs overflow-hidden select-none border ${isDark ? "border-neutral-800" : "border-black bg-black"}`}>
          <img 
            src="/favicon.ico" 
            alt="Endrey" 
            className="w-full h-full object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/app-icon.png';
            }}
          />
        </div>
        <span className={`w-1 h-1 rounded-full ${isDark ? "bg-neutral-500" : "bg-neutral-400"} animate-pulse`} />
        <span className="font-bold hidden sm:inline">STUDIO 51 MUSIC RECORD // INDEX</span>
        <span className="font-bold sm:hidden">S51 // INDEX</span>
      </div>
      
      {/* 🎛️ RIGHT SIDE: STREAMING UTILITIES & CONTRAST SWITCH */}
      <div className="flex items-center space-x-6">
        
        {/* EXTERNAL EMBED LINK LINKS MATRIX */}
        <div className="flex items-center space-x-4 border-r border-neutral-800/60 pr-5 h-5">
          
          {/* 📺 YOUTUBE PORTAL LINK */}
          <a 
            href="https://www.youtube.com/channel/UCjB3cx_ZGdxiETc8ltZnAOw" 
            target="_blank" 
            rel="noopener noreferrer"
            title="Endrey on YouTube"
            className={iconStyle}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>

          {/* 🟢 SPOTIFY HUB LINK */}
          <a 
            href="https://open.spotify.com/artist/30DSKmBs0nW5Awed6OOKzy" 
            target="_blank" 
            rel="noopener noreferrer"
            title="Endrey on Spotify"
            className={iconStyle}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.496 17.306c-.22.359-.69.475-1.047.254-2.88-1.764-6.506-2.164-10.777-1.188-.41.094-.823-.163-.917-.573-.094-.41.163-.823.573-.917 4.675-1.069 8.675-.615 11.91 1.365.356.218.473.685.258 1.059zm1.47-3.262c-.277.449-.865.597-1.314.32-3.297-2.028-8.322-2.616-12.217-1.433-.505.153-1.037-.134-1.19-.64-.154-.506.134-1.038.64-1.19 4.457-1.353 10.002-.701 13.794 1.63.45.277.599.865.327 1.313zm.126-3.413C14.652 7.992 7.34 7.75 3.12 9.031a1.144 1.144 0 0 1-1.354-.852 1.144 1.144 0 0 1 .853-1.354c4.869-1.477 12.928-1.195 18 1.917a1.144 1.144 0 0 1-.588 2.15 1.129 1.129 0 0 1-.945-.226z"/>
            </svg>
          </a>

          {/* 🍎 APPLE MUSIC COMPONENT LINK */}
          <a 
            href="https://music.apple.com/no/artist/endrey/1539688800?l=nb" 
            target="_blank" 
            rel="noopener noreferrer"
            title="Endrey on Apple Music"
            className={iconStyle}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" fill="currentColor" />
              <circle cx="18" cy="16" r="3" fill="currentColor" />
            </svg>
          </a>

        </div>

        {/* CONTRAST CONTROLLER TRIGGER */}
        <button 
          onClick={() => setIsDark(!isDark)}
          className={`font-mono text-[10px] tracking-widest uppercase border px-2.5 py-1.5 transition-colors duration-150 rounded-sm font-bold ${
            isDark 
              ? "border-white text-white hover:bg-white hover:text-black" 
              : "border-black text-black hover:bg-black hover:text-white"
          }`}
        >
          {isDark ? "[ LIGHT MODE ]" : "[ DARK MODE ]"}
        </button>
      </div>

    </header>
  );
}