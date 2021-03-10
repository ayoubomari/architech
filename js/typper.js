class TypedSpan {
    constructor(what,write,speed = 160){
        this.what = what;
        this.write = write;
        this.speed = speed;
        this.isCompled = false;
    }

    type(){

        let o = 0;
        let oo = 0;

        let selfWhath = this.what;
        let selfWrite = this.write;
        let selfSpeed = this.speed;
        let selfIs = this.isCompled;


        function goto(){

            if(o > selfWrite.length - 1){
                o = 0;
            }

            let x = setInterval(() => {

                let result = selfWrite[o].split("");


                selfWhath.textContent += result[oo];
                
                oo++;
                
                if(oo > result.length - 1){
                    clearInterval(x);
                    oo=0;
                    
                    let pair = 0;
                    let stop = setInterval(()=>{
                        if(pair % 2 === 0){
                            selfWhath.textContent += '|';
                            pair++;
                        }
                        else{
                            let zz = selfWhath.textContent.split('');
                            zz.pop();
                            zz = zz.join("");
                            selfWhath.textContent = zz;
                            pair++;
                        }

                        if(pair == 9){
                            clearInterval(stop);
                                selfIs = true;
                                if(selfIs){
                                    
                                    let z = setInterval(()=>{
                                        result.pop();
                                        result = result.join('');
                                        selfWhath.textContent = result;
                                        result = result.split('');
                                        if(result.length <= 0){
                                            clearInterval(z);
                                            o++;
                                            
                                            goto();
                                        }
                                    },selfSpeed /2)
                                }
                        }
                    },110)
    
                }
    
                
                
            },selfSpeed);

            
        }
        goto();
    }
}


/*
    HOW TO  USE

    declaration DOM :
        const tools = document.getElementById('tools');
    
    SET IN CLASS :
        llet tel = new TypedSpan(tools,tools.getAttribute('data-write').split(','));
        NB: * in constructor prroperty set the Element (span or div or p ...) => eblegatior .
              and getAttribute (data-write) => eblegatior .
            - set speed by Millisecends => optionail .

    USE TYPE method : 
        tel.type();
*/


/*
EX :

    
const tools = document.getElementById('tools');
let tel = new TypedSpan(tools,tools.getAttribute('data-write').split(','));
tel.type();


*/

