var ctx = document.getElementById('myChart').getContext('2d');
let list = document.getElementById('list_change');

function displayRadioValue() {
    var ele = document.getElementsByName('drone');

    for (i = 0; i < ele.length; i++) {
        console.log(ele[i]);
        if (ele[i].checked && ele[i].id =='График по событиям'){
            list.innerHTML = '';
            let div = document.createElement('div');
            div.style.display = "flex";
            div.style.flexDirection = "column";

            let div1 = document.createElement('div');
            div1.textContent = 'Параметры:';
            div1.style.color = "black";
            div1.style.fontSize = "36px";
            div1.style.fontWeight = "700";
            div1.style.wordWrap = "break-word";

            let div11 = document.createElement('div');
            let input1 = document.createElement('input');
            input1.setAttribute("value", "Общее кол-во всех событий");
            input1.style.color = "black";
            input1.style.fontSize = "36px";
            input1.style.fontWeight = "400";
            input1.style.wordWrap = "break-word";
            input1.type = "radio";
            input1.setAttribute("name", "list1");
            var label1 = document.createElement('label');
            label1.setAttribute('for', 'Общее кол-во всех событий');
            label1.innerHTML = "Общее кол-во всех событий";

            let div12 = document.createElement('div');
            let input2 = document.createElement('input');
            input2.setAttribute("value", "Кол-во анкет");
            input2.style.color = "black";
            input2.style.fontSize = "36px";
            input2.style.fontWeight = "400";
            input2.style.wordWrap = "break-word";
            input2.type = "radio";
            input2.setAttribute("name", "list1");
            var label2 = document.createElement('label');
            label2.setAttribute('for', 'Кол-во анкет');
            label2.innerHTML = "Кол-во анкет";

            let div13 = document.createElement('div');
            let input3 = document.createElement('input');
            input3.setAttribute("value", "Кол-во отправок");
            input3.style.color = "black";
            input3.style.fontSize = "36px";
            input3.style.fontWeight = "400";
            input3.style.wordWrap = "break-word";
            input3.type = "radio";
            input3.setAttribute("name", "list1");
            var label3 = document.createElement('label');
            label3.setAttribute('for', 'Кол-во отправок');
            label3.innerHTML = "Кол-во отправок";

            let div14 = document.createElement('div');
            let input4 = document.createElement('input');
            input4.setAttribute("value", "Кол-во покупок");
            input4.style.color = "black";
            input4.style.fontSize = "36px";
            input4.style.fontWeight = "400";
            input4.style.wordWrap = "break-word";
            input4.type = "radio";
            input4.setAttribute("name", "list1");
            var label4 = document.createElement('label');
            label4.setAttribute('for', 'Кол-во покупок');
            label4.innerHTML = "Кол-во покупок";

            let div15 = document.createElement('div');
            let input5 = document.createElement('input');
            input5.setAttribute("value", "Кол-во подтверждений");
            input5.style.color = "black";
            input5.style.fontSize = "36px";
            input5.style.fontWeight = "400";
            input5.style.wordWrap = "break-word";
            input5.type = "radio";
            input5.setAttribute("name", "list1");
            var label5 = document.createElement('label');
            label5.setAttribute('for', 'Кол-во подтверждений');
            label5.innerHTML = "Кол-во подтверждений";

            div.appendChild(div1);
            div11.appendChild(input1);
            div11.appendChild(label1);
            div12.appendChild(input2);
            div12.appendChild(label2);
            div13.appendChild(input3);
            div13.appendChild(label3);
            div14.appendChild(input4);
            div14.appendChild(label4);
            div15.appendChild(input5);
            div15.appendChild(label5);
            div.appendChild(div11);
            div.appendChild(div12);
            div.appendChild(div13);
            div.appendChild(div14);
            div.appendChild(div15);
            list.appendChild(div);

            div11.addEventListener('click', ()=>{
                var myChart = new Chart(ctx, {
                    type: 'pie',
                    data: {
                        labels: ['Анкеты', 'Отправки', 'Покупки', 'Подтверждения'],
                        datasets: [{
                            data: [90, 50, 70, 30],
                            backgroundColor: ['#e91e63', '#00e676', '#ff5722', '#1e88e5'],
                            borderWidth: 0.5 ,
                            borderColor: '#ddd'
                        }]
                    },
                    options: {
                        responsive: false,
                        title: {
                            display: true,
                            position: 'top',
                            fontSize: 16,
                            fontColor: '#111',
                            padding: 20
                        },
                        legend: {
                            display: true,
                            position: 'bottom',
                            labels: {
                                boxWidth: 20,
                                fontColor: '#111',
                                padding: 15
                            }
                        },
                        tooltips: {
                            enabled: false
                        },
                        plugins: {
                            datalabels: {
                                color: '#111',
                                textAlign: 'center',
                                font: {
                                    lineHeight: 1.6
                                },
                                formatter: function(value, ctx) {
                                    return ctx.chart.data.labels[ctx.dataIndex] + '\n' + value + '%';
                                }
                            }
                        }
                    }
                });
            })

            div12.addEventListener('click', ()=>{
                var myChart = new Chart(ctx, {
                    type: 'pie',
                    data: {
                        labels: ['Заполненные', 'Нет'],
                        datasets: [{
                            data: [90, 10],
                            backgroundColor: ['#e91e63', '#00e676'],
                            borderWidth: 0.5 ,
                            borderColor: '#ddd'
                        }]
                    },
                    options: {
                        responsive: false,
                        title: {
                            display: true,
                            position: 'top',
                            fontSize: 16,
                            fontColor: '#111',
                            padding: 20
                        },
                        legend: {
                            display: true,
                            position: 'bottom',
                            labels: {
                                boxWidth: 20,
                                fontColor: '#111',
                                padding: 15
                            }
                        },
                        tooltips: {
                            enabled: false
                        },
                        plugins: {
                            datalabels: {
                                color: '#111',
                                textAlign: 'center',
                                font: {
                                    lineHeight: 1.6
                                },
                                formatter: function(value, ctx) {
                                    return ctx.chart.data.labels[ctx.dataIndex] + '\n' + value + '%';
                                }
                            }
                        }
                    }
                });
            })

            div13.addEventListener('click', ()=>{
                var myChart = new Chart(ctx, {
                    type: 'pie',
                    data: {
                        labels: ['Отправленные', 'Нет'],
                        datasets: [{
                            data: [50, 50],
                            backgroundColor: ['#e91e63', '#00e676'],
                            borderWidth: 0.5 ,
                            borderColor: '#ddd'
                        }]
                    },
                    options: {
                        responsive: false,
                        title: {
                            display: true,
                            position: 'top',
                            fontSize: 16,
                            fontColor: '#111',
                            padding: 20
                        },
                        legend: {
                            display: true,
                            position: 'bottom',
                            labels: {
                                boxWidth: 20,
                                fontColor: '#111',
                                padding: 15
                            }
                        },
                        tooltips: {
                            enabled: false
                        },
                        plugins: {
                            datalabels: {
                                color: '#111',
                                textAlign: 'center',
                                font: {
                                    lineHeight: 1.6
                                },
                                formatter: function(value, ctx) {
                                    return ctx.chart.data.labels[ctx.dataIndex] + '\n' + value + '%';
                                }
                            }
                        }
                    }
                });
            })

            div14.addEventListener('click', ()=>{
                var myChart = new Chart(ctx, {
                    type: 'pie',
                    data: {
                        labels: ['Купленные', 'Нет'],
                        datasets: [{
                            data: [70, 30],
                            backgroundColor: ['#e91e63', '#00e676'],
                            borderWidth: 0.5 ,
                            borderColor: '#ddd'
                        }]
                    },
                    options: {
                        responsive: false,
                        title: {
                            display: true,
                            position: 'top',
                            fontSize: 16,
                            fontColor: '#111',
                            padding: 20
                        },
                        legend: {
                            display: true,
                            position: 'bottom',
                            labels: {
                                boxWidth: 20,
                                fontColor: '#111',
                                padding: 15
                            }
                        },
                        tooltips: {
                            enabled: false
                        },
                        plugins: {
                            datalabels: {
                                color: '#111',
                                textAlign: 'center',
                                font: {
                                    lineHeight: 1.6
                                },
                                formatter: function(value, ctx) {
                                    return ctx.chart.data.labels[ctx.dataIndex] + '\n' + value + '%';
                                }
                            }
                        }
                    }
                });
            })

            div15.addEventListener('click', ()=>{
                var myChart = new Chart(ctx, {
                    type: 'pie',
                    data: {
                        labels: ['Подтвержденные', 'Нет'],
                        datasets: [{
                            data: [30, 70],
                            backgroundColor: ['#e91e63', '#00e676'],
                            borderWidth: 0.5 ,
                            borderColor: '#ddd'
                        }]
                    },
                    options: {
                        responsive: false,
                        title: {
                            display: true,
                            position: 'top',
                            fontSize: 16,
                            fontColor: '#111',
                            padding: 20
                        },
                        legend: {
                            display: true,
                            position: 'bottom',
                            labels: {
                                boxWidth: 20,
                                fontColor: '#111',
                                padding: 15
                            }
                        },
                        tooltips: {
                            enabled: false
                        },
                        plugins: {
                            datalabels: {
                                color: '#111',
                                textAlign: 'center',
                                font: {
                                    lineHeight: 1.6
                                },
                                formatter: function(value, ctx) {
                                    return ctx.chart.data.labels[ctx.dataIndex] + '\n' + value + '%';
                                }
                            }
                        }
                    }
                });
            })
        }
        if (ele[i].checked && ele[i].id =='График по командам'){
            list.innerHTML = '';
            let div = document.createElement('div');
            div.style.display = "flex";
            div.style.flexDirection = "column";

            let div1 = document.createElement('div');
            div1.textContent = 'Параметры:';
            div1.style.color = "black";
            div1.style.fontSize = "36px";
            div1.style.fontWeight = "700";
            div1.style.wordWrap = "break-word";

            let div11 = document.createElement('div');
            let input1 = document.createElement('input');
            input1.setAttribute("value", "Общее кол-во команд - проблемных и нет");
            input1.style.color = "black";
            input1.style.fontSize = "36px";
            input1.style.fontWeight = "400";
            input1.style.wordWrap = "break-word";
            input1.type = "radio";
            input1.setAttribute("name", "list1");
            var label1 = document.createElement('label');
            label1.setAttribute('for', 'Общее кол-во команд - проблемных и нет');
            label1.innerHTML = "Общее кол-во команд - проблемных и нет";

            let div12 = document.createElement('div');
            let input2 = document.createElement('input');
            input2.setAttribute("value", "Команды с различными проблемами");
            input2.style.color = "black";
            input2.style.fontSize = "36px";
            input2.style.fontWeight = "400";
            input2.style.wordWrap = "break-word";
            input2.type = "radio";
            input2.setAttribute("name", "list1");
            var label2 = document.createElement('label');
            label2.setAttribute('for', 'Команды с различными проблемами');
            label2.innerHTML = "Команды с различными проблемами";

            let div13 = document.createElement('div');
            let input3 = document.createElement('input');
            input3.setAttribute("value", "Игроки (кол-во отправивших анкету, купивших подарок, отправивших его, подтвердивших получение)");
            input3.style.color = "black";
            input3.style.fontSize = "36px";
            input3.style.fontWeight = "400";
            input3.style.wordWrap = "break-word";
            input3.type = "radio";
            input3.setAttribute("name", "list1");
            var label3 = document.createElement('label');
            label3.setAttribute('for', 'Игроки (кол-во отправивших анкету, купивших подарок, отправивших его, подтвердивших получение)');
            label3.innerHTML = "Игроки (кол-во отправивших анкету, купивших подарок, отправивших его, подтвердивших получение)";

            div.appendChild(div1);
            div11.appendChild(input1);
            div11.appendChild(label1);
            div12.appendChild(input2);
            div12.appendChild(label2);
            div13.appendChild(input3);
            div13.appendChild(label3);
            div.appendChild(div11);
            div.appendChild(div12);
            div.appendChild(div13);
            list.appendChild(div);

            div11.addEventListener('click', ()=>{
                var myChart = new Chart(ctx, {
                    type: 'pie',
                    data: {
                        labels: ['Проблемные', 'Нет'],
                        datasets: [{
                            data: [12, 8],
                            backgroundColor: ['#e91e63', '#00e676'],
                            borderWidth: 0.5 ,
                            borderColor: '#ddd'
                        }]
                    },
                    options: {
                        responsive: false,
                        title: {
                            display: true,
                            position: 'top',
                            fontSize: 16,
                            fontColor: '#111',
                            padding: 20
                        },
                        legend: {
                            display: true,
                            position: 'bottom',
                            labels: {
                                boxWidth: 20,
                                fontColor: '#111',
                                padding: 15
                            }
                        },
                        tooltips: {
                            enabled: false
                        },
                        plugins: {
                            datalabels: {
                                color: '#111',
                                textAlign: 'center',
                                font: {
                                    lineHeight: 1.6
                                },
                                formatter: function(value, ctx) {
                                    return ctx.chart.data.labels[ctx.dataIndex] + '\n' + value + '%';
                                }
                            }
                        }
                    }
                });
            })

            div12.addEventListener('click', ()=>{
                var myChart = new Chart(ctx, {
                    type: 'pie',
                    data: {
                        labels: ['С заполнением анкет', 'С покупкой', 'С отправкой', 'С подтверждением подарков'],
                        datasets: [{
                            data: [1, 1, 2, 4],
                            backgroundColor: ['#e91e63', '#00e676', '#ff5722', '#1e88e5'],
                            borderWidth: 0.5 ,
                            borderColor: '#ddd'
                        }]
                    },
                    options: {
                        responsive: false,
                        title: {
                            display: true,
                            position: 'top',
                            fontSize: 16,
                            fontColor: '#111',
                            padding: 20
                        },
                        legend: {
                            display: true,
                            position: 'bottom',
                            labels: {
                                boxWidth: 20,
                                fontColor: '#111',
                                padding: 15
                            }
                        },
                        tooltips: {
                            enabled: false
                        },
                        plugins: {
                            datalabels: {
                                color: '#111',
                                textAlign: 'center',
                                font: {
                                    lineHeight: 1.6
                                },
                                formatter: function(value, ctx) {
                                    return ctx.chart.data.labels[ctx.dataIndex] + '\n' + value + '%';
                                }
                            }
                        }
                    }
                });
            })

            div13.addEventListener('click', ()=>{
                var myChart = new Chart(ctx, {
                    type: 'pie',
                    data: {
                        labels: ['Заполнили анкету', 'Купили подарок', 'Отправили подарок', 'Подтвердили получение'],
                        datasets: [{
                            data: [90, 70, 50, 30],
                            backgroundColor: ['#e91e63', '#00e676', '#ff5722', '#1e88e5'],
                            borderWidth: 0.5 ,
                            borderColor: '#ddd'
                        }]
                    },
                    options: {
                        responsive: false,
                        title: {
                            display: true,
                            position: 'top',
                            fontSize: 16,
                            fontColor: '#111',
                            padding: 20
                        },
                        legend: {
                            display: true,
                            position: 'bottom',
                            labels: {
                                boxWidth: 20,
                                fontColor: '#111',
                                padding: 15
                            }
                        },
                        tooltips: {
                            enabled: false
                        },
                        plugins: {
                            datalabels: {
                                color: '#111',
                                textAlign: 'center',
                                font: {
                                    lineHeight: 1.6
                                },
                                formatter: function(value, ctx) {
                                    return ctx.chart.data.labels[ctx.dataIndex] + '\n' + value + '%';
                                }
                            }
                        }
                    }
                });
            })
        }
            
    }
}
