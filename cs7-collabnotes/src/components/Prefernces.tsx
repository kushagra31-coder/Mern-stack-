import { usePreferencesStore } from '../store/preferenceStore';

export default function Preferences() {
  const { theme, fontSize, setTheme, setFontSize } = usePreferencesStore();

  return (
    <div style={{ border: '1px solid #ccc', padding: 12, borderRadius: 8, marginBottom: 16 }}>
      <h3>Preferences (persisted)</h3>
      <label>
        Theme:&nbsp;
        <select value={theme} onChange={(e) => setTheme(e.target.value as 'light' | 'dark')}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>
      &nbsp;&nbsp;
      <label>
        Font Size:&nbsp;
        <input
          type="number"
          value={fontSize}
          onChange={(e) => setFontSize(Number(e.target.value))}
          style={{ width: 60 }}
        />
      </label>
      <p style={{ fontSize: 12, color: '#888' }}>
        Reload the page — theme and fontSize persist. expiresAt does not.
      </p>
    </div>
  );
}