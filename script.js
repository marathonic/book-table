
class Book {
    constructor(title, author){
        this.title = title
        this.author = author
    }

    lib = [];
    
    getAuthor(){
        console.log(this.author);
    }
    getTitle = () => console.log(this.title);


    addToLib(newTitle, newAuthor) {
        this.lib.push(this.newTitle, this.newAuthor);
    }
}

// let kellogg = new Book('corn flakes', 'kellogg');
// kellogg.getAuthor();
// kellogg.getTitle();

const formFunctionality = (() => {
  

    let bookForm = document.querySelector('#bookForm');

    const getTitle = () => {

        let bookData = new FormData(bookForm);
        // console.log(bookData);
        let bookTitle = bookData.get('title');
        console.log(bookTitle);
        return {
            bookTitle
        }
    }

    const getAuthor = () => {
        let bookData = new FormData(bookForm);
        // console.log(bookData);
        let bookAuthor = bookData.get('author');
        console.log(bookAuthor);
        return {
            bookAuthor
        }
    }

    let myBooks = [
        {
            title: 'Book example 1',
            author: 'Book example 2',
        }
    ];

    const makeRow = (title,author) => {
        title = getTitle();
        author = getAuthor();
        //make a row with two columns, one has title and one with author.
    }

    bookForm.addEventListener('submit', (e) => {
        e.preventDefault();
        getTitle();
        getAuthor();
    })


})();
















/* 

Failed attempts:

This was at the top of formFunctionality, but it wasn't working:

  // let bookBtn = document.querySelector('[data-book-btn]');
    // let newAuthor = document.querySelector('[data-book-author]'); 
    // let newTitle = document.querySelector('[data-book-title]');

    //we could also put the event listener outside? and just call the module.functions();
    //but that would pollute the global scope, so we won't do that right now.

    // bookBtn.addEventListener('click', (evt) => {
    //     evt.preventDefault();
    //     console.log(newAuthor);
    //     console.log(document.querySelector('[data-book-title]'));

    //     let bookTitle = document.querySelector('#book-title');
        

    // });



*/