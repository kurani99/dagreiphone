import { useState } from 'react';
import { apps, categories, topChartApps, newApps, featuredApp } from '../data/apps';
import AppIcon from '../components/AppIcon';
import FeaturedBanner from '../components/FeaturedBanner';

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#555572" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const StarIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="#fbbf24" stroke="none">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
  </svg>
);

const categoryIcons: Record<string, string> = {
  games: '🎮',
  music: '🎵',
  entertainment: '▶️',
  education: '📚',
  social: '💬',
  tools: '⚙️',
};

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(apps);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (q: string) => {
    setSearchQuery(q);
    if (q.trim()) {
      setIsSearching(true);
      setSearchResults(
        apps.filter(
          (a) =>
            a.nameKu.includes(q) ||
            a.nameEn.toLowerCase().includes(q.toLowerCase()) ||
            a.developerKu.includes(q)
        )
      );
    } else {
      setIsSearching(false);
    }
  };

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 24px 60px' }}>
      {/* Hero section */}
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <h1 style={{ fontSize: 42, fontWeight: 800, color: 'var(--text)', margin: '0 0 8px', lineHeight: 1.2 }}>
          دۆزینەوەی ئەپەکان
        </h1>
        <p style={{ fontSize: 15, color: 'var(--text-secondary)', margin: '0 0 24px' }}>
          باشترین ئەپەکان بۆ ئایفۆنەکەت بەخۆڕایی دابگرە
        </p>

        {/* Search bar */}
        <div
          style={{
            maxWidth: 480,
            margin: '0 auto',
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: 14,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '12px 18px',
          }}
        >
          <SearchIcon />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="گەڕان بە ئەپەکان..."
            style={{
              flex: 1,
              background: 'none',
              border: 'none',
              outline: 'none',
              color: 'var(--text)',
              fontSize: 14,
              fontFamily: 'inherit',
              direction: 'rtl',
            }}
          />
        </div>
      </div>

      {isSearching ? (
        <SearchResults results={searchResults} />
      ) : (
        <>
          {/* Featured banner */}
          <div style={{ maxWidth: 800, margin: '0 auto 40px' }}>
            <FeaturedBanner app={featuredApp} />
          </div>

          {/* Categories */}
          <CategoriesSection />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" style={{ marginTop: 40 }}>
            <TopChartsSection />
            <NewAppsSection />
          </div>
        </>
      )}
    </div>
  );
}

function SearchResults({ results }: { results: typeof apps }) {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto' }}>
      <p style={{ color: 'var(--text-muted)', fontSize: 13, marginBottom: 16 }}>
        {results.length} ئەنجام
      </p>
      {results.length === 0 ? (
        <div className="flex flex-col items-center py-16" style={{ color: 'var(--text-muted)' }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🔍</div>
          <p>هیچ ئەپێک نەدۆزرایەوە</p>
        </div>
      ) : (
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden' }}>
          {results.map((app) => <AppListItem key={app.id} app={app} />)}
        </div>
      )}
    </div>
  );
}

function CategoriesSection() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto 40px' }}>
      <SectionHeader title="جۆرەکان" />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: 12,
        }}
      >
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="category-card"
            style={{
              height: 100,
              borderRadius: 16,
              background: `linear-gradient(135deg, ${cat.gradient[0]}, ${cat.gradient[1]})`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              boxShadow: `0 4px 20px ${cat.gradient[1]}44`,
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <span style={{ fontSize: 28 }}>{categoryIcons[cat.id]}</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>{cat.labelKu}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TopChartsSection() {
  return (
    <div>
      <SectionHeader title="چارتی باشترین" actionLabel="هەموو ببینە" />
      <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden' }}>
        {topChartApps.map((app, i) => (
          <AppListItem key={app.id} app={app} rank={i + 1} />
        ))}
      </div>
    </div>
  );
}

function NewAppsSection() {
  return (
    <div>
      <SectionHeader title="تازەترین ئەپەکان" actionLabel="هەموو ببینە" />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: 12,
        }}
      >
        {newApps.map((app) => (
          <NewAppCard key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
}

function NewAppCard({ app }: { app: typeof apps[0] }) {
  return (
    <div
      className="app-item"
      style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: 16,
        padding: 16,
        cursor: 'pointer',
      }}
    >
      <AppIcon colors={app.iconColors} symbol={app.iconSymbol} size={56} radius={14} />
      <div style={{ marginTop: 10, fontSize: 13, fontWeight: 600, color: 'var(--text)', lineHeight: 1.3 }}>
        {app.nameKu}
      </div>
      <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 2, marginBottom: 10 }}>
        {app.developerKu}
      </div>
      <button
        className="btn-get"
        style={{
          width: '100%',
          background: 'none',
          border: '1.5px solid var(--accent)',
          color: 'var(--accent)',
          borderRadius: 20,
          padding: '6px 0',
          fontSize: 12,
          fontWeight: 600,
          cursor: 'pointer',
          fontFamily: 'inherit',
        }}
      >
        {app.isFree ? 'وەرگرتن' : `$${app.price}`}
      </button>
    </div>
  );
}

function AppListItem({ app, rank }: { app: typeof apps[0]; rank?: number }) {
  return (
    <div
      className="app-item flex items-center gap-3"
      style={{ padding: '12px 16px', borderBottom: '1px solid var(--border)' }}
    >
      {rank !== undefined && (
        <div
          className="ltr"
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: 'var(--text-muted)',
            width: 20,
            textAlign: 'center',
            flexShrink: 0,
          }}
        >
          {rank}
        </div>
      )}
      <AppIcon colors={app.iconColors} symbol={app.iconSymbol} size={50} radius={13} />
      <div className="flex-1 min-w-0">
        <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', lineHeight: 1.3 }}>
          {app.nameKu}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 3 }}>
          <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{app.developerKu}</span>
          <span style={{ color: 'var(--text-muted)', fontSize: 10 }}>·</span>
          <StarIcon />
          <span className="ltr" style={{ fontSize: 11, color: '#fbbf24' }}>{app.rating}</span>
        </div>
      </div>
      <button
        className="btn-get"
        style={{
          background: 'none',
          border: '1.5px solid var(--accent)',
          color: 'var(--accent)',
          borderRadius: 20,
          padding: '6px 18px',
          fontSize: 12,
          fontWeight: 600,
          cursor: 'pointer',
          fontFamily: 'inherit',
          whiteSpace: 'nowrap',
        }}
      >
        {app.isFree ? 'وەرگرتن' : `$${app.price}`}
      </button>
    </div>
  );
}

function SectionHeader({ title, actionLabel }: { title: string; actionLabel?: string }) {
  return (
    <div className="flex items-center justify-between" style={{ marginBottom: 14 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text)', margin: 0 }}>{title}</h2>
      {actionLabel && (
        <button
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--accent)',
            fontSize: 13,
            fontWeight: 500,
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}