let that = document.getElementsByClassName('that'),
    zero = document.getElementById('zero'),
    own = document.getElementById('own'),
    two = document.getElementById('two'),
    three = document.getElementById('three'),
    ffor = document.getElementById('ffor'),
    five = document.getElementById('five'),
    six = document.getElementById('six'),
    seven = document.getElementById('seven'),
    eaght = document.getElementById('eaght'),
    night = document.getElementById('night'),
    a = document.getElementById('a'),
    b = document.getElementById('b'),
    c = document.getElementById('c'),
    d = document.getElementById('d'),
    e = document.getElementById('e'),
    f = document.getElementById('f'),
    g = document.getElementById('g');
    
let A =document.getElementById('A'),
    B =document.getElementById('B'),
    C =document.getElementById('C'),
    D =document.getElementById('D'),
    E =document.getElementById('E'),
    F =document.getElementById('F'),
    G =document.getElementById('G');



function ecrit(a,x){
    for(;;){
        if(a.length >= x){break;}
        a = "0" + a;
    }
    return a;
}

function compliment(x){
    if(x == 0){
        x = 1;
    }else{
        x = 0;
    }
    return x;
}

function fa(w,x,y,z){
    let a = (y & compliment(z)) | (compliment(w) & y) | (x & y) | (compliment(x) & compliment(y) & compliment(z)) | (w & compliment(y) & compliment(z)) | (w & compliment(x) & compliment(y)) | (compliment(w) & x & compliment(y) & z);
    return a ;
}
function fb(w,x,y,z){
    let b = (compliment(w) & compliment(x)) | ( compliment(x) & y & compliment(z) ) | (compliment(w) & y & z) | (w & compliment(y) & z) | (compliment(w) & compliment(y) & compliment(z)) | (w & compliment(x) & compliment(y));
    return b;
}
function fc(w,x,y,z){
    let c = (w & compliment(x)) | ( compliment(y) & z ) | (compliment(w) & x) | (compliment(w) & z) | (compliment(w) & compliment(y));
    return c;
}
function fd(w,x,y,z){
    let d = ( w & compliment(y) ) | ( compliment(w) & compliment(x) & compliment(z) ) | ( compliment(x) & y & z ) | ( x & compliment(y) & z ) | ( x & y & compliment(z) );
    return d; 
}
function fe(w,x,y,z){
    let e = (y & compliment(z)) | ( w & x ) | ( w & y ) | ( compliment(x) & compliment(y) & compliment(z) );
    return e;
}
function ff(w,x,y,z){
    let f = ( compliment(y) & compliment(z) ) |  ( w & compliment(x) ) | ( compliment(w) & x & compliment(y) ) | ( x & y & compliment(z) ) | ( w & x & y );
    return f;
}
function fg(w,x,y,z){
    let g = ( y & compliment(z) ) | ( w & compliment(x) ) | ( w & z ) | ( compliment(w) & x & compliment(y) ) | ( compliment(w) & compliment(x) & y );
    return g;
}


for(let i = 0 ; i < that.length ; i++){
    that[i].onclick = function(){
        let N = that[i].textContent;
        N = parseInt(N,16);
        N = N.toString(2);
        N = ecrit(N,4);
        
        let q0 = N.slice(3),
            q1 = N.slice(2,3),
            q2 = N.slice(1,2),
            q3 = N.slice(0,1);
        
        if(fa(q3,q2,q1,q0)){
            A.classList.remove('hidden');
        }else{
            A.classList.add('hidden');
        }
        if(fb(q3,q2,q1,q0)){
            B.classList.remove('hidden');
        }else{
            B.classList.add('hidden');
        }
        if(fc(q3,q2,q1,q0)){
            C.classList.remove('hidden');
        }else{
            C.classList.add('hidden');
        }
        if(fd(q3,q2,q1,q0)){
            D.classList.remove('hidden');
        }else{
            D.classList.add('hidden');
        }
        if(fe(q3,q2,q1,q0)){
            E.classList.remove('hidden');
        }else{
            E.classList.add('hidden');
        }
        if(ff(q3,q2,q1,q0)){
            F.classList.remove('hidden');
        }else{
            F.classList.add('hidden');
        }
        if(fg(q3,q2,q1,q0)){
            G.classList.remove('hidden');
        }else{
            G.classList.add('hidden');
        }
    }
}


