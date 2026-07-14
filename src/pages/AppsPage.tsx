import { useState } from 'react';
import { apps, categories } from '../data/apps';
import { CategoryId } from '../types';
import AppIcon from '../components/AppIcon';

const StarIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="#fbbf24" stroke="none">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
  </svg>
);

const allCategory = { id: 'all' as CategoryId, labelKu: 'هەموو' };

export default function AppsPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');

  const filtered = activeCategory === 'all' ? apps : apps.filter((a) => a.category === activeCategory);

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 24px 60px' }}>
      <h1 style={{ fontSize: 32, fontWeight: 800, color: 'var(--text)', margin: '0 0 8px' }}>
        ئەپەکان
      </h1>
      <p style={{ fontSize: 14, color: 'var(--text-secondary)', margin: '0 0 24px' }}>
        {filtered.length} ئەپ بەردەستە
      </p>

      {/* Category filter pills */}
      <div
        style={{
          display: 'flex',
          gap: 8,
          overflowX: 'auto',
          scrollbarWidth: 'none',
          paddingBottom: 8,
          marginBottom: 24,
        }}
      >
        {[allCategory, ...categories].map((cat) => {
          const active = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                background: active ? 'var(--accent)' : 'var(--card)',
                border: `1px solid ${active ? 'var(--accent)' : 'var(--border)'}`,
                color: active ? '#000' : 'var(--text-secondary)',
                borderRadius: 20,
                padding: '8px 18px',
                fontSize: 13,
                fontWeight: active ? 700 : 500,
                cursor: 'pointer',
                fontFamily: 'inherit',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease',
              }}
            >
              {cat.labelKu}
            </button>
          );
        })}
      </div>

      {/* App grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: 14,
        }}
      >
        {filtered.map((app) => (
          <AppGridCard key={app.id} app={app} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="flex flex-col items-center py-16" style={{ color: 'var(--text-muted)' }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>📭</div>
          <p>هیچ ئەپێک نییە</p>
        </div>
      )}
    </div>
  );
}

function AppGridCard({ app }: { app: typeof apps[0] }) {
  return (
    <div
      className="app-item"
      style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: 16,
        padding: 16,
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {app.isNew && (
        <div
          style={{
            position: 'absolute',
            top: 10,
            left: 10,
            background: 'var(--accent)',
            color: '#000',
            fontSize: 9,
            fontWeight: 700,
            padding: '2px 8px',
            borderRadius: 6,
            letterSpacing: '0.04em',
          }}
        >
          نوێ
        </div>
      )}
      {app.isTrending && !app.isNew && (
        <div
          style={{
            position: 'absolute',
            top: 10,
            left: 10,
            background: '#ff6348',
            color: '#fff',
            fontSize: 9,
            fontWeight: 700,
            padding: '2px 8px',
            borderRadius: 6,
          }}
        >
          🔥
        </div>
      )}

      <AppIcon colors={app.iconColors} symbol={app.iconSymbol} size={56} radius={14} />

      <div style={{ marginTop: 12, fontSize: 14, fontWeight: 600, color: 'var(--text)', lineHeight: 1.3 }}>
        {app.nameKu}
      </div>
      <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2, marginBottom: 10 }}>
        {app.developerKu}
      </div>

      <div className="flex items-center gap-1" style={{ marginBottom: 12 }}>
        <StarIcon />
        <span className="ltr" style={{ fontSize: 11, color: '#fbbf24', fontWeight: 500 }}>
          {app.rating}
        </span>
        <span style={{ fontSize: 10, color: 'var(--text-muted)' }}>
          · {app.sizeMB}MB
        </span>
      </div>

      <button
        className="btn-get"
        style={{
          width: '100%',
          background: 'none',
          border: '1.5px solid var(--accent)',
          color: 'var(--accent)',
          borderRadius: 20,
          padding: '7px 0',
          fontSize: 13,
          fontWeight: 600,
          cursor: 'pointer',
          fontFamily: 'inherit',
          textAlign: 'center',
        }}
      >
        {app.isFree ? 'وەرگرتن' : `$${app.price}`}
      </button>
    </div>
  );
}