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

Button.addEventListener('click', () => {
    wDialog.close();
})

wishes.addEventListener('click', ()=>{
    wDialog.showModal();
})
