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
// 1. Fetch all code blocks
let codeBlocks = document.querySelectorAll('pre[class^="language"]');
console.log(codeBlocks);
for (let i = 0; i < codeBlocks.length; i++) {
  let codeBlock = codeBlocks[i];
  let copyButton = createCopyButton();
  codeBlock.insertAdjacentElement('afterbegin', copyButton);
  console.log("Copy button returned", copyButton);
}

function createCopyButton() {
  let useElement = document.createElement('USE');
  useElement.setAttribute("href", "/icons/spritemap.svg#sprite-copy");

  let svgElement = document.createElement('SVG');
  svgElement.appendChild(useElement);

  let copyButton = document.createElement('button');
  copyButton.classList.add('code-copier');
  copyButton.setAttribute('aria-label', 'Copy');
  copyButton.innerHTML = svgElement.outerHTML;

  return copyButton;
}
