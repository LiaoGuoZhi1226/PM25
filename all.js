let div = document.getElementById("text");

const letters = ["W", "h", "a", "t", " i", "f", "?"];

setTimeout(
  () =>
    letters.forEach((letter, i) => {
      setTimeout(() => {
        div.innerHTML += letter;
        sound.play();
      }, i * 500);
    }),
  2800
);
