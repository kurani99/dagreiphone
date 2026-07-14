import { useState } from 'react';

interface ToggleProps {
  on: boolean;
  onToggle: () => void;
}

function Toggle({ on, onToggle }: ToggleProps) {
  return (
    <div
      onClick={onToggle}
      style={{
        width: 44,
        height: 26,
        borderRadius: 13,
        background: on ? 'var(--accent)' : 'var(--card2)',
        border: `1px solid ${on ? 'var(--accent)' : 'var(--border)'}`,
        cursor: 'pointer',
        position: 'relative',
        transition: 'all 0.2s ease',
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: 20,
          height: 20,
          borderRadius: '50%',
          background: '#fff',
          position: 'absolute',
          top: 2,
          right: on ? 2 : 'calc(100% - 22px)',
          transition: 'right 0.2s ease',
          boxShadow: '0 1px 4px rgba(0,0,0,0.3)',
        }}
      />
    </div>
  );
}

interface SettingRowProps {
  icon: string;
  label: string;
  value?: string;
  toggle?: boolean;
  toggleOn?: boolean;
  onToggle?: () => void;
  danger?: boolean;
}

function SettingRow({ icon, label, value, toggle, toggleOn, onToggle, danger }: SettingRowProps) {
  return (
    <div
      className="flex items-center gap-3 app-item"
      style={{ padding: '14px 16px', borderRadius: 12, cursor: 'pointer', borderBottom: '1px solid var(--border)' }}
    >
      <div
        style={{
          width: 38,
          height: 38,
          borderRadius: 10,
          background: danger ? 'rgba(239,68,68,0.15)' : 'var(--card2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 18,
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div className="flex-1">
        <div style={{ fontSize: 14, fontWeight: 500, color: danger ? '#f87171' : 'var(--text)' }}>
          {label}
        </div>
        {value && (
          <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 1 }}>{value}</div>
        )}
      </div>
      {toggle !== undefined ? (
        <Toggle on={toggleOn ?? false} onToggle={onToggle ?? (() => {})} />
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2">
          <polyline points="15,18 9,12 15,6" />
        </svg>
      )}
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div style={{ padding: '20px 0 8px', fontSize: 11, fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.08em' }}>
      {title}
    </div>
  );
}

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [autoUpdate, setAutoUpdate] = useState(false);
  const [darkMode] = useState(true);

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '32px 24px 60px' }}>
      <h1 style={{ fontSize: 32, fontWeight: 800, color: 'var(--text)', margin: '0 0 24px' }}>
        ڕێکخستن
      </h1>

      {/* Profile card */}
      <div
        style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: 18,
          padding: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          marginBottom: 8,
        }}
      >
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #00c896, #0099ff)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 26,
            flexShrink: 0,
          }}
        >
          👤
        </div>
        <div className="flex-1">
          <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--text)' }}>کاربەری داگرە ئایفۆن</div>
          <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 2 }}>بەخۆرایی بچنە ژوورەوە</div>
        </div>
        <button
          className="btn-get"
          style={{
            background: 'var(--accent-dim)',
            border: '1px solid var(--accent)',
            color: 'var(--accent)',
            borderRadius: 20,
            padding: '8px 18px',
            fontSize: 13,
            fontWeight: 600,
            cursor: 'pointer',
            fontFamily: 'inherit',
            whiteSpace: 'nowrap',
          }}
        >
          چوونەژوورەوە
        </button>
      </div>

      <SectionTitle title="ڕاگەیاندن" />
      <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden' }}>
        <SettingRow
          icon="🔔"
          label="ڕاگەیاندنەکان"
          toggle
          toggleOn={notifications}
          onToggle={() => setNotifications(!notifications)}
        />
        <SettingRow
          icon="🔄"
          label="نوێکردنەوەی خۆکار"
          toggle
          toggleOn={autoUpdate}
          onToggle={() => setAutoUpdate(!autoUpdate)}
        />
      </div>

      <SectionTitle title="دیزاین" />
      <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden' }}>
        <SettingRow icon="🌙" label="ڕووکاری تاریک" toggle toggleOn={darkMode} onToggle={() => {}} />
        <SettingRow icon="🌐" label="زمان" value="کوردی (سۆرانی)" />
        <SettingRow icon="📍" label="ناوچە" value="کوردستان" />
      </div>

      <SectionTitle title="دەربارەی" />
      <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden' }}>
        <SettingRow icon="ℹ️" label="وەشانی ئەپ" value="v1.0.0" />
        <SettingRow icon="📜" label="ئایینی تایبەتمەندی" />
        <SettingRow icon="❓" label="یارمەتی و پشتگیری" />
      </div>

      <SectionTitle title="" />
      <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden' }}>
        <SettingRow icon="🚪" label="دەرچوون" danger />
      </div>

      <div style={{ textAlign: 'center', padding: '32px 0 8px', color: 'var(--text-muted)', fontSize: 12 }}>
        داگرە ئایفۆن v1.0.0 · دروستکراوە بە ❤️ بۆ کوردستان
      </div>
    </div>
  );
}
