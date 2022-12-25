const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// ----- Height of all page -----
const pageList = $$('.right-part')
var navItemTopPosList = []
function getHeightPages() {
  navItemTopPosList = []
  for (var page of pageList) {
    const tempHeight =
      navItemTopPosList.length === 0
        ? 0
        : navItemTopPosList[navItemTopPosList.length - 1]
    if (page === $('.skills')) {
      navItemTopPosList.push(
        page.clientHeight + tempHeight + $('.slide').clientHeight,
      )
    } else {
      navItemTopPosList.push(page.clientHeight + tempHeight)
    }
  }
  console.log(navItemTopPosList)
}

getHeightPages(navItemTopPosList)
// ----- Event: scroll page -----
window.onscroll = function () {
  getHeightPages()

  var idx = -1

  for (let i = 0; i < navItemTopPosList.length; i++) {
    if (
      navItemTopPosList[i] - 1 <= document.documentElement.scrollTop + 200 &&
      document.documentElement.scrollTop + 200 + 1 <= navItemTopPosList[i + 1]
    ) {
      idx = i
      break
    }
  }
  const preNavItem = $('.left-part__item--active')
  if (idx + 1 !== parseInt(preNavItem.dataset.order)) {
    const curNavItem = Array.from(navItems).find(function (target) {
      return parseInt(target.dataset.order) === idx + 1
    })
    preNavItem.classList.remove('left-part__item--active')
    curNavItem.classList.add('left-part__item--active')
  }
  for (var project of pageList) {
    // project.style.height = project.clientWidth * 18 / 16 + 'px'
  }
}

// ----- Event: Focus navigation items -----
const navItems = $$('.left-part__item')

for (var navItem of navItems) {
  navItem.onclick = function () {
    $('.left-part__item--active').classList.remove('left-part__item--active')
    this.classList.add('left-part__item--active')

    window.scrollTo({
      top:
        this.dataset.order === '0'
          ? 0
          : navItemTopPosList[parseInt(this.dataset.order) - 1],
      behavior: 'smooth',
    })
  }
}

// Navbar
const openMenu = $('.header__nav-menu')
const navbar = $('.nav')
const closeMenu = $('.nav__icon')

openMenu.onclick = function () {
  navbar.classList.add('surf_out')
}
closeMenu.onclick = function () {
  navbar.classList.remove('surf_out')
}

//Color-text

//download file

//Dark-light
const btn = document.querySelector('.btn-toggle')
const btn_mobile = document.querySelector('.btn-toggle-mobile')
const lightmode = document.querySelector('.lightmode')
const darkmode = document.querySelector('.darkmode')
const light_mode = document.querySelector('.light_mode')
const dark_mode = document.querySelector('.dark_mode')

// Lắng nghe sự kiện click vào button
btn.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme')
    light_mode.classList.toggle('hidden')
    dark_mode.classList.toggle('hidden')
})

btn_mobile.addEventListener('click', function () {
  // Thêm hoặc xóa class dark-theme ở body
  document.body.classList.toggle('dark-theme')
  lightmode.classList.toggle('hidden')
  darkmode.classList.toggle('hidden')
})
