//inputs
let inputsR = document.getElementsByClassName('inputtings11'),//2
    inputsB = document.getElementsByClassName('inputtings12');//2

//buttons
let buttonsR = document.getElementsByClassName('conver11'),//2
    buttonsB = document.getElementsByClassName('conver12');//2


//notes
let notes = document.getElementsByClassName('notting');//4


//affichages
let affichagesR = document.getElementsByClassName('afichage1'),//3*2
    affichagesB = document.getElementsByClassName('afichage2');//3*2



for(let i = 0 ; i < inputsB.length ; i++){
    inputsB[i].oninput = function(){
        "use strict";
        inputsB[i].value = inputsB[i].value.replace(/ /ig,'');
    };
}