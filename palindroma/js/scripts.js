const word = prompt('inserisci una parola');
 console.log('word', word, typeof word);
isPalindroma();


 function isPalindroma() {

 
        let reverse = '';
        for(let i=word.length-1;i>=0;i--){
            console.log(word[i]);
        
            reverse  += word[i];

        }

        console.log ('reverse', reverse, typeof reverse);

        if ( word === reverse ) {
            alert(word + ' è palindroma');

        }

        else {
            alert(word +   ' non è palindroma');
            
        }

    }


 


 