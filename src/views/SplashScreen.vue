<template>
  <div class="splash-screen" :class="{ fadeOut: isAnimating }">
    <div class="logo-container">
      <div class="logo">
        <div class="logo-circle">
          <span class="logo-text">B</span>
        </div>
      </div>
      <h1 class="blog-title">{{ title }}</h1>
      <p class="blog-subtitle">{{ subtitle }}</p>
    </div>
    
    <div class="loading-dots">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    
    <div class="progress-bar">
      <div class="progress" :style="{ width: loadingProgress + '%' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SplashScreen',
  data() {
    return {
      title: '欢迎来到我的博客',
      subtitle: '正在加载精彩内容...',
      loadingProgress: 0,
      isAnimating: false,
      timer: null
    }
  },
  mounted() {
    this.startLoadingAnimation();
  },
  methods: {
    startLoadingAnimation() {
      // 模拟加载进度
      const interval = setInterval(() => {
        this.loadingProgress += Math.floor(Math.random() * 10);
        if (this.loadingProgress >= 100) {
          this.loadingProgress = 100;
          clearInterval(interval);
          
          // 延迟一下再跳转，让用户看到完成状态
          setTimeout(() => {
            this.navigateToHome();
          }, 500);
        }
      }, 200);
    },
    navigateToHome() {
      // 触发淡出动画
      this.isAnimating = true;
      
      // 在动画结束后跳转
      setTimeout(() => {
        this.$router.push('/home');
      }, 500);
    }
  },
  beforeUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
}
</script>

<style scoped>
.splash-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  z-index: 9999;
  transition: opacity 0.5s ease-out;
}

.splash-screen.fadeOut {
  opacity: 0;
  pointer-events: none;
}

.logo-container {
  text-align: center;
  margin-bottom: 2rem;
}

.logo {
  margin-bottom: 1.5rem;
}

.logo-circle {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  animation: pulse 2s infinite;
}

.logo-text {
  font-size: 3rem;
  font-weight: bold;
  color: white;
}

.blog-title {
  font-size: 2rem;
  margin: 1rem 0;
  font-weight: 600;
  letter-spacing: 1px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.blog-subtitle {
  font-size: 1.1rem;
  opacity: 0.9;
  margin: 0;
}

.loading-dots {
  display: flex;
  gap: 10px;
  margin: 2rem 0;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.7);
  animation: bounce 1.5s infinite ease-in-out;
}

.dot:nth-child(2) {
  animation-delay: 0.2s;
}

.dot:nth-child(3) {
  animation-delay: 0.4s;
}

.progress-bar {
  width: 200px;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background: white;
  border-radius: 2px;
  transition: width 0.3s ease;
}

@keyframes bounce {
  0%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 15px rgba(255, 255, 255, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
}

@media (max-width: 768px) {
  .logo-circle {
    width: 100px;
    height: 100px;
  }
  
  .logo-text {
    font-size: 2.5rem;
  }
  
  .blog-title {
    font-size: 1.5rem;
  }
  
  .blog-subtitle {
    font-size: 1rem;
  }
  
  .progress-bar {
    width: 150px;
  }
}
</style>