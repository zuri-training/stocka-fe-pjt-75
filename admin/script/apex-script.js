var options = {
  series: [
    {
      data: [580, 430],
    },
  ],
  chart: {
    type: "bar",
    height: 150,
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: true,
    },
  },
 
//   fill: {
//     colors: ['#9C27B0','#F44336']
//   },
  dataLabels: {
    enabled: true,
  },
  xaxis: {
    categories: ["Active", "Inactive"],
  },
  tooltip: {
    theme: "dark",
    x: {
      show: true,
    },
    y: {
      title: {
        formatter: function () {  return "users"; },
      },
    },
  },
  theme: {
    palette: 'palette1' // upto palette10
  }
};

var chart = new ApexCharts(document.querySelector("#users"), options);
chart.render();


dates = ['April 13', 'May 13', 'June 13', 'July 13', 'August 13', 'September 13', 'June 13']

var options = {
    series: [{
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
    chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: 'Product Trends by Month',
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  }
  };


  var chart = new ApexCharts(document.querySelector("#revenue"), options);
  chart.render();