import { motion } from 'framer-motion';
import { Zap, Search } from 'lucide-react';

const DAYS = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const DAY_SHORT = {
  mon: '月', tue: '火', wed: '水',
  thu: '木', fri: '金', sat: '土', sun: '日'
};

const CAT_LABELS = {
  fish: '🐟', pork: '🐷', chicken: '🐔', beef: '🥩', tofu_egg: '🥚'
};
const CAT_COLORS = {
  fish:     { bg: 'rgba(56,189,248,0.08)',  border: 'rgba(56,189,248,0.25)',  text: '#38bdf8' },
  pork:     { bg: 'rgba(251,146,60,0.08)',  border: 'rgba(251,146,60,0.25)',  text: '#fb923c' },
  chicken:  { bg: 'rgba(16,185,129,0.08)',  border: 'rgba(16,185,129,0.25)',  text: '#10b981' },
  beef:     { bg: 'rgba(239,68,68,0.08)',   border: 'rgba(239,68,68,0.25)',   text: '#ef4444' },
  tofu_egg: { bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.25)', text: '#f59e0b' },
};

export default function CalendarTab({ menu, activeDay, setActiveDay, onPickRecipe, onGenerate }) {
  const filledCount = DAYS.filter(d => menu[d]).length;
  const isWeekend = (day) => day === 'sat' || day === 'sun';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Subheader */}
      <div style={{
        padding: '10px 20px',
        background: 'var(--bg-surface)',
        borderBottom: '1px solid var(--border-color)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexShrink: 0
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '13px', fontWeight: '600' }}>週間カレンダービュー</span>
          <span className="badge badge-info">{filledCount}/7 設定済み</span>
        </div>
        <button className="btn btn-sm btn-success" onClick={onGenerate}>
          <Zap size={13} /> 週間献立を自動生成
        </button>
      </div>

      {/* Calendar Grid */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
        <div className="calendar-grid">
          {DAYS.map((day, idx) => {
            const recipe = menu[day];
            const isActive = activeDay === day;
            const cat = recipe?.category;
            const colors = cat ? CAT_COLORS[cat] : null;
            const weekend = isWeekend(day);

            return (
              <motion.div
                key={day}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className={`calendar-cell${isActive ? ' active' : ''}${weekend ? ' weekend' : ''}`}
                onClick={() => { if (recipe) setActiveDay(day); }}
                style={{
                  borderColor: isActive
                    ? 'var(--color-info)'
                    : cat
                    ? colors.border
                    : 'var(--border-color)',
                  background: isActive
                    ? 'rgba(56,189,248,0.06)'
                    : cat
                    ? colors.bg
                    : weekend
                    ? 'rgba(168,85,247,0.04)'
                    : 'var(--bg-surface)',
                }}
              >
                {/* Day header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{
                    fontSize: '12px',
                    fontWeight: '700',
                    color: isActive ? 'var(--color-info)' : weekend ? 'var(--color-purple)' : 'var(--text-muted)',
                  }}>
                    {DAY_SHORT[day]}
                  </span>
                  {recipe && (
                    <span style={{ fontSize: '16px' }}>{CAT_LABELS[cat] || '🍴'}</span>
                  )}
                </div>

                {/* Recipe info */}
                {recipe ? (
                  <>
                    <div style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      lineHeight: 1.35,
                      color: cat ? colors.text : 'var(--text-main)',
                      flex: 1
                    }}>
                      {recipe.name}
                    </div>
                    <div style={{ fontSize: '10px', color: 'var(--text-dim)', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      <span>⏱ {recipe.cookingTime}分</span>
                      <span>🔥 {recipe.nutrition.calories}kcal</span>
                    </div>
                    <button
                      className="btn btn-xs btn-ghost"
                      onClick={e => { e.stopPropagation(); onPickRecipe(day); }}
                      style={{ width: '100%', marginTop: '2px', fontSize: '10px', opacity: 0.7 }}
                    >
                      <Search size={10} /> 変更
                    </button>
                  </>
                ) : (
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '6px' }}>
                    <div style={{ fontSize: '11px', color: 'var(--text-dim)', textAlign: 'center' }}>未設定</div>
                    <button
                      className="btn btn-xs btn-primary"
                      onClick={e => { e.stopPropagation(); onPickRecipe(day); }}
                      style={{ width: '100%', fontSize: '10px' }}
                    >
                      設定する
                    </button>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Weekly summary */}
        {filledCount > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="glass-panel"
            style={{ marginTop: '16px', padding: '16px 20px', borderRadius: 'var(--radius-md)', display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}
          >
            <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '600' }}>週間サマリー</span>
            {Object.entries(
              DAYS.reduce((acc, d) => {
                if (menu[d]) acc[menu[d].category] = (acc[menu[d].category] || 0) + 1;
                return acc;
              }, {})
            ).map(([cat, cnt]) => (
              <div key={cat} style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px' }}>
                <span>{CAT_LABELS[cat]}</span>
                <span style={{ color: CAT_COLORS[cat]?.text || 'var(--text-main)', fontWeight: '600' }}>{cnt}日</span>
              </div>
            ))}
            <div style={{ marginLeft: 'auto', fontSize: '12px', color: 'var(--text-muted)' }}>
              平均 <span style={{ color: 'var(--color-info)', fontWeight: '700' }}>
                {Math.round(DAYS.reduce((s, d) => s + (menu[d]?.cookingTime || 0), 0) / filledCount)}
              </span>分/日
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
