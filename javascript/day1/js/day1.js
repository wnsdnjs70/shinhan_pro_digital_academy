// 변수를 선언하지 않고 초기화 해도 값이 잘 나온다. 따라서 명시적으로 명확히 작성하기 위해 use strict 를 사용하면 에러가 발생
"use strict"    

//var a = undifined 로 hoisting이 일어나 맨 위에서 선언과 초기화를 해준다

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

console.log('35name: ',test);

console.log(i);
var test = 'abcdas';

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

let name2 = 'jinsu';
let score = 100;
console.log('name : ', name2 , 'score : ', score);
console.log(`name : ${name2}, score : ${score}`);

let t1 = 10;
let t2 = '10';
console.log(t1==t2);

let p1 = {name:'hong', age:20};
let p2 =p1;
let p3 = {name:'hong', age:20};
console.log('---------');
console.log(p1==p2);
console.log(p1===p2);
console.log(p1==p3);    
console.log(p1===p3);   
console.log('---------');
console.log(null == undefined);
console.log(null === undefined);
console.log(false === 0);

let max;
let x1 = 10;
let x2 = 20; 
max = (x1>x2) ? x1: x2; // 조건이 맞으면 x1, 틀리면 x2 
//alert(max);
let x3=3;
x3 *= x1+x2;
console.log(x3);

document.getElementById('btn').onclick=function(){

    let kor = document.getElementById('kor');
    let eng = document.getElementById('eng');
    let math = document.getElementById('math');
    let korScore = Number(kor.value);
    let engScore = Number(eng.value);
    let mathScore = Number(math.value);
    
    let avg = (korScore + engScore + mathScore)/3;

    if(korScore >= 90 && engScore>= 90 && mathScore>= 90){
        console.log(`very good 평균 ${avg}`);
    }
    else if (korScore >= 90 || engScore>= 90 || mathScore>= 90){
        alert('good');
    }
    else{
        alert('bad');
    }

}


// let pr = prompt('숫자를 입력하세요, 0');
// let key = pr % 3;
// switch(key) {
//     case 0:
//         console.log('3의 배수');
//         break;
//     case 1:
//         console.log('나머지 값은 1');
//         break;
//     case 2:
//         console.log('나머지 값은 2');
//         break;

// }   

let arr = ['a1','a2','a3'];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log('===============');

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}
console.log('===============');

for(let item of arr){
    console.log(item);
}
console.log('==================');

arr.forEach(item=>{
    console.log(item);
});
console.log('==================');

let man = {
    irum:'gildong',
    age : 20,
    addr : 'seoul'
};

console.log(man);

for(let key in man){
    console.log(key);
}

let input = 'hello javascipt';
console.log(input[1]);
// input[1] = 't';
// console.log(input);

let k = 10;
while(k>0){
    console.log(k);
    k -= 2;
}

for(let i = 0; i<10; i++){
    if(i%3==0) continue;
    console.log(i);
}
