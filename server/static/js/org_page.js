var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Количество игроков', 'Анкет подано', 'Чек покупки', 'Отправлено подарков'],
        datasets: [{
            label: 'Статистика игроков',
            data: [3, 2, 1, 1],
            backgroundColor: [
                'rgba(216, 27, 96, 0.6)',
                'rgba(3, 169, 244, 0.6)',
                'rgba(255, 152, 0, 0.6)',
                'rgba(29, 233, 182, 0.6)'
            ],
            borderColor: [
                'rgba(216, 27, 96, 1)',
                'rgba(3, 169, 244, 1)',
                'rgba(255, 152, 0, 1)',
                'rgba(29, 233, 182, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: false,
        legend: {
            display: false
        },
        title: {
            text: 'Статистика игроков',
            display: true,
            position: 'top',
            fontSize: 16,
            padding: 20
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 75
                }
            }]
        }
    }
});

