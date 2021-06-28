const bars= document.querySelector('.harmburger-menu');
const sidepane= document.querySelector('.side-pane');
const mainSection= document.querySelector('.main');
bars.addEventListener('click', ()=>{
sidepane.classList.toggle('active')
})




const chart = document.getElementById('mychart').getContext('2d');
let unitPriceChart = new Chart( chart,{
    type: 'line',
    data: {
        labels: [15, 15, 15,15,15],
        datasets: [
            {
                label: 'Price/Kg',
            data: [
                500,
                600.8,
                2000,
                2400
            ],
        
            borderWidth: 3,
        // tension: 0.3,
        // fill: true,
        borderColor: "#45AFEE",
        },
    {
        label: 'Price/Kg',
        data: [
            500,
            800,
            2000,
            2500
        ],
    
        borderWidth: 3,
    tension: 0.3,
    // fill: true,
    borderColor: "#F18586",
    },
{
    label: 'Price/Kg',
    data: [
        500,
        1000,
        2000,
        3500
    ],

    borderWidth: 3,
tension: 0.3,
// fill: true,
borderColor: "#FF44D6",  
}]
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
        legend: {
            backgroundColor: '#fff',
            position: 'right',
            display: 'false'
        }
      },

})
