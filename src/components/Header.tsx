"use client";

import React from 'react';

interface HeaderProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  themeBorder: string;
}

export default function Header({ isDark, setIsDark, themeBorder }: HeaderProps) {
  return (
    <header className={`sticky top-0 z-50 ${isDark ? "bg-black/95" : "bg-white/95"} backdrop-blur-md border-b ${themeBorder} px-6 py-3.5 flex items-center justify-between transition-colors duration-200`}>
      
      {/* LEFT ACCENT BRAND ELEMENT */}
      <div className={`flex items-center space-x-3.5 font-mono text-[10px] tracking-widest ${isDark ? "text-neutral-400" : "text-neutral-600"}`}>
        
        {/* Crisp brutalist logo frame mapped directly to your root icon asset */}
        <div className={`w-5 h-5 flex items-center justify-center rounded-xs overflow-hidden select-none border ${isDark ? "border-neutral-800" : "border-black bg-black"}`}>
          <img 
            src="/favicon.ico" 
            alt="Endrey" 
            className="w-full h-full object-contain"
            onError={(e) => {
              // Graceful fallback code in case the icon is named app-icon.png instead of favicon.ico
              (e.target as HTMLImageElement).src = '/app-icon.png';
            }}
          />
        </div>

        <span className={`w-1 h-1 rounded-full ${isDark ? "bg-neutral-500" : "bg-neutral-400"} animate-pulse`} />
        <span className="font-bold">STUDIO 51 MUSIC RECORD // INDEX</span>
      </div>
      
      {/* RIGHT CONTRAST TOGGLE */}
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
    </header>
  );
}