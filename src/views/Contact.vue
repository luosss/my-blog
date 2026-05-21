<template>
  <div class="contact">
    <div class="container">
      <h1>联系我</h1>
      <div class="contact-info">
        <p>如果您有任何问题或建议，欢迎随时与我联系！</p>
        
        <div class="contact-methods">
          <div class="method">
            <h3>📧 电子邮件</h3>
            <p>example@email.com</p>
          </div>
          
          <div class="method">
            <h3>📱 社交媒体</h3>
            <ul>
              <li>Github: <a href="#" target="_blank">@username</a></li>
              <li>Twitter: <a href="#" target="_blank">@username</a></li>
              <li>LinkedIn: <a href="#" target="_blank">linkedin.com/in/username</a></li>
            </ul>
          </div>
          
          <div class="method">
            <h3>📝 留言表单</h3>
            <form @submit.prevent="submitForm" class="contact-form">
              <div class="form-group">
                <label for="name">姓名</label>
                <input type="text" id="name" v-model="form.name" required>
              </div>
              
              <div class="form-group">
                <label for="email">邮箱</label>
                <input type="email" id="email" v-model="form.email" required>
              </div>
              
              <div class="form-group">
                <label for="message">消息</label>
                <textarea id="message" v-model="form.message" rows="5" required></textarea>
              </div>
              
              <button type="submit" class="submit-btn">发送消息</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      alert('表单提交成功！实际项目中这里会发送数据到服务器。');
      this.form = { name: '', email: '', message: '' }; // 清空表单
    }
  }
}
</script>

<style scoped>
.contact {
  padding: 2rem 0;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0,0,0,0.1);
  overflow: hidden;
}

h1 {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
  margin: 0;
  font-size: 1.8rem;
  text-align: center;
}

.contact-info {
  padding: 2rem;
  line-height: 1.7;
}

.contact-methods {
  margin-top: 1.5rem;
}

.method {
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
}

.method:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.method h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.method ul {
  list-style: none;
  padding-left: 0;
}

.method li {
  margin-bottom: 0.8rem;
  padding-left: 1.2rem;
  position: relative;
}

.method li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: #667eea;
}

.method a {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.method a:hover {
  color: #764ba2;
}

.contact-form {
  margin-top: 1rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
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
  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.2);
}

.submit-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 0.9rem 2rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s;
  width: 100%;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

@media (max-width: 768px) {
  .contact-info {
    padding: 1.5rem;
  }
  
  h1 {
    font-size: 1.5rem;
    padding: 1.2rem;
  }
}
</style>