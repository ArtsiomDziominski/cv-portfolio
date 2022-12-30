const THEME = 'theme';
const THEME_LIGHT = 'theme-light';
const THEME_DARK = 'theme-dark';
const THEME_LIGHT_IMAGE = 'static/img/light_mode.svg';
const THEME_DARK_IMAGE = 'static/img/dark_mode.svg';
const LANGUAGE = 'language';

const theme = document.getElementById(THEME);
const changeThemeButton = document.getElementById('change-theme');
const changeThemeButtonImage = document.getElementById('change-theme-img');
const changeLangButton = document.getElementById('change-lang');
const scrollDownButton = document.getElementById('scroll-down');
let language;

theme.className = localStorage.getItem(THEME) || THEME_LIGHT;
language = localStorage.getItem(LANGUAGE) || 'ru';
changeThemes();
changeLanguage(language)


changeThemeButton.addEventListener('click', () => {
    theme.className = theme.className === THEME_DARK ? THEME_LIGHT : THEME_DARK;
    changeThemes();
    localStorage.setItem(THEME, theme.className);
});

changeLangButton.addEventListener('click', () => {
    language = language === 'ru' ? 'en' : 'ru';
    changeLanguage(language);
});

scrollDownButton.addEventListener('click', () => {
    scrollDownButton.scrollIntoView()
});

function changeThemes() {
    changeThemeButtonImage.src = theme.className === THEME_DARK ? THEME_LIGHT_IMAGE : THEME_DARK_IMAGE;
}

function getLanguage(lang = 'ru') {
    return fetch(`static/language-${lang}.json`)
}


async function changeLanguage(lang) {
    let langJson;

    await getLanguage(lang)
        .then(data => data.json())
        .then(resLang => langJson = resLang)

    nameButtons(langJson);
    localStorage.setItem(LANGUAGE, lang);
}

function nameButtons(langJson) {
    document.getElementById('lang').lang = langJson.lang
    document.getElementById('name').innerHTML = langJson.name;
    document.getElementById('intro-title').innerHTML = langJson.hello;
    document.getElementById('intro-about').innerHTML = langJson.helloNext;
    document.getElementById('lang-title').innerHTML = (langJson.lang).toUpperCase();
    document.getElementById('about-me').innerHTML = langJson.aboutTitle;
    document.getElementById('about-text').innerHTML = langJson.aboutText;
}