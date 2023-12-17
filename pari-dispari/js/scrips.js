const scelta = prompt('Scegli pari o dispari');
console.log('scelta', scelta, typeof scelta);

const number = parseInt(prompt('Digita un numero da 1 a 5'));
console.log('number', number, typeof number);

const pcNumber = randomNumber(1,5);
console.log('pcNumber', pcNumber, typeof pcNumber);


const sum = number + pcNumber;
console.log('sum', sum, typeof sum);

const result = even(sum);
console.log('result', result, typeof result);


if(result && scelta == 'pari'){
    alert ('Hai vinto');
}
else if(!result && scelta == 'dispari'){
    alert('Hai perso');
}
else{
    alert('Hai perso');
}

function randomNumber (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;

}


function even(n){
    if(sum % 2 == 0){
        return true;
    }
    else {
        return false;
    }
}