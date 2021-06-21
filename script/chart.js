const chart = document.getElementById('mychart').getContext('2d');
let unitPriceChart = new Chart( chart,{
    type: 'bar',
    data: {
        labels: [15, 15, 15],
        datasets: [{
            label: 'Price/Kg',
            data: [
                3500,
                3500,
                3500
            ]
        }]
    }

})
