
'use client';

type ThemeToggleProps = {
  theme: 'dark' | 'light';
  onToggle: () => void;
};

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button className="theme-toggle" onClick={onToggle} aria-label="Toggle dark and light mode">
      <span>{theme === 'dark' ? '☀️' : '🌙'}</span>
      <strong>{theme === 'dark' ? 'Light' : 'Dark'}</strong>
    </button>
  );
}
