const bookname = document.getElementById("input-book");
const Authorname = document.getElementById("input-auth");
const addbtn = document.getElementById("add-btn");
const booklist = document.getElementById("book-list");

let books=JSON.parse(localStorage.getItem('books'))|| [];
// let books = JSON.parse(localStorage.getItem(`books`) || []);
function displaylist(){
    booklist.innerHTML='';

    books.forEach((book,index)=>{
        const div=document.createElement('div')
        div.classList.add('book-title');
        div.innerHTML=`
        <p>${book.author}by ${book.title}</p>
        <button onclick="removebook(${index})">Remove</button>
                `;
                booklist.appendChild(div)
    })
}

function addbook(){
    let title=bookname.value.trim();
    let author=Authorname.value.trim();

    if(title !== "" && author !==""){
        const newbook={title,author}
        books.push(newbook)
        localStorage.setItem('books' ,JSON.stringify(books))
        displaylist();
    }
}


function removebook(index){
    books.splice(index, 1)
    localStorage.setItem('books',JSON.stringify(books))
    displaylist();
}


addbtn.addEventListener('click',addbook)
displaylist();











// let books = JSON.parse(localStorage.getItem(`books`) || []);

// function displaylist() {
//   booklist.innerHTML = "";

//   books.forEach((book, index) => {
//     const div = document.createElement("div");
//     div.classList.add("book-item");
//     div.innerHTML = `
//            <p>"${book.title}" by ${book.author}</p>
//            <button onclick="removebook(${index})" > Remove </button>
//            `;
//     booklist.appendChild(div);
//   });
// }
// function addbook() {
//   const title = bookname.value.trim();
//   const author = Authorname.value.trim();

//   if (title !== "" && author !== "") {
//     const newbook = { title, author };
//     books.push(newbook);
//     localStorage.setItem("books", JSON.stringify(books));
//     displaylist();
//   }
// }
// function removebook(index) {
//   books.splice(index, 1);
//   localStorage.setItem("books", JSON.stringify(books));
//   displaylist();
// }
// addbtn.addEventListener("click", addbook);
// displaylist();



