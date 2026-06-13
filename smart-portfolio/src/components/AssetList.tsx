import type { Asset } from '../types';
import AssetCard from './AssetCard';

interface AssetListProps {
  assets: Asset[];
  onRemove: (symbol: string) => void;
  onEdit: (symbol: string) => void;
}

const AssetList: React.FC<AssetListProps> = ({ assets, onRemove, onEdit }) => (
  <div className="asset-list">
    {assets.map(a => (
      <div key={a.symbol}>
        <AssetCard {...a} onRemove={onRemove} />
        <button onClick={() => onEdit(a.symbol)}>Edit</button>
      </div>
    ))}
  </div>
);

export default AssetList;