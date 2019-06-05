'use strict'
// form input animation / floating placeholders
var input = document.querySelectorAll(".sign-up input"),
    label = document.querySelectorAll(".sign-up label"),
    freeTrial = document.querySelector(".free-trial")

for (let i = 0; i < input.length; i++) {
    function floatingPlaceholder() {
        if (input[i].value == "") {
            label[i].classList.remove('active')
        } else {
            label[i].classList.add('active')
        }
    }
    input[i].addEventListener('keyup', floatingPlaceholder)
    window.addEventListener('click', floatingPlaceholder)
}
// pop up animation
var closeButton = document.querySelector(".sign-up .close"),
    popUpBg = document.querySelector(".dark-bg"),
    popUp = document.querySelector(".sign-up"),
    freeTrial = document.querySelectorAll('.free-trial')


function display() {
    popUpBg.classList.add('display')
    setTimeout(function () {
        popUpBg.classList.add('scale')
    }, 100)
}

function hidden() {
    popUpBg.classList.remove('scale')
    setTimeout(function () {
        popUpBg.classList.remove('display')
    }, 400)
}
for (var i = 0; i < freeTrial.length; i++) {
    freeTrial[i].addEventListener('click', display)
}
closeButton.addEventListener('click', hidden)