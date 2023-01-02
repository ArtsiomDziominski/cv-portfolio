const THEME = 'theme';
const THEME_LIGHT = 'theme-light';
const THEME_DARK = 'theme-dark';
const THEME_LIGHT_IMAGE = 'static/img/light_mode.svg';
const THEME_DARK_IMAGE = 'static/img/dark_mode.svg';
const LANGUAGE_LIGHT_MODE = "static/img/language.svg";
const LANGUAGE_DARK_MODE = "static/img/language-dark-mode.svg";

const theme = document.getElementById(THEME);
const changeThemeButton = document.getElementById('change-theme');
const changeThemeButtonImage = document.getElementById('change-theme-img');
const changeLangButton = document.getElementById('change-lang');
const scrollDownButton = document.getElementById('scroll-down');
const languageButtonImage = document.getElementById('change-lang-img');

let language;

theme.className = localStorage.getItem(THEME) || THEME_LIGHT;
changeThemes();
changeImgColor();
function changeImgColor() {
    languageButtonImage.src = theme.className === THEME_DARK ? LANGUAGE_DARK_MODE : LANGUAGE_LIGHT_MODE;
}

changeThemeButton.addEventListener('click', () => {
    theme.className = theme.className === THEME_DARK ? THEME_LIGHT : THEME_DARK;
    changeThemes();
    localStorage.setItem(THEME, theme.className);
    changeImgColor();
});

scrollDownButton.addEventListener('click', () => {
    scrollDownButton.scrollIntoView()
});

function changeThemes() {
    changeThemeButtonImage.src = theme.className === THEME_DARK ? THEME_LIGHT_IMAGE : THEME_DARK_IMAGE;
}