let count = 0;

//Hh
let hA = document.getElementById('h-A'),
    hB = document.getElementById('h-B'),
    hC = document.getElementById('h-C'),
    hD = document.getElementById('h-D'),
    hE = document.getElementById('h-E'),
    hF = document.getElementById('h-F'),
    hG = document.getElementById('h-G');

let hhA = document.getElementById('hh-A'),
    hhB = document.getElementById('hh-B'),
    hhC = document.getElementById('hh-C'),
    hhD = document.getElementById('hh-D'),
    hhE = document.getElementById('hh-E'),
    hhF = document.getElementById('hh-F'),
    hhG = document.getElementById('hh-G');

//ss

let sA = document.getElementById('s-A'),
    sB = document.getElementById('s-B'),
    sC = document.getElementById('s-C'),
    sD = document.getElementById('s-D'),
    sE = document.getElementById('s-E'),
    sF = document.getElementById('s-F'),
    sG = document.getElementById('s-G');

let ssA = document.getElementById('ss-A'),
    ssB = document.getElementById('ss-B'),
    ssC = document.getElementById('ss-C'),
    ssD = document.getElementById('ss-D'),
    ssE = document.getElementById('ss-E'),
    ssF = document.getElementById('ss-F'),
    ssG = document.getElementById('ss-G');

