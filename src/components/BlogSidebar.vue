<template>
  <div class="blog-sidebar">
    <div class="widget">
      <h3>关于博主</h3>
      <div class="author-info">
        <div class="avatar">👤</div>
        <p>这是一个Vue3驱动的个人博客，分享技术心得与生活感悟。</p>
      </div>
    </div>
    
    <div class="widget">
      <h3>分类</h3>
      <ul>
        <li><a href="#">前端开发</a></li>
        <li><a href="#">后端开发</a></li>
        <li><a href="#">数据库</a></li>
        <li><a href="#">算法</a></li>
        <li><a href="#">工具推荐</a></li>
      </ul>
    </div>
    
    <div class="widget">
      <h3>热门标签</h3>
      <div class="tags">
        <span class="tag">Vue.js</span>
        <span class="tag">JavaScript</span>
        <span class="tag">CSS</span>
        <span class="tag">Node.js</span>
        <span class="tag">React</span>
        <span class="tag">TypeScript</span>
      </div>
    </div>
    
    <div class="widget">
      <h3>热门文章</h3>
      <ul class="popular-posts">
        <li><a href="#">Vue3 新特性详解</a></li>
        <li><a href="#">如何使用 Vite 构建项目</a></li>
        <li><a href="#">理解 JavaScript 异步编程</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogSidebar'
}
</script>

<style scoped>
.blog-sidebar {
  background: var(--surface-color, white);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  height: fit-content;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid var(--border-color, #eee);
  overflow: hidden;
}

.blog-sidebar:hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  transform: translateY(-8px) scale(1.02);
  border: 1px solid var(--primary-color, #667eea);
}

.blog-sidebar::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color, #667eea) 0%, var(--secondary-color, #764ba2) 100%);
  border-radius: 20px 20px 0 0;
}

.widget {
  margin-bottom: 1.8rem;
}

.widget h3 {
  margin-top: 0;
  margin-bottom: 1rem;
  color: var(--text-primary-color, #2c3e50);
  font-size: 1.1rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.widget h3::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 40px;
  height: 2px;
  background: linear-gradient(135deg, var(--primary-color, #667eea) 0%, var(--secondary-color, #764ba2) 100%);
}

.widget ul {
  list-style-type: none;
  padding-left: 0;
}

.widget li {
  margin-bottom: 0.7rem;
}

.widget a {
  text-decoration: none;
  color: var(--text-secondary-color, #555);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
}

.widget a::before {
  content: '▶';
  font-size: 0.6rem;
  margin-right: 0.5rem;
  transition: transform 0.3s ease;
}

.widget a:hover {
  color: var(--primary-color, #667eea);
  transform: translateX(5px);
}

.widget a:hover::before {
  transform: translateX(2px);
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: linear-gradient(135deg, var(--primary-color, #667eea) 0%, var(--secondary-color, #764ba2) 100%);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  transition: transform 0.2s ease;
}

.tag:hover {
  transform: scale(1.05);
}

.author-info {
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
}

.avatar {
  font-size: 2rem;
}

.popular-posts a {
  font-size: 0.9rem;
  color: var(--text-secondary-color, #555);
}
</style>