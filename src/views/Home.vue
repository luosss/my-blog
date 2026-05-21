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