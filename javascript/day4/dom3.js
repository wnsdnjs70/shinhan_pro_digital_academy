"use srtrict"

let d2 = document.getElementById('d2');

let ele_span = document.createElement('span');
let txt_span = document.createTextNode('span-data');

ele_span.appendChild(txt_span);

//d2.appendChild(ele_span);

d2.append(ele_span);

console.log(d2);

let tagBody = document.getElementsByTagName('body')[0];

//tagBody.insertAfter(ele_span, d2);

d2.after(ele_span);