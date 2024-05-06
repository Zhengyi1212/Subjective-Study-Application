<template>
    <el-container>
      <el-header>
        <div>Macro Photography IQA</div>
        <div>{{ userId }}</div>
      </el-header>
      <el-main class="main-content">
        <h1>Welcome {{ userId }}!</h1>
        <p class="intro-text">We are conducting an academic study on the perception of the technical quality of macro photography. Your task is to evaluate the quality of macro photography images and identify the factors within the images that influence their overall quality.</p>
        <p class="intro-text"><strong>Introduction</strong><br>This Image Quality Assessment (IQA) specifically focuses on the technical aspects of image quality, emphasizing the evaluation of images based on their technical attributes. In contrast to assessments that consider aesthetic quality and compositional elements, the uniqueness of this study lies in the exclusion of aesthetic judgment and artistic attributes from consideration.</p>
        <div class="button">
          <el-button type="primary" round @click="goback">Go back</el-button>
        </div>
        
      </el-main>
    </el-container>
  </template>
  
  <script>
  export default {
    name: 'RefenenceIntro',
    created() {
      this.userId = this.$route.params.id;
    },
    data() {
      return {
        userId: null,
      };
    },
    methods: {
      goback() {
        this.$router.push({ name: 'MainPage', params: { id: this.userId } });
      }
    }
  }
  </script>
  
  <style>
  .el-header {
    background-color: #143FAE;
    color: #FFFFFF;
    display: flex; 
    align-items: center; 
    justify-content: space-between;
    font-size: 24px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 60px); 
    padding: 0 10%; 
  }
  
  .intro-text,h1 {
    font-size: 24px;
    line-height: 1.5;
    text-align: center;
    color: #333;
  }
  
  .button {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  </style>
  
