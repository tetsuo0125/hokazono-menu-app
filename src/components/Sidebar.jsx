import { motion } from 'framer-motion';
import { Lock, Unlock, GitCommit, Search, PlusCircle, Zap, ChevronRight } from 'lucide-react';

const DAYS = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const DAY_SHORT = {
  mon: '月', tue: '火', wed: '水',
  thu: '木', fri: '金', sat: '土', sun: '日'
};
const CAT_LABELS = {
  fish: '🐟 魚料理', pork: '🐷 豚肉', chicken: '🐔 鶏肉',
  beef: '🥩 牛肉', tofu_egg: '🥚 豆腐・卵'
};

export default function Sidebar({ menu, locked, activeDay, setActiveDay, setLocked, onGenerate, onPickRecipe, onAddRecipe }) {

  const toggleLock = (day, e) => {
    e.stopPropagation();
    setLocked(prev => ({ ...prev, [day]: !prev[day] }));
  };

  const filledCount = DAYS.filter(d => menu[d]).length;

  return (
    <div className="ide-panel" style={{ width: '360px' }}>
      {/* Panel Header */}
      <div className="panel-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <GitCommit size={14} color="var(--color-success)" />
          週間コミットパイプライン
        </div>
        <div style={{ display: 'flex', gap: '6px' }}>
          <button className="btn btn-sm btn-ghost" onClick={onAddRecipe} title="レシピを追加">
            <PlusCircle size={14} />
          </button>
          <button className="btn btn-sm btn-success" onClick={onGenerate}>
            <Zap size={13} /> 生成
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div style={{
        padding: '10px 16px',
        borderBottom: '1px solid var(--border-color)',
        background: 'var(--bg-surface)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--text-muted)', marginBottom: '6px' }}>
          <span>週間進捗</span>
          <span style={{ color: filledCount === 7 ? 'var(--color-success)' : 'var(--color-info)' }}>
            {filledCount}/7 コミット
          </span>
        </div>
        <div className="progress-track">
          <div
            className="progress-fill"
            style={{
              width: `${(filledCount / 7) * 100}%`,
              background: filledCount === 7
                ? 'linear-gradient(90deg, var(--color-success), #34d399)'
                : 'linear-gradient(90deg, var(--color-info), #7dd3fc)'
            }}
          />
        </div>
      </div>

      {/* Pipeline */}
      <div className="panel-content" style={{ position: 'relative' }}>
        {/* Vertical line */}
        <div style={{
          position: 'absolute',
          left: '24px',
          top: '20px',
          bottom: '20px',
          width: '2px',
          background: `linear-gradient(180deg, var(--color-success) ${(filledCount / 7) * 100}%, var(--border-color) ${(filledCount / 7) * 100}%)`,
          borderRadius: '2px',
          zIndex: 1
        }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', position: 'relative', zIndex: 2, paddingLeft: '44px' }}>
          {DAYS.map((day, idx) => {
            const recipe = menu[day];
            const isLocked = locked[day];
            const isActive = activeDay === day;

            return (
              <motion.div
                key={day}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.04, duration: 0.3 }}
                onClick={() => { if (recipe) setActiveDay(day); }}
                className={`pipeline-node${isActive ? ' active' : ''}${isLocked ? ' locked' : ''}`}
              >
                {/* Node dot */}
                <div style={{
                  position: 'absolute',
                  left: '-32px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  background: isActive ? 'var(--color-success)' : recipe ? 'var(--bg-panel)' : 'var(--bg-app)',
                  border: `2px solid ${isActive ? 'var(--color-success)' : recipe ? 'var(--color-success)' : 'var(--border-color)'}`,
                  boxShadow: isActive ? '0 0 12px var(--color-success-glow)' : 'none',
                  transition: 'all 0.25s'
                }} />

                {/* Header row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{
                      fontSize: '10px',
                      fontWeight: '700',
                      padding: '2px 8px',
                      background: isActive ? 'var(--color-info)' : 'var(--bg-surface)',
                      color: isActive ? '#000' : 'var(--text-muted)',
                      borderRadius: '4px',
                      transition: 'all 0.2s'
                    }}>
                      {DAY_SHORT[day]}
                    </span>
                    {isLocked && (
                      <span className="badge badge-warning">
                        <Lock size={9} /> ロック
                      </span>
                    )}
                  </div>
                  <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                    {recipe ? `#${recipe.id.substring(0, 6)}` : 'pending'}
                  </span>
                </div>

                {/* Recipe name */}
                <div style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: isActive ? 'var(--text-main)' : recipe ? 'var(--text-main)' : 'var(--text-dim)',
                  marginBottom: recipe ? '8px' : '4px',
                  lineHeight: 1.3
                }}>
                  {recipe ? recipe.name : '献立未設定'}
                </div>

                {/* Footer */}
                {recipe ? (
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px dashed var(--border-subtle)',
                    paddingTop: '7px'
                  }}>
                    <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                      <span className={`tag tag-${recipe.category}`}>{CAT_LABELS[recipe.category] || recipe.category}</span>
                      <span style={{ fontSize: '10px', color: 'var(--text-dim)' }}>⏱ {recipe.cookingTime}分</span>
                    </div>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      <button
                        onClick={(e) => toggleLock(day, e)}
                        className="btn btn-xs btn-ghost"
                        title={isLocked ? 'ロック解除' : 'ロック'}
                        style={{ color: isLocked ? 'var(--color-warning)' : undefined }}
                      >
                        {isLocked ? <Lock size={12} /> : <Unlock size={12} />}
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); onPickRecipe(day); }}
                        className="btn btn-xs btn-outline"
                      >
                        <Search size={11} /> 変更
                      </button>
                      {isActive && (
                        <button className="btn btn-xs btn-primary">
                          <ChevronRight size={11} />
                        </button>
                      )}
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={(e) => { e.stopPropagation(); onPickRecipe(day); }}
                    className="btn btn-xs btn-primary"
                    style={{ width: '100%', marginTop: '2px' }}
                  >
                    <PlusCircle size={11} /> レシピを設定
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
