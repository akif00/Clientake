function onClickMenu() {
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");

    document.getElementById("menu-bg").classList.toggle("change-bg");
}

// Modals
const modalLink = document.querySelector('.child-custody-modal');
const modalBg = document.querySelector('.modal-bg');
const modalClose = document.querySelector('.modal-close');
modalLink.addEventListener('click', function () {
    modalBg.classList.add('modal-active');
});
modalClose.addEventListener('click', function () {
    modalBg.classList.remove('modal-active');
})

// Modal-two
const modalTwo = document.querySelector('.medium-to-high');
const modalBgTwo = document.querySelector('.modal-bg-two');
const modalTwoClose = document.querySelector('.modal-two-close');
modalTwo.addEventListener('click', function () {
    modalBgTwo.classList.add('modal-two-active');
});
modalTwoClose.addEventListener('click', function () {
    modalBgTwo.classList.remove('modal-two-active');
});

// modal-three
const modalThree = document.querySelector('.spousal-support');
const modalBgThree = document.querySelector('.modal-bg-three');
const modalThreeClose = document.querySelector('.modal-three-close');
modalThree.addEventListener('click', function () {
    modalBgThree.classList.add('modal-three-active');
});
modalThreeClose.addEventListener('click', function () {
    modalBgThree.classList.remove('modal-three-active');
});

// modal-four
const modalfour = document.querySelector('.child-support');
const modalBgfour = document.querySelector('.modal-bg-four');
const modalfourClose = document.querySelector('.modal-four-close');
modalfour.addEventListener('click', function () {
    modalBgfour.classList.add('modal-four-active');
});
modalfourClose.addEventListener('click', function () {
    modalBgfour.classList.remove('modal-four-active');
});

// modal-five
const modalfive = document.querySelector('.property-division');
const modalBgfive = document.querySelector('.modal-bg-five');
const modalfiveClose = document.querySelector('.modal-five-close');
modalfive.addEventListener('click', function () {
    modalBgfive.classList.add('modal-five-active');
});
modalfiveClose.addEventListener('click', function () {
    modalBgfive.classList.remove('modal-five-active');
});

// modal-six
const modalsix = document.querySelector('.guardianship');
const modalBgsix = document.querySelector('.modal-bg-six');
const modalsixClose = document.querySelector('.modal-six-close');
modalsix.addEventListener('click', function () {
    modalBgsix.classList.add('modal-six-active');
});
modalsixClose.addEventListener('click', function () {
    modalBgsix.classList.remove('modal-six-active');
});

// modal-seven
const modalseven = document.querySelector('.appeals');
const modalBgseven = document.querySelector('.modal-bg-seven');
const modalsevenClose = document.querySelector('.modal-seven-close');
modalseven.addEventListener('click', function () {
    modalBgseven.classList.add('modal-seven-active');
});
modalsevenClose.addEventListener('click', function () {
    modalBgseven.classList.remove('modal-seven-active');
});

// modal-eight
const modaleight = document.querySelector('.common-law-spouses');
const modalBgeight = document.querySelector('.modal-bg-eight');
const modaleightClose = document.querySelector('.modal-eight-close');
modaleight.addEventListener('click', function () {
    modalBgeight.classList.add('modal-eight-active');
});
modaleightClose.addEventListener('click', function () {
    modalBgeight.classList.remove('modal-eight-active');
});

// End Of Modals 