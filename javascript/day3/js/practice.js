
let elements = document.getElementsByClassName('layout');

for(let img of elements){
    img.addEventListener('mouseover',function(){
        for(let i = 0; i < elements.length; i++){
            elements[i].style.border='';
        }
        this.style.border='3px solid red';
        let view = document.getElementById('view');
        view.setAttribute('src',img.getAttribute('src'));
    });
}


let ele_red = document.querySelectorAll('.red');

for(let ele of ele_red){
    ele.addEventListener('mouseover',function(){
        this.setAttribute('class','green');
    });
    ele.addEventListener('mouseout',function(){
        this.setAttribute('class','red');
    });
}

document.getElementById('append').addEventListener('click',function(e){
    e.preventDefault();
    console.log(document.getElementById('irum').value);
    console.log(e.target);
    let ele_li = document.createElement('li');
    let txt = document.createTextNode(document.getElementById('irum').value);
    ele_li.appendChild(txt);
    document.getElementById('result').appendChild(ele_li);
    // ele_li.textContent = document.getElementById('irum').value;
    console.log(ele_li);
    let option = document.createElement('option');
});

let buildOption = function(data){
    let option = document.createElement('option');
    let text = document.createTextNode(data);
    return option.appendChild(text);
}