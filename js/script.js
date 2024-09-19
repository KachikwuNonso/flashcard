const card = document.querySelector('#first');

card.addEventListener('click', function () {
    card.classList.toggle('is-flipped');
})

const car = document.querySelector('#second');

car.addEventListener('click', function () {
    car.classList.toggle('is-flipped');
})

const book = document.querySelector('#third');

book.addEventListener('click', function () {
    book.classList.toggle('is-flipped');
})

const variable = document.querySelector('#fourth');

variable.addEventListener('click', function () {
    variable.classList.toggle('is-flipped');
})

const code = document.querySelector('#fifth');

code.addEventListener('click', function () {
    code.classList.toggle('is-flipped');
})