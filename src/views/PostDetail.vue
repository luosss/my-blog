<template>
  <div class="post-detail">
    <div class="container">
      <article class="post-content">
        <h1 class="post-title">{{ post.title }}</h1>
        <div class="post-meta">
          <div class="meta-item">
            <i class="icon-calendar"></i>
            <span>{{ formatDate(post.date) }}</span>
          </div>
          <div class="meta-item">
            <i class="icon-user"></i>
            <span>作者：{{ post.author }}</span>
          </div>
          <div class="post-tags">
            <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>
        <div class="post-image" v-if="post.image">
          <img :src="post.image" :alt="post.title" />
        </div>
        <div class="post-body">
          <div v-for="(paragraph, index) in post.body.split('\n\n')" :key="index" class="post-paragraph">
            {{ paragraph }}
          </div>
        </div>
      </article>
      
      <div class="comments-section">
        <h3>评论 ({{ comments.length }})</h3>
        <div v-if="comments.length > 0" class="comments-list">
          <div v-for="comment in comments" :key="comment.id" class="comment">
            <div class="comment-header">
              <div class="comment-author">{{ comment.author }}</div>
              <div class="comment-date">{{ formatDate(comment.date) }}</div>
            </div>
            <p class="comment-content">{{ comment.content }}</p>
          </div>
        </div>
        <div v-else class="no-comments">
          暂无评论，快来发表第一个评论吧！
        </div>
        
        <form @submit.prevent="addComment" class="comment-form">
          <h4>发表评论</h4>
          <div class="form-row">
            <div class="form-group">
              <label for="author">姓名 *</label>
              <input 
                type="text" 
                id="author" 
                v-model="newComment.author" 
                placeholder="输入您的姓名" 
                required
              >
            </div>
            <div class="form-group">
              <label for="date">日期</label>
              <input 
                type="text" 
                id="date" 
                :value="currentDate" 
                readonly
              >
            </div>
          </div>
          <div class="form-group">
            <label for="content">评论内容 *</label>
            <textarea 
              id="content" 
              v-model="newComment.content" 
              placeholder="写下您的评论..." 
              rows="5" 
              required
            ></textarea>
          </div>
          <button type="submit" class="submit-btn">提交评论</button>
        </form>
      </div>
      
      <div class="post-navigation">
        <button @click="$router.push('/')" class="back-btn">
          ← 返回首页
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostDetail',
  props: ['id'],
  data() {
    return {
      post: {},
      comments: [],
      newComment: {
        author: '',
        content: '',
        date: ''
      }
    }
  },
  computed: {
    currentDate() {
      const today = new Date();
      return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    }
  },
  created() {
    this.loadPost();
    this.loadComments();
  },
  methods: {
    loadPost() {
      // 模拟根据ID获取文章数据
      const posts = [
        {
          id: 1,
          title: 'Vue3 新特性详解',
          date: '2023-05-15',
          author: '博主',
          tags: ['Vue.js', 'JavaScript', '前端'],
          body: 'Vue 3 是 Vue.js 的最新版本，带来了许多激动人心的新特性和改进。其中最显著的是 Composition API，它提供了一种更灵活的方式来组织组件逻辑。\n\nComposition API 允许我们更好地重用有状态逻辑，同时提高了代码的可读性和可维护性。此外，Vue 3 还引入了更好的 TypeScript 支持，以及显著的性能改进。\n\n另一个重要更新是新的响应式系统，基于 Proxy 实现，提供了更好的性能和更丰富的功能。虚拟 DOM 也得到了重构，进一步提升了渲染性能。\n\nVue 3 还带来了全新的构建工具 Vite，它利用浏览器原生 ES 模块，提供了更快的开发体验。',
          image: 'https://picsum.photos/800/400?random=10'
        },
        {
          id: 2,
          title: '如何使用 Vite 构建项目',
          date: '2023-05-10',
          author: '博主',
          tags: ['Vite', '构建工具', '前端'],
          body: 'Vite 是下一代前端构建工具，由 Vue 的作者尤雨溪开发。它利用浏览器原生 ES 模块导入，在开发环境中提供极快的冷启动和热模块替换。\n\nVite 的核心优势在于其开发服务器的快速启动和即时热更新。它通过原生 ES 模块的方式运行代码，无需打包整个应用程序，从而实现了秒级启动时间。\n\n在生产环境中，Vite 使用 Rollup 进行打包，确保了高效的打包输出。Vite 还支持多种框架，不仅限于 Vue，还包括 React、Preact、Lit 等。\n\nVite 的插件系统也非常强大，可以根据需要扩展功能。',
          image: 'https://picsum.photos/800/400?random=11'
        },
        {
          id: 3,
          title: '理解 JavaScript 异步编程',
          date: '2023-05-05',
          author: '博主',
          tags: ['JavaScript', '异步编程', 'Promise'],
          body: 'JavaScript 异步编程是理解 JavaScript 的关键概念之一。传统的回调函数容易导致回调地狱，而现代 JavaScript 提供了更优雅的解决方案。\n\nPromise 对象代表了一个异步操作的最终完成（或失败）及其结果值。它让异步代码更具可读性和可维护性。Promise 的链式调用使得我们可以顺序地执行多个异步操作。\n\nES2017 引入的 async/await 语法使得异步代码看起来像同步代码一样，进一步简化了异步编程的复杂性。使用 async/await 可以让代码更加清晰易懂。\n\n异步编程在现代 Web 开发中非常重要，尤其是在处理 API 请求、文件操作等方面。',
          image: 'https://picsum.photos/800/400?random=12'
        }
      ];
      
      // 根据传入的ID查找对应的文章
      this.post = posts.find(p => p.id === parseInt(this.id)) || posts[0];
    },
    loadComments() {
      // 模拟加载评论数据
      this.comments = [
        {
          id: 1,
          author: '访客1',
          content: '这篇文章非常有用，学到了很多新知识！',
          date: '2023-05-16'
        },
        {
          id: 2,
          author: '访客2',
          content: '感谢分享，期待更多类似的文章。',
          date: '2023-05-17'
        }
      ];
    },
    addComment() {
      const comment = {
        id: this.comments.length + 1,
        author: this.newComment.author,
        content: this.newComment.content,
        date: this.currentDate
      };
      
      this.comments.push(comment);
      this.newComment = { author: '', content: '' };
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('zh-CN', options);
    }
  }
}
</script>

