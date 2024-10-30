const container = document.getElementById("grid-container");

function random(number){
    return Math.floor(Math.random() * number) + 1;
}

function makeRows(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
        for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener("mouseover", function bgChange(){
        const rndColor = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
        cell.style.backgroundColor = rndColor;
    })
}
}

makeRows(16, 16);

const button = document.getElementById("size-button");

button.addEventListener("mousedown", function changeSize(size) {
    size = prompt("Enter desired size (Between 1 to 100)");
    container.innerHTML = "";
    if (0 < size && size < 100){
        makeRows(size, size);
    } else {
        makeRows(16, 16);
        alert ("Only the specified range please!");
    }
})