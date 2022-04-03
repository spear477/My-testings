$(".counter-up").counterUp({
    delay:10,
    time:1000
});


let dateArr = ['jul 21','jul 20','jul 19','jul 18','jul 17','jul 16','jul 15','jul 14','jul 13','jul 12','jul 11'];
let orderCounterArr = [3,4,5,2,4,5,6,9,7,5,8];
let viewerCounterArr = [12,13,15,16,20.24,19,26,33,13,21,30];



const ctx = document.getElementById('ov').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: dateArr,
        datasets: [
            {
            label: 'Order Count',
            data: orderCounterArr,
            backgroundColor: [
                '#1a76fb30',
            ],
            borderColor: [
                '#1a76fb',
            ],
            borderWidth: 0.8,
            fill: true,
            lineTension:0.2,
        },
        {
            label: 'Viewer Count',
            data: viewerCounterArr,
            backgroundColor: [
                '#f9628410'
            ],
            borderColor: [
                '#f96284',
            ],
            borderWidth: 1.5,
            fill: true,
            lineTension:0.2,
        }
    ]
    },
    options: {
        scales: {
            y: {
                
                beginAtZero: true
            },
            x:{
               display:true,
               grid:{
                display:false
               }

                      
            }
        },
       plugins:{
           legend:{
            position: 'top',
            labels: {
                usePointStyle: true,
              },    
           }
       }
    }
});

let orderFromPlace =[5,15,4,9,7 ];
let places =["YGN","MDY","AYW","SHAN","MGW"];

const orderPlace = document.getElementById('op').getContext('2d');
const myPlace= new Chart(op, {
    type: 'doughnut',
    data: {
        labels: places,
        datasets: [{
            label: '# of Votes',
            data: orderFromPlace,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                display:false,
                beginAtZero: true
            },
            x:{
                display:false
            }
        },
        plugins:{
            legend:{
             position: 'bottom',
             labels: {
                 usePointStyle: true,
               },    
            }
        }
    }
});