import { useMemo } from 'react';
import { Play } from 'lucide-react';

const CAT_LABELS = {
  fish: '主菜（魚）', pork: '主菜（豚肉）', chicken: '主菜（鶏肉）',
  beef: '主菜（牛肉）', tofu_egg: '主菜（大豆・卵）',
  vegetable: '副菜', pantry: 'その他'
};

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

export default function EditorTab({ recipe, dayLabel, servings, setServings, onDebug }) {
  const multiplier = servings / 2;

  const lineCount = useMemo(() => {
    if (!recipe) return 20;
    return 10 + recipe.ingredients.length + recipe.steps.length + 12;
  }, [recipe]);

  if (!recipe) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <SubHeader dayLabel={null} servings={servings} setServings={setServings} onDebug={null} />
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px', color: 'var(--text-dim)' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', lineHeight: 2, textAlign: 'center' }}>
            <div><span className="syn-comment">// レシピが選択されていません</span></div>
            <div><span className="syn-comment">// 左のパイプラインから曜日を選択してください</span></div>
            <div style={{ marginTop: '8px' }}><span className="syn-keyword">import</span> <span className="syn-variable">recipe</span> <span className="syn-keyword">from</span> <span className="syn-string">'./pipeline'</span>;</div>
          </div>
        </div>
      </div>
    );
  }

  const calPct  = Math.round((recipe.nutrition.calories / 700) * 100);
  const protPct = Math.round((recipe.nutrition.protein / 25) * 100);
  const fatPct  = Math.round((recipe.nutrition.fat / 22) * 100);
  const carbPct = Math.round(((recipe.nutrition.carbs || 40) / 70) * 100);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <SubHeader dayLabel={`${dayLabel}_${recipe.id}`} servings={servings} setServings={setServings} onDebug={onDebug} />

      {/* Nutrition Quick Bar */}
      <div style={{
        padding: '10px 20px',
        background: 'var(--bg-surface)',
        borderBottom: '1px solid var(--border-color)',
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap'
      }}>
        <NutritionPill label="Cal" value={recipe.nutrition.calories} unit="kcal" target={700} />
        <NutritionPill label="P"   value={recipe.nutrition.protein}  unit="g"    target={25} />
        <NutritionPill label="F"   value={recipe.nutrition.fat}      unit="g"    target={22} />
        <NutritionPill label="C"   value={recipe.nutrition.carbs || 0} unit="g"  target={70} />
        <NutritionPill label="⏱"  value={recipe.cookingTime} unit="分" target={30} hideBar />
      </div>

      {/* Code View */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden', background: 'var(--bg-app)' }}>
        {/* Line numbers */}
        <div className="line-num" style={{ padding: '16px 0', lineHeight: '1.65' }}>
          {Array.from({ length: lineCount }).map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>

        {/* Code content */}
        <div
          className="code-content"
          style={{ padding: '16px 20px', overflowY: 'auto', flex: 1, fontFamily: 'var(--font-mono)', fontSize: '13.5px', lineHeight: '1.65' }}
        >
          <div><span className="syn-keyword">import</span> {`{ 調理する, 栄養診断 }`} <span className="syn-keyword">from</span> <span className="syn-string">'../キッチン・コア.js'</span>;</div>
          <br />
          <div className="syn-comment">/**</div>
          <div className="syn-comment"> * @料理名    {recipe.name}</div>
          <div className="syn-comment"> * @カテゴリ  {CAT_LABELS[recipe.category] || recipe.category}</div>
          <div className="syn-comment"> * @調理時間  {recipe.cookingTime}分  @スケール {multiplier.toFixed(1)}倍</div>
          <div className="syn-comment"> * @説明      {recipe.description}</div>
          <div className="syn-comment"> */</div>
          <div><span className="syn-keyword">const</span> <span className="syn-variable">レシピ</span> = {'{'}</div>
          <div style={{ paddingLeft: '24px' }}>id: <span className="syn-string">"{recipe.id}"</span>,</div>
          <div style={{ paddingLeft: '24px' }}>料理名: <span className="syn-string">"{recipe.name}"</span>,</div>
          <div style={{ paddingLeft: '24px' }}>目標人数: <span className="syn-number">{servings}</span>,</div>
          <div style={{ paddingLeft: '24px' }}>栄養素: {'{'}</div>
          <div style={{ paddingLeft: '48px' }}>カロリー: <span className="syn-number">{recipe.nutrition.calories}</span>, <NutritionBadgeInline pct={calPct} label="700kcal" /></div>
          <div style={{ paddingLeft: '48px' }}>タンパク質: <span className="syn-number">{recipe.nutrition.protein}</span>, <NutritionBadgeInline pct={protPct} label="25g" /></div>
          <div style={{ paddingLeft: '48px' }}>脂質: <span className="syn-number">{recipe.nutrition.fat}</span>, <NutritionBadgeInline pct={fatPct} label="22g" /></div>
          <div style={{ paddingLeft: '48px' }}>炭水化物: <span className="syn-number">{recipe.nutrition.carbs || '?'}</span>, <NutritionBadgeInline pct={carbPct} label="70g" /></div>
          <div style={{ paddingLeft: '24px' }}>{'};'}</div>
          <div style={{ paddingLeft: '24px' }}>必要材料: [</div>
          {recipe.ingredients.map((ing, i) => (
            <div key={i} style={{ paddingLeft: '48px' }}>
              {'{'} 名称: <span className="syn-string">"{ing.name}"</span>, 数量: <span className="syn-string">"{scaleAmount(ing.amount, multiplier)}"</span> {'}'},
            </div>
          ))}
          <div style={{ paddingLeft: '24px' }}>],</div>
          <div style={{ paddingLeft: '24px' }}>調理工程: [</div>
          {recipe.steps.map((step, i) => (
            <div key={i} style={{ paddingLeft: '48px' }}>
              <span className="syn-string">"{i + 1}. {step}"</span>,
            </div>
          ))}
          <div style={{ paddingLeft: '24px' }}>]</div>
          <div>{'};'}</div>
          <br />
          <div><span className="syn-keyword">export default</span> <span className="syn-variable">レシピ</span>;</div>
        </div>
      </div>
    </div>
  );
}

