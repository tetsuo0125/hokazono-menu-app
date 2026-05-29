import { useState, useMemo, useRef, useEffect } from 'react';
import { useMenu } from './hooks/useMenu';
import Sidebar from './components/Sidebar';
import EditorTab from './components/EditorTab';
import TerminalTab from './components/TerminalTab';
import ShoppingListTab from './components/ShoppingListTab';
import CalendarTab from './components/CalendarTab';
import RecipePicker from './components/RecipePicker';
import CookingDebugger from './components/CookingDebugger';
import AddRecipeModal from './components/AddRecipeModal';

import {
  Activity, FileJson, Package, Terminal,
  GitBranch, ShieldAlert, Calendar
} from 'lucide-react';

const DAYS = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const DAY_LABELS = {
  mon: '月曜日', tue: '火曜日', wed: '水曜日',
  thu: '木曜日', fri: '金曜日', sat: '土曜日', sun: '日曜日'
};

export default function App() {
  const {
    recipes, menu, locked, setLocked, activeDay, setActiveDay,
    servings, setServings, checkedIngredients, setCheckedIngredients,
    generateWeeklyMenu, mergeRecipeToDay, addCustomRecipe
  } = useMenu();

  const [activeTab, setActiveTab] = useState(() =>
    window.innerWidth <= 1024 ? 'pipeline' : 'editor'
  );

  // Modals
  const [pickerDay, setPickerDay]   = useState(null);
  const [debugRecipe, setDebugRecipe] = useState(null);
  const [isAddOpen, setIsAddOpen]   = useState(false);
  const [cliInput, setCliInput]     = useState('');
  const [cliLogs, setCliLogs]       = useState([
    { type: 'info', text: 'hokazono-shell v2.0 ready. Type "help" for commands.' }
  ]);
  const cliEndRef = useRef(null);

  useEffect(() => {
    cliEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [cliLogs]);

  const addCliLog = (type, text) =>
    setCliLogs(prev => [...prev.slice(-20), { type, text }]);

  const handleCli = (e) => {
    if (e.key !== 'Enter') return;
    const cmd = cliInput.trim().toLowerCase();
    if (!cmd) return;
    addCliLog('cmd', `$ ${cliInput.trim()}`);
    switch (cmd) {
      case 'generate':
      case 'npm run build':
        generateWeeklyMenu();
        addCliLog('success', '[SUCCESS] 週間献立を生成しました。');
        break;
      case 'cook':
      case 'debug':
        if (menu[activeDay]) {
          setDebugRecipe(menu[activeDay]);
          addCliLog('info', `[INFO] ${menu[activeDay].name} のデバッグを開始します。`);
        } else {
          addCliLog('warn', '[WARN] 選択中の曜日にレシピがありません。');
        }
        break;
      case 'add':
        setIsAddOpen(true);
        addCliLog('info', '[INFO] 新規レシピ登録モーダルを開きました。');
        break;
      case 'clear':
        setCliLogs([]);
        break;
      case 'help':
        addCliLog('info', '[INFO] コマンド: generate | cook | add | clear | help');
        break;
      default:
        addCliLog('warn', `[WARN] 不明なコマンド: "${cliInput.trim()}" — "help" でコマンド一覧を表示`);
    }
    setCliInput('');
  };

  const warningCount = useMemo(() => {
    let count = 0;
    DAYS.forEach(d => { if (!menu[d]) count++; });
    return count;
  }, [menu]);

  return (
    <div className="ide-layout">
      {/* ── Header ── */}
      <header className="ide-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Activity size={17} color="var(--color-success)" />
          <h1 style={{ fontSize: '14px', fontWeight: '700', letterSpacing: '-0.02em' }}>
            外園家 献立コンソール
          </h1>
          <span className="badge badge-info">v3.0.0</span>
        </div>

        <div className="header-status-group" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <StatusPill icon={<div className="status-indicator status-success" />} label="パイプライン: 正常" />
          <StatusPill
            icon={<ShieldAlert size={13} color={warningCount > 0 ? 'var(--color-warning)' : 'var(--color-success)'} />}
            label={warningCount > 0 ? `未設定: ${warningCount}日` : 'リンター: クリーン'}
            color={warningCount > 0 ? 'var(--color-warning)' : undefined}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--text-muted)' }}>
          <GitBranch size={13} />
          <span>main</span>
        </div>
      </header>

      {/* ── Main Workspace ── */}
      <main className={`ide-workspace show-${activeTab}`}>

        {/* Left Sidebar */}
        <Sidebar
          menu={menu}
          locked={locked}
          activeDay={activeDay}
          setActiveDay={(day) => {
            setActiveDay(day);
            if (window.innerWidth <= 1024) setActiveTab('editor');
          }}
          setLocked={setLocked}
          onGenerate={generateWeeklyMenu}
          onPickRecipe={(day) => setPickerDay(day)}
          onAddRecipe={() => setIsAddOpen(true)}
        />

        {/* Right Panel */}
        <div
          className="editor-panel"
          style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', background: 'var(--bg-app)' }}
        >
          {/* Tab Bar */}
          <div className="tab-bar">
            <button
              className={`tab-btn tab-mobile-only${activeTab === 'pipeline' ? ' active' : ''}`}
              onClick={() => setActiveTab('pipeline')}
            >
              <GitBranch size={13} color="var(--color-success)" />
              パイプライン
            </button>
            <button
              className={`tab-btn${activeTab === 'editor' ? ' active' : ''}`}
              onClick={() => setActiveTab('editor')}
            >
              <FileJson size={13} color="#facc15" />
              レシピ構成.js
            </button>
            <button
              className={`tab-btn${activeTab === 'calendar' ? ' active' : ''}`}
              onClick={() => setActiveTab('calendar')}
            >
              <Calendar size={13} color="var(--color-purple)" />
              週間カレンダー
            </button>
            <button
              className={`tab-btn${activeTab === 'linter' ? ' active' : ''}`}
              onClick={() => setActiveTab('linter')}
            >
              <Terminal size={13} color="var(--color-teal)" />
              栄養診断.log
            </button>
            <button
              className={`tab-btn${activeTab === 'shopping' ? ' active' : ''}`}
              onClick={() => setActiveTab('shopping')}
            >
              <Package size={13} color="var(--color-orange)" />
              買い物リスト.json
            </button>
          </div>

          {/* Tab Content */}
          <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
            {(activeTab === 'editor' || activeTab === 'pipeline') && (
              <EditorTab
                recipe={menu[activeDay]}
                dayLabel={DAY_LABELS[activeDay]}
                servings={servings}
                setServings={setServings}
                onDebug={() => setDebugRecipe(menu[activeDay])}
              />
            )}
            {activeTab === 'calendar' && (
              <CalendarTab
                menu={menu}
                activeDay={activeDay}
                setActiveDay={(day) => { setActiveDay(day); setActiveTab('editor'); }}
                onPickRecipe={(day) => setPickerDay(day)}
                onGenerate={generateWeeklyMenu}
              />
            )}
            {activeTab === 'linter' && <TerminalTab menu={menu} />}
            {activeTab === 'shopping' && (
              <ShoppingListTab
                menu={menu}
                servings={servings}
                checkedIngredients={checkedIngredients}
                setCheckedIngredients={setCheckedIngredients}
              />
            )}
          </div>
        </div>
      </main>

      {/* ── Footer CLI ── */}
      <footer style={{
        height: '34px',
        background: 'var(--bg-panel)',
        borderTop: '1px solid var(--border-color)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 16px',
        fontSize: '11px',
        color: 'var(--text-muted)',
        gap: '16px',
        flexShrink: 0
      }}>
        <div className="footer-side" style={{ display: 'flex', gap: '14px', flexShrink: 0 }}>
          <span><span style={{ color: 'var(--color-danger)' }}>⊗</span> {warningCount === 0 ? '0 エラー' : `${warningCount} 件`}</span>
          <span><span style={{ color: 'var(--color-warning)' }}>⚠</span> 監視中</span>
        </div>

        <div
          className="footer-cli"
          style={{
            flex: 1,
            maxWidth: '560px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--bg-surface)',
            padding: '3px 12px',
            borderRadius: '20px',
            border: '1px solid var(--border-subtle)'
          }}
        >
          <span style={{ color: 'var(--color-success)', fontWeight: '700', fontFamily: 'var(--font-mono)', flexShrink: 0 }}>
            hokazono:~$
          </span>
          <input
            type="text"
            value={cliInput}
            onChange={e => setCliInput(e.target.value)}
            onKeyDown={handleCli}
            placeholder="generate / cook / add / help"
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              color: 'var(--text-main)',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px'
            }}
          />
        </div>

        <div className="footer-side" style={{ display: 'flex', gap: '14px', flexShrink: 0 }}>
          <span>UTF-8</span>
          <span style={{ color: 'var(--color-info)' }}>React 19</span>
        </div>
      </footer>

      {/* ── Modals ── */}
      <RecipePicker
        isOpen={!!pickerDay}
        onClose={() => setPickerDay(null)}
        day={pickerDay}
        recipes={recipes}
        currentRecipeId={pickerDay ? menu[pickerDay]?.id : null}
        onSelect={(id) => { mergeRecipeToDay(pickerDay, id); setPickerDay(null); }}
      />

      <CookingDebugger
        isOpen={!!debugRecipe}
        onClose={() => setDebugRecipe(null)}
        recipe={debugRecipe}
      />

      <AddRecipeModal
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        onAdd={addCustomRecipe}
      />
    </div>
  );
}

function StatusPill({ icon, label, color }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      fontSize: '12px',
      background: 'var(--bg-surface)',
      padding: '4px 12px',
      borderRadius: '20px',
      border: '1px solid var(--border-color)',
      color: color || 'var(--text-muted)'
    }}>
      {icon}
      <span>{label}</span>
    </div>
  );
}
