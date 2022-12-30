const THEME = 'theme';
const THEME_LIGHT = 'theme-light';
const THEME_DARK = 'theme-dark';
const THEME_LIGHT_IMAGE = 'static/img/light_mode.svg';
const THEME_DARK_IMAGE = 'static/img/dark_mode.svg';

const theme = document.getElementById(THEME);
const changeThemeButton = document.getElementById('change-theme');
const changeThemeButtonImage = document.getElementById('change-theme-img');
const changeLangButton = document.getElementById('change-lang');
const scrollDownButton = document.getElementById('scroll-down');
let language;

theme.className = localStorage.getItem(THEME) || THEME_LIGHT;
changeThemes();

changeThemeButton.addEventListener('click', () => {
    theme.className = theme.className === THEME_DARK ? THEME_LIGHT : THEME_DARK;
    changeThemes();
    localStorage.setItem(THEME, theme.className);
});

scrollDownButton.addEventListener('click', () => {
    scrollDownButton.scrollIntoView()
});

function changeThemes() {
    changeThemeButtonImage.src = theme.className === THEME_DARK ? THEME_LIGHT_IMAGE : THEME_DARK_IMAGE;
}