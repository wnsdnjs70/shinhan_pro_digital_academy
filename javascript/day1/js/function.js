
// 선언적 함수
function fn_move1(){
    console.log('fn_move1-1');
    console.log('fn_move1-2');
}
fn_move1();

function fn_move2(irum,age){
    console.log(`irum : ${irum}`);
    console.log(`age : ${age}`);
}
fn_move2('hong',20);

function getSu(num1,num2){
    return num1+num2;
}

console.log(getSu(100,200));

function add(){

}

const prt = function(){
    console.log('prt');
}

prt();

const prt2 = function(irum='hello', age=22){
    console.log('irum: ' ,irum);
    console.log('age',age);
}
prt2('test',20);
prt2();

const show=function(...irum){
    for(let i = 0; i < irum.length; i++){
        console.log(irum[i]);
    }
}
show('a','b','c','d','e','f','g');

let arr1 = [10,20,30];
let arr2 = [100,200,300];

let arr3 = [...arr1, ...arr2];
let prt3 = function(arr){
    // console.log(arr[1]);
    arr3.forEach((item)=>console.log(item));
}
prt3(arr3);

let prt4=()=>{
    console.log('test1');
    console.log('test1');
    return 'asd';
}

let prt5=(a,b)=>{
    console.log()
}