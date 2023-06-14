const audio = document.getElementById('drum-roll');
const audio2 = document.getElementById('crash-cymbal');
const audio3 = document.getElementById('win-sound-effect');

audio.addEventListener('ended', function() {
    audio2.play();
    audio3.play();
});

setTimeout(function() {
    audio.play();
  }, 800);
  
setTimeout(function() {
    const image = document.getElementById('result__image');
    const text = document.querySelector('.result__title');
    const button = document.querySelector('.button');
    image.classList.add('fade-in');
    text.classList.add('fade-in');
    button.classList.add('fade-in');
  }, 4700);