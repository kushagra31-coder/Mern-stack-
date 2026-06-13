export interface Asset {
  name: string;
  symbol: string;
  value: number;
  change: number;
}

export type AssetType = 'stock' | 'bond' | 'crypto';

export interface PortfolioState {
  assets: Asset[];
}

export type PortfolioAction =
  | { type: 'add'; asset: Asset }
  | { type: 'remove'; symbol: string }
  | { type: 'update'; asset: Asset };

export function portfolioReducer(state: PortfolioState, action: PortfolioAction): PortfolioState {
  switch (action.type) {
    case 'add':
      return { ...state, assets: [...state.assets, action.asset] };
    case 'remove':
      return { ...state, assets: state.assets.filter(a => a.symbol !== action.symbol) };
    case 'update':
      return {
        ...state,
        assets: state.assets.map(a => a.symbol === action.asset.symbol ? action.asset : a)
      };
    default:
      return state;
  }
}