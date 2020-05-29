function onClickMenu() {
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");

    document.getElementById("menu-bg").classList.toggle("change-bg");
}

// home-banner-slides
const slides = document.querySelectorAll('.slide');
const auto = true;
const intervelTime = 5000;
let slideInterval;

const nextSlide =
    () => {
        // Get current class
        const current = document.querySelector('.current');
        // Remove current class
        current.classList.remove('current');
        // Check for next slide
        if (current.nextElementSibling) {
            // Add current to next sibling
            current.nextElementSibling.classList.add('current');
        } else {
            // Add current to start
            slides[0].classList.add('current');
        }
        setTimeout(() => current.classList.remove("current"));
    }

const prevSlide =
    () => {
        // Get current class
        const current = document.querySelector('.current');
        // Remove current class
        current.classList.remove('current');
        // Check for prev slide
        if (current.previousElementSibling) {
            // Add current to prev sibling
            current.previousElementSibling.classList.add('current');
        } else {
            // Add current to last
            slides[slides.length - 1].classList.add('current');
        }
        setTimeout(() => current.classList.remove("current"));
    }

// Auto slide

if (auto) {
    slideInterval = setInterval(nextSlide, intervelTime)
}

// end-of-home-banner-slides

// stratagic-slides

const track = document.querySelector('.stratigic__track');
const stratigicSlides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.stratigic_carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = stratigicSlides[0].getBoundingClientRect().width;

// console.log(slideWidth);

// arraging the stratigic slides next to one another

// manual
// stratigicSlides[0].style.left = slideWidth * 0 + 'px';
// stratigicSlides[1].style.left = slideWidth * 1 + 'px';
// stratigicSlides[2].style.left = slideWidth * 2 + 'px';

// consistent
const setSlidePosition = (slider, index) => {
    slider.style.left = slideWidth * index + 'px';
}
stratigicSlides.forEach(setSlidePosition);


const moveToSlide = (track, currentStratigicSlide, targetStratigicSlide) => {
    track.style.transform = 'translateX(-' + targetStratigicSlide.style.left + ')';

    currentStratigicSlide.classList.remove('current-stratigic-slide');
    targetStratigicSlide.classList.add('current-stratigic-slide');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-stratigic-slide');
    targetDot.classList.add('current-stratigic-slide');
}

const hideShowArrows = (stratigicSlides, prevButton, nextButton, targetIndex) => {
        if (targetIndex === 0) {
            prevButton.classList.add('is-hidden');
            nextButton.classList.remove('is-hidden');
        } else if (targetIndex === stratigicSlides.length - 1) {
            prevButton.classList.remove('is-hidden');
            nextButton.classList.add('is-hidden');
        } else {
            prevButton.classList.remove('is-hidden');
            nextButton.classList.remove('is-hidden');
        }
    }
    // when we click left,move the stratigicSlides to the left
prevButton.addEventListener('click', event => {
        const currentStratigicSlide = track.querySelector('.current-stratigic-slide');
        const prevStratigicSlide = currentStratigicSlide.previousElementSibling;
        const currentDot = dotsNav.querySelector('.current-stratigic-slide');
        const prevDot = currentDot.previousElementSibling;
        const prevIndex = stratigicSlides.findIndex(slide => slide === prevSlide)

        moveToSlide(track, currentStratigicSlide, prevStratigicSlide);
        updateDots(currentDot, prevDot);
        hideShowArrows(stratigicSlides, prevButton, nextButton, prevIndex);

    })
    // when we click right,move the stratigicSlides to the right
nextButton.addEventListener('click', event => {
    const currentStratigicSlide = track.querySelector('.current-stratigic-slide');
    const nextStratigicSlide = currentStratigicSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-stratigic-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = stratigicSlides.findIndex(slide => slide === nextSlide)

    moveToSlide(track, currentStratigicSlide, nextStratigicSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(stratigicSlides, prevButton, nextButton, nextIndex);
})

// when we click the nav indicators, move to that slide
dotsNav.addEventListener('click', e => {
    // what indicator was clicked on?
    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentStratigicSlide = track.querySelector('.current-stratigic-slide');
    const currentDot = dotsNav.querySelector('.current-stratigic-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetStratigicSlide = stratigicSlides[targetIndex];

    moveToSlide(track, currentStratigicSlide, targetStratigicSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(stratigicSlides, prevButton, nextButton, targetIndex);

})

// Modals of what we offer cards
const modalLink = document.querySelector('.child-custody-modal');
const modalBg = document.querySelector('.modal-bg');
const modalClose = document.querySelector('.modal-close');
modalLink.addEventListener('click', function() {
    modalBg.classList.add('modal-active');
});
modalClose.addEventListener('click', function() {
    modalBg.classList.remove('modal-active');
})

// Modal-two
const modalTwo = document.querySelector('.medium-to-high');
const modalBgTwo = document.querySelector('.modal-bg-two');
const modalTwoClose = document.querySelector('.modal-two-close');
modalTwo.addEventListener('click', function() {
    modalBgTwo.classList.add('modal-two-active');
});
modalTwoClose.addEventListener('click', function() {
    modalBgTwo.classList.remove('modal-two-active');
});

// modal-three
const modalThree = document.querySelector('.spousal-support');
const modalBgThree = document.querySelector('.modal-bg-three');
const modalThreeClose = document.querySelector('.modal-three-close');
modalThree.addEventListener('click', function() {
    modalBgThree.classList.add('modal-three-active');
});
modalThreeClose.addEventListener('click', function() {
    modalBgThree.classList.remove('modal-three-active');
});

// modal-four
const modalfour = document.querySelector('.child-support');
const modalBgfour = document.querySelector('.modal-bg-four');
const modalfourClose = document.querySelector('.modal-four-close');
modalfour.addEventListener('click', function() {
    modalBgfour.classList.add('modal-four-active');
});
modalfourClose.addEventListener('click', function() {
    modalBgfour.classList.remove('modal-four-active');
});

// modal-five
const modalfive = document.querySelector('.property-division');
const modalBgfive = document.querySelector('.modal-bg-five');
const modalfiveClose = document.querySelector('.modal-five-close');
modalfive.addEventListener('click', function() {
    modalBgfive.classList.add('modal-five-active');
});
modalfiveClose.addEventListener('click', function() {
    modalBgfive.classList.remove('modal-five-active');
});

// End Modals of what we offer cards