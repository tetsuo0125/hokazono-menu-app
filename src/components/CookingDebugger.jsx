import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, Play, Pause, RotateCcw, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function CookingDebugger({ isOpen, onClose, recipe }) {
  const [prevRecipe, setPrevRecipe] = useState(null);
  const [prevIsOpen, setPrevIsOpen] = useState(false);

  const [stepIndex, setStepIndex] = useState(0);
  const [seconds, setSeconds]     = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs]           = useState([]);
  const logEndRef = useRef(null);

  if (recipe !== prevRecipe || isOpen !== prevIsOpen) {
    setPrevRecipe(recipe);
    setPrevIsOpen(isOpen);
    if (isOpen && recipe) {
      setStepIndex(0);
      setSeconds(0);
      setIsRunning(false);
      setLogs([
        `[INIT]  ターゲット: ${recipe.name}`,
        `[LOAD]  食材 ${recipe.ingredients.length}種 のロード完了`,
        `[READY] 手順 1/${recipe.steps.length} — 開始を待機中...`,
      ]);
    }
  }

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  useEffect(() => {
    if (!isRunning) return;
    const id = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(id);
  }, [isRunning]);

  if (!isOpen || !recipe) return null;

  const addLog = (msg) => setLogs(prev => [...prev, msg]);
  const fmt = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  const toggleTimer = () => {
    if (isRunning) {
      addLog(`[PAUSE] 手順 ${stepIndex + 1} を一時停止 (${fmt(seconds)})`);
    } else {
      addLog(`[RUN]   手順 ${stepIndex + 1} のタイマー開始...`);
    }
    setIsRunning(r => !r);
  };

  const handleNext = () => {
    addLog(`[DONE]  手順 ${stepIndex + 1} 完了 — 経過時間: ${fmt(seconds)}`);
    setIsRunning(false);
    if (stepIndex < recipe.steps.length - 1) {
      const next = stepIndex + 1;
      setStepIndex(next);
      setSeconds(0);
      addLog(`[NEXT]  手順 ${next + 1}/${recipe.steps.length} に遷移`);
    } else {
      addLog(`[BUILD] ✅ 全手順完了！配膳プロセス終了。`);
    }
  };

  const handlePrev = () => {
    if (stepIndex > 0) {
      setIsRunning(false);
      setSeconds(0);
      const prev = stepIndex - 1;
      setStepIndex(prev);
      addLog(`[BACK]  手順 ${prev + 1} に戻りました。`);
    }
  };

  const isFinished = stepIndex === recipe.steps.length - 1 && logs.some(l => l.includes('✅'));
  const progress = ((stepIndex + (isFinished ? 1 : 0)) / recipe.steps.length) * 100;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        className="modal-container"
        style={{ maxWidth: '860px' }}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.22 }}
        onClick={e => e.stopPropagation()}
      >
        <div className="modal-header">
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <Play size={17} color="var(--color-purple)" />
              <h2 style={{ fontSize: '16px', fontWeight: '700' }}>調理デバッガ</h2>
              <span className="badge badge-purple">{recipe.name}</span>
            </div>
            {/* Overall progress */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div className="progress-track" style={{ flex: 1 }}>
                <div
                  className="progress-fill"
                  style={{ width: `${progress}%`, background: 'linear-gradient(90deg, var(--color-purple), var(--color-info))' }}
                />
              </div>
              <span style={{ fontSize: '11px', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                {stepIndex + (isFinished ? 1 : 0)}/{recipe.steps.length} 手順
              </span>
            </div>
          </div>
          <button className="btn btn-ghost btn-sm" onClick={onClose} style={{ marginLeft: '16px' }}><X size={18} /></button>
        </div>

        <div
          className="modal-body debugger-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '16px', height: '480px' }}
        >
          {/* Steps */}
          <div className="glass-panel" style={{ padding: '14px', borderRadius: 'var(--radius-md)', overflowY: 'auto' }}>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              調理手順
            </div>
            {recipe.steps.map((step, idx) => {
              const isActive    = idx === stepIndex;
              const isCompleted = idx < stepIndex || (isFinished && idx === stepIndex);
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.03 }}
                  style={{
                    display: 'flex',
                    gap: '12px',
                    padding: '12px',
                    marginBottom: '6px',
                    borderRadius: 'var(--radius-sm)',
                    background: isActive ? 'rgba(56,189,248,0.06)' : 'transparent',
                    borderLeft: `3px solid ${isActive ? 'var(--color-info)' : isCompleted ? 'var(--color-success)' : 'var(--border-color)'}`,
                    opacity: isCompleted && !isActive ? 0.55 : 1,
                    transition: 'all 0.25s'
                  }}
                >
                  <div style={{
                    width: '24px', height: '24px', borderRadius: '50%', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: isCompleted ? 'var(--color-success-dim)' : isActive ? 'var(--color-info-dim)' : 'var(--bg-surface)',
                    border: `2px solid ${isCompleted ? 'var(--color-success)' : isActive ? 'var(--color-info)' : 'var(--border-color)'}`,
                    fontSize: '10px', fontWeight: '700', fontFamily: 'var(--font-mono)',
                    color: isCompleted ? 'var(--color-success)' : isActive ? 'var(--color-info)' : 'var(--text-dim)'
                  }}>
                    {isCompleted ? <CheckCircle2 size={12} /> : idx + 1}
                  </div>
                  <div style={{ fontSize: '13.5px', lineHeight: 1.55, color: isActive ? 'var(--text-main)' : 'var(--text-muted)' }}>
                    {step}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* Timer */}
            <div className="glass-panel" style={{ padding: '20px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '52px',
                fontWeight: '700',
                color: isRunning ? 'var(--color-warning)' : 'var(--text-main)',
                textShadow: isRunning ? '0 0 20px rgba(245,158,11,0.4)' : 'none',
                letterSpacing: '3px',
                transition: 'color 0.3s, text-shadow 0.3s',
                lineHeight: 1
              }}>
                {fmt(seconds)}
              </div>
              <div style={{ fontSize: '10px', color: 'var(--text-dim)', margin: '6px 0 16px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                ステップタイマー
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  className={`btn ${isRunning ? 'btn-outline' : 'btn-primary'}`}
                  style={{ flex: 1 }}
                  onClick={toggleTimer}
                  disabled={isFinished}
                >
                  {isRunning ? <><Pause size={13} /> 停止</> : <><Play size={13} /> 開始</>}
                </button>
                <button
                  className="btn btn-ghost"
                  onClick={() => { setSeconds(0); setIsRunning(false); }}
                  title="リセット"
                >
                  <RotateCcw size={14} />
                </button>
              </div>
            </div>

            {/* Console */}
            <div
              className="glass-panel"
              style={{ flex: 1, borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', overflow: 'hidden', minHeight: 0 }}
            >
              <div style={{
                background: 'var(--bg-panel)',
                padding: '7px 12px',
                fontSize: '10px',
                color: 'var(--text-muted)',
                borderBottom: '1px solid var(--border-color)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                flexShrink: 0
              }}>
                コンソール出力
              </div>
              <div style={{
                padding: '10px 12px',
                fontFamily: 'var(--font-mono)',
                fontSize: '10.5px',
                flex: 1,
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '3px'
              }}>
                {logs.map((log, i) => {
                  const color = log.startsWith('[DONE') || log.startsWith('[BUILD') ? 'var(--color-success)'
                    : log.startsWith('[PAUSE') ? 'var(--color-warning)'
                    : log.startsWith('[BACK')  ? 'var(--color-orange)'
                    : '#60a5fa';
                  return <div key={i} style={{ color }}>{log}</div>;
                })}
                <div ref={logEndRef} />
              </div>
            </div>

            {/* Nav */}
            <div style={{ display: 'flex', gap: '8px' }}>
              <button className="btn btn-outline" style={{ flex: 1 }} onClick={handlePrev} disabled={stepIndex === 0}>
                <ChevronLeft size={15} /> 前
              </button>
              <button
                className={`btn ${isFinished ? 'btn-success' : 'btn-primary'}`}
                style={{ flex: 2 }}
                onClick={handleNext}
                disabled={isFinished}
              >
                {isFinished ? '✅ 配膳完了' : stepIndex === recipe.steps.length - 1 ? '完了' : '次へ'}
                {!isFinished && <ChevronRight size={15} />}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
