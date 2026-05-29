import { useState, useEffect } from 'react';
import { RECIPES as INITIAL_RECIPES } from '../data/recipes';

const DAYS = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

export function useMenu() {
  const [recipes, setRecipes] = useState(() => {
    try {
      const saved = localStorage.getItem('hok_recipes');
      if (saved) {
        const parsed = JSON.parse(saved);
        const parsedIds = new Set(parsed.map(r => r.id));
        const merged = [...parsed];
        let hasNew = false;
        INITIAL_RECIPES.forEach(r => {
          if (!parsedIds.has(r.id)) {
            merged.push(r);
            hasNew = true;
          }
        });
        if (hasNew) {
          localStorage.setItem('hok_recipes', JSON.stringify(merged));
        }
        return merged;
      }
      return INITIAL_RECIPES;
    } catch { return INITIAL_RECIPES; }
  });

  const [menu, setMenu] = useState(() => {
    try {
      const savedRecipes = localStorage.getItem('hok_recipes');
      let currentRecipes = INITIAL_RECIPES;
      if (savedRecipes) {
        const parsed = JSON.parse(savedRecipes);
        const parsedIds = new Set(parsed.map(r => r.id));
        const merged = [...parsed];
        INITIAL_RECIPES.forEach(r => {
          if (!parsedIds.has(r.id)) {
            merged.push(r);
          }
        });
        currentRecipes = merged;
      }
      const saved = localStorage.getItem('hok_menu');
      if (saved) {
        const parsed = JSON.parse(saved);
        const fullMenu = { mon: null, tue: null, wed: null, thu: null, fri: null, sat: null, sun: null };
        DAYS.forEach(d => {
          if (parsed[d]) {
            const id = typeof parsed[d] === 'object' ? parsed[d].id : parsed[d];
            fullMenu[d] = currentRecipes.find(r => r.id === id) || null;
          }
        });
        return fullMenu;
      }
    } catch (e) { console.error('Failed to parse menu:', e); }
    return { mon: null, tue: null, wed: null, thu: null, fri: null, sat: null, sun: null };
  });

  const [locked, setLocked] = useState(() => {
    try {
      const saved = localStorage.getItem('hok_locked');
      return saved ? JSON.parse(saved) : { mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false };
    } catch { return { mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false }; }
  });

  const [history, setHistory] = useState(() => {
    try {
      const saved = localStorage.getItem('hok_history');
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  const [servings, setServings] = useState(() => {
    const saved = localStorage.getItem('hok_servings');
    return saved ? parseInt(saved, 10) : 6;
  });

  const [activeDay, setActiveDay] = useState('mon');

  const [checkedIngredients, setCheckedIngredients] = useState(() => {
    try {
      const saved = localStorage.getItem('hok_checked');
      return saved ? JSON.parse(saved) : {};
    } catch { return {}; }
  });

  // Persist
  useEffect(() => {
    localStorage.setItem('hok_recipes', JSON.stringify(recipes));
  }, [recipes]);

  useEffect(() => {
    const simplified = {};
    DAYS.forEach(d => { simplified[d] = menu[d] ? menu[d].id : null; });
    localStorage.setItem('hok_menu', JSON.stringify(simplified));
  }, [menu]);

  useEffect(() => {
    localStorage.setItem('hok_locked', JSON.stringify(locked));
  }, [locked]);

  useEffect(() => {
    localStorage.setItem('hok_history', JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    localStorage.setItem('hok_servings', servings.toString());
  }, [servings]);

  useEffect(() => {
    localStorage.setItem('hok_checked', JSON.stringify(checkedIngredients));
  }, [checkedIngredients]);

  // ── generateWeeklyMenu ──
  const generateWeeklyMenu = () => {
    const historySet = new Set(history);
    const newMenu = { ...menu };
    const newHistory = [...history];

    for (let i = 0; i < DAYS.length; i++) {
      const day = DAYS[i];
      if (locked[day] && newMenu[day]) continue;

      const forbiddenCats = new Set();
      if (i > 0 && newMenu[DAYS[i - 1]]) forbiddenCats.add(newMenu[DAYS[i - 1]].category);
      if (i < DAYS.length - 1 && locked[DAYS[i + 1]] && newMenu[DAYS[i + 1]])
        forbiddenCats.add(newMenu[DAYS[i + 1]].category);

      let candidates = recipes.filter(r => {
        if (forbiddenCats.has(r.category)) return false;
        return !Object.values(newMenu).some(mr => mr && mr.id === r.id);
      });

      const fresh = candidates.filter(r => !historySet.has(r.id));
      if (fresh.length > 0) candidates = fresh;

      if (candidates.length === 0) {
        candidates = recipes.filter(r =>
          !Object.values(newMenu).some(mr => mr && mr.id === r.id)
        );
      }

      if (candidates.length > 0) {
        const selected = candidates[Math.floor(Math.random() * candidates.length)];
        newMenu[day] = selected;
        newHistory.push(selected.id);
        if (newHistory.length > 10) newHistory.shift();
      }
    }

    setMenu(newMenu);
    setHistory(newHistory);
    setCheckedIngredients({});
  };

  const mergeRecipeToDay = (day, recipeId) => {
    const recipe = recipes.find(r => r.id === recipeId);
    if (recipe) setMenu(prev => ({ ...prev, [day]: recipe }));
  };

  const addCustomRecipe = (recipeData) => {
    const newId = `c_${Date.now()}`;
    const newRecipe = { ...recipeData, id: newId };
    setRecipes(prev => [...prev, newRecipe]);
    return newId;
  };

  const deleteRecipe = (recipeId) => {
    setRecipes(prev => prev.filter(r => r.id !== recipeId));
    // Remove from menu if present
    setMenu(prev => {
      const updated = { ...prev };
      DAYS.forEach(d => {
        if (updated[d] && updated[d].id === recipeId) updated[d] = null;
      });
      return updated;
    });
  };

  return {
    recipes, menu, locked, setLocked,
    activeDay, setActiveDay,
    servings, setServings,
    checkedIngredients, setCheckedIngredients,
    generateWeeklyMenu, mergeRecipeToDay, addCustomRecipe, deleteRecipe
  };
}
