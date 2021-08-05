// /*MENU SHOW & HIDDEN*/ 

const navMenu = document.querySelector('.nav__menu')
const navToggle = document.querySelector('.nav__toggle')
const navClose = document.querySelector('#nav-close')

/*SHOW*/ 
navToggle.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
    navMenu.classList.remove('hidden')
})

/*HIDDEN*/
navClose.addEventListener('click', ()=>{
    navMenu.classList.toggle('hidden')
    navMenu.classList.remove('show')
})