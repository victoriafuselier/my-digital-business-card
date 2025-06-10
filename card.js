const flipBtns = document.querySelectorAll('.flip-btn');
const card = document.querySelector('.card-inner');
const frontFlipBtn = document.querySelector('.front-flip-btn');
const backFlipBtn = document.querySelector('.back-flip-btn');
const frontFace = document.getElementById('front-face');
const backFace = document.getElementById('back-face');
backFace.inert = true;
  
flipBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        card.classList.toggle('isFlipped');
        const isFlipped = card.classList.contains('isFlipped');
        setTimeout(() => {
            frontFlipBtn.classList.toggle('hidden', isFlipped);
            backFlipBtn.classList.toggle('hidden', !isFlipped);
            frontFace.inert = isFlipped;
            backFace.inert = !isFlipped;
            frontFace.setAttribute('aria-hidden', isFlipped);
            backFace.setAttribute('aria-hidden', !isFlipped);
        }, 500);
    })
});