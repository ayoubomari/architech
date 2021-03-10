//lamp
let opl = "./../img/circuits/lampO.png",
    cll = "./../img/circuits/lampC.png";

//simple decodeur
let e0 = document.getElementById('e0').children[0],
    e1 = document.getElementById('e1').children[0],
    V  = document.getElementById('V').children[0];

let S0 = document.getElementById('S0'),
    S1 = document.getElementById('S1'),
    S2 = document.getElementById('S2'),
    S3 = document.getElementById('S3');

function complement(x){
    if(x == false){
        x = true;
    }else{
        x = false;
    }
    return x;
}


function sDecodIt(){
    'use strict';
    let a = e0.checked,
        b = e1.checked,
        v = V.checked;
    
    if(v & complement(a) & complement(b)){
        S0.src = opl;

        S1.src = cll;
        S2.src = cll;
        S3.src = cll;
    }
    else if(v & a & complement(b)){
        S1.src = opl;

        S0.src = cll;
        S2.src = cll;
        S3.src = cll;
    }
    else if(v & complement(a) & b){
        S2.src = opl;

        S0.src = cll;
        S1.src = cll;
        S3.src = cll;
    }
    else if(v & a & b){
        S3.src = opl;

        S0.src = cll;
        S1.src = cll;
        S2.src = cll;
    }
    else {
        S0.src = cll;
        S1.src = cll;
        S2.src = cll;
        S3.src = cll;
    }
}

e0.onchange = () => {
    sDecodIt();
};
e1.onchange = () => {
    sDecodIt();
};
V.onchange = () => {
    sDecodIt();
};



//conception 2 => 4
let ee0 = document.getElementById('ee0').children[0],
    ee1 = document.getElementById('ee1').children[0],
    VV  = document.getElementById('VV').children[0];

let SS0 = document.getElementById('SS0'),
    SS1 = document.getElementById('SS1'),
    SS2 = document.getElementById('SS2'),
    SS3 = document.getElementById('SS3');
    
    
function decodeIt(){
    'use strict';
    let a = ee0.checked,
        b = ee1.checked,
        v = VV.checked;
    
    if(v & complement(a) & complement(b)){
        SS0.src = opl;

        SS1.src = cll;
        SS2.src = cll;
        SS3.src = cll;
    }
    else if(v & a & complement(b)){
        SS1.src = opl;

        SS0.src = cll;
        SS2.src = cll;
        SS3.src = cll;
    }
    else if(v & complement(a) & b){
        SS2.src = opl;

        SS0.src = cll;
        SS1.src = cll;
        SS3.src = cll;
    }
    else if(v & a & b){
        SS3.src = opl;

        SS0.src = cll;
        SS1.src = cll;
        SS2.src = cll;
    }
    else {
        SS0.src = cll;
        SS1.src = cll;
        SS2.src = cll;
        SS3.src = cll;
    }
}

ee0.onchange = () => {
    decodeIt();
};
ee1.onchange = () => {
    decodeIt();
};
VV.onchange = () => {
    decodeIt();
};


//UAL 
let eee0 = document.getElementById('eee0').children[0],
    eee1 = document.getElementById('eee1').children[0],
    a = document.getElementById('a').children[0],
    b = document.getElementById('b').children[0];

let S = document.getElementById('S'),
    R = document.getElementById('R');



et = () => a.checked & b.checked;
ou = () => a.checked | b.checked;
inv = () =>  complement(b.checked);
SF = () => a.checked & complement(b.checked) | complement(a.checked) & b.checked;
RF = () => a.checked & b.checked;

function UAL(){
    'use strict';
    let e0v = eee0.checked,
        e1v = eee1.checked,
        av = a.checked,
        bv = b.checked;

    console.log("h")

    if(complement(e0v) & complement(e1v)){
        if(et()){
            S.src = opl;

            R.src = cll;
        }
        else {
            S.src = cll;

            R.src = cll;
        }
    }
    else if(e0v & complement(e1v)){
        if(ou()){
            S.src = opl;

            R.src = cll;
        }
        else {
            S.src = cll;

            R.src = cll;
        }
    }
    else if(complement(e0v) & e1v){
        if(inv()){
            S.src = opl;

            R.src = cll;
        }
        else {
            S.src = cll;

            R.src = cll;
        }
    }
    else if (e0v & e1v){
        if(SF()){
            S.src = opl;
        }
        else {
            S.src = cll;
        }
        if(RF()){
            R.src = opl;
        }
        else{
            R.src = cll;
        }
    }
    else {
        S.src = cll;
        R.src = cll;
    }
}

eee0.onchange = () => {
    UAL();
};
eee1.onchange = () => {
    UAL();
};
a.onchange = () => {
    UAL();
};
b.onchange = () => {
    UAL();
};


//realiser un efunction avec une décodeur
let A = document.getElementById('A').children[0],
    B = document.getElementById('B').children[0],
    C = document.getElementById('C').children[0],
    F = document.getElementById('F');

function FDCD(){
    'use strict';
    let a = A.checked,
        b = B.checked,
        c = C.checked;

    if( (complement(a) & complement(b) & c) | (complement(a) & b & complement(c)) | (complement(a) & b & c) | (a & b & complement(c)) | (a & b & c) ){
        F.src = opl;
    }
    else {
        F.src = cll;
    }
}

A.onchange = () => {
    FDCD();
};
B.onchange = () => {
    FDCD();
};
C.onchange = () => {
    FDCD();
};



window.onload = () => {
    sDecodIt();
    decodeIt();
    UAL();
    FDCD();
}