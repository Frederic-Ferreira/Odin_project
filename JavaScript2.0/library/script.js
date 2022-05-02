const container = document.querySelector('.grid-container');
const form = document.querySelector('.form');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const readInput = document.getElementById('read');

let myLibrary = [];
let list = '';

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `The ${title} by ${author}, ${pages} pages, ${read} yet`;
  };
}

const renderBookList = () => {
  myLibrary.map((book) => {
    const renderedBook = `<li>
    <h3>${book.title}</h3>
    <hr />
    <h4>${book.author}</h4>
    <hr />
    <p>${book.pages}</p>
    <hr />
    ${book.read}
    </li>`;
    if (!list.includes(renderedBook)) list += renderedBook;
  });

  container.innerHTML = list;
};

const createBook = (e) => {
  e.preventDefault();
  const read =
    readInput.value === true ? 'have already read' : 'not read';
  const newBook = new Book(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    read
  );
  myLibrary.push(newBook);
  renderBookList();
};

form.addEventListener('submit', createBook);
