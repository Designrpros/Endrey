import React from 'react';

interface FooterProps {
  themeBorder: string;
  themeTextDeepMuted: string;
  isDark: boolean;
}

export default function Footer({ themeBorder, themeTextDeepMuted, isDark }: FooterProps) {
  return (
    <footer className={`px-6 py-5 border-t ${themeBorder} flex flex-col sm:flex-row gap-2 justify-between items-center text-[9px] font-mono ${themeTextDeepMuted} bg-transparent`}>
      <span>© 2026 STUDIO 51 DIGITAL MUSIC PRODUCTION GROUP</span>
      <span>[ SYSTEM_THEME: {isDark ? "BRUTALIST_DARK" : "BRUTALIST_LIGHT"} ]</span>
    </footer>
  );
}