import { RDA_DINNER } from '../data/recipes';
import { Terminal, AlertCircle, CheckCircle, TrendingUp, Info } from 'lucide-react';

const DAYS = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const CAT_LABELS = {
  fish: '🐟 魚料理', pork: '🐷 豚肉料理',
  chicken: '🐔 鶏肉料理', beef: '🥩 牛肉料理', tofu_egg: '🥚 豆腐・卵'
};

export default function TerminalTab({ menu }) {
  let totalCal = 0, totalProt = 0, totalFat = 0, totalCarb = 0, activeDays = 0;

  DAYS.forEach(day => {
    const r = menu[day];
    if (r) {
      activeDays++;
      totalCal  += r.nutrition.calories + 250;
      totalProt += r.nutrition.protein + 4;
      totalFat  += r.nutrition.fat + 0.5;
      totalCarb += (r.nutrition.carbs || 0) + 55;
    }
  });

  if (activeDays === 0) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', flexDirection: 'column', gap: '12px', color: 'var(--text-dim)' }}>
        <Terminal size={32} color="var(--border-color)" />
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', textAlign: 'center', lineHeight: 2 }}>
          <div>// パイプラインにレシピがありません</div>
          <div>// 献立を設定してから栄養診断を実行してください</div>
        </div>
      </div>
    );
  }

  const avgCal  = totalCal  / activeDays;
  const avgProt = totalProt / activeDays;
  const avgFat  = totalFat  / activeDays;
  const avgCarb = totalCarb / activeDays;

  const pctCal  = Math.round((avgCal  / RDA_DINNER.calories) * 100);
  const pctProt = Math.round((avgProt / RDA_DINNER.protein)  * 100);
  const pctFat  = Math.round((avgFat  / RDA_DINNER.fat)      * 100);
  const pctCarb = Math.round((avgCarb / RDA_DINNER.carbs)    * 100);

  const getColor = (pct) => {
    if (pct < 70 || pct > 130) return 'var(--color-danger)';
    if (pct < 85 || pct > 115) return 'var(--color-warning)';
    return 'var(--color-success)';
  };

  const logs = [
    { type: 'info', msg: `[INIT]  栄養解析エンジン起動 — 稼働コミット: ${activeDays}/7日` },
  ];

  if (pctProt < 80) logs.push({ type: 'warn', msg: `[WARN]  タンパク質 (RAM) 不足: ${Math.round(avgProt)}g/日 — 目標 ${RDA_DINNER.protein}g` });
  else if (pctProt > 140) logs.push({ type: 'warn', msg: `[WARN]  タンパク質 (RAM) 過剰: ${Math.round(avgProt)}g/日` });
  else logs.push({ type: 'ok', msg: `[OK]    タンパク質 (RAM) 正常: ${Math.round(avgProt)}g/日` });

  if (pctCarb < 75) logs.push({ type: 'warn', msg: `[WARN]  炭水化物 (CPU) 不足: ${Math.round(avgCarb)}g/日 — エネルギー枯渇リスク` });
  else if (pctCarb > 130) logs.push({ type: 'warn', msg: `[WARN]  炭水化物 (CPU) 過剰: ${Math.round(avgCarb)}g/日 — インスリン負荷大` });
  else logs.push({ type: 'ok', msg: `[OK]    炭水化物 (CPU) 正常: ${Math.round(avgCarb)}g/日` });

  if (pctFat > 130) logs.push({ type: 'warn', msg: `[WARN]  脂質 (DISK) オーバーフロー: ${Math.round(avgFat)}g/日 — 揚げ物頻度の削減を推奨` });
  else logs.push({ type: 'ok', msg: `[OK]    脂質 (DISK) 正常範囲: ${Math.round(avgFat)}g/日` });

  const warnCount = logs.filter(l => l.type === 'warn').length;
  if (warnCount === 0) {
    logs.push({ type: 'ok', msg: `[BUILD] ✅ 全栄養指標が目標範囲内。献立スコア: 優秀` });
  } else {
    logs.push({ type: 'warn', msg: `[BUILD] ⚠ ${warnCount}件の警告があります。献立の見直しを推奨します。` });
  }

  // Category distribution
  const catCount = {};
  DAYS.forEach(d => { if (menu[d]) catCount[menu[d].category] = (catCount[menu[d].category] || 0) + 1; });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflowY: 'auto' }}>
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

        {/* System Metrics */}
        <div className="glass-panel" style={{ padding: '20px', borderRadius: 'var(--radius-md)' }}>
          <h3 style={{ fontSize: '13px', fontWeight: '700', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            <TrendingUp size={14} /> システム性能メトリクス
            <span style={{ marginLeft: 'auto', fontSize: '11px', fontWeight: '400' }}>1人・週平均 | ご飯含む</span>
          </h3>
          <MetricBar label="⚡ CPU — 炭水化物" val={Math.round(avgCarb)} unit="g" pct={pctCarb} target={RDA_DINNER.carbs} color={getColor(pctCarb)} />
          <MetricBar label="🧠 RAM — タンパク質" val={Math.round(avgProt)} unit="g" pct={pctProt} target={RDA_DINNER.protein} color={getColor(pctProt)} />
          <MetricBar label="💾 DISK — 脂質"     val={Math.round(avgFat)}  unit="g" pct={pctFat}  target={RDA_DINNER.fat}     color={getColor(pctFat)} />
          <MetricBar label="🔋 POWER — カロリー" val={Math.round(avgCal)}  unit="kcal" pct={pctCal} target={RDA_DINNER.calories} color={getColor(pctCal)} />
        </div>

        {/* Category distribution */}
        <div className="glass-panel" style={{ padding: '20px', borderRadius: 'var(--radius-md)' }}>
          <h3 style={{ fontSize: '13px', fontWeight: '700', marginBottom: '14px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            📊 カテゴリ分布 ({activeDays}日分)
          </h3>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {Object.entries(catCount).map(([cat, cnt]) => (
              <div key={cat} className="badge badge-info" style={{ fontSize: '12px', padding: '4px 12px' }}>
                {CAT_LABELS[cat] || cat} × {cnt}日
              </div>
            ))}
          </div>
        </div>

        {/* Diagnostic logs */}
        <div className="glass-panel" style={{ padding: '20px', borderRadius: 'var(--radius-md)' }}>
          <h3 style={{ fontSize: '13px', fontWeight: '700', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            <Terminal size={14} /> 診断ログ
          </h3>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {logs.map((log, i) => {
              const color = log.type === 'ok' ? 'var(--color-success)'
                : log.type === 'warn' ? 'var(--color-warning)'
                : 'var(--color-info)';
              const Icon = log.type === 'ok' ? CheckCircle : log.type === 'warn' ? AlertCircle : Info;
              return (
                <div key={i} style={{ display: 'flex', gap: '8px', color }}>
                  <Icon size={13} style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>{log.msg}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricBar({ label, val, unit, pct, target, color }) {
  const capped = Math.min(pct, 130);
  return (
    <div style={{ marginBottom: '14px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
        <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{label}</span>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: '700', color }}>
            {val} <span style={{ fontSize: '10px', fontWeight: '400', color: 'var(--text-dim)' }}>{unit}</span>
          </span>
          <span style={{ fontSize: '10px', color: 'var(--text-dim)' }}>/ {target}{unit}</span>
          <span className={`badge ${pct < 85 || pct > 115 ? 'badge-warning' : 'badge-success'}`}>{pct}%</span>
        </div>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${capped}%`, background: color }} />
      </div>
    </div>
  );
}
