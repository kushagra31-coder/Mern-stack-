import { useState } from 'react';
import type { Dish } from '../types';

const INITIAL_DISHES: Dish[] = [
  { id: '1', name: 'Tofu Buddha Bowl', cuisine: 'Asian', price: 9.50, tags: ['vegan', 'gluten-free'], available: true },
  { id: '2', name: 'Butter Chicken', cuisine: 'Indian', price: 11.00, tags: ['spicy', 'popular'], available: true },
  { id: '3', name: 'Old Special Soup', cuisine: 'Continental', price: 7.00, tags: ['classic'], available: false },
  { id: '4', name: 'Avocado Toast', cuisine: 'American', price: 8.50, tags: ['vegan', 'popular'], available: true },
  { id: '5', name: 'Paneer Tikka', cuisine: 'Indian', price: 10.00, tags: ['vegetarian', 'spicy'], available: true },
];

export default function QueryBuilder() {
  const [dishes, setDishes] = useState<Dish[]>(INITIAL_DISHES);
  const [log, setLog] = useState<string[]>([]);
  const [filterTag, setFilterTag] = useState('vegan');
  const [maxPrice, setMaxPrice] = useState(12);
  const [newName, setNewName] = useState('');
  const [newCuisine, setNewCuisine] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newTags, setNewTags] = useState('');
  const [updateName, setUpdateName] = useState('');
  const [updatePrice, setUpdatePrice] = useState('');

  const addLog = (msg: string) =>
    setLog(prev => [
      `[${new Date().toLocaleTimeString()}] ${msg}`,
      ...prev
    ]);

  const handleInsert = () => {
    if (!newName || !newCuisine || !newPrice) return;
    const dish: Dish = {
      id: Date.now().toString(),
      name: newName,
      cuisine: newCuisine,
      price: parseFloat(newPrice),
      tags: newTags.split(',').map(t => t.trim()).filter(Boolean),
      available: true
    };
    setDishes(prev => [...prev, dish]);
    addLog(`insertOne: Added "${dish.name}" — acknowledged: true`);
    setNewName('');
    setNewCuisine('');
    setNewPrice('');
    setNewTags('');
  };

  const filtered = dishes.filter(d =>
    d.tags.includes(filterTag) && d.price <= maxPrice && d.available
  );

  const handleUpdate = () => {
    const dish = dishes.find(d => d.name === updateName);
    if (!dish) {
      addLog(`updateOne: No dish found "${updateName}"`);
      return;
    }
    setDishes(prev => prev.map(d =>
      d.name === updateName
        ? { ...d, price: parseFloat(updatePrice), tags: [...d.tags, 'popular'] }
        : d
    ));
    addLog(`updateOne: Updated "${updateName}" — price → ₹${updatePrice}`);
  };

  const handleDelete = (name: string) => {
    setDishes(prev => prev.filter(d => d.name !== name));
    addLog(`deleteOne: Deleted "${name}"`);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>

      {/* LEFT */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>

        {/* insertOne */}
        <div style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: 14 }}>
          <h4 style={{ margin: '0 0 10px', color: '#10b981' }}>
            insertOne
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <input placeholder="Name" value={newName}
              onChange={e => setNewName(e.target.value)}
              style={{ padding: '4px 8px', borderRadius: 4, border: '1px solid #d1d5db' }} />
            <input placeholder="Cuisine" value={newCuisine}
              onChange={e => setNewCuisine(e.target.value)}
              style={{ padding: '4px 8px', borderRadius: 4, border: '1px solid #d1d5db' }} />
            <input placeholder="Price" type="number" value={newPrice}
              onChange={e => setNewPrice(e.target.value)}
              style={{ padding: '4px 8px', borderRadius: 4, border: '1px solid #d1d5db' }} />
            <input placeholder="Tags (comma separated)" value={newTags}
              onChange={e => setNewTags(e.target.value)}
              style={{ padding: '4px 8px', borderRadius: 4, border: '1px solid #d1d5db' }} />
            <button onClick={handleInsert} style={{
              padding: '6px 14px', background: '#10b981',
              color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer'
            }}>Add Dish</button>
          </div>
        </div>

        {/* find */}
        <div style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: 14 }}>
          <h4 style={{ margin: '0 0 10px', color: '#3b82f6' }}>find</h4>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <label style={{ fontSize: 13 }}>
              Tag:&nbsp;
              <input value={filterTag}
                onChange={e => setFilterTag(e.target.value)}
                style={{ padding: '4px 8px', borderRadius: 4, border: '1px solid #d1d5db', width: 80 }} />
            </label>
            <label style={{ fontSize: 13 }}>
              Max Price:&nbsp;
              <input type="number" value={maxPrice}
                onChange={e => setMaxPrice(Number(e.target.value))}
                style={{ padding: '4px 8px', borderRadius: 4, border: '1px solid #d1d5db', width: 70 }} />
            </label>
          </div>
          <p style={{ fontSize: 12, color: '#6b7280', margin: '8px 0 0' }}>
            {filtered.length} results for tag="{filterTag}" & price≤{maxPrice}
          </p>
        </div>

        {/* updateOne */}
        <div style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: 14 }}>
          <h4 style={{ margin: '0 0 10px', color: '#f59e0b' }}>updateOne</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <input placeholder="Dish name to update" value={updateName}
              onChange={e => setUpdateName(e.target.value)}
              style={{ padding: '4px 8px', borderRadius: 4, border: '1px solid #d1d5db' }} />
            <input placeholder="New price" type="number" value={updatePrice}
              onChange={e => setUpdatePrice(e.target.value)}
              style={{ padding: '4px 8px', borderRadius: 4, border: '1px solid #d1d5db' }} />
            <button onClick={handleUpdate} style={{
              padding: '6px 14px', background: '#f59e0b',
              color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer'
            }}>Update Dish</button>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>

        {/* Collection */}
        <div style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: 14 }}>
          <h4 style={{ margin: '0 0 10px' }}>
            Collection: dishes
            <span style={{ fontSize: 12, color: '#6b7280', marginLeft: 8 }}>
              ({dishes.length} docs)
            </span>
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, maxHeight: 280, overflowY: 'auto' }}>
            {dishes.map(d => (
              <div key={d.id} style={{
                padding: '8px 10px', borderRadius: 6, fontSize: 12,
                background: filtered.includes(d) ? '#f0fdf4' : '#f9fafb',
                border: filtered.includes(d) ? '1px solid #86efac' : '1px solid #e5e7eb',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center'
              }}>
                <div>
                  <strong>{d.name}</strong>
                  <span style={{ color: '#6b7280', marginLeft: 8 }}>₹{d.price}</span>
                  <span style={{ color: '#6b7280', marginLeft: 8 }}>[{d.tags.join(', ')}]</span>
                </div>
                <button onClick={() => handleDelete(d.name)} style={{
                  background: '#fee2e2', border: 'none', borderRadius: 4,
                  padding: '2px 8px', cursor: 'pointer', fontSize: 11, color: '#dc2626'
                }}>delete</button>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 11, color: '#10b981', margin: '8px 0 0' }}>
            Green = matches current find() filter
          </p>
        </div>

        {/* Log */}
        <div style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: 14 }}>
          <h4 style={{ margin: '0 0 8px' }}>Operation Log</h4>
          <div style={{ maxHeight: 150, overflowY: 'auto' }}>
            {log.length === 0 ? (
              <p style={{ fontSize: 12, color: '#9ca3af' }}>No operations yet</p>
            ) : (
              log.map((l, i) => (
                <p key={i} style={{
                  fontSize: 11, fontFamily: 'monospace',
                  color: '#374151', margin: '2px 0'
                }}>{l}</p>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}