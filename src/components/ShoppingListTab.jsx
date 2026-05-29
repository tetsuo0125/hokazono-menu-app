import { useMemo, useState } from 'react';
import { Download, Package, Layers, Check } from 'lucide-react';

const DAYS = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const DAY_NAMES = { mon: '月曜日', tue: '火曜日', wed: '水曜日', thu: '木曜日', fri: '金曜日', sat: '土曜日', sun: '日曜日' };
const DAY_SHORT = { mon: '月', tue: '火', wed: '水', thu: '木', fri: '金', sat: '土', sun: '日' };

const CAT_ORDER = ['meat_fish', 'vegetable', 'seasoning', 'pantry', 'other'];
const CAT_LABEL = { meat_fish: '🥩 肉・魚', vegetable: '🥦 野菜', seasoning: '🧂 調味料', pantry: '🏪 乾物・缶詰', other: '📦 その他' };

const scaleAmount = (amountStr, multi) => {
  if (!amountStr) return amountStr;
  if (['適量', '少々', '適宜', 'お好み'].includes(amountStr)) return amountStr;
  const fracMatch = amountStr.match(/(\d+)\/(\d+)/);
  if (fracMatch) {
    const val = (parseInt(fracMatch[1]) / parseInt(fracMatch[2])) * multi;
    const str = Number.isInteger(val) ? val : val.toFixed(1).replace(/\.0$/, '');
    return amountStr.replace(/(\d+)\/(\d+)/, str);
  }
  return amountStr.replace(/([\d.]+)/g, (m) => {
    const val = parseFloat(m) * multi;
    return Number.isInteger(val) ? val : val.toFixed(1).replace(/\.0$/, '');
  });
};

