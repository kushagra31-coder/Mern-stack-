import { goodFormatDate } from '../utils/goodImports';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div style={{
      border: '1px solid #e5e7eb',
      borderRadius: 8,
      padding: 16,
      background: '#fff'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <strong>{product.name}</strong>
        <span style={{ color: '#10b981', fontWeight: 600 }}>₹{product.price}</span>
      </div>
      <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>
        <span>{product.category}</span>
        <span style={{ marginLeft: 12 }}>Added: {goodFormatDate(product.createdAt)}</span>
      </div>
    </div>
  );
}