function SubHeader({ dayLabel, servings, setServings, onDebug }) {
  return (
    <div style={{
      height: '42px',
      background: 'var(--bg-surface)',
      borderBottom: '1px solid var(--border-color)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px',
      fontSize: '12px',
      flexShrink: 0
    }}>
      <div style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '11px' }}>
        workspace/recipe/<span style={{ color: 'var(--text-main)' }}>{dayLabel || 'untitled'}.js</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '6px',
          background: 'var(--bg-panel)', padding: '4px 10px', borderRadius: '6px'
        }}>
          <span style={{ color: 'var(--text-muted)', fontSize: '11px' }}>人数:</span>
          <select
            value={servings}
            onChange={e => setServings(Number(e.target.value))}
            style={{ background: 'transparent', border: 'none', color: 'var(--color-info)', fontWeight: '700', fontSize: '12px' }}
          >
            <option value="2">2人前</option>
            <option value="4">4人前</option>
            <option value="6">6人前</option>
            <option value="8">8人前</option>
          </select>
        </div>
        {onDebug && (
          <button className="btn btn-xs btn-outline" onClick={onDebug}>
            <Play size={12} /> 調理デバッグ
          </button>
        )}
      </div>
    </div>
  );
}

function NutritionPill({ label, value, unit, target, hideBar }) {
  const pct = hideBar ? null : Math.round((value / target) * 100);
  const color = !pct ? 'var(--color-info)' : pct < 80 ? 'var(--color-warning)' : pct > 120 ? 'var(--color-danger)' : 'var(--color-success)';
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      background: 'var(--bg-panel)',
      padding: '3px 10px',
      borderRadius: '20px',
      border: '1px solid var(--border-subtle)'
    }}>
      <span style={{ fontSize: '10px', color: 'var(--text-muted)', fontWeight: '600' }}>{label}</span>
      <span style={{ fontSize: '12px', fontWeight: '700', color, fontFamily: 'var(--font-mono)' }}>
        {value}<span style={{ fontSize: '9px', fontWeight: '400', color: 'var(--text-dim)', marginLeft: '1px' }}>{unit}</span>
      </span>
    </div>
  );
}

function NutritionBadgeInline({ pct, label }) {
  const color = pct < 80 ? 'var(--color-warning)' : pct > 120 ? 'var(--color-danger)' : 'var(--color-success)';
  const text = pct < 80 ? '警告' : pct > 120 ? '超過' : '達成';
  return (
    <span className="syn-comment" style={{ color }}>
      {'//'} {pct}% — {text} (目標: {label})
    </span>
  );
}
