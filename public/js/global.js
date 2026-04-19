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

let codeBlocks = document.body.querySelectorAll('pre[class^="language"]');

for (let i = 0; i < codeBlocks.length; i++) {
  let wrapperDiv = document.createElement('div')
  wrapperDiv.classList.add('code-block-wrapper');

  let codeBlock = codeBlocks[i];
  let codeBlockParent = codeBlock.parentElement;
  codeBlockParent.replaceChild(wrapperDiv, codeBlock);

  wrapperDiv.appendChild(codeBlock);

  let copyButton = createCopyButton();
  wrapperDiv.insertAdjacentElement('beforeend', copyButton);

  copyButton.addEventListener('click', (e) => {
    let stringToCopy = "";

    let codeLines = codeBlock.querySelectorAll('table tr td:nth-child(2)');
    if (codeLines.length > 0) {
      for (let j = 0; j < codeLines.length; j++) {
        let codeLine = codeLines[j].textContent;
        stringToCopy += codeLine;
      }
    } else {
      // There are no line numbers. Just copy the text content from the
      // `<code>` element.
      let codeElement = codeBlock.querySelector('code');
      if (!codeElement) {
        return;
      }

      stringToCopy += codeElement.textContent;
    }

    copyTextToClipboard(stringToCopy);
  });
}

function createCopyButton() {
  let useElement = document.createElement('USE');
  useElement.setAttribute("href", "/icons/spritemap.svg#sprite-copy");

  let svgElement = document.createElement('SVG');
  svgElement.appendChild(useElement);

  let copyButton = document.createElement('button');
  copyButton.classList.add('code-copier');
  copyButton.setAttribute('aria-label', 'Copy');
  copyButton.setAttribute('title', 'Copy');
  copyButton.innerHTML = svgElement.outerHTML;

  return copyButton;
}

// Async + Fallback method of copying to the clipboard
// Source: https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript/30810322#30810322
function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document.execCommand("copy");
  } catch (err) {
    console.error("Fallback: Oops, unable to copy", err);
  }

  document.body.removeChild(textArea);
}

function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }

  navigator.clipboard.writeText(text).then(
    function() {
    },
    function(err) {
      console.error("Async: Could not copy text: ", err);
    }
  );
}
