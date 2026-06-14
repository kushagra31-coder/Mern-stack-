import  { Component } from 'react';
import type {  ReactNode } from 'react';
interface Props { children: ReactNode; }
interface State { hasError: boolean; error: string; }

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: '' };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error: error.message };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: 24,
          background: '#fef2f2',
          border: '1px solid #fca5a5',
          borderRadius: 8,
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#dc2626' }}>Something went wrong</h3>
          <p style={{ color: '#7f1d1d', fontSize: 13 }}>{this.state.error}</p>
          <button
            onClick={() => this.setState({ hasError: false, error: '' })}
            style={{ marginTop: 12, padding: '6px 16px' }}
          >
            Try Again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}