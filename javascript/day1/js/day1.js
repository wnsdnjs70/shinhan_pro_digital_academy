// 변수를 선언하지 않고 초기화 해도 값이 잘 나온다. 따라서 명시적으로 명확히 작성하기 위해 use strict 를 사용하면 에러가 발생
"use strict"    

// var a = undifined 로 hoisting이 일어나 맨 위에서 선언과 초기화를 해준다

console.log('b',b);
var b = 20;
console.log('b2',b);

let a = 30;
{
    // let은 block scope임 -> 해당 블록 안에서만 사용 가능
    let a = 10;
    console.log('block-a',a);
}
console.log('global-a',a);

var a2 = 30;
{
    // var은 function/global scope임 -> 블록 안에서 사용해도 글로벌로 값이 바뀜
    var a2 = 10;
    console.log('block-a2',a2);
}
console.log('global-a2',a2);


console.log('---------------------------');

let i = 100;
for(let i = 0; i < 10; i++){
    console.log('i : ', i );
}
console.log('origin i : ', i);

console.log('35name: ',name);

console.log(i);
var name = 'abcdas';

let tf = '';
if(tf) console.log('true');
else console.log('false');

let v1 = [10,20,30];
let v2 = function(){
    console.log('function test');
}
v2();
console.log(typeof v2);

let person = {};

console.log(typeof person);

let data;
console.log('data : ' , data);

const s1 = Symbol('id');
const s2 = Symbol('id');
console.log('s1', s1);
console.log('s2', s2);

let num1 = '10'; 
let num2 = 20;
console.log(num1/num2);
console.log(typeof (num1/num2));

console.log(Boolean(''));
console.log(Boolean(' '));
console.log(Boolean(0));
console.log(Boolean('0'));
console.log(Number('10'));
console.log(Number('aa'));
console.log(Number(null));
Number(undefined);
console.log(String(0));