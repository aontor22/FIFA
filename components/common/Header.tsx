
'use client';

import { useState } from 'react';
import ThemeToggle from '@/components/common/ThemeToggle';

type HeaderProps = {
  theme: 'dark' | 'light';
  onThemeToggle: () => void;
};

export default function Header({ theme, onThemeToggle }: HeaderProps) {
  const [open, setOpen] = useState(false);
  return (
    <header className="topbar">
      <a href="#home" className="brand" aria-label="World Cup Explorer home">
        <span className="brand-mark">⚽</span>
        <span>World Cup Explorer</span>
      </a>
      <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">☰</button>
      <nav className={open ? 'nav open' : 'nav'} aria-label="Primary navigation">
        <a href="#history">History</a>
        <a href="#editions">Every Cup</a>
        <a href="#map">Host Map</a>
        <a href="#records">Records</a>
        <a href="#2026">2026</a>
        <a href="#sources">Sources</a>
      </nav>
      <ThemeToggle theme={theme} onToggle={onThemeToggle} />
    </header>
  );
}
