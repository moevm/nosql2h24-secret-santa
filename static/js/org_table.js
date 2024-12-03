let wDialog = document.getElementById("WDialog");
const Button = document.getElementById("close");
const Button1 = document.getElementById("close1");
let info = document.getElementById("chechbuy1");

Button.addEventListener('click', () => {
    wDialog.close();
})

Button1.addEventListener('click', () => {
    wDialog.close();
})

info.addEventListener('click', ()=>{
    wDialog.showModal();
})