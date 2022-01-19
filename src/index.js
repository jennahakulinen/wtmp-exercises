
  'use strict';

  //Navigaatio
  const toggleBtn = document.querySelector('.toggle');
  const naviList = document.querySelector('.nav-list');

  toggleBtn.addEventListener('click', () => {
      naviList.classList.toggle('active');
  });

  import LunchMenu from './assets/LunchMenu.json';
  // Test
  console.log('lunch menu object', LunchMenu);

  const coursesEn = [];
  const coursesFi = [];

  for (let i in LunchMenu.courses) {
    coursesFi.push(LunchMenu.courses[i].title_fi);
    coursesEn.push(LunchMenu.courses[i].title_en);
  }

  const menu = document.querySelector('.menu');
  const langBtn = document.querySelector('.lang');
  const sortBtn = document.querySelector('.sort');
  const rndBtn = document.querySelector('.random');

  let finnish = true;

  coursesEn.sort();
  coursesFi.sort();

  coursesFi.forEach(annos => {
    menu.innerHTML += '<li class="">' + annos +'</li>';
  });

  const changeLang = () => {
    menu.innerHTML = '';
    if (finnish) {
      coursesEn.forEach(course => {
        menu.innerHTML += '<li class="">' + course +'</li>';
      });
      finnish = false;
    } else {
      coursesFi.forEach(annos => {
        menu.innerHTML += '<li class="">' + annos +'</li>';
      });
      finnish = true;
    };
  };

  langBtn.addEventListener('click', changeLang);

  const sortMenu = () => {
    menu.innerHTML = '';
    if (finnish) {
      coursesFi.reverse();
      coursesFi.forEach(annos => {
        menu.innerHTML += '<li class="">' + annos +'</li>';
      });
    } else {
      coursesEn.reverse();
      coursesEn.forEach(course => {
        menu.innerHTML += '<li class="">' + course +'</li>';
    });
  };
};

sortBtn.addEventListener('click', sortMenu);

const randomCourse = () => {
  const rand = Math.floor(Math.random()*coursesFi.length);
  if (finnish) {
    alert(coursesFi[rand]);
  } else {
    alert(coursesEn[rand]);
  };
};

rndBtn.addEventListener('click', randomCourse);
