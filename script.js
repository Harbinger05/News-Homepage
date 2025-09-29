const menuBtn = document.querySelector('.menu')
const ul = document.querySelector('ul')

menuBtn.addEventListener('click', () => {
    ul.classList.toggle('active')

    if(ul.classList.contains('active')) {
        menuBtn.src = 'images/icon-menu-close.svg'
    }
    else{
        menuBtn.src = 'images/icon-menu.svg'
    }
})