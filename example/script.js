// 'use strict';

// let drink = 1;

// function shoot(arrow, headshot, fail) {
//     console.log('вы сделали выстрел');

//     setTimeout(function() {
//         Math.random() > .5 ? headshot({}) : fail("Вы промахнулись");
//     }, 3000);
// }

// function win() {
//     console.log('вы победили');
//     (drink == .1) ? buyBeer() : giveMoney();
// }

// function buyBeer() {
//     console.log('вам купили пиво');
// }

// function giveMoney() {
//     console.log('вам дали деньги');
// }

// function loose() {
//     console.log('вы проиграли');
// }

// shoot({},
//         function(mark) {
//             console.log('вы попали в цель');
//             win(mark, buyBeer, giveMoney);
//         },
//         function(miss) {
//             console.error(miss);
//             loose();
//         }
//     )

'use strict';

let drink = 1;

function shoot() {
    console.log('вы сделали выстрел');

    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            Math.random() > .5 ? resolve({}) : reject("Вы промахнулись");
        }, 3000);
    });

    return promise;
}

function win() {
    console.log('вы победили');
}

function buyBeer() {
    console.log('вам купили пиво');
}

function giveMoney() {
    console.log('вам дали деньги');
}

function loose() {
    console.log('вы проиграли');
}

shoot()
        .then(mark => console.log('вы попали в цель'))
        .then(win)
        .then(() => {(drink == 1) ? buyBeer() : giveMoney();})
        .catch(() => {
            console.error('вы промахнулись');
            loose()})

             //функция действий при resolve и reject
            //  function requestEvent(st) {
            //     //удаляем фиктивные классы
            //     statusMessage.classList.remove('success');
            //     statusMessage.classList.remove('failure');
            //     statusMessage.classList.remove('loading');

            //     if (st == 'loading') {
            //         console.log('loading');
            //         //загрузка
            //         //класс для условия остановки анимации
            //         statusMessage.classList.add('loading');
            //         statusMessage.innerHTML = message.loadingImg;
            //         //js анимация вращения картинки
            //         let loadingAnimation,
            //             count = 0;
            //         loadingAnimation = setInterval(() => {
            //             statusMessage.style.transform = `rotate(${++count}deg)`;
            //             if (statusMessage.classList.contains('success') || statusMessage.classList.contains('failure')) {
            //                 statusMessage.style.transform = `rotate(0deg)`;
            //                 clearInterval(loadingAnimation);
            //             }
            //         }, 10);
            //     } else {
            //         if (st == 'success') {
            //             console.log('success');
            //         } else {
            //             console.log('failure');
            //         }
            //         //класс для условия остановки анимации
            //         statusMessage.classList.add(st);
            //         //вставляем нужную картинку
            //         statusMessage.innerHTML = message[`${st}Img`];
            //         //модальное окно с нужной надписью и картинкой
            //         overlayForm.style.display = 'block';
            //         overlayForm.classList.add('fade-form');
            //         popupFormTitle.textContent = message[`${st}`];
            //         let image = document.createElement('div');
            //         image.innerHTML = message[`${st}ImgBig`];
            //         image.classList.add('popup-form-img')
            //         popupFormStatus.appendChild(image);
            //         //закрываем модальное окно по клику в любое место и убираем обработчик событий
            //         function removeListener() {
            //             overlayForm.style.display = 'none';
            //             overlayForm.classList.remove('fade-form');
            //             popupFormStatus.removeChild(image);
            //             document.body.removeEventListener('click', removeListener);
            //         }

            //         document.body.addEventListener('click', removeListener);
            //     }
            // }