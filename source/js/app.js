let $ = document
const titleElem = $.querySelector('#title')
const authorElem = $.querySelector('#author')
const yearElem = $.querySelector('#year')
const addBookBtn = $.querySelector('.add-btn')
const booksContainer = $.querySelector('#book-list')

let Books = []

addBookBtn.addEventListener('click', function (event) {
    event.preventDefault()
    let titleInputValue = titleElem.value
    let autherInputValue = authorElem.value
    let yearInputValue = yearElem.value

    if (titleInputValue === '' || autherInputValue === '' || yearInputValue ===''){
        alert('Please Enter a book title , auther , year  value')
    } else{
        let newBookObj = {
            id: Books.length +1,
            title : titleInputValue,
            auther : autherInputValue,
            year : yearInputValue
        }
        Books.push(newBookObj)
        setInToLocalStorage(Books)
    }
})
function setInToLocalStorage(allBooksArray) {
    localStorage.setItem('Books', JSON.stringify(allBooksArray));
    makeEmptyInput();
    booksGenerator(allBooksArray);
}
function makeEmptyInput() {
    titleElem.value = '';
    authorElem.value = '';
    yearElem.value = '';
}
function booksGenerator(allBooksArray) {
    booksContainer.innerHTML =''
    allBooksArray.forEach(function(book) {
        newBookTrElement = document.createElement('tr');

        let newBookTitleTh = document.createElement('th');
        newBookTitleTh.innerHTML = book.title;

        let newBookAutherTh = document.createElement('th');
        newBookAutherTh.innerHTML = book.auther;

        let newBookYearTh = document.createElement('th');
        newBookYearTh.innerHTML = book.year;

        newBookTrElement.append(newBookTitleTh, newBookAutherTh, newBookYearTh);
        booksContainer.append(newBookTrElement)
    });
}
function getInToLocalStorage(allBooksArray) {
   let localStorageBook = localStorage.getItem('Books')
   if (localStorageBook) {
    Books = JSON.parse(localStorageBook)
    booksGenerator(Books)
   }
}

window.addEventListener('load', getInToLocalStorage)
