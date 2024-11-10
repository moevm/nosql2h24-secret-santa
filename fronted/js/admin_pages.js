window.addEventListener("load", function(){
    let list = this.document.getElementById('list_people');
    for (let i =0; i < 5; i++){
        let div = document.createElement('div');
        div.style.display = "flex";
        div.style.flexDirection = "row";
        div.style.justifyContent = "space-between";
        let text1 = this.document.createElement('div');
        let text2 = this.document.createElement('div');
        text1.textContent = "Ваня";
        text2.textContent = "1 команда";

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
    }
});

window.addEventListener("load", function(){
    let list = this.document.getElementById('list_team');
    for (let i =0; i < 5; i++){
        let div = document.createElement('div');
        div.style.display = "flex";
        div.style.flexDirection = "row";
        div.style.justifyContent = "space-between";
        let text1 = this.document.createElement('div');
        let text2 = this.document.createElement('div');
        text1.textContent = "1 команда";
        text2.textContent = "Организатор Артем";

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
        list.appendChild(div);
    }
});

