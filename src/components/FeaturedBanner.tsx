import { App } from '../types';
import AppIcon from './AppIcon';

interface Props {
  app: App;
}

export default function FeaturedBanner({ app }: Props) {
  return (
    <div
      className="featured-card mx-4 my-4 overflow-hidden"
      style={{
        borderRadius: 20,
        background: `linear-gradient(135deg, ${app.iconColors[0]}dd, ${app.iconColors[1]}99)`,
        border: '1px solid rgba(255,255,255,0.1)',
        padding: '20px 20px',
        position: 'relative',
      }}
    >
      {/* Background decoration circles */}
      <div
        style={{
          position: 'absolute',
          top: -30,
          left: -30,
          width: 130,
          height: 130,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.06)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -20,
          right: 60,
          width: 80,
          height: 80,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)',
          pointerEvents: 'none',
        }}
      />

      <div className="relative flex items-center gap-4">
        <AppIcon colors={app.iconColors} symbol={app.iconSymbol} size={68} radius={18} />
        <div className="flex-1">
          <div
            style={{
              fontSize: 11,
              color: 'rgba(255,255,255,0.7)',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: 4,
            }}
          >
            ئەپی هەڵبژێردراو
          </div>
          <div style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 4 }}>
            {app.nameKu}
          </div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>
            {app.descriptionKu}
          </div>
        </div>
        <button
          style={{
            background: 'rgba(255,255,255,0.2)',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: 20,
            padding: '7px 18px',
            color: '#fff',
            fontSize: 13,
            fontWeight: 600,
            cursor: 'pointer',
            backdropFilter: 'blur(8px)',
            whiteSpace: 'nowrap',
            fontFamily: 'inherit',
          }}
          className="btn-get"
        >
          {app.isFree ? 'وەرگرتن' : `$${app.price}`}
        </button>
      </div>
    </div>
  );
}