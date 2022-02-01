// Implement the following small tasks (use code comments to describe tasks)

/**
 * i. Create a "game cheat code" like secret code feature, activated by typing secret password (record letter key presses in certain sequence).
 *    When a user types e.g. "hello", launch a response alert or something like that. (TIP: think about queue data structure).
 *
 * @param {string} code Secret code.
 */
const gameCheatCode = (code) => {
  let keyHistory = [];
  document.addEventListener('keydown', event => {
    keyHistory.push(event.key);
    if(keyHistory.join('') === code) {
      keyHistory = [];
      alert('Hello!');
    }
  });
};
gameCheatCode('hello');

/* Tuntiesimerkki
  const gameCheatCode = (code) => {
    let keyHistory = [];
    document.addEventListener('keydown', event => {
      keyHistory.push(event.key);
      if (keyHistory.length > code.length) {
        keyHistory.shift();
      }
      if(keyHistory.join('') === code) {
        alert('Cheat activated');
      }
    });
    gameCheatCode('sana');
*/

/**
 * ii. Create a function that shows the x and y coordinates of mouse double-clicks on the page
 */
const mouseCoords = () => {
  document.addEventListener('dblclick', event => {
    let x = event.clientX;
    let y = event.clientY;
    let coords = 'x: ' + x + ' y: ' + y;
    alert('Mouse position: \n' + coords);
  });
};
mouseCoords();

/**
 * iii. Create an element that reacts (e.g. console.log something) to touches but not clicks
 *
 * When mouse touches the list, each item changes color.
 */
let red = document.getElementById("red");
red.addEventListener('mouseover', event => {
  event.target.style.color = 'red';
});
let green = document.getElementById("green");
green.addEventListener('mouseover', event => {
  event.target.style.color = 'green';
});
let blue = document.getElementById("blue");
blue.addEventListener('mouseover', event => {
  event.target.style.color = 'blue';
});

/**
 * iv. Create a timer that tells user to "hurry up" after 15 secs of browsing
 * the notification should appear on the web page
 */
const hurryUp = () => {
  setTimeout(() => {
    let hurry = document.getElementById("hurry");
    hurry.innerHTML += "Hurry Up!";
}, 15000);
};
hurryUp();

/* Tuntiesimerkki
const createHurryUpTimer = delay => {
  const outputP = document.querySelector('#output');
  setTimeout(() => {
    outputP.textContent = 'Do something!';
  }, delay * 1000);
};
createHurryUpTimer(5);
*/


/**
 * v. Create a timer that tells user to "hurry up" after 15 secs of idling (= not doing anything: mouse hasn't been moving, keyboard keys haven't been pressed...)
 *    the notification should appear on the web page
 *
 * Tuntiesimerkki
    const createHurryUpTimerAdvanced = delay => {
      const outputP = document.querySelector('#output');
      let timer;
        const resetTimer = event => {
          clearTimeout(timer);
          timer = setTimeout(() => {
          outputP.textContent = 'Do something!';
          console.log('do something');
        }, delay * 1000);
      };
      resetTimer();
      document.addEventListener('mousemove', resetTimer);
      document.addEventListener('touchstart', resetTimer);
    };
    createHurryUpTimerAdvanced(5);
*/
