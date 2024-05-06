<template>
    <el-container>
      <el-header>
        <div>Macro Photography IQA</div>
        <div>{{ userId }}</div>
      </el-header>
      <el-main>
        <div class="content-container">
          <h1>Examples</h1>
          <p class="intro-text">We want to recall that this IQA only focuses on the technical quality of the images.</p>
          <div class="flex-container">
            <div class="text-container">
              <div class="des">{{ text }}</div>
            </div>
            <div class="demo-image__preview">
              <el-image style="width: 300px; height: 300px" :src="picUrl" :preview-src-list="srcList"></el-image>
            </div>
          </div>
          <div class="button-container">
            <el-button type="primary" round @click="goback">Go back</el-button>
          </div>
        </div>
      </el-main>
    </el-container>
  </template>
  
  <script>
  export default {
    name: 'ReferenceExample',
    created() {
      this.userId = this.$route.params.id;
    },
    data() {
      return {
        userId: null,
        text: "Long descriptive text goes here. It could span multiple lines and should align with the image on its right.",
        picUrl: require("../assets/logo.png"),
        srcList: [require("../assets/logo.png")]
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
    height: calc(100vh - 60px);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 80%; 
    margin: auto;
  }
  .flex-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 40px;
  }
  
  .text-container {
    flex: 3; 
    padding-right: 20px; 
  
  }
  
  .demo-image__preview {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .button-container {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 20px;
  }
  
  .intro-text, .des {
    font-size: 24px;
    line-height: 1.5;
    color: #333;
  }
  
  .demo-image__preview {
    margin-right: 20px;
  }
  </style>
  

