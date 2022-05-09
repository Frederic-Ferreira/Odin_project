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

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  toggleRead() {
    return (this.read = !this.read);
  }
}

function deleteBook(i) {
  myLibrary.splice(i, 1);
}

function toggleOverlay() {
  overlay.classList.toggle('hidden');
}

function clearInputs() {
  inputFields.forEach((input) => {
    input.value = '';
  });
}

function updateBtnClass(node, obj) {
  node.classList.remove(`${obj.read === true ? 'not-read' : 'read'}`);
  node.classList.add(`${obj.read === true ? 'read' : 'not-read'}`);
  node.textContent = `${
    obj.read === true ? 'Have read' : 'Have not read'
  }`;
}

const renderBookList = () => {
  // re-render display (in case there is no book / myLibrary empty)
  container.textContent = '';

  myLibrary.map((book, i) => {
    const li = document.createElement('li');
    const haveRead = book.read === true;
    const renderedBook = `
    <h3>${book.title}</h3>
    <hr />
    <h4>${book.author}</h4>
    <hr />
    <p>${book.pages} pages</p>
    <hr />
    <div class="buttons">
      <button class="delete">Delete</button>
    </div>
    <div class="buttons">
    <button class="toggle-read ${
      haveRead ? 'read' : 'not-read'
    }">Have ${haveRead ? '' : 'not'} read</button>
    </div>
    `;
    li.insertAdjacentHTML('afterbegin', renderedBook);
    li.dataset.position = i;
    // Do not display the same book twice
    if (!container.textContent.includes(li.textContent))
      container.appendChild(li);
  });
};

const createBook = (e) => {
  e.preventDefault();

  let invalid = false;

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

    myLibrary.push(newBook);
    clearInputs();
    renderBookList();
    toggleOverlay();
  }
};

document.addEventListener('click', (e) => {
  const targetClass = e.target.classList;

  // Guard clause
  if (
    !targetClass.contains('delete') &&
    !targetClass.contains('toggle-read')
  )
    return;

  const obj = myLibrary[e.target.closest('li').dataset.position];

  if (targetClass.contains('delete')) {
    const index = e.target.closest('li').dataset.position;
    deleteBook(index);
    renderBookList();
  } else {
    obj.toggleRead();
    updateBtnClass(e.target, obj);
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
