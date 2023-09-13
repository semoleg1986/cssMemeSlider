let imagesList = [];
let titleList = [];
let step = 0;
let step2 = 0;
let offset = 0;
let offset2 = 0;
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

function text() {
    let txt = document.createElement('p');
    txt.textContent = titleList[step2];
    txt.classList.add('txt');
    document.querySelector('.text-slider').appendChild(txt);
    if (step2 >= imagesList.length) {
        step2 = 0;
    } else {
        step2++;
    }
    offset2 = 1;
}

let carouselTexts = document.querySelector('.txt')
let carouselImages = document.querySelectorAll('.image');
carouselImages.forEach((image, index) => {
    titleList.push(image.alt);
    imagesList.push(image.src);
    carouselImages[index].remove();
});
carouselTexts.remove();
text();
draw();draw();draw();draw();
let newImages = document.querySelectorAll('.image');
const buttonOuterElements = document.querySelectorAll('.button-outer');
const firstButtonOuter = buttonOuterElements[0];
const firstButtonInner = firstButtonOuter.querySelector('.button-inner');
firstButtonInner.style.display = 'block';

buttonOuterElements.forEach((buttonOuter, index) => {
    buttonOuter.addEventListener('click', () => {
        document.querySelector('.text-slider').innerHTML = '';
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
        step2 = index;
        offset2 = 0;
        text();
    });
});
