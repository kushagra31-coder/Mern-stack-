import type { Asset } from '../types';

interface AssetCardProps extends Asset {
  onRemove: (symbol: string) => void;
}

const AssetCard: React.FC<AssetCardProps> = ({ name, symbol, value, change, onRemove }) => (
  <div className="asset-card">
    <span>{name} ({symbol})</span>
    <span>${value.toFixed(2)}</span>
    <span style={{ color: change > 0 ? 'green' : 'red' }}>
      {change > 0 ? '+' : ''}{change}%
    </span>
    <button onClick={() => onRemove(symbol)}>Remove</button>
  </div>
);

export default AssetCard;