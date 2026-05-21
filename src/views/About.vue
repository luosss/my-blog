<template>
  <div class="about">
    <div class="container">
      <div class="about-content">
        <h1>关于我</h1>
        <div class="profile-section">
          <div class="avatar">👨‍💻</div>
          <div class="bio">
            <p>欢迎来到我的个人博客！</p>
            <p>我是一名热爱技术的开发者，专注于前端开发和全栈开发。在这里，我会分享各种技术文章，包括但不限于：</p>
          </div>
        </div>
        <div class="skills-section">
          <h2>技能领域</h2>
          <div class="skills-grid">
            <div class="skill-card">
              <h3>前端开发</h3>
              <p>Vue.js, React, HTML, CSS, JavaScript</p>
            </div>
            <div class="skill-card">
              <h3>后端开发</h3>
              <p>Node.js, Express, Python</p>
            </div>
            <div class="skill-card">
              <h3>工具与框架</h3>
              <p>Vite, Webpack, Git, Docker</p>
            </div>
          </div>
        </div>
        <div class="interests-section">
          <h2>兴趣爱好</h2>
          <ul>
            <li>前端框架（Vue.js, React等）</li>
            <li>现代JavaScript特性</li>
            <li>CSS布局与动画</li>
            <li>Node.js后端开发</li>
            <li>项目架构与设计模式</li>
          </ul>
          <p>希望通过我的文章，能给同样热爱技术的你带来帮助和启发。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about {
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.about-content {
  background-color: var(--surface-color, white);
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0,0,0,0.1);
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s ease;
}

.about-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color, #667eea) 0%, var(--secondary-color, #764ba2) 100%);
  border-radius: 12px 12px 0 0;
}

h1 {
  color: var(--text-primary-color, #2c3e50);
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
  position: relative;
}

h1::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.profile-section {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin: 2rem 0;
  padding: 1.5rem;
  background: #f8f9ff;
  border-radius: 12px;
}

.avatar {
  font-size: 4rem;
}

.bio p {
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: #34495e;
}

.skills-section h2,
.interests-section h2 {
  color: var(--text-primary-color, #2c3e50);
  margin: 2rem 0 1.5rem;
  font-size: 1.5rem;
  position: relative;
}

.skills-section h2::after,
.interests-section h2::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 40px;
  height: 2px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.skill-card {
  background: white;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.3s, box-shadow 0.3s;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.skill-card h3 {
  color: #667eea;
  margin-bottom: 0.8rem;
  font-size: 1.2rem;
}

.interests-section ul {
  margin: 1.5rem 0;
  padding-left: 1.5rem;
}

.interests-section li {
  margin-bottom: 0.8rem;
  color: #34495e;
  position: relative;
}

.interests-section li::before {
  content: '•';
  color: #667eea;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}

@media (max-width: 768px) {
  .profile-section {
    flex-direction: column;
    text-align: center;
  }
  
  .avatar {
    align-self: center;
  }
  
  .about-content {
    padding: 1.5rem;
  }
}
</style>