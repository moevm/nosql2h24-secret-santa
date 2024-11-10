document.getElementById('button_pluz').addEventListener('click', function() {
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
});