const images = document.querySelectorAll('.img-12-min');
let count = 0; // переменная, которая указывает на номер активного изображения в images

const next = document.querySelector('.next');
next.onclick = nextFunction;

const prev = document.querySelector('.prev');
prev.onclick = prevFunction;

const res = document.querySelector('.reset');
res.onclick = resetFunction;

let imgMaxSrc = document.querySelector('.img-12-max');

function nextFunction() {

    images.forEach(elem => {
        elem.classList.remove('active-img');
    })
    count++;

    if (count > images.length - 1) {
        count = 0;
    }
    images[count].classList.add('active-img');
    imgMaxSrc.src = images[count].src;
}

function prevFunction() {
    images.forEach(elem => {
        elem.classList.remove('active-img');
    })

    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    images[count].classList.add('active-img');
    imgMaxSrc.src = images[count].src;
}

function resetFunction() {
    images.forEach(elem => {
        elem.classList.remove('active-img');
    })
    count = 0;
    images[count].classList.add('active-img');
    imgMaxSrc.src = images[count].src;
}