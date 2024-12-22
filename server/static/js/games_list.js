const Button = document.getElementById("close");
const favDialog = document.getElementById("favDialog");
const dialog = document.querySelector("dialog");
const Button1 = document.getElementById("closeF");
const FD = document.getElementById("FDialog");
const filterButton = document.getElementById('Bfilter');

Button.addEventListener('click', () => {
    dialog.close();
})
Button1.addEventListener('click', () => {
    FD.close();
})
filterButton.addEventListener('click', applyFilters);

window.addEventListener("load", init);

function insertInfo(content) {
        let listT = document.getElementById('list_team');
        listT.innerHTML = "";
        for (let i =0; i < content.length; i++){
            let div = document.createElement('div');
            div.style.display = "flex";
            div.style.flexDirection = "row";
            div.style.justifyContent = "space-between";
            let text1 = this.document.createElement('div');
            let text2 = this.document.createElement('div');
            text1.textContent = `Команда_${content[i].id}`;
            text2.textContent = content[i].admin_name;

            text1.style.color = "black";
            text1.style.fontSize = "40px";
            text1.style.fontWeight = "400";
            text1.style.textAlign = "center";
            text1.style.wordWrap = "break-word";
            text1.style.padding = "1% 1%";

            text2.style.color = "black";
            text2.style.fontSize = "40px";
            text2.style.fontWeight = "400";
            text2.style.textAlign = "center";
            text2.style.wordWrap = "break-word";
            text2.style.padding = "1% 1%";

            div.appendChild(text1);
            div.appendChild(text2);

            div.style.height = "98px";
            div.style.background = "rgba(105.97, 207.54, 225.46, 0.22)";
            div.style.borderTopLeftRadius = '4px';
            div.style.borderTopRightRadius = '4px';
            div.style.borderBottomLeftRadius = '4px';
            div.style.borderBottomRightRadius = '4px';
            div.style.border = "3px black solid";
            div.style.marginTop = "1%";
            div.style.cursor = "pointer";
            div.id = i + "team";
            listT.appendChild(div);
            div.addEventListener('click', ()=>{
                let teamInfo = document.getElementById('team_info');
                teamInfo.innerHTML = `Организатор команды: ${content[i].admin_name}<br/>Количество игроков: ${content[i].players_num}<br/>Количество заполненых анкет: ${content[i].form_num}<br/>Количество загруженных и подтвержденных чеков: ${content[i].accepted_cheques}<br/>Количество не подтвержденных чеков: ${content[i].not_accepted_cheques}<br/>Количество отправленных подарков: ${content[i].sent_gifts}<br/>Количество полученных подарков: ${content[i].got_gifts}<br/><br/>`;

                let deadlines = document.getElementById('deadlines_info');
                deadlines.innerHTML = `Заполнение анкет: до ${content[i].form_date}<br/>Отправка чека оплаты: до ${content[i].purchase_date}<br/>Отправка подарка: до ${content[i].send_date}<br/><br/>`

                let prices = document.getElementById('prices_info');
                prices.innerHTML = `Нижний предел: ${content[i].start_price} руб.<br/>Верхний предел: ${content[i].end_price} руб.`

                favDialog.showModal();
            });
        }
}

async function init() {
    await fetch(new URL('/get_teams_info', 'http://localhost:8000').href, { //адрес сервера можно вынести в константу
                method: "GET",
                headers: {
                'Accept': 'application/json',
                "Content-type": "application/json; charset=UTF-8"
    }})
    .then(res => res.json())
    .then(content => insertInfo(content))
}

async function applyFilters() {
    let minPriceMin = document.getElementById('min-price-min').value;
    let minPriceMax = document.getElementById('max-price-min').value;

    let maxPriceMin = document.getElementById('min-price-max').value;
    let maxPriceMax = document.getElementById('max-price-max').value;

    let formDeadlineMin = document.getElementById('min-date-profile').value;
    let formDeadlineMax = document.getElementById('max-date-profile').value;

    let chequeDeadlineMin = document.getElementById('min-check-buy').value;
    let chequeDeadlineMax = document.getElementById('max-check-buy').value;

    let sendDeadlineMin = document.getElementById('min-send').value;
    let sendDeadlineMax = document.getElementById('max-send').value;

    let filtersInfo = {minPriceMin: minPriceMin, minPriceMax: minPriceMax,
                       maxPriceMin: maxPriceMin, maxPriceMax: maxPriceMax,
                       formDeadlineMin: formDeadlineMin, formDeadlineMax: formDeadlineMax,
                       chequeDeadlineMin: chequeDeadlineMin, chequeDeadlineMax: chequeDeadlineMax,
                       sendDeadlineMin: sendDeadlineMin, sendDeadlineMax: sendDeadlineMax};
    await fetch(new URL('/get_filtered_games', 'http://localhost:8000').href, {
                method: "POST",
                headers: {
                'Accept': 'application/json',
                "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(filtersInfo)
    })
    .then(res => res.json())
    .then(content => insertInfo(content))
    FD.close();
}

function Filter(){
    FD.showModal();
}