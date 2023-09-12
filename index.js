
const buttonOuterElements = document.querySelectorAll('.button-outer');

const firstButtonOuter = buttonOuterElements[0];
const firstButtonInner = firstButtonOuter.querySelector('.button-inner');
firstButtonInner.style.display = 'block';

buttonOuterElements.forEach(buttonOuter => {
    buttonOuter.addEventListener('click', () => {

        const allButtonInners = document.querySelectorAll('.button-inner');
        allButtonInners.forEach(buttonInner => {
            buttonInner.style.display = 'none';
        });
        
        const buttonInner = buttonOuter.querySelector('.button-inner');
        buttonInner.style.display = 'block';
    });
});
