function onClickMenu() {
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");

    document.getElementById("menu-bg").classList.toggle("change-bg");
}

// Modals
const modalLink = document.querySelector('.ripple-one');
const modalBg = document.querySelector('.modal-bg');
const modalClose = document.querySelector('.modal-close');
modalLink.addEventListener('click', function () {
    modalBg.classList.add('modal-active');
});
modalClose.addEventListener('click', function () {
    modalBg.classList.remove('modal-active');
})