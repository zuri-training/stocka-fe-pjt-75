// var bar1 = document.getElementById("user1").getContext("2d");
let container = document.getElementById("container");
let hide = document.getElementById("hide");
let sidebar = document.getElementById("sidebar");
var bar2 = document.getElementById("user2").getContext("2d");
var ctx = document.getElementById("myChart").getContext("2d");
var dough = document.getElementById("chart2").getContext("2d");

hide.addEventListener("click", function () {
  // sidebar.style.display = 'none'
  sidebar.classList.toggle("hide");
  sidebar.classList.toggle("forsmall");
  container.classList.toggle("to-block");
  container.style.position = 'relative';
});

// let myBar1 = new Chart(bar1, {
//   type: "bar",
//   data: {
//     labels: ["Premium", "Free"],
//     datasets: [
//       {
//         label: "",
//         data: [63, 23],
//         backgroundColor: ["#093E9C", "#D11464"],
//       },
//     ],
//   },
//   options: {
//     indexAxis: "y",
//   },
// });
let myBar2 = new Chart(bar2, {
  type: "bar",
  data: {
    labels: ["Active", "Inactive"],
    label: "",
    datasets: [
      {
        label: "",
        data: [90, 40],
        backgroundColor: ["#00966D", "#F4B740"],
      },
    ],
  },
  options: {
    indexAxis: "y",
  },
});

var myChart = new Chart(ctx, {
  //   type: "line",
  data: {
    datasets: [
      {
        type: "line",
        label: "GR",
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
        backgroundColor: ["#FB49C0"],
        borderWidth: 1,
        tension: 0.4,
        // fill: true,
        borderColor: "red",
        pointStyle: "star",
      },
      {
        type: "line",
        label: "PE",
        data: [96, 53, 80, 5, 62, 55, 42, 3, 7, 76, 57, 14, 11, 94, 28],
        // grouped: true,
        backgroundColor: ["#53B9EA"],
        borderWidth: 1,
        tension: 0.3,
        // fill: true,
        borderColor: "blue",
      },
      {
        type: "line",
        label: "SE",
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
        backgroundColor: ["#F5A623"],
        borderWidth: 1,
        tension: 0.3,
        // fill: true,
        borderColor: "orange",
      },
    ],
    labels: ["January", "Feb", "Mar", "Apr", "May", "June"],
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

const data = {
  labels: ["Groceries", "Rice", "Phones"],
  datasets: [
    {
      label: "My First Dataset",
      data: [90, 50, 200],
      backgroundColor: ["#3BF3D2", "#F178B6", "#7879F1"],
      hoverOffset: 4,
    },
  ],
};
const config = {
  type: "doughnut",
  data: data,
};

const mydough = new Chart(dough, config);
