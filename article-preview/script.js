const shareBtn = document.querySelector('.share-btn');
const shareContent = document.querySelector('.share');
const toggle = document.querySelector('.toggle');


shareBtn.addEventListener('click', toggleContent);

function toggleContent() {
    toggle.classList.toggle('socials');
    shareContent.classList.toggle('colour-change')
    if (toggle.classList.contains('socials')) {
        toggle.innerHTML = `
        <div class="share-buttons">
            <p>share</p>
            <img src="./src/img/icon-facebook.svg" alt="facebook"/>
            <img src="./src/img/icon-twitter.svg" alt="twitter"/>
            <img src="./src/img/icon-pinterest.svg" alt="pinterest"/>
        </div>
    `
    } else {
        toggle.innerHTML = `
        <img
          src="./src/img/avatar-michelle.jpg"
          alt="michelle appleton"
          class="user-img"
        />
        <div class="share-wrapper">
          <span>Michelle Appleton </span>
          <span>28 Jun 2020</span>
        </div>
        
    `
    }
}
