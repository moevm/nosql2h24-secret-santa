let exportButton = document.getElementById('export');
exportButton.addEventListener('click', exportDB);
async function exportDB() {
    await fetch(new URL('/export_db', 'http://localhost:8000').href, {
                method: "POST",
                headers: {
                'Accept': 'application/json',
                "Content-type": "application/json; charset=UTF-8"
    }})
    .then(res => res.json())
    .then(content => {
        const jsonString = JSON.stringify(content, null, 2);
        const blob = new Blob([jsonString], { type: "application/json" });

        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "data.json";

        document.body.appendChild(a);
        a.click();

        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    })
}