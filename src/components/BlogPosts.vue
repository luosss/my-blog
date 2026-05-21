<template>
  <div class="blog-posts">
    <article v-for="post in paginatedPosts" :key="post.id" class="post-card">
      <div class="post-image">
        <img :src="post.image || 'https://placehold.co/600x300?text=Blog+Image'" :alt="post.title" />
      </div>
      <div class="post-content">
        <h2 class="post-title">{{ post.title }}</h2>
        <div class="post-meta">
          <span class="post-date">{{ formatDate(post.date) }}</span>
          <span class="post-author">作者：{{ post.author }}</span>
          <span class="post-category">{{ post.category }}</span>
        </div>
        <div class="post-excerpt">
          <p>{{ post.excerpt }}</p>
        </div>
        <div class="post-tags">
          <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
        <div class="post-actions">
          <button class="read-more" @click="viewPost(post.id)">阅读更多</button>
          <div class="post-stats">
            <span class="comments-count">{{ post.comments }} 评论</span>
            <span class="likes-count">{{ post.likes }} 点赞</span>
          </div>
        </div>
      </div>
    </article>
    
    <!-- 分页 -->
    <div class="pagination">
      <button 
        v-for="page in totalPages" 
        :key="page"
        @click="changePage(page)"
        :class="{ active: currentPage === page }"
        class="page-btn"
      >
        {{ page }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPosts',
  data() {
    return {
      currentPage: 1,
      postsPerPage: 3,
      posts: [
        {
          id: 1,
          title: 'Vue3 新特性详解',
          excerpt: 'Vue3 带来了许多令人兴奋的新特性，包括 Composition API、性能提升等。本文将详细介绍 Vue3 的核心特性和实际应用。',
          date: '2023-05-15',
          author: '博主',
          category: '前端开发',
          tags: ['Vue.js', 'JavaScript', '前端'],
          comments: 12,
          likes: 24,
          image: 'https://picsum.photos/600/300?random=1'
        },
        {
          id: 2,
          title: '如何使用 Vite 构建项目',
          excerpt: 'Vite 是下一代前端构建工具，具有快速启动、即时热更新等优点。本文将带你深入了解 Vite 的强大功能和使用方法。',
          date: '2023-05-10',
          author: '博主',
          category: '工具',
          tags: ['Vite', '构建工具', '前端'],
          comments: 8,
          likes: 15,
          image: 'https://picsum.photos/600/300?random=2'
        },
        {
          id: 3,
          title: '理解 JavaScript 异步编程',
          excerpt: '异步编程是 JavaScript 的核心概念之一，本文将深入探讨 Promise、async/await 等概念，帮助你掌握异步编程的精髓。',
          date: '2023-05-05',
          author: '博主',
          category: '前端开发',
          tags: ['JavaScript', '异步编程', 'Promise'],
          comments: 18,
          likes: 32,
          image: 'https://picsum.photos/600/300?random=3'
        },
        {
          id: 4,
          title: 'CSS Grid 布局完全指南',
          excerpt: 'CSS Grid 是一个二维布局系统，非常适合复杂的网页布局。本指南将全面介绍 Grid 布局的各个方面。',
          date: '2023-04-28',
          author: '博主',
          category: '前端开发',
          tags: ['CSS', '布局', 'Grid'],
          comments: 5,
          likes: 9,
          image: 'https://picsum.photos/600/300?random=4'
        },
        {
          id: 5,
          title: 'Node.js 最佳实践',
          excerpt: '在使用 Node.js 开发应用时，有一些最佳实践可以提高代码质量和性能。本文总结了实用的开发技巧。',
          date: '2023-04-22',
          author: '博主',
          category: '后端开发',
          tags: ['Node.js', '后端', '服务器'],
          comments: 14,
          likes: 21,
          image: 'https://picsum.photos/600/300?random=5'
        },
        {
          id: 6,
          title: 'TypeScript 在项目中的应用',
          excerpt: 'TypeScript 提供了静态类型检查，使代码更加健壮和易于维护。本文分享了在实际项目中的应用经验。',
          date: '2023-04-15',
          author: '博主',
          category: '前端开发',
          tags: ['TypeScript', 'JavaScript', '前端'],
          comments: 7,
          likes: 16,
          image: 'https://picsum.photos/600/300?random=6'
        }
      ]
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.posts.length / this.postsPerPage);
    },
    paginatedPosts() {
      const start = (this.currentPage - 1) * this.postsPerPage;
      return this.posts.slice(start, start + this.postsPerPage);
    }
  },
  methods: {
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('zh-CN', options);
    },
    viewPost(id) {
      this.$router.push(`/post/${id}`);
    },
    changePage(page) {
      this.currentPage = page;
      // 滚动到顶部
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
</script>

<style scoped>
.blog-posts {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.post-card {
  background-color: var(--surface-color, white);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  overflow: hidden;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s, background-color 0.3s ease;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  border: 1px solid var(--border-color, #eee);
  transform-style: preserve-3d;
}

.post-card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  border: 1px solid var(--primary-color, #667eea);
  
  /* 添加微妙的光泽效果 */
  position: relative;
}

.post-card:hover::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, transparent 70%);
  transform: rotate(30deg);
  pointer-events: none;
  animation: shine 1.5s ease-in-out infinite;
}

@keyframes shine {
  0% { transform: translateX(-100%) translateY(-100%) rotate(30deg); }
  20% { transform: translateX(100%) translateY(100%) rotate(30deg); }
  100% { transform: translateX(100%) translateY(100%) rotate(30deg); }
}

.post-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.post-content {
  padding: 1.5rem;
}

.post-title {
  margin: 0 0 1rem 0;
  color: var(--text-primary-color, #2c3e50);
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
}

.post-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: var(--text-secondary-color, #7f8c8d);
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color, #eee);
}

.post-meta span {
  display: flex;
  align-items: center;
}

.post-meta::before {
  content: '';
  display: inline-block;
  width: 4px;
  height: 4px;
  background-color: #7f8c8d;
  border-radius: 50%;
  margin-right: 0.5rem;
}

.post-excerpt p {
  margin: 0 0 1.5rem 0;
  line-height: 1.7;
  color: var(--text-primary-color, #34495e);
  font-size: 1rem;
}

.post-tags {
  margin-bottom: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  display: inline-block;
  background: linear-gradient(135deg, var(--primary-color, #667eea) 0%, var(--secondary-color, #764ba2) 100%);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.post-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--border-color, #eee);
  padding-top: 1rem;
}

.read-more {
  background: linear-gradient(135deg, var(--primary-color, #667eea) 0%, var(--secondary-color, #764ba2) 100%);
  color: white;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 600;
}

.read-more:hover {
  transform: scale(1.05);
}

.post-stats {
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;
  color: #7f8c8d;
}

.pagination {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.page-btn {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: 1px solid #ddd;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
}

.page-btn:hover {
  background: linear-gradient(135deg, var(--primary-color, #667eea) 0%, var(--secondary-color, #764ba2) 100%);
  color: white;
  transform: scale(1.1);
}

.page-btn.active {
  background: linear-gradient(135deg, var(--primary-color, #667eea) 0%, var(--secondary-color, #764ba2) 100%);
  color: white;
  border-color: var(--primary-color, #667eea);
}

@media (max-width: 768px) {
  .post-card {
    flex-direction: column;
  }
  
  .post-actions {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  
  .pagination {
    gap: 0.3rem;
  }
  
  .page-btn {
    width: 32px;
    height: 32px;
    font-size: 0.9rem;
  }
}
</style>