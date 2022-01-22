'use strict';

import SodexoData from "./modules/SodexoData";
import { getParsedMenuFazer } from "./modules/FazerData";

  //Navigaatio
  const toggleBtn = document.querySelector('.toggle');
  const naviList = document.querySelector('.nav-list');

  toggleBtn.addEventListener('click', () => {
      naviList.classList.toggle('active');
  });

  let lang = 'fi';

  /**
   * Sorts an array alphapetically
   *
   * @param {Array} courses - Menu array
   * @param {Array} order - 'asc' or 'desc'
   * @returns {Array} sorted menu
   */
  const sortCourses = (courses, order = 'asc') => {
    let sortedMenu = courses.sort();
    if (order === 'desc') {
      sortedMenu.reverse();
    }
    return sortedMenu;
  };

  /**
   * Renders html list items from menu data
   *
   * @param {string} restaurant - name of the selector/restaurant
   * @param {Array} menu - menu data
   */
  const renderMenu = (restaurant, menu) => {
    const list = document.querySelector('#' + restaurant);
    list.innerHTML = '';
    for (const item of menu) {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      list.appendChild(listItem);
    }
  };

  /**
   * Picks a random course item from an array
   *
   * @param {Array} courses
   * @returns {string} course
   */
  const pickRandomCourse = courses => {
    const randomIndex = Math.floor(Math.random() * courses.length);
    return courses[randomIndex];
  };
  const displayRandomCourse = () => {
    if(lang === 'fi'){
      alert('Sodexo: '+ pickRandomCourse(SodexoData.coursesFi) + '\n'+ 'Fazer: '+ pickRandomCourse(getParsedMenuFazer('fi')));

    }else{
      alert('Sodexo: '+ pickRandomCourse(SodexoData.coursesEn) + '\n'+ 'Fazer: '+ pickRandomCourse(getParsedMenuFazer('en')));
    }

  };

  const switchLanguage = () => {
    if (lang === 'fi') {
      lang = 'en';
      renderMenu('sodexo', SodexoData.coursesEn);
      renderMenu('fazer', getParsedMenuFazer('en'));
    } else {
      lang = 'fi';
      renderMenu('sodexo', SodexoData.coursesFi);
      renderMenu('fazer', getParsedMenuFazer('fi'));
    }
  };

  const renderSortedMenu = () => {
    if(lang === 'fi'){
      renderMenu('sodexo', sortCourses(SodexoData.coursesFi));
      renderMenu('fazer', sortCourses(getParsedMenuFazer('fi')));
    }else if (lang === 'en'){
      renderMenu('sodexo', sortCourses(SodexoData.coursesEn));
      renderMenu('fazer', sortCourses(getParsedMenuFazer('en')));
    }
  };

  const init = () => {
    renderMenu('sodexo', SodexoData.coursesFi);
    renderMenu('fazer', getParsedMenuFazer('fi'));
    document.querySelector('#switch-lang').addEventListener('click', switchLanguage);
    document.querySelector('#sort-menu').addEventListener('click', renderSortedMenu);
    document.querySelector('#pick-dish').addEventListener('click', displayRandomCourse);
  };

  init();

