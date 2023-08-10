"use strict"
document.getElementById("table").addEventListener("click", function(event) {
    let target = event.target;
    let tr = target.parentElement;
    tr.classList.toggle('yellow');
});