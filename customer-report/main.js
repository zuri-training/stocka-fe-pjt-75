var sidebar = document.getElementById("sidebar");
var menu = document.getElementById("menu");

var myline = document.getElementById("line").getContext("2d");
var mypie = document.getElementById("pie").getContext("2d");


menu.addEventListener('click', function(){
  sidebar.classList.toggle('show');
});

var myChart = new Chart(myline, {
    //   type: "line",
    data: {
      datasets: [
        {
          type: "line",
          label: "Archived",
          data: [
            189.05,
            999.5,
            179.64,
            539.73,
            167.44,
            299.4,
            149.25,
            449.1,
            63.68,
            539.4,
            449.1,
            57.71,
            1619.19,
            174.65,
            250.0,
            255.84,
            251.72,
            575.36,
            299.85,
            479.04,
            86.43,
            1183.26,
            413.54,
            1305.0,
            19.96,
            139.93,
            249.5,
            131.34,
            479.04,
            68.37,
            719.2,
            625.0,
            309.38,
            686.95,
            1005.9,
          ],
          // grouped: true,
          backgroundColor: ["#4DD4FF"],
          borderWidth: 1,
          tension: 0.4,
          // fill: true,
          borderColor: "#4DD4FF",
          pointStyle: "star",
        },
        {
          type: "line",
          label: "Target",
          data: [96, 53, 80, 5, 62, 55, 42, 3, 7, 76, 57, 14, 11, 94, 28],
          // grouped: true,
          backgroundColor: ["#D32EEE"],
          borderWidth: 1,
          tension: 0.3,
          // fill: true,
          borderColor: "#D32EEE",
        },
      ],
      labels: [6, 13, 18, 5, 12, 15, 34, 34, 17, 7, 4, 14, 11, 39, 28],
    },
    options: {
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

  
let pie = new Chart(mypie, {
    type: "pie",
    data: {
      labels: ["Electronics", "Gold", "Agriculture", "Fashion"],
      label: "",
      datasets: [
        {
          label: "",
          data: [10, 10, 10, 70],
          backgroundColor: ["#D32EEE", "#94E199", "#254E9E", "#4DD4FF"],
        },
      ],
    },
    options: {
      indexAxis: "y",
      plugins: {
          legend: {
          position: "bottom"
      }
      }
    },
  });