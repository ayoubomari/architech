//lamp
let opl = "./../img/circuits/lampO.png",
    cll = "./../img/circuits/lampC.png";

//or validation
let orA = document.getElementById('or-a').children[0],
    orB = document.getElementById('or-b').children[0],
    lampOR = document.getElementById('lite-or');

function orValidation(){
    let a = orA.checked,
        b = orB.checked;
    let c = a | b;
    
    if(c){
        lampOR.src = opl;
    }
    else {
        lampOR.src = cll;
    }
}


orA.onchange = () => {
    orValidation();
}
orB.onchange = () => {
    orValidation();
}

//and validation
let andA = document.getElementById('and-a').children[0],
    andB = document.getElementById('and-b').children[0],
    lampAND = document.getElementById('lite-and');

function andValidation(){
    let a = andA.checked,
        b = andB.checked;
    let c = a & b;
    
    if(c){
        lampAND.src = opl;
    }
    else {
        lampAND.src = cll;
    }
}


andA.onchange = () => {
    andValidation();
}
andB.onchange = () => {
    andValidation();
}

//non validation
let nonA = document.getElementById('non-a').children[0],
    lampNON = document.getElementById('lite-non');

function nonValidation(){
    let a = nonA.checked;
    let c = !(a);
    
    if(c){
        lampNON.src = opl;
    }
    else {
        lampNON.src = cll;
    }
}


nonA.onchange = () => {
    nonValidation();
}


//xor validation
let xorA = document.getElementById('xor-a').children[0],
    xorB = document.getElementById('xor-b').children[0],
    lampXOR = document.getElementById('lite-xor');

function xorValidation(){
    let a = xorA.checked,
        b = xorB.checked;
    let c = (!a & b) | (a & !b);
    
    if(c){
        lampXOR.src = opl;
    }
    else {
        lampXOR.src = cll;
    }
}


xorA.onchange = () => {
    xorValidation();
}
xorB.onchange = () => {
    xorValidation();
}


//nor validation
let norA = document.getElementById('nor-a').children[0],
    norB = document.getElementById('nor-b').children[0],
    lampNOR = document.getElementById('lite-nor');

function norValidation(){
    let a = norA.checked,
        b = norB.checked;
    let c = !(a | b);
    
    if(c){
        lampNOR.src = opl;
    }
    else {
        lampNOR.src = cll;
    }
}


norA.onchange = () => {
    norValidation();
}
norB.onchange = () => {
    norValidation();
}


//nand validation
let nandA = document.getElementById('nand-a').children[0],
    nandB = document.getElementById('nand-b').children[0],
    lampNAND = document.getElementById('lite-nand');

function nandValidation(){
    let a = nandA.checked,
        b = nandB.checked;
    let c = !(a & b);
    
    if(c){
        lampNAND.src = opl;
    }
    else {
        lampNAND.src = cll;
    }
}


nandA.onchange = () => {
    nandValidation();
}
nandB.onchange = () => {
    nandValidation();
}


//xnor validation
let xnorA = document.getElementById('xnor-a').children[0],
    xnorB = document.getElementById('xnor-b').children[0],
    lampXNOR = document.getElementById('lite-xnor');

function xnorValidation(){
    let a = xnorA.checked,
        b = xnorB.checked;
    let c = !((!a & b) | (a & !b));
    
    if(c){
        lampXNOR.src = opl;
    }
    else {
        lampXNOR.src = cll;
    }
}


xnorA.onchange = () => {
    xnorValidation();
}
xnorB.onchange = () => {
    xnorValidation();
}

//onload

window.onload = () => {
    orValidation();
    andValidation();
    nonValidation();
    xorValidation();
    norValidation();
    nandValidation();
    xnorValidation();
}