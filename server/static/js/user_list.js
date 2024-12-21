const Button = document.getElementById("close");
const favDialog = document.getElementById("favDialog");
const dialog = document.querySelector("dialog");
const Button2 = document.getElementById("closeF2");
const FD2 = document.getElementById("FDialog2");

Button.addEventListener('click', () => {
    dialog.close();
})

Button2.addEventListener('click', () => {
    FD2.close();
})

window.addEventListener("load", async function(){
    await fetch(new URL('/get_list_people', 'http://localhost:8000').href, {
                method: "GET",
                headers: {
                'Accept': 'application/json',
                "Content-type": "application/json; charset=UTF-8"
    }})
    .then(res => res.json())
    .then(content => {
        let list = this.document.getElementById('list_people');
        for (let i =0; i < content.length; i++){
            let div = document.createElement('div');
            div.style.display = "flex";
            div.style.flexDirection = "row";
            div.style.justifyContent = "space-between";
            let text1 = this.document.createElement('div');
            let text2 = this.document.createElement('div');
            text1.textContent = content[i].name;
            text2.textContent = `Команда_${content[i].game_id}`;

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
            div.id = i + "human";
            list.appendChild(div);
            div.addEventListener('click', ()=>{
                let userInfo = document.getElementById('user_info');
                userInfo.innerHTML = `Роль: ${content[i].is_host ? 'организатор': 'игрок'}<br/>Имя: ${content[i].name}<br/>`

                let teamInfo = document.getElementById('team_info');
                teamInfo.innerHTML = `Номер команды: ${content[i].game_id}<br/><br/>`

                favDialog.showModal();
            });
        }
    })
});

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


