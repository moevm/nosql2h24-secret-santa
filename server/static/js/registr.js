function addNewPlayer() {
    let new1 = document.createElement('input');
    let new2 = document.createElement('input');
    new1.type = "text";
    new1.style.width = "308px";
    new1.style.height = "111px";
    new1.style.background = "white";
    new1.style.border = "5px black solid";
    new1.style.borderTopLeftRadius = '10px';
    new1.style.borderTopRightRadius = '10px';
    new1.style.borderBottomLeftRadius = '10px';
    new1.style.borderBottomRightRadius = '10px';
    new1.placeholder = "Введите имя игрока";

    new2.type = "email";
    new2.style.width = "498px";
    new2.style.height = "111px";
    new2.style.background = "white";
    new2.style.border = "5px black solid";
    new2.style.borderTopLeftRadius = '10px';
    new2.style.borderTopRightRadius = '10px';
    new2.style.borderBottomLeftRadius = '10px';
    new2.style.borderBottomRightRadius = '10px';
    new2.placeholder = "Введите адрес эл. почты игрока";

    let parentElement = document.getElementById('formParent');
    parentElement.appendChild(new1);
    parentElement.appendChild(new2);
}

function savePeople() {
    let teamInfo = {};
    let form = document.getElementById('formParent');
    teamInfo.admin = {'name': form.children[0].value, 'email': form.children[1].value};
    teamInfo.players = [];
    for (let i = 2; i < form.children.length; i+=2) {
            teamInfo.players.push({'name': form.children[i].value, 'email': form.children[i+1].value})
    }
    localStorage.setItem('team_info', JSON.stringify(teamInfo))
}

async function saveMetaInfo() {
    let teamInfo = JSON.parse(localStorage.getItem('team_info'));

    let formDeadline = document.getElementById('form_date').value;
    let chequeDeadline = document.getElementById('purchase_date').value;
    let giftDeadline = document.getElementById('send_date').value;
    let startPrice = document.getElementById('start_price').value;
    let endPrice = document.getElementById('end_price').value;

    teamInfo.form_date = formDeadline;
    teamInfo.purchase_date = chequeDeadline;
    teamInfo.send_date = giftDeadline;
    teamInfo.start_price = startPrice;
    teamInfo.end_price = endPrice;

    await fetch(new URL('/post_new_team', 'http://localhost:8000').href, {
                method: "POST",
                headers: {
                'Accept': 'application/json',
                "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(teamInfo)
    }).then(res => res.json())
    .then(content => {
        window.location.href=`/host/${content["game_id"]}`
    })
    localStorage.clear();
}
