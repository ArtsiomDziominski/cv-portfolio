const LANGUAGE = 'language';

language = localStorage.getItem(LANGUAGE) || 'ru';
changeLanguage(language)

changeLangButton.addEventListener('click', () => {
    language = language === 'ru' ? 'en' : 'ru';
    changeLanguage(language);
});

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

    document.getElementById('about-me-nav').innerHTML = langJson.about.aboutTitle;
    document.getElementById('about-me').innerHTML = langJson.about.aboutTitle;
    document.getElementById('about-text').innerHTML = langJson.about.aboutText;


    document.getElementById('skillsTitle').innerHTML = langJson.skills.skillsTitle;
    document.getElementById('skillsTitleNav').innerHTML = langJson.skills.skillsTitle;

    document.getElementById('projectTitle').innerHTML = langJson.projects.projectTitle;
    document.getElementById('projectTitleNav').innerHTML = langJson.projects.projectTitle;

    document.getElementById('project1__title').innerHTML = langJson.projects.project1.name;
    document.getElementById('project2__title').innerHTML = langJson.projects.project2.name;
    document.getElementById('project3__title').innerHTML = langJson.projects.project3.name;

    document.getElementById('project1__about').innerHTML = langJson.projects.project3.about;
    document.getElementById('project2__about').innerHTML = langJson.projects.project3.about;
    document.getElementById('project3__about').innerHTML = langJson.projects.project3.about;
}