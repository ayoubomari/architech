let chars = document.querySelector('input'),
    doItUTF = document.getElementsByClassName('Transformer')[0],
    tableauxResult = document.getElementById('DOM-it');

let BGC = ['#ddd','#f0f0f0'];

function ecrit(t,x){
    if(t.length < 4){
        for(;;){
            if(t.length == x){break;}
            t = "0" + t; 
        }
    }
    t = t.toUpperCase();
    return t;
}

function ecritBuni(t,x){
    for(;;){
        if(t.length == x){break;}
            t = "0" + t; 
    }
    return t;
}


doItUTF.onclick = function (){
    "use strict";
    tableauxResult.innerHTML = '';
    
    let text = chars.value,
        len = text.length,
        a = 0;

    for(let i = 0 ; i < len ; i++){
        let tableaux = document.createElement('div');
        tableaux.classList.add('tableaux-char-to-hex');
        if(a % 2 == 0){
            tableaux.style.backgroundColor = BGC[0];
        }else{
            tableaux.style.backgroundColor = BGC[1];
        }
        a++;
        
        //Caractère
        let char = document.createElement('div');
        char.classList.add('char-t');
        char.textContent = text[i];
        tableaux.appendChild(char);

        
        //Numéro Unicode
        let unicode = document.createElement('div');
        unicode.classList.add('unicode-t');
        unicode.textContent = 'U+';

        let uni = text[i].charCodeAt(0);
        let Huni = uni.toString(16);
        unicode.textContent += ecrit(Huni,4);
        tableaux.appendChild(unicode);


        //Binaire
        let binaire = document.createElement('div');
        binaire.classList.add('binaire-t');

        let Buni = uni.toString(2);

        if(Buni.length < 8){
            console.log("1à7");
            binaire.textContent = "0" + Buni;
        }
        
        else if(Buni.length < 12){
            console.log("8à11");
            let form = ecritBuni(Buni,11);
            let e = form.slice(0,5),
                ee = form.slice(5);

            binaire.textContent = "110";
            binaire.textContent += e;
            binaire.textContent += '10';
            binaire.textContent += ee;        
        }
        
        else if(Buni.length < 17){
            console.log("12à16");
            let form = ecritBuni(Buni,16);
            let e = form.slice(0,4),
                ee = form.slice(4,10),
                eee = form.slice(10);

            binaire.textContent = "1110";
            binaire.textContent += e;
            binaire.textContent += "10";
            binaire.textContent += ee;
            binaire.textContent += "10";
            binaire.textContent += eee;
        }
        
        else{
            console.log("17à21");
            let form = ecritBuni(Buni,21);
            let e = form.slice(0,3),
                ee = form.slice(3,9),
                eee = form.slice(9,15),
                eeee = form.slice(15);

            binaire.textContent = "11110";
            binaire.textContent += e;
            binaire.textContent += "10";
            binaire.textContent += ee;
            binaire.textContent += "10";
            binaire.textContent += eee;
            binaire.textContent += "10";
            binaire.textContent += eeee;
        }
        tableaux.appendChild(binaire);


        //Hexadécimal
        let hexadecimal = document.createElement('div');
        hexadecimal.classList.add('hexadecimal-t');

        let hex = binaire.textContent;
        hex = parseInt(hex,2);
        hex = hex.toString(16);
        hex = hex.toUpperCase();
        
        hexadecimal.textContent = hex;
        tableaux.appendChild(hexadecimal);

        tableauxResult.appendChild(tableaux);
    }

};