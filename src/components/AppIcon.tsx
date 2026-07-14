interface Props {
  colors: [string, string];
  symbol: string;
  size?: number;
  radius?: number;
}

export default function AppIcon({ colors, symbol, size = 52, radius = 14 }: Props) {
  return (
    <div
      style={{
        width: size,
        height: size,
        minWidth: size,
        borderRadius: radius,
        background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: size * 0.28,
        fontWeight: 700,
        color: '#fff',
        letterSpacing: '0.03em',
        boxShadow: `0 4px 16px ${colors[1]}55`,
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {symbol}
    </div>
  );
}
