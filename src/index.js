//2 i "Game cheat code"

let keyHistory = [];
document.addEventListener('keydown', event => {
  keyHistory.push(event.key);
  if (event.keyCode === 13 ) {
    console.log(keyHistory);
    keyHistory = [];
  }
});
