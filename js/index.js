const THEME = 'theme';
const THEME_LIGHT = 'theme-light';
const THEME_DARK = 'theme-dark';
const THEME_LIGHT_IMAGE = 'static/img/light_mode.svg';
const THEME_DARK_IMAGE = 'static/img/dark_mode.svg';
const LANGUAGE_LIGHT_MODE = "static/img/language.svg";
const LANGUAGE_DARK_MODE = "static/img/language-dark-mode.svg";
const CLASS_BACKGROUND_DARK = "background-image-dark";

const theme = document.getElementById(THEME);
const changeThemeButton = document.getElementById('change-theme');
const changeThemeButtonImage = document.getElementById('change-theme-img');
const changeLangButton = document.getElementById('change-lang');
const scrollDownButton = document.getElementById('scroll-down');
const languageButtonImage = document.getElementById('change-lang-img');
const backgroundImage = document.getElementById('background-image');
const aboutBlock = document.getElementById('about');

let language;

theme.className = localStorage.getItem(THEME) || THEME_LIGHT;
changeThemes();
changeStyle();


// const bg = document.getElementById("intro__photo")
// let introStyleSize = 300;
// let introStylePosition = 50;
// window.addEventListener("scroll", function () {
//     if (5 > window.pageYOffset) {
//         introStyleSize = 300;
//         bg.style.position = 'fixed'
//         bg.style.top = '50%'
//         bg.style.left = '50%'
//         bg.style.width = introStyleSize + 'px'
//         bg.style.height = introStyleSize + 'px'
//     } else if (5 < window.pageYOffset) {
//         introStylePosition = introStylePosition-1
//         bg.style.position = 'fixed'
//         bg.style.top = introStylePosition + '%'
//         bg.style.left = introStylePosition + '%'
//         if (introStyleSize > 100) {
//             introStyleSize = 300 - window.pageYOffset
//             bg.style.width = introStyleSize + 'px'
//             bg.style.height = introStyleSize + 'px'
//         } else {
//             introStyleSize = 100;
//         }
//     }
// })

function changeStyle() {
    languageButtonImage.src = theme.className === THEME_DARK ? LANGUAGE_DARK_MODE : LANGUAGE_LIGHT_MODE;
    theme.className === THEME_DARK ? backgroundImage.classList.add(CLASS_BACKGROUND_DARK) : backgroundImage.classList.remove(CLASS_BACKGROUND_DARK);
}

changeThemeButton.addEventListener('click', () => {
    theme.className = theme.className === THEME_DARK ? THEME_LIGHT : THEME_DARK;
    changeThemes();
    localStorage.setItem(THEME, theme.className);
    changeStyle();
});

scrollDownButton.addEventListener('click', () => {
    aboutBlock.scrollIntoView()

});

function changeThemes() {
    changeThemeButtonImage.src = theme.className === THEME_DARK ? THEME_LIGHT_IMAGE : THEME_DARK_IMAGE;
}