<template>
    <el-container>
      <el-header>
        <div>Macro Photography IQA</div>
        <div>{{ userId }}</div>
      </el-header>
      <el-main>
        <h2 class="menu-title">Menu</h2>
        <div class="menu-item">
          <div>Segment 1</div>
          <el-button type="primary" round @click="navigateToMainPage('part1')">Start<i class="el-icon-arrow-right el-icon--right"/></el-button>
        </div>
        <div class="menu-item">
          <div>Segment 2</div>
          <el-button type="primary" round @click="navigateToMainPage('part2')">Start<i class="el-icon-arrow-right el-icon--right"/></el-button>
        </div>
        <div class="menu-item">
          <div>Segment 3</div>
          <el-button type="primary" round @click="navigateToMainPage('part3')">Start<i class="el-icon-arrow-right el-icon--right"/></el-button>
        </div>
        <div class="menu-item">
          <div>Segment 4</div>
          <el-button type="primary" round @click="navigateToMainPage('part4')">Start<i class="el-icon-arrow-right el-icon--right"/></el-button>
        </div>
      </el-main>
    </el-container>
  </template>

  <script>
  export default {
    created() {
      this.userId = this.$route.params.id;
    },
    data() {
      return {
        userId: null,
      };
    },
    methods: {
    navigateToMainPage(param) {
      this.$router.push({ name: 'MainPage', params: { customParam: param } });
    },
  },
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
    line-height: auto;
  }

  .menu-title {
    text-align: center;
  }
  .menu-item {
    display: flex;
    justify-content: space-between;
    margin: 5%;
    font-size: 18px;
    line-height: 1.5;
    border: 1px solid #ddd;
    padding: 10px;
    background-color: #f9f9f9;
    align-items: center;
  }
  
  </style>
     