// add class to tell CSS that JS is enabled
document.body.classList.add('js-enabled');

// Nav bar logic
const toggle = document.querySelector('.menu-toggle');
const hamburger = toggle.querySelector('.hamburger');
const menu = document.querySelector('body > header nav ul');

toggle.addEventListener('click', () => {
  menu.classList.toggle('open');
  if (menu.classList.contains('open')) {
    menu.style.maxHeight = menu.scrollHeight + 'px';
    hamburger.classList.add('open');
  } else {
    menu.style.maxHeight = null;
    hamburger.classList.remove('open');
  }
});

// Add copy button to codeblock
