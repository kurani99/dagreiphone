import { Page } from '../types';

interface Props {
  current: Page;
  onChange: (p: Page) => void;
}

const HomeIcon = ({ active }: { active: boolean }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill={active ? '#00c896' : 'none'} stroke={active ? '#00c896' : '#9090b8'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9,22 9,12 15,12 15,22" />
  </svg>
);

const GridIcon = ({ active }: { active: boolean }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={active ? '#00c896' : '#9090b8'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
);

const SettingsIcon = ({ active }: { active: boolean }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={active ? '#00c896' : '#9090b8'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
  </svg>
);

const navItems: { id: Page; labelKu: string }[] = [
  { id: 'home', labelKu: 'ماڵەوە' },
  { id: 'apps', labelKu: 'ئەپەکان' },
  { id: 'settings', labelKu: 'ڕێکخستن' },
];

export default function TopNav({ current, onChange }: Props) {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(8, 8, 15, 0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div
        className="flex items-center justify-between"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '14px 24px',
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 10,
              background: 'linear-gradient(135deg, #00c896, #0099ff)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 18,
            }}
          >
            📱
          </div>
          <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)' }}>
            داگرە ئایفۆن
          </span>
        </div>

        {/* Nav links */}
        <nav className="flex items-center gap-1">
          {navItems.map(({ id, labelKu }) => {
            const active = current === id;
            return (
              <button
                key={id}
                onClick={() => onChange(id)}
                className="nav-item flex items-center gap-2"
                style={{
                  background: active ? 'var(--accent-dim)' : 'transparent',
                  border: 'none',
                  borderRadius: 10,
                  padding: '8px 16px',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'all 0.2s ease',
                }}
              >
                {id === 'home' && <HomeIcon active={active} />}
                {id === 'apps' && <GridIcon active={active} />}
                {id === 'settings' && <SettingsIcon active={active} />}
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: active ? 600 : 400,
                    color: active ? 'var(--accent)' : 'var(--text-secondary)',
                  }}
                >
                  {labelKu}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
