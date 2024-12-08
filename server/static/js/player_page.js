window.addEventListener("load", async function(){
    await fetch(new URL('/get_list_team', 'http://localhost:8000').href, { //адрес сервера можно вынести в константу
                method: "GET",
                headers: {
                'Accept': 'application/json',
                "Content-type": "application/json; charset=UTF-8"
    }})
    .then(res => res.json())
    .then(content => {
        const sum = document.getElementById("sumbuy");
        //sum.innerHTML = `от ${content[i].start_price} до ${content[i].end_price} рублей.`
        //необходимо прописать отображение диапазона цены для подарка
    })

});

let wishes = document.getElementById("wishess");
let wDialog = document.getElementById("WDialog");
const Button = document.getElementById("close");
const Button1 = document.getElementById("close1");

let loadB = document.getElementById("loaad");
let wDialog2 = document.getElementById("WDialog2");

let info = document.getElementById("text");
let wDialog3 = document.getElementById("WDialog3");
const Button2 = document.getElementById("close2");

Button.addEventListener('click', () => {
    wDialog.close();
})

Button1.addEventListener('click', () => {
    wDialog2.close();
})

Button2.addEventListener('click', () => {
    wDialog3.close();
})

wishes.addEventListener('click', ()=>{
    wDialog.showModal();
})

loadB.addEventListener('click', ()=>{
    wDialog2.showModal();
})

info.addEventListener('click', ()=>{
    wDialog3.showModal();
})
