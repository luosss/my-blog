<template>
  <div class="home">
    <BlogHeader :title="blogTitle" :description="blogDescription" />
    <div class="container">
      <main class="main-content">
        <BlogPosts />
      </main>
      <aside class="sidebar">
        <BlogSidebar />
      </aside>
    </div>
  </div>
</template>

<script>
import BlogHeader from '../components/BlogHeader.vue'
import BlogSidebar from '../components/BlogSidebar.vue'
import BlogPosts from '../components/BlogPosts.vue'

export default {
  name: 'Home',
  components: {
    BlogHeader,
    BlogSidebar,
    BlogPosts
  },
  data() {
    return {
      blogTitle: '我的博客',
      blogDescription: '欢迎访问我的个人博客'
    }
  }
}
</script>

<style scoped>
.home {
  padding-top: 2rem;
  min-height: 100vh;
  background: linear-gradient(135deg, var(--background-color, #f8f9fa) 0%, var(--surface-color, #ffffff) 100%),
               radial-gradient(circle at top right, rgba(102, 126, 234, 0.08) 0%, transparent 40%),
               radial-gradient(circle at bottom left, rgba(118, 75, 162, 0.08) 0%, transparent 40%);
  position: relative;
  overflow: hidden;
}

.home::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-8c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8-8-3.582-8-8zM56 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-8c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8-8-3.582-8-8zM8 56c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-8c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8-8-3.582-8-8zM56 56c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-8c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8-8-3.582-8-8z' fill='%23667eea' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E") repeat;
  opacity: 0.3;
  z-index: -1;
  pointer-events: none;
}

.container {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.main-content {
  width: 100%;
}

.sidebar {
  width: 100%;
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 1rem;
  }
}
</style>