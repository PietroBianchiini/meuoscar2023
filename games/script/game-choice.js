const links = document.querySelectorAll('a');
const targetElement = document.getElementById('body');
var linkIcon = document.getElementsByClassName('icons__action');

links.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    targetElement.classList.add('fade-out');
    setTimeout(function() {
      window.location.href = link.href;
    }, 600);
  });
});