function converting(x){
    let nh = Math.floor(x / 60),
        ns = Math.floor(x % 60);

    nh = nh.toString();
    ns = ns.toString();

    nh = ecrit(nh,2);
    ns = ecrit(ns,2);

    let h = nh.slice(0,1),
        hh = nh.slice(1);
    
    let s = ns.slice(0,1),
        ss = ns.slice(1);
        console.log(`${h} ${hh} : ${s} ${ss}`);

    h = parseInt(h,10);
    h = h.toString(2);
    hh = parseInt(hh,10);
    hh = hh.toString(2);
    s = parseInt(s,10);
    s = s.toString(2);
    ss = parseInt(ss,10);
    ss = ss.toString(2);

    h = ecrit(h,4);
    hh = ecrit(hh,4);
    s = ecrit(s,4);
    ss = ecrit(ss,4);
    console.log(`${h} ${hh} : ${s} ${ss}`)

    let q3h = h.slice(0,1),
        q2h = h.slice(1,2),
        q1h = h.slice(2,3),
        q0h = h.slice(3);
    let q3hh = hh.slice(0,1),
        q2hh = hh.slice(1,2),
        q1hh = hh.slice(2,3),
        q0hh = hh.slice(3);
    let q3s = s.slice(0,1),
        q2s = s.slice(1,2),
        q1s = s.slice(2,3),
        q0s = s.slice(3);
    let q3ss = ss.slice(0,1),
        q2ss = ss.slice(1,2),
        q1ss = ss.slice(2,3),
        q0ss = ss.slice(3);
    
    //h
    if(fa(q3h,q2h,q1h,q0h)){
        hA.style.backgroundColor = 'red';
    }else {
        hA.style.backgroundColor = "#333";
    }
    if(fb(q3h,q2h,q1h,q0h)){
        hB.style.backgroundColor = 'red';
    }else {
        hB.style.backgroundColor = "#333";
    }
    if(fc(q3h,q2h,q1h,q0h)){
        hC.style.backgroundColor = 'red';
    }else {
        hC.style.backgroundColor = "#333";
    }
    if(fd(q3h,q2h,q1h,q0h)){
        hD.style.backgroundColor = 'red';
    }else {
        hD.style.backgroundColor = "#333";
    }
    if(fe(q3h,q2h,q1h,q0h)){
        hE.style.backgroundColor = 'red';
    }else {
        hE.style.backgroundColor = "#333";
    }
    if(ff(q3h,q2h,q1h,q0h)){
        hF.style.backgroundColor = 'red';
    }else {
        hF.style.backgroundColor = "#333";
    }
    if(fg(q3h,q2h,q1h,q0h)){
        hG.style.backgroundColor = 'red';
    }else {
        hG.style.backgroundColor = "#333";
    }

    //hh
    if(fa(q3hh,q2hh,q1hh,q0hh)){
        hhA.style.backgroundColor = 'red';
    }else {
        hhA.style.backgroundColor = "#333";
    }
    if(fb(q3hh,q2hh,q1hh,q0hh)){
        hhB.style.backgroundColor = 'red';
    }else {
        hhB.style.backgroundColor = "#333";
    }
    if(fc(q3hh,q2hh,q1hh,q0hh)){
        hhC.style.backgroundColor = 'red';
    }else {
        hhC.style.backgroundColor = "#333";
    }
    if(fd(q3hh,q2hh,q1hh,q0hh)){
        hhD.style.backgroundColor = 'red';
    }else {
        hhD.style.backgroundColor = "#333";
    }
    if(fe(q3hh,q2hh,q1hh,q0hh)){
        hhE.style.backgroundColor = 'red';
    }else {
        hhE.style.backgroundColor = "#333";
    }
    if(ff(q3hh,q2hh,q1hh,q0hh)){
        hhF.style.backgroundColor = 'red';
    }else {
        hhF.style.backgroundColor = "#333";
    }
    if(fg(q3hh,q2hh,q1hh,q0hh)){
        hhG.style.backgroundColor = 'red';
    }else {
        hhG.style.backgroundColor = "#333";
    }

    //s
    if(fa(q3s,q2s,q1s,q0s)){
        sA.style.backgroundColor = 'red';
    }else {
        sA.style.backgroundColor = "#333";
    }
    if(fb(q3s,q2s,q1s,q0s)){
        sB.style.backgroundColor = 'red';
    }else {
        sB.style.backgroundColor = "#333";
    }
    if(fc(q3s,q2s,q1s,q0s)){
        sC.style.backgroundColor = 'red';
    }else {
        sC.style.backgroundColor = "#333";
    }
    if(fd(q3s,q2s,q1s,q0s)){
        sD.style.backgroundColor = 'red';
    }else {
        sD.style.backgroundColor = "#333";
    }
    if(fe(q3s,q2s,q1s,q0s)){
        sE.style.backgroundColor = 'red';
    }else {
        sE.style.backgroundColor = "#333";
    }
    if(ff(q3s,q2s,q1s,q0s)){
        sF.style.backgroundColor = 'red';
    }else {
        sF.style.backgroundColor = "#333";
    }
    if(fg(q3s,q2s,q1s,q0s)){
        sG.style.backgroundColor = 'red';
    }else {
        sG.style.backgroundColor = "#333";
    }

    //ss
    if(fa(q3ss,q2ss,q1ss,q0ss)){
        ssA.style.backgroundColor = 'red';
    }else {
        ssA.style.backgroundColor = "#333";
    }
    if(fb(q3ss,q2ss,q1ss,q0ss)){
        ssB.style.backgroundColor = 'red';
    }else {
        ssB.style.backgroundColor = "#333";
    }
    if(fc(q3ss,q2ss,q1ss,q0ss)){
        ssC.style.backgroundColor = 'red';
    }else {
        ssC.style.backgroundColor = "#333";
    }
    if(fd(q3ss,q2ss,q1ss,q0ss)){
        ssD.style.backgroundColor = 'red';
    }else {
        ssD.style.backgroundColor = "#333";
    }
    if(fe(q3ss,q2ss,q1ss,q0ss)){
        ssE.style.backgroundColor = 'red';
    }else {
        ssE.style.backgroundColor = "#333";
    }
    if(ff(q3ss,q2ss,q1ss,q0ss)){
        ssF.style.backgroundColor = 'red';
    }else {
        ssF.style.backgroundColor = "#333";
    }
    if(fg(q3ss,q2ss,q1ss,q0ss)){
        ssG.style.backgroundColor = 'red';
    }else {
        ssG.style.backgroundColor = "#333";
    }
}

let maxlength = 3599;
converting(0);

let start = document.getElementById('start'),
    reset = document.getElementById('reset');
let flag = 0;

let x ;
start.onclick = () => {
    'use strict';
    
    if(flag == 0 && count < maxlength){
        start.textContent = 'Stop';
        flag = 1;
        x = setInterval(() => {
            count++;
            converting(count);
            if(count == maxlength){
                clearInterval(x);
            }
        }, 1000);

    }
    else{
        start.textContent = 'Start';
        flag = 0;
        clearInterval(x);
    }
};

reset.onclick = () => {
    'use strict';
    start.textContent = 'Start';
    flag = 0;
    count = 0;
    converting(count);
    clearInterval(x);
};