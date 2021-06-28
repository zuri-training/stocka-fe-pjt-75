const pie= document.getElementById('pieChart').getContext('2d')

// Chart.defaults.global.defaultFontColor= "#777";
// Chart.defaults.global.defaultFontSize= '18';


const salesPopulate= new Chart(pie, {
    type: 'pie',
    data:{
        datasets: [{
            data: [3, 5,7,40],
            backgroundColor: ["#4dd4ff","#d32eee","#fff500","#093E9c","#4dd4ff"],
            borderColor: 'transparent'
       
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Fashion',
            'Electronics',
            'Agricultural',
            'Gold'
        ]

    },
    options: {
        legend: {
            position : 'right',
        }
    }
  
})

const lineSales= document.getElementById('myChart').getContext('2d');

var myChart = new Chart(lineSales, {
    //   type: "line",
    data: {
      datasets: [
        
        {
          type: "line",
          label: "Activated",
          data: [ 4.99,
            12.49,
            23.95,
            275.0,
            1.29,
            1.99,
            19.99,
            1.29,
            4.99,
            19.99,
            4.99,],
          // grouped: true,
          backgroundColor:  "#4dd4ff",
//               borderWidth: 3,
          tension: 0.3,
          // fill: true,
          borderColor: "#4dd4ff",
        },
        {
          type: "line",
          label: "Target",
          data: [
            4.99,
            12.49,
            23.95,
            275.0,
            1.29,
            1.99,
            19.99,
            1.29,
            4.99,
            19.99,
            4.99,
          ],
          // grouped: true,
    
          backgroundColor: "#d32eee",
    
               borderWidth: 3,
               tension: 0.3,
//               // fill: true,
             borderColor: "#d32eee",
        },
      ],
      labels: [10,15,20, 25,30,35,40],
    },
    options: {
        title:{
            display: true,
            text: 'Daily Sales'
        },
      scales: {
        y: {
          beginAtZero: true,
          stacked: true,
        },
        x: {
          stacked: true,
        },
      },
      indexAxis: "x",
    },
  });
  

// const targetChart = new Chart(line, {
//     data: {
        
      
//         // label: [15,30,45,60,75,80,95,110,120,130,140],
//         label: [10,15,20,25,30],
//         datasets: [
//             {
//                 type: 'line',
//               label: "Activated",
//               data: [
//                3500,
//                2500,
//                2000,
//                1500,
//                500
//                 // 57.71,
//                 // 1619.19,
//                 // 174.65,
//                 // 250.0,
//                 // 255.84,
//                 // 251.72,
               
//               ],
//               // grouped: true,
//             backgroundColor:  "#4dd4ff",
//               borderWidth: 3,
//               tension: 0.4,
//               // fill: true,
//               borderColor: "#4dd4ff",
              
//             },
//             {
//                 type: 'line',
//               label: "Target",
//               data: [2800,2500,2000,1000,500 ],
//               // grouped: true
//               backgroundColor: "#d32eee",
    
//               borderWidth: 3,
//               tension: 0.3,
//               // fill: true,
//               borderColor: "#d32eee",
//             }
//         ],

//     options :{
//         title:{
//             display: true,
//             text: "Daily Sales"

//         },
//         scales:{
//             y:{
//                 beginAtZero: false,
//                 stacked: true
//             },
//             x:{
//                 stacked: true
//             }
            
//         }

//     }
//     }
// })
