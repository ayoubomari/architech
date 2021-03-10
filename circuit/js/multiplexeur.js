//lamp
let opl = "./../img/circuits/lampO.png",
    cll = "./../img/circuits/lampC.png";


//multiplexeur
let e0Mux1 = document.getElementById('e0-mux1').children[0],
    e1Mux1 = document.getElementById('e1-mux1').children[0],
    a0Mux1 = document.getElementById('a0-mux1').children[0],
    liteMltiplexeur1 = document.getElementById('lite-multiplexeur1');

function compliment(x){
    if(x == false){
        x = true;
    }else{
        x = false;
    }
    return x;
}

function multipleIt(){
    'use strict';
    let e0 = e0Mux1.checked,
        e1 = e1Mux1.checked,
        a0 = a0Mux1.checked;
    
    let mul = ( compliment(a0) & e0 ) | (a0 & e1);
    if(mul){
        liteMltiplexeur1.src = opl;
    } 
    else {
        liteMltiplexeur1.src = cll;
    }
}

e0Mux1.onchange = () => {
    multipleIt();
}
e1Mux1.onchange = () => {
    multipleIt();
}
a0Mux1.onchange = () => {
    multipleIt();
}

//fMultiplexeur
let a = document.getElementById('a').children[0],
    b = document.getElementById('b').children[0],
    c = document.getElementById('c').children[0],
    F = document.getElementById('F');

function fmux(){
    let aa = a.checked,
        bb = b.checked,
        cc = c.checked;

    if( (compliment(aa) & compliment(bb) & compliment(cc)) | (compliment(aa) & compliment(bb) & cc) | (compliment(aa) & bb & compliment(cc)) | ((aa & bb & cc)) ){
        F.src = opl;
    }
    else{
        F.src = cll;
    }
}

a.onchange = () => {
    fmux();
};
b.onchange = () => {
    fmux();
};
c.onchange = () => {
    fmux();
};

//demultiplexeur

let E = document.getElementById('E').children[0],
    a0 = document.getElementById('a0').children[0],
    a1 = document.getElementById('a1').children[0],
    S0 = document.getElementById('S0'),
    S1 = document.getElementById('S1'),
    S2 = document.getElementById('S2'),
    S3 = document.getElementById('S3');

function demultipleIt(){
    'use strict';
    let EV = E.checked,
        a0V = a0.checked,
        a1V = a1.checked;

    if(compliment(a0V) & compliment(a1V) & EV){
        S0.src = opl;
        
        S1.src = cll;
        S2.src = cll;
        S3.src = cll;
    }
    else if(a0V & compliment(a1V) & EV){
        S1.src = opl;

        S0.src = cll;
        S2.src = cll;
        S3.src = cll;
    }
    else if(compliment(a0V) & a1V & EV){
        S2.src = opl;

        S0.src = cll;
        S1.src = cll;
        S3.src = cll;
    }
    else if (a0V & a1V & EV){
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

E.onchange = () => {
    demultipleIt();
}
a0.onchange = () => {
    demultipleIt();
}
a1.onchange = () => {
    demultipleIt();
}

//windows onload
window.onload = () => {
    multipleIt();
    demultipleIt();
    fmux();
}