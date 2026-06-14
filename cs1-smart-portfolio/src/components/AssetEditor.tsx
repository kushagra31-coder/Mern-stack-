import React from 'react';
import type { Asset } from '../types';

interface AssetEditorProps {
  asset: Asset;
  onUpdate: (asset: Asset) => void;
}

interface AssetEditorState {
  name: string;
  symbol: string;
  value: string;
  change: string;
}

class AssetEditor extends React.Component<AssetEditorProps, AssetEditorState> {
  state: AssetEditorState = {
    name: this.props.asset.name,
    symbol: this.props.asset.symbol,
    value: this.props.asset.value.toString(),
    change: this.props.asset.change.toString(),
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.target.name]: e.target.value } as Pick<AssetEditorState, keyof AssetEditorState>);
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.onUpdate({
      name: this.state.name,
      symbol: this.state.symbol,
      value: parseFloat(this.state.value),
      change: parseFloat(this.state.change),
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="asset-editor">
        <h4>Edit {this.props.asset.symbol}</h4>
        <input name="name" value={this.state.name} onChange={this.handleChange} />
        <input name="symbol" value={this.state.symbol} onChange={this.handleChange} />
        <input name="value" type="number" value={this.state.value} onChange={this.handleChange} />
        <input name="change" type="number" value={this.state.change} onChange={this.handleChange} />
        <button type="submit">Update Asset</button>
      </form>
    );
  }
}

export default AssetEditor;