const changeColorBrown = $('.color-brown')
const changeColorBlue = $('.color-blue')
const changeColorSlogan = $('.text-slogan')
const changeColorName = $('.my-name')
const checkMainBrown = $('.color-check-brown')
const checkMainBlue = $('.color-check-blue')

changeColorBrown.onclick = function() {
    checkMainBlue.classList.remove('color-main')
    checkMainBrown.classList.add('color-main')
    changeColorSlogan.classList.add('text-brown')
    changeColorName.classList.add('text-brown')
}


changeColorBlue.onclick = function() {
    changeColorSlogan.classList.remove('text-brown')
    checkMainBlue.classList.add('color-main')
    checkMainBrown.classList.remove('color-main')
    changeColorName.classList.remove('text-brown')
}
