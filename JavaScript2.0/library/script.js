const container = document.querySelector('.grid-container');
const errors = document.querySelectorAll('.error-message');
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

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.toggleRead = function () {
    return (this.read = !this.read);
  };
}

function deleteBook(i) {
  myLibrary.splice(i, 1);
}

const renderBookList = () => {
  container.textContent = '';

  myLibrary.map((book, i) => {
    const li = document.createElement('li');
    const renderedBook = `
    <h3>${book.title}</h3>
    <hr />
    <h4>${book.author}</h4>
    <hr />
    <p>${book.pages}</p>
    <hr />
    <div class="buttons">
      <button class="delete">Delete</button>
      <button class="toggle-read ${
        book.read === true ? 'read' : 'not-read'
      }">Have ${book.read === true ? '' : 'not'} read</button>
    </div>
    `;
    li.innerHTML = renderedBook;
    li.dataset.position = i;
    if (!container.textContent.includes(li.textContent))
      container.appendChild(li);
  });
};

const createBook = (e) => {
  let invalid = false;
  e.preventDefault();

  myLibrary.forEach((book) => {
    if (book.title === titleInput.value) {
      const error = titleInput.nextElementSibling;
      error.classList.remove('hidden');
      error.textContent = '* The name of the book already exists';
      return (invalid = true);
    }
  });

  if (invalid === false) {
    errors.forEach((error) => error.classList.add('hidden'));

    const newBook = new Book(
      titleInput.value,
      authorInput.value,
      pagesInput.value,
      readInput.checked
    );

    console.log(newBook);
    myLibrary.push(newBook);
    clearInputs();
    renderBookList();
    toggleOverlay();
  }
};

const toggleOverlay = () => {
  overlay.classList.toggle('hidden');
};

const clearInputs = () => {
  inputFields.forEach((input) => {
    input.value = '';
  });
};

document.addEventListener('click', (e) => {
  const targetClass = e.target.classList;
  if (
    !targetClass.contains('delete') &&
    !targetClass.contains('toggle-read')
  )
    return;
  if (targetClass.contains('delete')) {
    const index = e.target.closest('li').dataset.position;
    deleteBook(index);
    renderBookList();
  } else {
    myLibrary[e.target.closest('li').dataset.position].toggleRead();
    renderBookList();
  }
});

form.addEventListener('submit', createBook);

btn.addEventListener('click', toggleOverlay);

close.addEventListener('click', toggleOverlay);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
    toggleOverlay();
  }
});

// Initialiser
renderBookList();
