document.getElementById('csvFile').addEventListener('change', function(e) {
    let file = e.target.files[0];
    if (file && file.type === "text/csv") {
        let reader = new FileReader();
        reader.onload = function(event) {
            let csvData = event.target.result;
            let parsedData = parseCSV(csvData);
            displayTable(parsedData);
        };
        reader.readAsText(file);
    }
});

function parseCSV(csvData) {
    const rows = csvData.split("\n").map(row => row.split(","));
    return rows;
}

function displayTable(data) {
    const tableBody = document.querySelector('#csvTable tbody');
    tableBody.innerHTML = '';

    data.forEach((row, rowIndex) => {
        const tr = document.createElement('tr');
        row.forEach((cell, cellIndex) => {
            const td = document.createElement('td');
            td.textContent = cell;
            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    });
}
