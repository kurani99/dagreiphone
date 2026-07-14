import { useState } from 'react';
import { Page } from './types';
import TopNav from './components/TopNav';
import HomePage from './pages/HomePage';
import AppsPage from './pages/AppsPage';
import SettingsPage from './pages/SettingsPage';

export default function App() {
  const [page, setPage] = useState<Page>('home');

  const renderPage = () => {
    switch (page) {
      case 'home': return <HomePage />;
      case 'apps': return <AppsPage />;
      case 'settings': return <SettingsPage />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      {/* Subtle dot pattern background */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <TopNav current={page} onChange={setPage} />
        <main key={page}>
          <div className="page-enter">{renderPage()}</div>
        </main>
      </div>
    </div>
  );
}
