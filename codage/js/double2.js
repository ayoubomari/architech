buttonsB[1].onclick = function() {
    //if(inputsB[1].value.search(/[^0-1]/) > -1){
    //    notes[3].textContent = "vous doit écrire en la binaire representation ,et n'écrivez pas [\" \" \",\" \"\\n\" \"\\t\" ...];";
    //}
    notes[3].textContent = ""; 
    if(inputsB[1].value.length == 12){

        affichagesB[3].textContent = '';
        affichagesB[4].textContent = '';


        let ded = inputsB[1].value.slice(1,2);
        if(ded == "0"){
            affichagesB[5].textContent = 'Une nombre dénormalisés';
        }else{
            affichagesB[5].textContent = 'NaN';
        }
    }
    else if(inputsB[1].value.length != 64){
        
        notes[3].textContent = 'vous doit écrire en la double précision';
    }
    else if(inputsB[1].value.slice(1,12) == "11111111111" /*&& inputsB[1].value.slice(12).search('1') < 0*/){
        affichagesB[4].textContent = "";
        if(inputsB[1].value.slice(0,1) == 0){
            affichagesB[3].textContent = 'Positif';
            affichagesB[5].textContent = 'Infinity';
        }else{
            affichagesB[3].textContent = 'Négatif';
            affichagesB[5].textContent = '-Infinity';
        }
    }
    else if(inputsB[1].value.search('1') < 0){
        affichagesB[4].textContent = '';
        

        affichagesB[3].textContent = 'Positif';
        affichagesB[5].textContent = '0';
    }
    else {
        let S = inputsB[1].value.slice(0,1),
            E = inputsB[1].value.slice(1,12),
            F = inputsB[1].value.slice(12);
        
        if(S == 0){
            affichagesB[3].textContent = "Positif";
        }
        else {
            affichagesB[3].textContent = "Négatif";
        }

        let D = parseInt(E,2);
        D = D - 1023;
        affichagesB[4].textContent = D;
        D = Number(D);

        console.log(F);
        F = "1" + F; 
        console.log(F);

        if(D == 0){
            let integer = 1;
            let fl    = F.slice(1);
            fl = fl.split('');
            let flotan = 0;
            for(let i = 0 ; i < fl.length ; i++){
                fl[i] = Number(fl[i]);
                flotan += fl[i] * Math.pow(2, (i+1) * -(1));
            }
            integer += flotan;
            if(S == 0){
                affichagesB[5].textContent = integer;
            }
            else{
                affichagesB[5].textContent = '-'+integer;
            }
        }
        else if(D < 0){
            let integer = 0;
            let bin = '0.';
            bin = bin.split('');
            for(let i = 0 ; i < Math.abs(D) - 1 ; i++){
                bin.push("0");
            }
            
            bin = bin.join('');
            bin = bin + F;
            console.log(bin);

            let last;
            last = bin.lastIndexOf("1");
            console.log(last);
            bin = bin.slice(0,last + 1);
            console.log(bin);
            let fl = bin.slice(2);
            console.log(fl)
            fl = fl.split('');
            let flotan = 0;
            for(let i = 0 ; i < fl.length ; i++){
                fl[i] = Number(fl[i]);
                flotan += fl[i] * Math.pow(2, (i+1) * -(1));
            }
            console.log(flotan)
            integer += flotan;
            if(S == 0){
                affichagesB[5].textContent = integer;
            }
            else{
                affichagesB[5].textContent = '-'+integer;
            }

        }
        else{
            let dec = F.split('');
            dec.splice(D+1,0,'.');
            dec = dec.join('');
            console.log(dec)

            let integer = dec.split('.')[0];
            integer = parseInt(integer,2);
            console.log(integer);

            let bin = dec.split('.')[1];
            console.log(bin);

            let last = bin.lastIndexOf('1');
            bin = bin.slice(0,last + 1);
            console.log(bin)

            let fl = bin;
            fl = fl.split('');
            let flotan = 0;
            for(let i = 0 ; i < fl.length ; i++){
                fl[i] = Number(fl[i]);
                flotan += fl[i] * Math.pow(2, (i+1) * -(1));
            }
            console.log(flotan)
            integer += flotan;
            if(S == 0){
                affichagesB[5].textContent = integer;
            }
            else{
                affichagesB[5].textContent = '-'+integer;
            }


        }
        


    }

};