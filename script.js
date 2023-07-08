let hambuger = document.querySelector('.harmbuger');
let openTag = document.querySelector('.open')
let closeTag = document.querySelector('.close')
let nav = document.querySelector('.mobile-nav')


hambuger.addEventListener('click', handleEvent);

function handleEvent(event) {
    if (event.target.matches('.open')) {
        nav.classList.add('active');
        closeTag.classList.add('active');
        openTag.classList.add('hide');
    } else if (event.target.matches('.close')) {
        nav.classList.remove('active');
        closeTag.classList.remove('active');
        openTag.classList.remove('hide');
    }
}
