let score = 199;
let multiplicateur = 1;
let tarif = 50;
let availebel = false;
document.querySelector('.multiplierBt').innerHTML = 'Multiplier X' + (multiplicateur+1)+'<br/>'+ tarif + " Credit" ;



function scorePlusOne(){
    score +=  multiplicateur;
    document.querySelector('.counterDiv').innerHTML = score;
}

function augmenterMultiplicateur() {
    if(score >= tarif && multiplicateur <= 5){
        multiplicateur++;
        score-=tarif;
    }

    else if(score >= tarif*2 && multiplicateur > 5 ) {
        multiplicateur++;
        score-=tarif*2;
        tarif =tarif*2;
    }

    else{
        alert('tu es pauvre');
    }

    document.querySelector('.counterDiv').innerHTML = score;
    document.querySelector('.multiplierBt').innerHTML = 'Multiplier X' + (multiplicateur+1)+'<br/>'+ tarif + " Credit" ;
}

function buyAutoclicker(){
    if(score>=500){
        availebel = true;
        score -= 500;
        document.querySelector('.counterDiv').innerHTML = score;

    }

}

setInterval(function() {
    if(availebel == true){
        score++; 
        document.querySelector('.counterDiv').innerHTML = score;
    }
}, 1000);

function hideBt(){  
    document.querySelector('.multiplierBt').disabled = true;
    document.querySelector('.autoclicker').disabled  = true;
}



document.querySelector('.clicker').addEventListener('click',scorePlusOne);

document.querySelector('.multiplierBt').addEventListener('click',augmenterMultiplicateur);

document.querySelector('.autoclicker').addEventListener('click',buyAutoclicker);