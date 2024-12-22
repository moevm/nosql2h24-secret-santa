var ctx = document.getElementById('myChart').getContext('2d');
let myChart;
async function allChart(){

    let request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:8000/get_all_game_statistics/' + `${game_id}`, false);
    request.send(null);

    let data = [];
    if (request.status == 200) {
        data = JSON.parse(request.responseText);
    }
    if (myChart) {
        myChart.destroy();
    }
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Количество игроков', 'Анкет подано', 'Чек покупки', 'Отправлено подарков'],
            datasets: [{
                label: 'Статистика игроков',
                data: data,
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
            responsive: true,
            devicePixelRatio: 4,
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
//                yAxes: [{
//                    ticks: {
//                        min: 75
//                    }
//                }]
            }
        }
    });
}

function profileChart(){
    let request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:8000/get_game_statistics_form/' + `${game_id}`, false);
    request.send(null);

    let data = [];
    if (request.status == 200) {
        data = JSON.parse(request.responseText);
    }
    if (myChart) {
        myChart.destroy();
    }
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Подали анкеты', 'Не подали анкеты'],
            datasets: [{
                label: 'Статистика игроков',
                data: data,
                backgroundColor: [
                    'rgba(216, 27, 96, 0.6)',
                    'rgba(3, 169, 244, 0.6)'
                ],
                borderColor: [
                    'rgba(216, 27, 96, 1)',
                    'rgba(3, 169, 244, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            devicePixelRatio: 4,
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
//                yAxes: [{
//                    ticks: {
//                        min: 75
//                    }
//                }]
            }
        }
    });
}

function buyChart(){
    let request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:8000/get_game_statistics_cheques/' + `${game_id}`, false);
    request.send(null);

    let data = [];
    if (request.status == 200) {
        data = JSON.parse(request.responseText);
    }
    if (myChart) {
        myChart.destroy();
    }
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Прислали чек', 'Требуется подтвреждение', 'Чек не отправлен'],
            datasets: [{
                label: 'Статистика игроков',
                data: data,
                backgroundColor: [
                    'rgba(216, 27, 96, 0.6)',
                    'rgba(3, 169, 244, 0.6)',
                    'rgba(255, 152, 0, 0.6)'
                ],
                borderColor: [
                    'rgba(216, 27, 96, 1)',
                    'rgba(3, 169, 244, 1)',
                    'rgba(255, 152, 0, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            devicePixelRatio: 4,
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
//                yAxes: [{
//                    ticks: {
//                        min: 75
//                    }
//                }]
            }
        }
    });
}

function sendChart(){
    let request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:8000/get_game_statistics_sends/' + `${game_id}`, false);
    request.send(null);

    let data = [];
    if (request.status == 200) {
        data = JSON.parse(request.responseText);
    }
    if (myChart) {
        myChart.destroy();
    }
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Отправили подарок', 'Не отправили'],
            datasets: [{
                label: 'Статистика игроков',
                data: data,
                backgroundColor: [
                    'rgba(216, 27, 96, 0.6)',
                    'rgba(3, 169, 244, 0.6)'
                ],
                borderColor: [
                    'rgba(216, 27, 96, 1)',
                    'rgba(3, 169, 244, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            devicePixelRatio: 4,
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
//                yAxes: [{
//                    ticks: {
//                        min: 75
//                    }
//                }]
            }
        }
    });
}




