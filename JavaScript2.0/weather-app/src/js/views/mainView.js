import View from './View';

const input = document.querySelector('input');
const siteTitle = document.getElementById('site-title');
const label = document.getElementById('label');
const hoursTitle = document.getElementById('title-hours');
const weeksTitle = document.getElementById('title-days');
const footer = document.querySelector('footer');

class mainView extends View {
  addHandlerLang(handler) {
    // choices.forEach((choice) => {
    //   choice.addEventListener('click', (e) => {
    //     overlay.classList.add('hidden');
    //     const lang = e.target.getAttribute('id');
    //     handler(lang);
    //   });
    // });
  }

  languageDisplay(lang) {
    const fr = lang === 'fr';

    input.placeholder = fr
      ? 'Nom de ville, Code Postal, ...'
      : "City's name, ZIP Code, ...";

    siteTitle.textContent = fr ? 'Météo' : 'Weather';

    label.textContent = fr ? 'Rechercher' : 'Search';

    hoursTitle.textContent = fr ? "Aujourd'hui" : 'Today';

    weeksTitle.textContent = fr ? 'Cette semaine' : 'This week';

    footer.textContent = fr
      ? 'Copyright ©2022 - Créé par FREɄD'
      : 'Copyright ©2022 - Created by FREɄD';
  }
}

export default new mainView();
