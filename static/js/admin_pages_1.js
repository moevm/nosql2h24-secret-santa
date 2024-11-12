const Button = document.getElementById("close");
const favDialog = document.getElementById("favDialog");
const dialog = document.querySelector("dialog");

Button.addEventListener('click', () => {
    dialog.close();
})

window.addEventListener("load", async function(){
    await fetch(new URL('/get_list_team', 'http://localhost:8000').href, { //адрес сервера можно вынести в константу
                method: "GET",
                headers: {
                'Accept': 'application/json',
                "Content-type": "application/json; charset=UTF-8"
    }})
    .then(res => res.json())
    .then(content => {
        let listT = document.getElementById('list_team');
        for (let i =0; i < content.length; i++){
            let div = document.createElement('div');
            div.style.display = "flex";
            div.style.flexDirection = "row";
            div.style.justifyContent = "space-between";
            let text1 = this.document.createElement('div');
            let text2 = this.document.createElement('div');
            text1.textContent = content[i].team;
            text2.textContent = content[i].admin;

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
                teamInfo.innerHTML = `Организатор команды: ${content[i].admin}<br/>Количество игроков: ${content[i].numberPlayers}<br/>Количество заполненых анкет: ${content[i].numberForms}<br/>Количество загруженных и подтвержденных чеков: ${content[i].numberAcceptedCheques}<br/>Количество не подтвержденных чеков: ${content[i].numberNotAcceptedCheques}<br/>Количество отправленных подарков: ${content[i].numberSendedGifts}<br/>Количество полученных подарков: ${content[i].numberGotGifts}<br/><br/>`;

                let deadlines = document.getElementById('deadlines_info');
                deadlines.innerHTML = `Заполнение анкет: до ${content[i].formDeadline}<br/>Отправка чека оплаты: до ${content[i].chequeDeadline}<br/>Отправка подарка: до ${content[i].giftDeadline}<br/><br/>`

                let prices = document.getElementById('prices_info');
                prices.innerHTML = `Нижний предел: ${content[i].startPrice} руб.<br/>Верхний предел: ${content[i].endPrice} руб.`

                favDialog.showModal();
            });
        }
    })

});


