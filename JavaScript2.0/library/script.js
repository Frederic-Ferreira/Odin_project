const container = document.querySelector('.grid-container');
const form = document.querySelector('.form');
const btn = document.querySelector('.add-book');
const close = document.querySelector('.close');
const overlay = document.querySelector('.overlay');
const inputFields = document.querySelectorAll('input');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const readInput = document.getElementById('read');

let myLibrary = [];
let list = '';

const tryout = new Book(
  'Harry Potter',
  'Blabla',
  '229',
  'have read yet'
);

myLibrary.push(tryout);

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `The ${title} by ${author}, ${pages} pages, ${read} yet`;
  };
}

function deleteBook(i) {
  myLibrary.splice(i, 1);
}

const renderBookList = () => {
  myLibrary.map((book, i) => {
    const li = document.createElement('li');
    const renderedBook = `
    <h3>${book.title}</h3>
    <hr />
    <h4>${book.author}</h4>
    <hr />
    <p>${book.pages}</p>
    <hr />
    ${book.read}
    <hr />
    <div class="buttons">
      <button class="delete">Delete</button>
      <button class="toggle-read">Have read</button>
    </div>
    `;
    li.innerHTML = renderedBook;
    li.dataset.position = i;
    if (!list.includes(renderedBook)) container.appendChild(li);
  });
};

const createBook = (e) => {
  e.preventDefault();

  const read =
    readInput.checked === true ? 'have already read' : 'not read';

  const newBook = new Book(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    read
  );

  myLibrary.push(newBook);
  clearInputs();
  renderBookList();
  toggleOverlay();
};

const toggleOverlay = () => {
  overlay.classList.toggle('hidden');
};

const clearInputs = () => {
  inputFields.forEach((input) => {
    input.value = '';
  });
};
form.addEventListener('submit', createBook);

btn.addEventListener('click', toggleOverlay);

close.addEventListener('click', toggleOverlay);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
    toggleOverlay();
  }
});

renderBookList();
