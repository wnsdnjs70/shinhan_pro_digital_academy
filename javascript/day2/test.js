let cnt = 1;
document.getElementById('btn').onclick=function(){
    let inputName = document.getElementById('input').value;
    let originContent = document.getElementById('content').innerHTML;
    let content = originContent + `<p>${cnt}. ${inputName} </p>`;
    document.getElementById('content').innerHTML = content;
    cnt++;
}