const imgArray = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const containerImg = document.querySelector('.img-container');
const containerImgThumble = document.querySelector('.img-container-thumble');

const fermaCaroselloDom = document.getElementById('fermaCarosello');
const reverseDom = document.getElementById('reverse');


let containerImgContent = "";

//si poteva usare il forEach con elemeno e indice//

for (let i = 0; i < imgArray.length; i++) {
    let key = imgArray[i];

    const imgWrapper = `<div class="wrapper-img">

                        <img src="${key.image}">
                        <div class="content">
                        <h2 class="content-title">${key.title}</h2>
                        <p class="content-text">${key.text}</p>
                        </div>
        
                         </div>`;
    containerImgContent += imgWrapper;

    const imgWrapperThumble = document.createElement('div');
    imgWrapperThumble.classList.add("wrapper-img-thumble");
    imgWrapperThumble.innerHTML = `<img src="${key.image}">`;
    containerImgThumble.append(imgWrapperThumble);

    imgWrapperThumble.addEventListener('click',
        function () {

            wrapperImg[activeImage].classList.remove('d-block');
            wrapperImgThumble[activeImage].classList.remove('brightness');

            activeImage = i;

            wrapperImg[activeImage].classList.add('d-block');
            wrapperImgThumble[activeImage].classList.add('brightness');

        }
    );
}

containerImg.innerHTML = containerImgContent;

const wrapperImg = document.getElementsByClassName('wrapper-img');
const wrapperImgThumble = document.getElementsByClassName('wrapper-img-thumble');

console.log(wrapperImg)

let activeImage = 0;

wrapperImg[activeImage].classList.add('d-block');
wrapperImgThumble[activeImage].classList.add('brightness');

const nextDom = document.querySelector('#next');
const prevDom = document.querySelector('#prev');

nextDom.addEventListener('click', avanti);

prevDom.addEventListener('click', indietro);

function indietro() {
    wrapperImg[activeImage].classList.remove('d-block');
    wrapperImgThumble[activeImage].classList.remove('brightness');


    if (activeImage == 0) {
        activeImage = wrapperImg.length - 1;
    } else {
        activeImage = activeImage - 1;
    }

    wrapperImg[activeImage].classList.add('d-block');
    wrapperImgThumble[activeImage].classList.add('brightness');

}
function avanti() {
    wrapperImg[activeImage].classList.remove('d-block');
    wrapperImgThumble[activeImage].classList.remove('brightness');

    if (activeImage == wrapperImg.length - 1) {
        activeImage = 0;
    } else {
        activeImage = activeImage + 1;
    }

    wrapperImg[activeImage].classList.add('d-block');
    wrapperImgThumble[activeImage].classList.add('brightness');

}

// carosello //

let direction = "next";
let clock = setInterval(infinito, 2000);

function infinito() {
    if (direction == 'next') {
        avanti();
    } else {
        indietro();
    }
}

fermaCaroselloDom.addEventListener('click', function () {     //al click start&stop

    if (clock == null) {
        clock = setInterval(infinito, 2000);
    } else {
        clearInterval(clock);
        clock = null;
    }
});

reverseDom.addEventListener('click', function () {      //al click inverti il giro

    if (direction == "next") {
        direction = "prev";
    } else {
        direction = "next"
    }
});

// carosello //
