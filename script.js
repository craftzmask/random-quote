const authorNameElement = document.querySelector('.author-name');
const tagsElement = document.querySelector('.tags');
const quoteElement = document.querySelector('.quote');

const nextQuoteElement = document.querySelector('.next-quote');
const copyQuoteElement = document.querySelector('.copy-quote');


nextQuoteElement.addEventListener('click', getRandomQuote);
copyQuoteElement.addEventListener('click', copyQuote);

getRandomQuote();

function getRandomQuote() {
  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(quote => updateUI(quote))
    .catch(error => console.log(error));
}

function copyQuote() {
  const textToCopy = quoteElement.textContent;
  navigator.clipboard.writeText(textToCopy)
    .then(() => alert('Quote is copied'))
    .catch(error => console.log(error));
}

function updateUI(quote) {
  authorNameElement.textContent = quote.author;
  quoteElement.textContent = `"${quote.content}"`;
  tagsElement.innerHTML = '';
  quote.tags.forEach(tag => {
    const tagElement = document.createElement('div');
    tagElement.classList.add('tag');
    tagElement.textContent = tag;
    tagsElement.appendChild(tagElement);
  });
}