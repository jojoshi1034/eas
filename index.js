const container = document.querySelector('#container');

function makeGrid() {
    size = window.prompt("Enter number of squares on side", "");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
    for (let i = 0; i < size; i++) {
        var row = document.createElement('div');
        row.className = "row";
        for (let j = 0; j < size; j++) {
            var cell = document.createElement('div');
            cell.setAttribute("onmouseenter", "event.target.style.backgroundColor = '#10FF00';");
            cell.style.width = 640/size+"px";
            cell.style.height = 640/size+"px";
            cell.className = "cell";
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

function touchHandler(e) {
  if (e.type == "touchstart") {
    alert("You touched the screen!");
  } else if (e.type == "touchmove") {
    alert("You moved your finger!");
  } else if (e.type == "touchend" || e.type == "touchcancel") {
    alert("You removed your finger from the screen!");
  }
}