const Button = document.getElementById("close");
const favDialog = document.getElementById("favDialog");
const dialog = document.querySelector("dialog");
const Button2 = document.getElementById("closeF2");
const FD2 = document.getElementById("FDialog2");
const filterButton = document.getElementById('Bfilter');

Button.addEventListener('click', () => {
    dialog.close();
})

Button2.addEventListener('click', () => {
    FD2.close();
})

filterButton.addEventListener('click', applyFilters);


window.addEventListener("load", init);

function Filter2(){
    FD2.showModal();
}

document.querySelectorAll('input[type="radio"][name="role[]"]').forEach(radio => {
    radio.addEventListener('change', () => {
        if (document.getElementById('org').checked){
            document.getElementById('1A').disabled = true;
            document.getElementById('2A').disabled = true;
            document.getElementById('3A').disabled = true;
            document.getElementById('1S').disabled = true;
            document.getElementById('2S').disabled = true;
            document.getElementById('3S').disabled = true;
            document.getElementById('4S').disabled = true;
            document.getElementById('name-player').disabled = true;
            document.getElementById('address').disabled = true;
            document.getElementById('wishlist').disabled = true;
            document.getElementById('stoplist').disabled = true;
        }
        if (document.getElementById('play').checked){
            document.getElementById('name-player').disabled = false;
            document.getElementById('address').disabled = false;
            document.getElementById('wishlist').disabled = false;
            document.getElementById('stoplist').disabled = false;
            document.getElementById('1A').disabled = false;
            document.getElementById('2A').disabled = false;
            document.getElementById('3A').disabled = false;
            document.getElementById('1S').disabled = false;
            document.getElementById('2S').disabled = false;
            document.getElementById('3S').disabled = false;
            document.getElementById('4S').disabled = false;
        }
    });
  });

async function applyFilters() {
    if (!document.getElementById('org').checked && !document.getElementById('play').checked) {
        let request = new XMLHttpRequest();
        request.open('GET', 'http://localhost:8000/get_list_people', false);
        request.send(null);

        let data = [];
        if (request.status == 200) {
            data = JSON.parse(request.responseText);
        }
        insertInfo(data);
    }
    if (document.getElementById('org').checked) {
        let request = new XMLHttpRequest();
        request.open('GET', 'http://localhost:8000/get_hosts', false);
        request.send(null);

        let data = [];
        if (request.status == 200) {
            data = JSON.parse(request.responseText);
        }
        insertInfo(data);
    }
    if (document.getElementById('play').checked) {
        let status = -1;
        if (document.getElementById('1A').checked) {
            status = 0;
        }
        if (document.getElementById('2A').checked) {
            status = 1;
         }
        if (document.getElementById('3A').checked) {
            status = 2;
         }

         let delivery_type = 'none';
         if (document.getElementById('1S').checked) {
            delivery_type = 'ticket';
         }
         if (document.getElementById('2S').checked) {
            delivery_type = 'cert';
         }
         if (document.getElementById('3S').checked) {
            delivery_type = 'mail';
         }
         if (document.getElementById('4S').checked) {
            delivery_type = 'other';
         }

         let name = document.getElementById('name-player').value;
         let address = document.getElementById('address').value;
         let wishlist = document.getElementById('wishlist').value;
         let stoplist = document.getElementById('stoplist').value;

         let filtersInfo = {status: status, delivery_type: delivery_type,
                            name: name, address: address, wishlist: wishlist,
                            stoplist: stoplist};
         await fetch(new URL('/get_filtered_players', 'http://localhost:8000').href, {
                method: "POST",
                headers: {
                'Accept': 'application/json',
                "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(filtersInfo)
            })
         .then(res => res.json())
         .then(content => insertInfo(content))
    }

    FD2.close();
}

function insertInfo(content) {
    const list = document.getElementById('list_people');
    
    // Очищаем контейнер, удаляя все дочерние элементы
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    if (!content || !Array.isArray(content)) return;

    content.forEach((item, index) => {
        const div = document.createElement('div');
        div.style.display = "flex";
        div.style.flexDirection = "row";
        div.style.justifyContent = "space-between";
        
        const text1 = document.createElement('div');
        const text2 = document.createElement('div');
        text1.textContent = item.name;
        text2.textContent = `Команда_${item.game_id}`;

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
        div.id = `${index}_human`;

        div.addEventListener('click', () => {
            const userInfo = document.getElementById('user_info');
            userInfo.innerHTML = `
                Роль: ${item.is_host ? 'организатор' : 'игрок'}<br/>
                Имя: ${item.name}<br/>
                Эл. почта: ${item.email}<br/>
                Номер телефона: ${item.phone ?? '-'}<br/>
                Адрес доставки: ${item.address ?? '-'}<br/>
                Почтовый индекс: ${item.index ?? '-'}<br/>
                Пожелание и что дарить не стоит: ${item.wishlist ?? '-'} ${item.stoplist ?? '-'}
            <br/><br/>`;

            const teamInfo = document.getElementById('team_info');
            teamInfo.innerHTML = `Номер команды: ${item.game_id}<br/><br/>`;

            favDialog.showModal();
        });

        list.appendChild(div);
    });
}

async function init() {
    await fetch(new URL('/get_list_people', 'http://localhost:8000').href, {
                method: "GET",
                headers: {
                'Accept': 'application/json',
                "Content-type": "application/json; charset=UTF-8",
                "Cache-Control": "no-cache"
    }})
    .then(res => res.json())
    .then(content => insertInfo(content))
}


