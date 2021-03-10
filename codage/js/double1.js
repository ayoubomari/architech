buttonsR[1].onclick = function () {
    "use strict";
      //reload
      affichagesR[3].textContent = '';
      affichagesR[4].textContent = '';
      affichagesR[5].innerHTML = '';  
      notes[2].textContent = '';
  
      let number = parseFloat(inputsR[1].value);
      if(isNaN(number)){//NaN
          affichagesR[3].textContent = '';
              affichagesR[4].textContent = '';
              affichagesR[5].textContent += '';
              for(let i = 0 ; i < 64 ; i++) {
                  if(i == 0){
                      let spanS = document.createElement('span');
                      spanS.textContent = '0';
                      spanS.style.color = "#fff";
                      spanS.style.marginRight = "3px";
                      affichagesR[5].appendChild(spanS);
                  }
                  else if(i > 0 && i < 12){
                      let spanS = document.createElement('span');
                      spanS.textContent = '1';
                      spanS.style.color = "#f00";
                      spanS.style.marginRight = "3px";
                      affichagesR[5].appendChild(spanS);
                  }
                  
              }
              affichagesR[5].innerHTML += "partie fractionnaire non nulle";
  
      }
      else {
          //0
          if(number == 0){
              affichagesR[3].textContent = '0.00';
              affichagesR[4].textContent = '';
              affichagesR[5].textContent += '';
              for(let i = 0 ; i < 64 ; i++) {
                  if(i == 0){
                      let spanS = document.createElement('span');
                      spanS.textContent = '0';
                      spanS.style.color = "#fff";
                      spanS.style.marginRight = "3px";
                      affichagesR[5].appendChild(spanS);
                  }
                  else if(i > 0 && i < 12){
                      let spanS = document.createElement('span');
                      spanS.textContent = '0';
                      spanS.style.color = "#f00";
                      spanS.style.marginRight = "3px";
                      affichagesR[5].appendChild(spanS);
                  }
                  else {
                      let spanS = document.createElement('span');
                      spanS.textContent = '0';
                      spanS.style.color = "#0f0";
                      spanS.style.marginRight = "3px";
                      affichagesR[5].appendChild(spanS);
                  }
              }
          }
          // + Infinity
          else if(number == Infinity){
              affichagesR[3].textContent = '';
              affichagesR[4].textContent = '';
              affichagesR[5].textContent += '';
              for(let i = 0 ; i < 64 ; i++) {
                  if(i == 0){
                      let spanS = document.createElement('span');
                      spanS.textContent = '0';
                      spanS.style.color = "#fff";
                      spanS.style.marginRight = "3px";
                      affichagesR[5].appendChild(spanS);
                  }
                  else if(i > 0 && i < 12){
                      let spanS = document.createElement('span');
                      spanS.textContent = '1';
                      spanS.style.color = "#f00";
                      spanS.style.marginRight = "3px";
                      affichagesR[5].appendChild(spanS);
                  }
                  else {
                      let spanS = document.createElement('span');
                      spanS.textContent = '0';
                      spanS.style.color = "#0f0";
                      spanS.style.marginRight = "3px";
                      affichagesR[5].appendChild(spanS);
                  }
              }
          }
          // - Infinity
          else if(number == Infinity * -1){
              affichagesR[3].textContent = '0.00';
              affichagesR[4].textContent = '0';
              affichagesR[5].textContent += '';
              for(let i = 0 ; i < 64 ; i++) {
                  if(i == 0){
                      let spanS = document.createElement('span');
                      spanS.textContent = '1';
                      spanS.style.color = "#fff";
                      spanS.style.marginRight = "3px";
                      affichagesR[5].appendChild(spanS);
                  }
                  else if(i > 0 && i < 12){
                      let spanS = document.createElement('span');
                      spanS.textContent = '1';
                      spanS.style.color = "#f00";
                      spanS.style.marginRight = "3px";
                      affichagesR[5].appendChild(spanS);
                  }
                  else {
                      let spanS = document.createElement('span');
                      spanS.textContent = '0';
                      spanS.style.color = "#0f0";
                      spanS.style.marginRight = "3px";
                      affichagesR[5].appendChild(spanS);
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
                  affichagesR[3].textContent = N;
                  let interger = N.split('.')[0];
                  let flot     = N.split('.')[1];
                  console.log(flot);
                  let D = flot.indexOf("1");
                  D++;
                  
                  D = D * -1;
                  console.log(D); 
                  affichagesR[4].textContent = D;
  
                  let E = 1023 + D;
                  E = E.toString(2);
                  console.log(E);
                  E = E.split('');
                  for(;;){
                      if(E.length == 11){break;}
                      E.unshift("0");
                  }
                  E = E.join('');
                  console.log(E);
  
                  D = D * -1;
                  let F = flot.slice(D);
                  console.log(F);
                  F = F.split('');
                  for(;;){
                      if(F.length == 53){break;}
                      F.push("0");
                  }
                  F = F.join('');
                  console.log(F);
  
                  for(let i = 0 ; i < 64 ; i++){
                      if(i == 0){
                          let spanS = document.createElement('span');
                          spanS.textContent = S;
                          spanS.style.color = "#fff";
                          spanS.style.marginRight = "3px";
                          affichagesR[5].appendChild(spanS);
                      }
                      else if(i > 0 && i < 12){
                          let spanS = document.createElement('span');
                          spanS.textContent = E[i - 1];
                          spanS.style.color = "#f00";
                          spanS.style.marginRight = "3px";
                          affichagesR[5].appendChild(spanS);
                      }
                      else {
                          let spanS = document.createElement('span');
                          spanS.textContent = F[i - 12];
                          spanS.style.color = "#0f0";
                          spanS.style.marginRight = "3px";
                          affichagesR[5].appendChild(spanS);
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
                  affichagesR[3].textContent = N;
  
                  let bin = N.split('.');
                  console.log(bin);
                  
                  let D = bin[0].length;
                  D--;
                  console.log(D);
                  affichagesR[4].textContent = D;
  
                  let tot;
                  if(bin.length == 1){
                      tot = bin[0].slice(1);
                  }else{
                      tot = bin[0].slice(1);
                      tot = tot.concat(bin[1]);
                  }
                  console.log(tot);
  
                  let E = 1023 + D ;
                  E = E.toString(2);
                  E = E.split('');
                  for(;;){
                      if(E.length == 11){break;}
                      E.unshift("0");
                  }
                  E = E.join('');
                  console.log(E);
  
                  let F = tot;
                  F = F.split('');
                  for(;;){
                      if(F.length == 53){break;}
                      F.push("0");
                  }
                  F = F.join('');
                  console.log(F);
  
                  for(let i = 0 ; i < 64 ; i++){
                      if(i == 0){
                          let spanS = document.createElement('span');
                          spanS.textContent = S;
                          spanS.style.color = "#fff";
                          spanS.style.marginRight = "3px";
                          affichagesR[5].appendChild(spanS);
                      }
                      else if(i > 0 && i < 12){
                          let spanS = document.createElement('span');
                          spanS.textContent = E[i - 1];
                          spanS.style.color = "#f00";
                          spanS.style.marginRight = "3px";
                          affichagesR[5].appendChild(spanS);
                      }
                      else {
                          let spanS = document.createElement('span');
                          spanS.textContent = F[i - 12];
                          spanS.style.color = "#0f0";
                          spanS.style.marginRight = "3px";
                          affichagesR[5].appendChild(spanS);
                      }
                  }
  
              }
              
          }
          
      }
  };