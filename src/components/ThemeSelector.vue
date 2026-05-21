<template>
  <div class="theme-selector">
    <button 
      class="theme-toggle-btn" 
      @click="showThemeMenu = !showThemeMenu"
      :class="{ active: showThemeMenu }"
      aria-label="切换主题"
    >
      <span class="theme-icon">🎨</span>
    </button>
    
    <transition name="slide-down">
      <div v-show="showThemeMenu" class="theme-menu">
        <h4>选择主题</h4>
        <div class="theme-options">
          <button
            v-for="theme in availableThemes"
            :key="theme.name"
            class="theme-option"
            :class="{ active: currentTheme === theme.name }"
            :style="{
              '--theme-primary': theme.primary,
              '--theme-secondary': theme.secondary
            }"
            @click="selectTheme(theme.name)"
            :aria-label="`应用${theme.displayName}主题`"
          >
            <div class="theme-preview">
              <div class="theme-color primary"></div>
              <div class="theme-color secondary"></div>
              <div class="theme-color accent"></div>
            </div>
            <span>{{ theme.displayName }}</span>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { useTheme } from '../composables/useTheme';

export default {
  name: 'ThemeSelector',
  setup() {
    const { 
      currentTheme, 
      setCurrentTheme, 
      initializeTheme, 
      getAvailableThemes 
    } = useTheme();
    
    return {
      currentTheme,
      setCurrentTheme,
      initializeTheme,
      getAvailableThemes
    };
  },
  data() {
    return {
      showThemeMenu: false
    };
  },
  computed: {
    availableThemes() {
      return this.getAvailableThemes();
    }
  },
  mounted() {
    this.initializeTheme();
  },
  methods: {
    selectTheme(themeName) {
      this.setCurrentTheme(themeName);
      this.showThemeMenu = false;
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.showThemeMenu = false;
      }
    }
  },
  watch: {
    showThemeMenu(newVal) {
      if (newVal) {
        document.addEventListener('click', this.handleClickOutside);
      } else {
        document.removeEventListener('click', this.handleClickOutside);
      }
    }
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }
};
</script>

<style scoped>
.theme-selector {
  position: relative;
  display: inline-block;
}

.theme-toggle-btn {
  background: var(--surface-color, #ffffff);
  border: 1px solid var(--border-color, #e0e0e0);
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.theme-toggle-btn:hover {
  transform: rotate(30deg);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.theme-toggle-btn.active {
  background: var(--primary-color, #667eea);
  color: white;
}

.theme-icon {
  font-size: 1.2rem;
}

.theme-menu {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  width: 280px;
  background: var(--surface-color, #ffffff);
  border: 1px solid var(--border-color, #e0e0e0);
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 6px 16px rgba(0,0,0,0.15);
  z-index: 1000;
  background-clip: padding-box;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.theme-menu h4 {
  margin: 0 0 1rem 0;
  color: var(--text-primary-color, #2c3e50);
  font-size: 1rem;
  text-align: center;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border-color, #e0e0e0);
}

.theme-options {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.theme-option {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.6rem;
  border: 2px solid transparent;
  border-radius: 8px;
  background: var(--surface-color, #ffffff);
  color: var(--text-primary-color, #2c3e50);
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
}

.theme-option:hover {
  background: var(--background-color, #f8f9fa);
  transform: translateX(4px);
}

.theme-option.active {
  border-color: var(--primary-color, #667eea);
  background: var(--background-color, #f8f9fa);
}

.theme-preview {
  display: flex;
  gap: 3px;
  width: 30px;
}

.theme-color {
  flex: 1;
  height: 20px;
  border-radius: 2px;
}

.theme-color.primary {
  background-color: var(--theme-primary, #667eea);
}

.theme-color.secondary {
  background-color: var(--theme-secondary, #764ba2);
}

.theme-color.accent {
  background-color: #f0f0f0;
}

@media (max-width: 768px) {
  .theme-menu {
    width: 240px;
    right: -60px;
  }
}
</style>