let loginButton = document.getElementById('login_button');

loginButton.addEventListener('click', async function(){
    let login = document.getElementById('login').value;
    let allUsers = await fetch(new URL('/get_list_people', 'http://localhost:8000').href, {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    "Content-type": "application/json; charset=UTF-8"
                }
    })
    .then(res => res.json())
    .then(content => {
        for (let user of content) {
            if (user.email == login) {
                if (user.isHost) {
                    window.location.href = `/host`;
                } else {
                    window.location.href = `/user/${login}`;
                }

            }
        }
    })
});