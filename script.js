const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-again');
const popup = document.getElementById('popup-container');
const natification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');

const words = ['application', 'programming', 'query', 'file', 'development', 'code', 'style', 'bug', 'Scrum Manager'];

let selectedWord = words[(Math.random() * words.length)];

console.log(selectedWord);

const correctLetters = [];
const wrongLetters = [];

//show the hidden word
function displayWord(){
    wordEl.innerHTML = `
    ${selectedWord
        .split('')
        .map(
            letter => `
                <span class ="letter">
                    ${correctLetters.includes(letter) ? letter : ''}
                </span>
            `
        )
        .join('')}
    `;

    const innerWord = wordEl.innerText.replace(/\n/g, '');
    

    if(innerWord === selectedWord){
        finalMessage.innerText = 'Congrats!! You Won! ';
        popup.style.display ='flex';
    }

}
function updateWeongLettersEl(){
    console.log(Object)
}

window.addEventListener('keydown', e => {
   // console.log(e.keyCode);
   if(e.keyCode >=65 && e.keyCode <=90) {
    const letter = e.key;
    if(selectedWord.includes(letter)){
        if(!correctLetters.includes(letter)){
            correctLetters.push(letter);

            displayWord();
        }else{
            showNotification();
        }
    }else{
        if(!wrongLetters.includes(letter)){
            wrongLetters.push(letter);

            updateWeongLettersEl();
        }else{
            showNotification();
        }
    }
   }
})


displayWord();
