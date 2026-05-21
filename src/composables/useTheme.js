import { ref, reactive } from 'vue';

const themeState = reactive({
  currentTheme: localStorage.getItem('theme') || 'light',
  themes: {
    light: {
      name: 'light',
      displayName: '明亮主题',
      primary: '#667eea',
      secondary: '#764ba2',
      background: '#f8f9fa',
      surface: '#ffffff',
      textPrimary: '#2c3e50',
      textSecondary: '#7f8c8d',
      border: '#e0e0e0'
    },
    dark: {
      name: 'dark',
      displayName: '暗黑主题',
      primary: '#8a82ec',
      secondary: '#5d5bdb',
      background: '#121212',
      surface: '#1e1e1e',
      textPrimary: '#e0e0e0',
      textSecondary: '#aaaaaa',
      border: '#444444'
    },
    ocean: {
      name: 'ocean',
      displayName: '海洋主题',
      primary: '#2193b0',
      secondary: '#6dd5ed',
      background: '#e0f7fa',
      surface: '#ffffff',
      textPrimary: '#006064',
      textSecondary: '#00838f',
      border: '#b2ebf2'
    },
    forest: {
      name: 'forest',
      displayName: '森林主题',
      primary: '#2e7d32',
      secondary: '#4caf50',
      background: '#e8f5e9',
      surface: '#ffffff',
      textPrimary: '#1b5e20',
      textSecondary: '#388e3c',
      border: '#c8e6c9'
    },
    sunset: {
      name: 'sunset',
      displayName: '日落主题',
      primary: '#ff9a9e',
      secondary: '#fad0c4',
      background: '#fff5f5',
      surface: '#ffffff',
      textPrimary: '#880e4f',
      textSecondary: '#ad1457',
      border: '#ffcdd2'
    }
  }
});

export function useTheme() {
  const currentTheme = ref(themeState.currentTheme);
  
  const setCurrentTheme = (themeName) => {
    const theme = themeState.themes[themeName];
    if (!theme) return;
    
    themeState.currentTheme = themeName;
    currentTheme.value = themeName;
    localStorage.setItem('theme', themeName);
    
    // 应用主题到根元素
    applyThemeToDocument(theme);
  };

  const applyThemeToDocument = (theme) => {
    const root = document.documentElement;
    root.style.setProperty('--primary-color', theme.primary);
    root.style.setProperty('--secondary-color', theme.secondary);
    root.style.setProperty('--background-color', theme.background);
    root.style.setProperty('--surface-color', theme.surface);
    root.style.setProperty('--text-primary-color', theme.textPrimary);
    root.style.setProperty('--text-secondary-color', theme.textSecondary);
    root.style.setProperty('--border-color', theme.border);
  };

  const initializeTheme = () => {
    const savedTheme = themeState.themes[themeState.currentTheme];
    if (savedTheme) {
      applyThemeToDocument(savedTheme);
    } else {
      // 默认主题
      const defaultTheme = themeState.themes.light;
      applyThemeToDocument(defaultTheme);
    }
  };

  const getAvailableThemes = () => {
    return Object.values(themeState.themes);
  };

  const getCurrentTheme = () => {
    return themeState.themes[themeState.currentTheme];
  };

  return {
    currentTheme,
    setCurrentTheme,
    initializeTheme,
    getAvailableThemes,
    getCurrentTheme
  };
}