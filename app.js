const menuBtn = document.querySelector('.menu-btn-m')
const header = document.querySelector('.menu-mobile')

menuBtn.addEventListener("click", () => { 
    header.classList.toggle("open");
});