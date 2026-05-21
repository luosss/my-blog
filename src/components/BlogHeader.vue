<template>
  <header class="blog-header">
    <div class="header-container">
      <div class="header-content">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
      </div>
      <nav class="navigation">
        <router-link to="/home">首页</router-link>
        <router-link to="/about">关于</router-link>
        <router-link to="/contact">联系</router-link>
        <ThemeSelector />
      </nav>
    </div>
  </header>
</template>

<script>
import ThemeSelector from './ThemeSelector.vue';

export default {
  name: 'BlogHeader',
  components: {
    ThemeSelector
  },
  props: {
    title: String,
    description: String
  }
}
</script>

<style scoped>
.blog-header {
  background: linear-gradient(135deg, var(--primary-color, #667eea) 0%, var(--secondary-color, #764ba2) 100%);
  color: white;
  padding: 0;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: background 0.3s ease;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-content h1 {
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
}

.header-content p {
  margin: 0.3rem 0 0;
  font-size: 1rem;
  opacity: 0.9;
}

.navigation {
  display: flex;
  gap: 1.5rem;
}

.navigation a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  transition: all 0.3s ease;
  font-weight: 500;
}

.navigation a.router-link-active,
.navigation a:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .header-container {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    padding: 1rem;
  }
  
  .navigation {
    margin-top: 1rem;
  }
}
</style>