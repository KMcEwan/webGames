window.onload=function(){

const burgerMenu = document.getElementsByClassName('burger-menu')[0]

const navbar = document.getElementsByClassName('navbar')[0]


burgerMenu.addEventListener('click', () =>
{
    navbar.classList.toggle('active')
})
}


