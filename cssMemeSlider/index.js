let imagesList = [];
let step = 0;
let offset = 0;
let isAnimating = false; 

function draw() {
    let img = document.createElement('img');
    img.src = imagesList[step];
    img.classList.add('image');
    img.style.left = offset * 100 + '%';
    document.querySelector('.images-container').appendChild(img);
    if (step >= imagesList.length) {
        step = 0;
    } else {
        step++;
    }
    offset = 1;
}

let carouselImages = document.querySelectorAll('.image');
carouselImages.forEach((image, index) => {
    imagesList.push(image.src);
    carouselImages[index].remove();
});

draw();draw();draw();draw();
let newImages = document.querySelectorAll('.image');
const buttonOuterElements = document.querySelectorAll('.button-outer');
const firstButtonOuter = buttonOuterElements[0];
const firstButtonInner = firstButtonOuter.querySelector('.button-inner');
firstButtonInner.style.display = 'block';

buttonOuterElements.forEach((buttonOuter, index) => {
    buttonOuter.addEventListener('click', () => {
        buttonOuterElements.forEach((button, i) => {
            const buttonInner = button.querySelector('.button-inner');
            if (i === index) {
                buttonInner.style.display = 'block';
            } else {
                buttonInner.style.display = 'none';
            }

        });
        const position = -index * 100;
        newImages.forEach(image => {
            image.style.transform = `translateX(${position}%)`;
        });
    });
});
