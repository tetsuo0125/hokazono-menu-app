import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Plus, Trash2, ChevronDown, ChevronUp } from 'lucide-react';

const CATEGORIES = [
  { value: 'pork',     label: '🐷 豚肉料理' },
  { value: 'chicken',  label: '🐔 鶏肉料理' },
  { value: 'beef',     label: '🥩 牛肉料理' },
  { value: 'fish',     label: '🐟 魚料理' },
  { value: 'tofu_egg', label: '🥚 豆腐・卵料理' },
];

const ING_CATS = [
  { value: 'meat_fish', label: '🥩 肉・魚' },
  { value: 'vegetable', label: '🥦 野菜' },
  { value: 'seasoning', label: '🧂 調味料' },
  { value: 'pantry',    label: '🏪 乾物・缶詰' },
  { value: 'other',     label: '📦 その他' },
];

const emptyIng  = () => ({ name: '', amount: '', category: 'vegetable' });

export default function AddRecipeModal({ isOpen, onClose, onAdd }) {
  const [name,        setName]        = useState('');
  const [category,    setCategory]    = useState('pork');
  const [cookingTime, setCookingTime] = useState(20);
  const [desc,        setDesc]        = useState('');
  const [ingredients, setIngredients] = useState([emptyIng()]);
  const [steps,       setSteps]       = useState(['']);
  const [cal,  setCal]  = useState(600);
  const [prot, setProt] = useState(25);
  const [fat,  setFat]  = useState(20);
  const [carb, setCarb] = useState(40);
  const [showNutrition, setShowNutrition] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAdd({
      name: name.trim(),
      category,
      cookingTime: Number(cookingTime),
      description: desc.trim(),
      nutrition: { calories: Number(cal), protein: Number(prot), fat: Number(fat), carbs: Number(carb), salt: 2.0 },
      ingredients: ingredients.filter(i => i.name.trim()),
      steps: steps.filter(s => s.trim()),
    });
    // Reset
    setName(''); setCategory('pork'); setCookingTime(20); setDesc('');
    setIngredients([emptyIng()]); setSteps(['']);
    setCal(600); setProt(25); setFat(20); setCarb(40);
    setShowNutrition(false);
    onClose();
  };

  // Ingredient helpers
  const updateIng = (idx, field, val) =>
    setIngredients(prev => prev.map((ing, i) => i === idx ? { ...ing, [field]: val } : ing));
  const addIng = () => setIngredients(prev => [...prev, emptyIng()]);
  const removeIng = (idx) => setIngredients(prev => prev.filter((_, i) => i !== idx));

  // Step helpers
  const updateStep = (idx, val) =>
    setSteps(prev => prev.map((s, i) => i === idx ? val : s));
  const addStep = () => setSteps(prev => [...prev, '']);
  const removeStep = (idx) => setSteps(prev => prev.filter((_, i) => i !== idx));

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        className="modal-container"
        style={{ maxWidth: '600px' }}
        initial={{ scale: 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.94, opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={e => e.stopPropagation()}
      >
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Plus size={18} color="var(--color-success)" />
            <div>
              <h2 style={{ fontSize: '16px', fontWeight: '700' }}>新規レシピを追加</h2>
              <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '1px' }}>献立データベースにコミット</p>
            </div>
          </div>
          <button className="btn btn-ghost btn-sm" onClick={onClose}><X size={18} /></button>
        </div>

        <div className="modal-body">
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>

            {/* Basic Info */}
            <div>
              <label className="form-label">料理名 *</label>
              <input
                className="form-input"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="例: 肉じゃが"
                required
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label className="form-label">カテゴリ *</label>
                <select
                  className="form-input"
                  value={category}
                  onChange={e => setCategory(e.target.value)}
                >
                  {CATEGORIES.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
                </select>
              </div>
              <div>
                <label className="form-label">調理時間 (分)</label>
                <input
                  className="form-input"
                  type="number"
                  min="5" max="180"
                  value={cookingTime}
                  onChange={e => setCookingTime(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="form-label">説明</label>
              <textarea
                className="form-input"
                value={desc}
                onChange={e => setDesc(e.target.value)}
                placeholder="レシピの簡単な説明（省略可）"
                style={{ height: '70px', resize: 'vertical' }}
              />
            </div>

            {/* Ingredients */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <label className="form-label" style={{ margin: 0 }}>食材</label>
                <button type="button" className="btn btn-xs btn-outline" onClick={addIng}>
                  <Plus size={11} /> 追加
                </button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {ingredients.map((ing, idx) => (
                  <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1fr 90px 110px 32px', gap: '6px', alignItems: 'center' }}>
                    <input
                      className="form-input"
                      style={{ padding: '7px 10px', fontSize: '13px' }}
                      placeholder="食材名"
                      value={ing.name}
                      onChange={e => updateIng(idx, 'name', e.target.value)}
                    />
                    <input
                      className="form-input"
                      style={{ padding: '7px 10px', fontSize: '13px' }}
                      placeholder="量"
                      value={ing.amount}
                      onChange={e => updateIng(idx, 'amount', e.target.value)}
                    />
                    <select
                      className="form-input"
                      style={{ padding: '7px 8px', fontSize: '12px' }}
                      value={ing.category}
                      onChange={e => updateIng(idx, 'category', e.target.value)}
                    >
                      {ING_CATS.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
                    </select>
                    <button
                      type="button"
                      className="btn btn-xs btn-ghost"
                      onClick={() => removeIng(idx)}
                      disabled={ingredients.length === 1}
                      style={{ color: 'var(--color-danger)', padding: '6px' }}
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Steps */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <label className="form-label" style={{ margin: 0 }}>調理手順</label>
                <button type="button" className="btn btn-xs btn-outline" onClick={addStep}>
                  <Plus size={11} /> 追加
                </button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {steps.map((step, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '6px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '24px', height: '24px', borderRadius: '50%', flexShrink: 0,
                      background: 'var(--color-info-dim)', color: 'var(--color-info)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '11px', fontWeight: '700', fontFamily: 'var(--font-mono)',
                      marginTop: '8px'
                    }}>
                      {idx + 1}
                    </div>
                    <input
                      className="form-input"
                      style={{ flex: 1, padding: '7px 10px', fontSize: '13px' }}
                      placeholder={`手順 ${idx + 1}`}
                      value={step}
                      onChange={e => updateStep(idx, e.target.value)}
                    />
                    <button
                      type="button"
                      className="btn btn-xs btn-ghost"
                      onClick={() => removeStep(idx)}
                      disabled={steps.length === 1}
                      style={{ color: 'var(--color-danger)', padding: '6px', marginTop: '4px' }}
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Nutrition (collapsible) */}
            <div>
              <button
                type="button"
                className="btn btn-ghost btn-sm"
                onClick={() => setShowNutrition(v => !v)}
                style={{ width: '100%', justifyContent: 'space-between', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}
              >
                <span>栄養情報 (省略可)</span>
                {showNutrition ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
              {showNutrition && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '10px' }}>
                  <NutInput label="カロリー (kcal)" value={cal} onChange={setCal} />
                  <NutInput label="タンパク質 (g)"   value={prot} onChange={setProt} />
                  <NutInput label="脂質 (g)"         value={fat}  onChange={setFat} />
                  <NutInput label="炭水化物 (g)"     value={carb} onChange={setCarb} />
                </div>
              )}
            </div>

            <button type="submit" className="btn btn-success" style={{ padding: '12px', fontSize: '14px', fontWeight: '700' }}>
              <Plus size={15} /> レシピをデータベースにコミット
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

function NutInput({ label, value, onChange }) {
  return (
    <div>
      <label className="form-label">{label}</label>
      <input
        className="form-input"
        type="number"
        min="0"
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{ padding: '7px 10px', fontSize: '13px' }}
      />
    </div>
  );
}
