showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

/**************** Задание 01 ************************/

interface bookType {title: string, author: string, available?: boolean};
function getAllBooks(){
    let books: bookType[] =
    [
        { title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true},
        { title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false },
        { title: 'CSS Secrets', author: 'Lea Verou', available: true },
        { title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli',
        available: true }
        ];
    return books;
}

function logFirstAvailable(books: bookType[]): void {
    console.log(books.length);
    for(let book of books) {
        if(book.available){
            console.log(`available book: ${ book.title } `);
            break;
        }
    }
}
let books: bookType[] = getAllBooks();
console.log(`First stage get array of books:`);
console.log(books);
logFirstAvailable(books);

/**************** Задание 02 ************************/

enum Category {'JavaScript', 'CSS', 'HTML', 'TypeScript', 'Angular'};
interface bookType2 {title: string, author: string, available?: boolean, category?: Category};

function addCategory2Books(books: bookType[]): bookType[] {
    let booksNew: bookType2[] = [];
    for(let book of books) {
        booksNew.push(<bookType2>book);
        booksNew[booksNew.length-1].category = Math.floor(Math.random()*5);
    }
    return booksNew;
}
books = addCategory2Books(books);
console.log(`Added categories to array books:`);
console.log(books);

function getBookTitlesByCategory(books: bookType2[], category: Category): bookType2[] {
    let booksNew: bookType2[] = [];
    for(let book of books) {
        if(book.category === category) {
            booksNew.push(book);
        }
    }
    return booksNew;
}
const categoryFilter = Math.floor(Math.random()*5);
console.log(`Filter books by category ${ categoryFilter } (${ Category[categoryFilter] })`);
console.log(getBookTitlesByCategory(books, categoryFilter));

function logBookTitles(books: bookType[]): void {
    console.log(books.length);
    for(let book of books) {
        console.log(book.title);
    }
}
logBookTitles(books);
