"use strict"

let a1=[10,20,30];
let a2=a1;

console.log(a1===a2);

let a = [10,20,30];
let newA = Object.assign([],a);

console.log(a);
console.log(newA);

console.log(a===newA);

let email = "aaa@aaa.com";

let words = email.split('@');

console.log('이메일 : ', words[0]);
console.log('도메인 : ', words[1]);
console.log(typeof words);

let test = email.indexOf('@',0);
console.log(test);
console.log(email.substring(0,test));

let arr1 = [1,2,3,4];
let arr2 = [2];

let names = ['홍','김','이','박','나'];
let result=[];
// document.getElementById('btn').onclick=function(){
//     names.forEach(function(item){
//         result += `<li>${item}</li>`;
//     });
//     document.getElementById('result').innerHTML = result;
// };
// document.getElementById('btn').onclick=function(){
//     result = names.map(function(item){
//         return `<li>${item}</li>`;
//     });
//     document.getElementById('result').innerHTML = result.join('');
// };

document.getElementById('btn').onclick=function(){
    let name = document.getElementById('name').value;
    

    try{
       
        let txt = document.getElementById('age');
        let age = Number(txt.value);

        if( Number.isNaN(age)) {
        
            throw new Error('not a number');

        }

        else{
            if( age < 0 ) {
                throw new Error('smaller than 0');
            }
            else{
            }
        }
    }
    
    catch(e){
        console.log(e)
    }
    finally{
        console.log('finally');
    }
};

/*
    async : 브라우저가 페이지를 파싱하는 동안에도 스크립트가 실행 
    defer : 브라우저가 페이지의 파싱을 모두 끝내면 스크립트가 실행 
    async, defer 모두 선언하지 않은 경우 : 브라우저가 페이지를 파싱하기 전에 스크립트를 가져와서 바로 실행 
*/