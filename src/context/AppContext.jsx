import { createContext, useReducer } from 'react';

// Начальное состояние
const initialState = {
  theme: 'light',
  user: null,
  isLoading: false,
  error: null
};

// Редьюсер
function appReducer(state, action) {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'FINISH_LOADING':
      return { ...state, isLoading: false };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'CLEAR_ERROR':
      return { ...state, error: null };
    default:
      return state;
  }
}

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className={`app-theme-${state.theme}`}>
        {children}
      </div>
    </AppContext.Provider>
  );
}