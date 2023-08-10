"use srtrict"

// let d2 = document.getElementById('d2');

// let ele_span = document.createElement('span');
// let txt_span = document.createTextNode('span-data');

// ele_span.appendChild(txt_span);

// //d2.appendChild(ele_span);

// d2.append(ele_span);

// console.log(d2);

// let tagBody = document.getElementsByTagName('body')[0];

// //tagBody.insertAfter(ele_span, d2);

// d2.after(ele_span);

document.getElementById('append').addEventListener('click',function(e){
    e.preventDefault();
    let data = document.getElementById('input').value;
    let li = document.createElement('li');
    let txt = document.createTextNode(data);
    li.appendChild(txt);
    document.getElementById('result').appendChild(li);
    document.getElementById('input').value='';
})


document.getElementById("result").addEventListener("click", function(event) {
    let target = event.target;
    target.classList.toggle('red');
});

document.getElementById("result").addEventListener("dblclick", function(event) {
    let target = event.target;
    target.parentElement.removeChild(target);
});