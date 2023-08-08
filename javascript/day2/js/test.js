let id;

let fn = function(){
    let now = new Date();
    let y = now.getFullYear();
    let m = now.getMonth();
    let d = now.getDate();
    let h = now.getHours();
    let mi = now.getMinutes();
    let s = now.getSeconds();
    let result = `${y}.${m+1}.${d} ${h}:${mi}:${s}`;
    document.getElementById('result').innerHTML = result;
}

document.getElementById('timer').onclick=function(){
    id = setInterval(fn, 1000);
}

document.getElementById('stop').onclick=function(){
    clearInterval(id);
}

class Man{
    constructor(name,age){
        console.log('constructor');
        this._name = name;
        this._age = age;
    }
    get name(){
        console.log('getter name');
        return this._name;
    }
    set name(name){
        console.log('setter name');
    }
}
let m1 = new Man('hong',20);
console.log(m1.name);


class P1{
    constructor(age){
        this._age = age;
    }
    prt=function(){
        console.log('p1-prt method');
    }
}

class C1 extends P1{
    constructor(name,age){
        super(age);
        this._name = name;
    }
    show=function(){
        console.log('c1 show method');
    }
}

let ins = new P1(10);
ins.prt();

/*
    구조 분해 할당 : 
    배열이나 객체 속성을 해체해서 개별 변수에 담는 것 
*/
let [a,b] = [10,20];
console.log('a : ', a);
console.log('b : ', b);

let [t1,t2, ...t3] = [100,200,300,400,500];
console.log(t1);
console.log(t2);
console.log(t3);

let [su1,su2] = [100,200];
[su2,su1] = [su1,su2];
console.log([su1,su2]);

let man = {
    name:'asd',
    age:222,
    addr:'asdasdsadsadsa'
};

let {name,age,addr} = man;





