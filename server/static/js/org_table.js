let wDialog = document.getElementById("WDialog");
const Button = document.getElementById("close");
const Button1 = document.getElementById("close1");

Button.addEventListener('click', () => {
    wDialog.close();
})

Button1.addEventListener('click', () => {
    wDialog.close();
})

async function init() {
    console.log(game_id);
    await fetch(new URL(`/get_list_people_from_team/${game_id}`, 'http://localhost:8000').href, {
                method: "GET",
                headers: {
                'Accept': 'application/json',
                "Content-type": "application/json; charset=UTF-8"
                },
    })
    .then(res => res.json())
    .then(content => {
        let saveButton = document.getElementById('save_button')
        saveButton.addEventListener('click', saveUsers)

        let table = document.getElementById('users_table')
        for (let user of content) {
            if (!user.is_host) {
                let tr = document.createElement('tr')
                tr.dataset.user_id = user.id

                let name = document.createElement('td');
                name.textContent = user.name

                let recipient = document.createElement('td')
                recipient.name = 'recipient'
                recipient.textContent = user.recipient
                recipient.contentEditable = true

                let form = document.createElement('td')
                form.textContent = `${user.status >= 0 ? "Анкета заполнена": "Анкета не заполнена"}`
                form.style.color = `${user.status >= 1 ? "#00ff00" : "#ff0000"}`

                let cheque = document.createElement('td')
                cheque.textContent = `${user.status >= 1 ? "Загружен": "Не загружен"}`

                let sending = document.createElement('td')
                sending.textContent = `${user.status >= 2 ? "Отправлен": "Не отправлен"}`

                tr.appendChild(name)
                tr.appendChild(recipient)
                tr.appendChild(form)
                tr.appendChild(cheque)
                tr.appendChild(sending)

                table.appendChild(tr)
            }
        }
    })
}

//async function processRecipient(event) {
//     let user = JSON.parse(event.currentTarget.dataset.user)
//     let newRecipient = event.currentTarget.textContent
//     user.recipient = Number(newRecipient)
//
//     await fetch(new URL('/update_user', 'http://localhost:8000').href, {
//                method: "POST",
//                headers: {
//                    'Accept': 'application/json',
//                    "Content-type": "application/json; charset=UTF-8",
//
//                },
//                body: JSON.stringify(user)
//     })
//}

async function saveUsers(event) {
    let table = document.getElementById('users_table')
    let rows = table.children
    await fetch(new URL('/get_list_people', 'http://localhost:8000').href, {
                method: "GET",
                headers: {
                'Accept': 'application/json',
                "Content-type": "application/json; charset=UTF-8"
    }})
    .then(res => res.json())
    .then(content => {
        let users_new_info = []
        for (let user_row of rows) {
            for (let user of content) {
                if (user.id == user_row.dataset.user_id) {
                    for (child of user_row.children) {
                        if (child.name == 'recipient') {
                            user.recipient = Number(child.textContent)

                            let recipient = content.filter((user_) => {return user_.id == Number(child.textContent)})[0]
                            recipient.santa = Number(user.id)
                        }
                        if (child.name == 'cheque_status') {
                            user.status = ((newStatus.textContent == 'Загружен') || (newStatus.textContent == 'Не загружен')) ? 2 : 1
                        }
                    }
                }
            }
        }

        fetch(new URL('/update_users', 'http://localhost:8000').href, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                "Content-type": "application/json; charset=UTF-8",

            },
            body: JSON.stringify(content)
        })
    })
}


init()