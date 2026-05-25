// src/components/Footer.tsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="px-6 py-5 border-t border-border-theme flex flex-col sm:flex-row gap-2 justify-between items-center text-[9px] font-mono text-text-deep-muted bg-transparent">
      <span>© 2026 STUDIO 51 DIGITAL MUSIC PRODUCTION GROUP</span>
      
      {/* Handled natively via Tailwind dark/light utility overrides with zero prop reliance */}
      <div>
        <span className="hidden dark:inline">[ SYSTEM_THEME: BRUTALIST_DARK ]</span>
        <span className="inline dark:hidden">[ SYSTEM_THEME: BRUTALIST_LIGHT ]</span>
      </div>
    </footer>
  );
}