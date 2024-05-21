const flipBtns = document.getElementsByClassName('flip-btn');
const card = document.querySelector('.card-inner');
const frontFlipBtn = document.querySelector('.front-flip-btn');
const backFlipBtn = document.querySelector('.back-flip-btn');

for (let i=0; i<flipBtns.length; i++) {
    flipBtns[i].addEventListener('click', function() {
        card.classList.toggle('isFlipped');
        setTimeout(()=> {
            frontFlipBtn.classList.toggle('hidden');
            backFlipBtn.classList.toggle('hidden');
        }, 500);
    });
}

