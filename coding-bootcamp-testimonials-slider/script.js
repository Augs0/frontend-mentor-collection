const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const studentImg = document.querySelector('.student');
const quote = document.querySelector('.text');
const name = document.querySelector('.name');
const job = document.querySelector('.job');

prevBtn.addEventListener('click', function () {
    changeToPrevContent();
})

nextBtn.addEventListener('click', function () {
    changeToNextContent();
})


function changeToPrevContent() {
    studentImg.src = './src/img/image-tanya.jpg';
    studentImg.alt = 'a young woman with curly hair looks at the camera';
    quote.innerHTML = `
    <img class="quotes" aria-hidden="true" src="./src/img/pattern-quotes.svg" alt="large quotation mark">
    
          “I’ve been interested in coding for a while but never taken the jump,
          until now. I couldn’t recommend this course enough. I’m now in the job
          of my dreams and so excited about the future. ” 
    `;
    name.innerHTML = 'Tanya Sinclair';
    job.innerHTML = 'UX Engineer';
}

function changeToNextContent() {
    studentImg.src = './src/img/image-john.jpg';
    studentImg.alt = 'a young man with a beard in a blue t shirt smiles at the camera';
    quote.innerHTML = `
    <img class="quotes" aria-hidden="true" src="./src/img/pattern-quotes.svg" alt="large quotation mark">
    
          “If you want to lay the best foundation possible I’d
          recommend taking this course. The depth the instructors go into is
          incredible. I now feel so confident about starting up as a
          professional developer.” 
    
    `;
    name.innerHTML = 'John Tarkpor';
    job.innerHTML = 'Junior Front-end Developer'
}