<style scoped>
.post-detail {
  padding: 2rem 0;
  background-color: #f8f9fa;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

.post-content {
  background-color: var(--surface-color, white);
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0,0,0,0.1);
  padding: 2.5rem;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s ease;
}

.post-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color, #667eea) 0%, var(--secondary-color, #764ba2) 100%);
  border-radius: 12px 12px 0 0;
}

.post-title {
  color: #2c3e50;
  font-size: 2rem;
  margin: 0 0 1.5rem 0;
  line-height: 1.3;
}

.post-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
  align-items: center;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #7f8c8d;
  font-size: 0.9rem;
}

.post-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
}

.post-image img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin: 1.5rem 0;
}

.post-paragraph {
  line-height: 1.8;
  color: #34495e;
  margin-bottom: 1.5rem;
  font-size: 1.05rem;
}

.comments-section {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0,0,0,0.1);
  padding: 2.5rem;
}

.comments-section h3 {
  margin-top: 0;
  margin-bottom: 1.5rem;
  color: #2c3e50;
  position: relative;
  padding-bottom: 0.8rem;
}

.comments-section h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.comments-list {
  margin-bottom: 2rem;
}

.comment {
  padding: 1.2rem;
  border: 1px solid #eee;
  border-radius: 8px;
  margin-bottom: 1rem;
  background-color: #fafbff;
}

.comment-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
  font-size: 0.95rem;
}

.comment-author {
  font-weight: 600;
  color: #2c3e50;
}

.comment-date {
  color: #7f8c8d;
}

.comment-content {
  margin: 0;
  color: #34495e;
  line-height: 1.6;
}

.no-comments {
  padding: 1.5rem;
  text-align: center;
  color: #7f8c8d;
  font-style: italic;
  background-color: #f8f9ff;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.comment-form h4 {
  margin: 0 0 1.5rem 0;
  color: #2c3e50;
  position: relative;
  padding-bottom: 0.8rem;
}

.comment-form h4::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1.2rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #2c3e50;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s;
  box-sizing: border-box;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #667eea;
}

.submit-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 0.8rem 1.8rem;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: transform 0.3s;
}

.submit-btn:hover {
  transform: scale(1.05);
}

.post-navigation {
  text-align: center;
  margin-top: 2rem;
}

.back-btn {
  background: white;
  color: #667eea;
  border: 2px solid #667eea;
  padding: 0.8rem 1.8rem;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s;
}

.back-btn:hover {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .post-content,
  .comments-section {
    padding: 1.5rem;
  }
  
  .post-title {
    font-size: 1.6rem;
  }
  
  .post-meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>