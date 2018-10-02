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
logFirstAvailable(getAllBooks());

/**************** Задание 02 ************************/

enum Category {'JavaScript', 'CSS', 'HTML', 'TypeScript', 'Angular'};
