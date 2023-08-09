let createOption = function(data){
    let option = document.createElement('option');
    option.textContent=data;

    return option;
}
let appendValidCheck = function(){
    let optCnt = document.getElementById('selectLeft').getElementsByTagName("option").length;
    if(optCnt >= 10){
        alert('추가할 공간이 부족합니다. (max:10)');
        return false;
    }
    else{
        return true;
    }
}


let removeOptionFromLeft = function(option){
    let selectLeft = document.getElementById('selectLeft');
    selectLeft.removeChild(option);
}
let appendOptionToRight = function(option){
    let select = document.getElementById('selectRight');
    select.appendChild(option);
}
let removeOptionFromRight = function(option){
    let selectRight = document.getElementById('selectRight');
    selectRight.removeChild(option);
}
let appendOptionToLeft = function(option){
    let select = document.getElementById('selectLeft');
    select.appendChild(option);
}


document.getElementById('addBtn').addEventListener('click',function(e){

    e.preventDefault();
    let inputValue = document.getElementById('input').value;

    if(inputValue == '') alert('문자를 입력하세요.');
    else{
        if(appendValidCheck()){
            let select = document.getElementById('selectLeft');
            select.appendChild(createOption(inputValue));
            document.getElementById('input').value = '';
        }
    }
});

document.getElementById('topBtn').addEventListener('click',function(){
    let options = document.getElementById('selectLeft').getElementsByTagName("option");
    let rightOptCnt = document.getElementById('selectRight').getElementsByTagName("option").length;

    let selectedCnt = 0;
    let selectedOptions = [];
    for(let item of options){
        if(item.selected){
            selectedCnt++;
            selectedOptions.push(item);
        }
    }

    if(rightOptCnt + selectedCnt > 10){
        alert('추가할 공간이 부족합니다. (max:10)');
    }
    else{
        for(let item of selectedOptions){
            removeOptionFromLeft(item);
            appendOptionToRight(item);
        }

    }
});

document.getElementById('botBtn').addEventListener('click',function(){

    let options = document.getElementById('selectRight').getElementsByTagName("option");
    let leftOptCnt = document.getElementById('selectLeft').getElementsByTagName("option").length;

    let selectedCnt = 0;
    let selectedOptions = [];
    for(let item of options){
        if(item.selected){
            selectedCnt++;
            selectedOptions.push(item);
        }
    }

    if(leftOptCnt + selectedCnt > 10){
        alert('추가할 공간이 부족합니다. (max:10)');
    }
    else{
        for(let item of selectedOptions){
            removeOptionFromRight(item);
            appendOptionToLeft(item);
        }
    }
});


document.getElementById("selectLeft").addEventListener("dblclick", function(event) {
    let option = event.target;
    option.remove();
});
document.getElementById("selectRight").addEventListener("dblclick", function(event) {
    let option = event.target;
    option.remove();
});