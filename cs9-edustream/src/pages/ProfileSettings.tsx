interface ProfileSettingsProps {
  onClose: () => void;
}

export default function ProfileSettings({ onClose }: ProfileSettingsProps) {
  return (
    <div style={{
      marginTop: 16,
      padding: 20,
      border: '1px solid #d1d5db',
      borderRadius: 8,
      background: '#f9fafb'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3>Profile Settings</h3>
        <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: 18, cursor: 'pointer' }}>✕</button>
      </div>
      <p style={{ fontSize: 13, color: '#6b7280' }}>
        This component was lazy-loaded — it wasn't in the initial bundle.
        Check Network tab: a new JS chunk appeared when you clicked the button.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 12 }}>
        <label style={{ fontSize: 13 }}>
          Display Name:&nbsp;
          <input defaultValue="Akaza" style={{ padding: '4px 8px', borderRadius: 4, border: '1px solid #d1d5db' }} />
        </label>
        <label style={{ fontSize: 13 }}>
          Email:&nbsp;
          <input defaultValue="akaza@aitr.ac.in" style={{ padding: '4px 8px', borderRadius: 4, border: '1px solid #d1d5db' }} />
        </label>
        <button style={{
          padding: '6px 16px', background: '#10b981', color: '#fff',
          border: 'none', borderRadius: 6, cursor: 'pointer', width: 'fit-content'
        }}>
          Save Changes
        </button>
      </div>
    </div>
  );
}