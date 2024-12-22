let importButton = document.getElementById('import');

importButton.addEventListener('click', importData);

async function importData(event) {
    let fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.json';

    fileInput.onchange = event => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = function(e) {
                try {
                    const jsonData = JSON.parse(e.target.result);
                    sendJsonData(jsonData);
                } catch (error) {
                    alert("Ошибка при чтении файла JSON: " + error.message);
                }
            };
            reader.readAsText(file);
        }
    }
    fileInput.click()
}

async function sendJsonData(jsonData) {
    await fetch(new URL('/import_db', 'http://localhost:8000').href, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(jsonData)
    });
}