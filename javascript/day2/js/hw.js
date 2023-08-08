
let content = [];
let idx = 1;

document.getElementById('add').onclick=function(){

    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let info = `<p>${idx++}. ${name}, ${age} </p>`;
    content.push(info);
}

document.getElementById('show').onclick = function(){
    for(item of content){
        document.getElementById('content').innerHTML += item;
    }
}