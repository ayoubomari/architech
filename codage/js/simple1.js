buttonsR[0].onclick = function () {
  "use strict";
    //reload
    affichagesR[0].textContent = '';
    affichagesR[1].textContent = '';
    affichagesR[2].innerHTML = '';  
    notes[0].textContent = '';

    let number = parseFloat(inputsR[0].value);
    if(isNaN(number)){//NaN
        affichagesR[0].textContent = '';
            affichagesR[1].textContent = '';
            affichagesR[2].textContent += '';
            for(let i = 0 ; i < 32 ; i++) {
                if(i == 0){
                    let spanS = document.createElement('span');
                    spanS.textContent = '0';
                    spanS.style.color = "#fff";
                    spanS.style.marginRight = "5px";
                    affichagesR[2].appendChild(spanS);
                }
                else if(i > 0 && i < 9){
                    let spanS = document.createElement('span');
                    spanS.textContent = '1';
                    spanS.style.color = "#f00";
                    spanS.style.marginRight = "5px";
                    affichagesR[2].appendChild(spanS);
                }
                
            }
            affichagesR[2].innerHTML += "partie fractionnaire non nulle";

    }
    else {
        //0
        if(number == 0){
            affichagesR[0].textContent = '0.00';
            affichagesR[1].textContent = '';
            affichagesR[2].textContent += '';
            for(let i = 0 ; i < 32 ; i++) {
                if(i == 0){
                    let spanS = document.createElement('span');
                    spanS.textContent = '0';
                    spanS.style.color = "#fff";
                    spanS.style.marginRight = "5px";
                    affichagesR[2].appendChild(spanS);
                }
                else if(i > 0 && i < 9){
                    let spanS = document.createElement('span');
                    spanS.textContent = '0';
                    spanS.style.color = "#f00";
                    spanS.style.marginRight = "5px";
                    affichagesR[2].appendChild(spanS);
                }
                else {
                    let spanS = document.createElement('span');
                    spanS.textContent = '0';
                    spanS.style.color = "#0f0";
                    spanS.style.marginRight = "5px";
                    affichagesR[2].appendChild(spanS);
                }
            }
        }
        // + Infinity
        else if(number == Infinity){
            affichagesR[0].textContent = '';
            affichagesR[1].textContent = '';
            affichagesR[2].textContent += '';
            for(let i = 0 ; i < 32 ; i++) {
                if(i == 0){
                    let spanS = document.createElement('span');
                    spanS.textContent = '0';
                    spanS.style.color = "#fff";
                    spanS.style.marginRight = "5px";
                    affichagesR[2].appendChild(spanS);
                }
                else if(i > 0 && i < 9){
                    let spanS = document.createElement('span');
                    spanS.textContent = '1';
                    spanS.style.color = "#f00";
                    spanS.style.marginRight = "5px";
                    affichagesR[2].appendChild(spanS);
                }
                else {
                    let spanS = document.createElement('span');
                    spanS.textContent = '0';
                    spanS.style.color = "#0f0";
                    spanS.style.marginRight = "5px";
                    affichagesR[2].appendChild(spanS);
                }
            }
        }
        // - Infinity
        else if(number == Infinity * -1){
            affichagesR[0].textContent = '';
            affichagesR[1].textContent = '';
            affichagesR[2].textContent += '';
            for(let i = 0 ; i < 32 ; i++) {
                if(i == 0){
                    let spanS = document.createElement('span');
                    spanS.textContent = '1';
                    spanS.style.color = "#fff";
                    spanS.style.marginRight = "5px";
                    affichagesR[2].appendChild(spanS);
                }
                else if(i > 0 && i < 9){
                    let spanS = document.createElement('span');
                    spanS.textContent = '1';
                    spanS.style.color = "#f00";
                    spanS.style.marginRight = "5px";
                    affichagesR[2].appendChild(spanS);
                }
                else {
                    let spanS = document.createElement('span');
                    spanS.textContent = '0';
                    spanS.style.color = "#0f0";
                    spanS.style.marginRight = "5px";
                    affichagesR[2].appendChild(spanS);
                }
            }
        }
        else {
            if(number > -1 && number < 1){
                let S;
                if(number > 0){
                    S = 0;
                }
                else{
                    S = 1;
                }

                number = Math.abs(number);

                let N = number.toString(2);
                console.log(N);
                affichagesR[0].textContent = N;
                let interger = N.split('.')[0];
                let flot     = N.split('.')[1];
                console.log(flot);
                let D = flot.indexOf("1");
                D++;
                
                D = D * -1;
                console.log(D); 
                affichagesR[1].textContent = D;

                let E = 127 + D;
                E = E.toString(2);
                console.log(E);
                E = E.split('');
                for(;;){
                    if(E.length == 8){break;}
                    E.unshift("0");
                }
                E = E.join('');
                console.log(E);

                D = D * -1;
                let F = flot.slice(D);
                console.log(F);
                F = F.split('');
                for(;;){
                    if(F.length == 23){break;}
                    F.push("0");
                }
                F = F.join('');
                console.log(F);

                for(let i = 0 ; i < 32 ; i++){
                    if(i == 0){
                        let spanS = document.createElement('span');
                        spanS.textContent = S;
                        spanS.style.color = "#fff";
                        spanS.style.marginRight = "5px";
                        affichagesR[2].appendChild(spanS);
                    }
                    else if(i > 0 && i < 9){
                        let spanS = document.createElement('span');
                        spanS.textContent = E[i - 1];
                        spanS.style.color = "#f00";
                        spanS.style.marginRight = "5px";
                        affichagesR[2].appendChild(spanS);
                    }
                    else {
                        let spanS = document.createElement('span');
                        spanS.textContent = F[i - 9];
                        spanS.style.color = "#0f0";
                        spanS.style.marginRight = "5px";
                        affichagesR[2].appendChild(spanS);
                    }
                }




            }
            else {
                let S;
                if(number > 0){
                    S = 0;
                }
                else{
                    S = 1;
                }

                number = Math.abs(number);

                let N = number.toString(2);
                console.log(N);
                affichagesR[0].textContent = N;

                let bin = N.split('.');
                console.log(bin);
                
                let D = bin[0].length;
                D--;
                console.log(D);
                affichagesR[1].textContent = D;

                let tot;
                if(bin.length == 1){
                    tot = bin[0].slice(1);
                }else{
                    tot = bin[0].slice(1);
                    tot = tot.concat(bin[1]);
                }
                console.log(tot);

                let E = 127 + D ;
                E = E.toString(2);
                E = E.split('');
                for(;;){
                    if(E.length == 8){break;}
                    E.unshift("0");
                }
                E = E.join('');
                console.log(E);

                let F = tot;
                F = F.split('');
                for(;;){
                    if(F.length == 32){break;}
                    F.push("0");
                }
                F = F.join('');
                console.log(F);

                for(let i = 0 ; i < 32 ; i++){
                    if(i == 0){
                        let spanS = document.createElement('span');
                        spanS.textContent = S;
                        spanS.style.color = "#fff";
                        spanS.style.marginRight = "5px";
                        affichagesR[2].appendChild(spanS);
                    }
                    else if(i > 0 && i < 9){
                        let spanS = document.createElement('span');
                        spanS.textContent = E[i - 1];
                        spanS.style.color = "#f00";
                        spanS.style.marginRight = "5px";
                        affichagesR[2].appendChild(spanS);
                    }
                    else {
                        let spanS = document.createElement('span');
                        spanS.textContent = F[i - 9];
                        spanS.style.color = "#0f0";
                        spanS.style.marginRight = "5px";
                        affichagesR[2].appendChild(spanS);
                    }
                }

            }
            
        }
        
    }
};