export default function ShoppingListTab({ menu, servings, checkedIngredients, setCheckedIngredients }) {
  const [viewMode, setViewMode] = useState('day'); // 'day' | 'category'
  const multiplier = servings / 2;

  // Build per-day items
  const ingredientsByDay = useMemo(() => {
    const result = {};
    DAYS.forEach(day => {
      const r = menu[day];
      if (!r) return;
      result[day] = r.ingredients.map(ing => ({
        name: ing.name,
        amount: scaleAmount(ing.amount, multiplier),
        category: ing.category || 'other',
        recipeName: r.name
      }));
    });
    return result;
  }, [menu, multiplier]);

  // Build aggregated by category
  const byCategory = useMemo(() => {
    const catMap = {};
    DAYS.forEach(day => {
      (ingredientsByDay[day] || []).forEach(ing => {
        const cat = ing.category || 'other';
        if (!catMap[cat]) catMap[cat] = [];
        catMap[cat].push({ ...ing, day });
      });
    });
    return catMap;
  }, [ingredientsByDay]);

  const activeDays = DAYS.filter(d => menu[d]);
  const totalItems = activeDays.reduce((s, d) => s + (ingredientsByDay[d]?.length || 0), 0);
  const checkedCount = Object.values(checkedIngredients).filter(Boolean).length;

  const handleCopy = () => {
    let text = `=== 外園家 買い物リスト (${servings}人前) ===\n\n`;
    activeDays.forEach(day => {
      const r = menu[day];
      text += `■ ${DAY_NAMES[day]} (${r.name})\n`;
      (ingredientsByDay[day] || []).forEach(ing => {
        const key = `${day}_${ing.name}`.replace(/\s+/g, '_');
        text += `  [${checkedIngredients[key] ? '✓' : ' '}] ${ing.name}: ${ing.amount}\n`;
      });
      text += '\n';
    });
    navigator.clipboard.writeText(text).then(() => alert('コピーしました！'));
  };

  const clearChecked = () => setCheckedIngredients({});

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Subheader */}
      <div style={{
        height: '42px',
        background: 'var(--bg-surface)',
        borderBottom: '1px solid var(--border-color)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 16px',
        flexShrink: 0,
        gap: '10px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Package size={14} color="var(--color-orange)" />
          <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            買い物リスト.json
          </span>
          <span className="badge badge-info">{checkedCount}/{totalItems} 完了</span>
        </div>
        <div style={{ display: 'flex', gap: '6px' }}>
          <button
            className={`btn btn-xs ${viewMode === 'day' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setViewMode('day')}
          >
            <Layers size={11} /> 曜日別
          </button>
          <button
            className={`btn btn-xs ${viewMode === 'category' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setViewMode('category')}
          >
            <Package size={11} /> カテゴリ別
          </button>
          {checkedCount > 0 && (
            <button className="btn btn-xs btn-ghost" onClick={clearChecked} style={{ color: 'var(--color-danger)' }}>
              リセット
            </button>
          )}
          <button className="btn btn-xs btn-outline" onClick={handleCopy}>
            <Download size={11} /> コピー
          </button>
        </div>
      </div>

      {/* Progress */}
      {totalItems > 0 && (
        <div style={{ height: '3px', background: 'var(--border-color)', flexShrink: 0 }}>
          <div style={{
            height: '100%',
            width: `${(checkedCount / totalItems) * 100}%`,
            background: 'linear-gradient(90deg, var(--color-success), #34d399)',
            transition: 'width 0.4s ease'
          }} />
        </div>
      )}

      {/* Content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 20px' }}>
        {activeDays.length === 0 ? (
          <div style={{ textAlign: 'center', color: 'var(--text-dim)', padding: '60px 20px', fontFamily: 'var(--font-mono)', fontSize: '13px' }}>
            <div>// 献立が設定されていません</div>
            <div>// パイプラインにレシピを追加してください</div>
          </div>
        ) : viewMode === 'day' ? (
          <DayView
            activeDays={activeDays}
            menu={menu}
            ingredientsByDay={ingredientsByDay}
            checkedIngredients={checkedIngredients}
            setCheckedIngredients={setCheckedIngredients}
          />
        ) : (
          <CategoryView
            byCategory={byCategory}
            checkedIngredients={checkedIngredients}
            setCheckedIngredients={setCheckedIngredients}
          />
        )}
      </div>
    </div>
  );
}

function DayView({ activeDays, menu, ingredientsByDay, checkedIngredients, setCheckedIngredients }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {activeDays.map(day => {
        const r = menu[day];
        const items = ingredientsByDay[day] || [];
        const dayChecked = items.filter(ing => checkedIngredients[`${day}_${ing.name}`.replace(/\s+/g, '_')]).length;
        return (
          <div key={day} className="glass-panel" style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
            <div style={{
              padding: '10px 16px',
              background: 'var(--bg-panel)',
              borderBottom: '1px solid var(--border-color)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="badge badge-info">{DAY_SHORT[day]}</span>
                <span style={{ fontWeight: '600', fontSize: '13px' }}>{r.name}</span>
              </div>
              <span style={{ fontSize: '11px', color: 'var(--text-dim)' }}>{dayChecked}/{items.length}</span>
            </div>
            <div style={{ padding: '10px 16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {items.map((ing, idx) => {
                const key = `${day}_${ing.name}`.replace(/\s+/g, '_');
                const checked = !!checkedIngredients[key];
                return (
                  <label key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={e => setCheckedIngredients(prev => ({ ...prev, [key]: e.target.checked }))}
                    />
                    <span style={{
                      fontSize: '13px',
                      color: checked ? 'var(--text-dim)' : 'var(--text-main)',
                      textDecoration: checked ? 'line-through' : 'none',
                      flex: 1,
                      transition: 'all 0.15s'
                    }}>
                      {ing.name}
                    </span>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      {ing.amount}
                    </span>
                    {checked && <Check size={12} color="var(--color-success)" />}
                  </label>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function CategoryView({ byCategory, checkedIngredients, setCheckedIngredients }) {
  const orderedCats = [
    ...CAT_ORDER.filter(c => byCategory[c]),
    ...Object.keys(byCategory).filter(c => !CAT_ORDER.includes(c))
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {orderedCats.map(cat => {
        const items = byCategory[cat] || [];
        return (
          <div key={cat} className="glass-panel" style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
            <div style={{
              padding: '10px 16px',
              background: 'var(--bg-panel)',
              borderBottom: '1px solid var(--border-color)',
              fontWeight: '600',
              fontSize: '13px',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <span>{CAT_LABEL[cat] || `📦 ${cat}`}</span>
              <span style={{ fontSize: '11px', color: 'var(--text-dim)' }}>{items.length}品</span>
            </div>
            <div style={{ padding: '10px 16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {items.map((ing, idx) => {
                const key = `${ing.day}_${ing.name}`.replace(/\s+/g, '_');
                const checked = !!checkedIngredients[key];
                return (
                  <label key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={e => setCheckedIngredients(prev => ({ ...prev, [key]: e.target.checked }))}
                    />
                    <span style={{
                      fontSize: '13px',
                      color: checked ? 'var(--text-dim)' : 'var(--text-main)',
                      textDecoration: checked ? 'line-through' : 'none',
                      flex: 1,
                      transition: 'all 0.15s'
                    }}>
                      {ing.name}
                    </span>
                    <span style={{ fontSize: '10px', color: 'var(--text-dim)' }}>{DAY_SHORT[ing.day]}</span>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      {ing.amount}
                    </span>
                    {checked && <Check size={12} color="var(--color-success)" />}
                  </label>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
