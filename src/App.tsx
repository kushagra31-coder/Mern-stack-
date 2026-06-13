import { useState, useReducer } from 'react';
import { portfolioReducer } from './types';
import AssetList from './components/AssetList';
import AssetForm from './components/AssetForm';
import AssetEditor from './components/AssetEditor';
import PortfolioSummary from './components/PortfolioSummary';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(portfolioReducer, { assets: [] });
  const [editingSymbol, setEditingSymbol] = useState<string | null>(null);

  const editingAsset = state.assets.find(a => a.symbol === editingSymbol);

  return (
    <div className="app">
      <h1>Smart Portfolio Dashboard</h1>
      <PortfolioSummary assets={state.assets} />
      <AssetForm onAdd={(asset) => dispatch({ type: 'add', asset })} />

      {editingAsset && (
        <AssetEditor
          asset={editingAsset}
          onUpdate={(asset) => {
            dispatch({ type: 'update', asset });
            setEditingSymbol(null);
          }}
        />
      )}

      <AssetList
        assets={state.assets}
        onRemove={(symbol) => dispatch({ type: 'remove', symbol })}
        onEdit={(symbol) => setEditingSymbol(symbol)}
      />
    </div>
  );
}

export default App;