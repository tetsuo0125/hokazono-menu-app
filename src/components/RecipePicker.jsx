import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { X, Search, Filter, Clock, Flame, ChefHat } from 'lucide-react';

const CAT_LABELS = {
  fish: '🐟 魚料理', pork: '🐷 豚肉料理',
  chicken: '🐔 鶏肉料理', beef: '🥩 牛肉料理', tofu_egg: '🥚 豆腐・卵'
};
const CAT_KEYS = ['all', 'fish', 'pork', 'chicken', 'beef', 'tofu_egg'];
const CAT_FILTER_LABELS = { all: 'すべて', fish: '🐟 魚', pork: '🐷 豚', chicken: '🐔 鶏', beef: '🥩 牛', tofu_egg: '🥚 卵豆腐' };

const DAY_NAMES = {
  mon: '月曜日', tue: '火曜日', wed: '水曜日',
  thu: '木曜日', fri: '金曜日', sat: '土曜日', sun: '日曜日'
};

export default function RecipePicker({ isOpen, onClose, day, recipes, currentRecipeId, onSelect }) {
  const [query, setQuery]     = useState('');
  const [catFilter, setCat]   = useState('all');
  const [sortBy, setSort]     = useState('name');

  const filtered = useMemo(() => {
    let list = recipes;
    if (catFilter !== 'all') list = list.filter(r => r.category === catFilter);
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(r => r.name.toLowerCase().includes(q) || (r.description || '').toLowerCase().includes(q));
    }
    if (sortBy === 'name') list = [...list].sort((a, b) => a.name.localeCompare(b.name, 'ja'));
    if (sortBy === 'cal')  list = [...list].sort((a, b) => a.nutrition.calories - b.nutrition.calories);
    if (sortBy === 'time') list = [...list].sort((a, b) => a.cookingTime - b.cookingTime);
    return list;
  }, [recipes, query, catFilter, sortBy]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        className="modal-container"
        style={{ maxWidth: '680px' }}
        initial={{ scale: 0.92, opacity: 0, y: 12 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={e => e.stopPropagation()}
      >
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Search size={18} color="var(--color-info)" />
            <div>
              <h2 style={{ fontSize: '16px', fontWeight: '700' }}>レシピを選択</h2>
              <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '1px' }}>
                <span style={{ color: 'var(--color-info)' }}>{DAY_NAMES[day]}</span> のレシピを選択
              </p>
            </div>
          </div>
          <button className="btn btn-ghost btn-sm" onClick={onClose}><X size={18} /></button>
        </div>

        {/* Search + Filters */}
        <div style={{
          padding: '14px 20px',
          borderBottom: '1px solid var(--border-color)',
          background: 'var(--bg-panel)',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          <div className="search-wrap">
            <Search size={14} className="search-icon" />
            <input
              className="search-input"
              type="text"
              placeholder="レシピ名・説明文で検索..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              autoFocus
            />
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
            {/* Category filter */}
            <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
              {CAT_KEYS.map(cat => (
                <button
                  key={cat}
                  onClick={() => setCat(cat)}
                  className={`btn btn-xs ${catFilter === cat ? 'btn-primary' : 'btn-outline'}`}
                >
                  {CAT_FILTER_LABELS[cat]}
                </button>
              ))}
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: '5px', alignItems: 'center' }}>
              <Filter size={12} color="var(--text-muted)" />
              <select
                value={sortBy}
                onChange={e => setSort(e.target.value)}
                style={{
                  background: 'var(--bg-surface)', border: '1px solid var(--border-color)',
                  color: 'var(--text-main)', borderRadius: '6px', padding: '3px 6px', fontSize: '11px'
                }}
              >
                <option value="name">名前順</option>
                <option value="cal">カロリー順</option>
                <option value="time">調理時間順</option>
              </select>
            </div>
          </div>
          <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
            {filtered.length} 件 / 全 {recipes.length} レシピ
          </div>
        </div>

        <div className="modal-body" style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', color: 'var(--text-dim)', padding: '40px', fontFamily: 'var(--font-mono)', fontSize: '13px' }}>
              <div>// 検索結果がありません</div>
              <div>// フィルターを変更してください</div>
            </div>
          )}
          {filtered.map((recipe, idx) => {
            const isCurrent = recipe.id === currentRecipeId;
            return (
              <motion.div
                key={recipe.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.02 }}
                onClick={() => { if (!isCurrent) onSelect(recipe.id); }}
                className="glass-panel glass-hover"
                style={{
                  padding: '14px 16px',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: isCurrent ? 'default' : 'pointer',
                  border: `1px solid ${isCurrent ? 'var(--color-success)' : 'var(--border-color)'}`,
                  background: isCurrent ? 'rgba(16,185,129,0.06)' : undefined,
                  gap: '12px'
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
                    <span style={{ fontWeight: '600', fontSize: '14px' }}>{recipe.name}</span>
                    {isCurrent && <span className="badge badge-success">選択中</span>}
                    <span className={`tag tag-${recipe.category}`}>{CAT_LABELS[recipe.category] || recipe.category}</span>
                  </div>
                  {recipe.description && (
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '6px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {recipe.description}
                    </div>
                  )}
                  <div style={{ display: 'flex', gap: '12px', fontSize: '11px', color: 'var(--text-dim)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <Clock size={10} /> {recipe.cookingTime}分
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <Flame size={10} /> {recipe.nutrition.calories} kcal
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <ChefHat size={10} /> P:{recipe.nutrition.protein}g
                    </span>
                  </div>
                </div>
                <button
                  className={`btn btn-sm ${isCurrent ? 'btn-ghost' : 'btn-primary'}`}
                  disabled={isCurrent}
                  onClick={(e) => { e.stopPropagation(); if (!isCurrent) onSelect(recipe.id); }}
                  style={{ flexShrink: 0 }}
                >
                  {isCurrent ? '選択中' : '選択'}
                </button>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
