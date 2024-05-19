const flipBtns = document.getElementsByClassName('flip-btn');
const card = document.querySelector('.card-inner');


for (let i=0; i<flipBtns.length; i++) {
    flipBtns[i].addEventListener('click', function() {
        card.classList.toggle('isFlipped');
    });
}

