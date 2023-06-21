for (let i = 0; i < 16; i++) {
    var row = document.createElement('div');
    row.className = "row";
    for (let j = 0; j < 16; j++) {
        var cell = document.createElement('div');
        cell.className = "cell";
//        cell.textContent = "";
        row.appendChild(cell);
    }
    document.body.appendChild(row);
}