<template>
      <div class="mainScreen">
        <div class="header">
        
          <h2>TOP RESTO is open</h2>
          <p>22 Mar 2023, 12:21 | Los Angeles</p>
        </div>
  
        <div class="stats">
          <div class="stat-item">
            <p>Total Gross Revenue</p>
            <h3>$2402.23</h3>
          </div>
          <div class="stat-item">
            <p>Accepted Orders</p>
            <h3>97%</h3>
          </div>
          <div class="stat-item">
            <p>Today's Working Hours</p>
            <h3>8AM - 8PM</h3>
          </div>
        </div>
  
        <!-- Biểu đồ Overview -->
        <div class="overview">
          <h3>Overview</h3>
          <!-- Giả sử dùng Chart.js hoặc một thư viện tương tự -->
          <canvas id="overviewChart"></canvas>
        </div>
  
        <!-- Danh sách Top-selling -->
        <div class="topSelling">
          <h3>Top-selling</h3>
          <ul>
            <li>1. Loaf of Wankao</li>
            <li>2. Beef Mince With...</li>
            <li>3. Lasagna Cremavela</li>
            <li>4. Chicken Macarado</li>
            <li>5. Crispy Tender</li>
            <li>6. Spicy Hotdog</li>
            <li>7. Beef Ravioli</li>
            <li>8. Top Burger</li>
            <li>9. Pickled Chillies</li>
          </ul>
        </div>
      </div>
  </template>
  
  <script>
  import { onMounted } from 'vue'
  import Chart from 'chart.js/auto'
  export default {
    name: 'MainPage',
    components: {
    },
    setup() {
      onMounted(() => {
        const ctx = document.getElementById('overviewChart').getContext('2d')
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['18 Mar', '19 Mar', '20 Mar', '21 Mar', '22 Mar', '23 Mar'],
            datasets: [{
              label: 'Revenue',
              data: [300, 500, 800, 600, 700, 1000],
              backgroundColor: '#f97316',
              borderColor: '#fb923c',
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        })
      })
    }
  }
  </script>
  
  <style>

  
  .mainPage {
    display: flex;
    height: 100vh;
  }

  .menuContainer {
    width: 100%;
    padding-left: 10px;
  }
  
  .mainScreen {
    flex: 1;
    background: #fff;
    box-sizing: border-box;
    color: #333;
  }
  
  .header h2 {
    margin: 0;
  }
  
  .stats {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
  }
  
  .stat-item {
    background: #f4f4f4;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    width: 30%;
  }
  
  .stat-item h3 {
    color: #333;
    margin: 10px 0;
  }
  
  
  .overview h3 {
    margin-bottom: 10px;
  }
  
  .topSelling h3 {
    margin-top: 20px;
  }
  
  .topSelling ul {
    list-style: none;
    padding: 0;
  }
  
  .topSelling li {
    padding: 5px 0;
  }
  </style>
  