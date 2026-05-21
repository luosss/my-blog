<script setup>
import { RouterView } from 'vue-router';
import { useTheme } from './composables/useTheme';

const { initializeTheme } = useTheme();
initializeTheme();
</script>

<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Noto Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: var(--background-color, #f8f9fa);
  color: var(--text-primary-color, #2c3e50);
  line-height: 1.6;
  transition: background-color 0.3s ease, color 0.3s ease;
}

#app {
  min-height: 100vh;
  background: linear-gradient(135deg, var(--background-color, #f8f9fa) 0%, var(--surface-color, #ffffff) 100%);
  position: relative;
  overflow-x: hidden;
}

#app::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at top right, rgba(102, 126, 234, 0.08) 0%, transparent 30%),
               radial-gradient(circle at bottom left, rgba(118, 75, 162, 0.08) 0%, transparent 30%);
  z-index: -1;
  pointer-events: none;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
  border: none;
  outline: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
}
</style>
