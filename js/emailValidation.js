const gotoMail = document.getElementById('gotoMail');
gotoMail.onclick = () => {
    'use strict';
    name.focus();
};




const   name = document.getElementById('name'),
        gmail = document.getElementById('gmail'),
        objet = document.getElementById('objet'),
        message = document.querySelector('textarea');

const   send = document.getElementById('send'),
        reset   = document.getElementById('reset');


reset.onclick = () => {
    'use strict';
    name.value = "";
    gmail.value = "";
    objet.value = "";
    message.value = "";
};