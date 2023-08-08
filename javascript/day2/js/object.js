/*

객체 생성
1. Function 생성자 함수 
2. Object 생성자 함수 

*/
"use strict"
const op = new Function("a","b","return a+b");

let result = op(10,20);
console.log('result : ', result);


let person1 = new Object();
person1.name = 'hong';
person1.age = 22;
person1.address = 'seoul'
person1.prt = function(){
    console.log('prt function~');
}

console.log(person1);

console.log(typeof person1);

function Man(name,age){
    this.name = name;
    this.age = age;
    this.prt = function(){
        console.log('prt func2');
    }
}

// const Man = function(name,age){
//     this.name = name;
//     this.age = age;
// }

let m1 = new Man('hong',25);
console.log(m1);

let person ={
    name:'honggildong',
    age:25,
    prt:function(){
        console.log('new prt');
    }
}

console.log(person);
console.log(typeof person);

class Student{
    constructor(studentId,name,age){
        this.studentId = studentId;
        this.name = name;
        this.age = age;
    }
}
Student.prototype.prt=function(){
    console.log('prt!!!');
}

let s1 = new Student(1,'student1',22);
let s2 = new Student(2,'student2',23);
console.log(s1);
console.dir(s1);
console.dir(s2);



